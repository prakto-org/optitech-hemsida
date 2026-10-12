import { NextResponse } from 'next/server';

import { CHANGELOG_SUBSCRIPTION_FORM_ID, HUBSPOT_NEWSLETTERS_FORM_ID } from 'constants/forms';
import { identifyContact, trackEvent } from 'lib/customerio';

// Form submissions (newsletter, contact, use-case, landing) are sent straight to
// Customer.io. HubSpot was decoupled — the site's lead workspace is Customer.io.
const fieldValue = (values, name) => values.find((field) => field?.name === name)?.value;

// HubSpot-style field names → Customer.io attribute names.
const ATTRIBUTE_NAMES = { firstname: 'firstName', lastname: 'lastName' };

// Forms that map to a Customer.io subscription topic + a boolean trait and event.
// topicEnv holds the workspace-specific topic id (e.g. "topic_1"); unset = trait/event only.
const SUBSCRIPTION_FORMS = {
  [HUBSPOT_NEWSLETTERS_FORM_ID]: {
    trait: 'newsletter_subscribed',
    event: 'newsletter_subscribed',
    topicEnv: 'CUSTOMERIO_NEWSLETTER_TOPIC_ID',
  },
  [CHANGELOG_SUBSCRIPTION_FORM_ID]: {
    trait: 'changelog_subscribed',
    event: 'changelog_subscribed',
    topicEnv: 'CUSTOMERIO_CHANGELOG_TOPIC_ID',
  },
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { formId, values } = body;

    if (!formId || !Array.isArray(values)) {
      return NextResponse.json(
        { error: 'Invalid request data. formId and values are required.' },
        { status: 400 }
      );
    }

    const email = fieldValue(values, 'email');
    if (!email) {
      // Nothing to identify without an email; don't fail the form UX.
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Every submitted field becomes a person attribute (known names normalized).
    const traits = {};
    values.forEach((field) => {
      if (!field?.name || field.value === undefined || field.value === null || field.value === '') {
        return;
      }
      traits[ATTRIBUTE_NAMES[field.name] || field.name] = field.value;
    });
    const name = [fieldValue(values, 'firstname'), fieldValue(values, 'lastname')]
      .filter(Boolean)
      .join(' ');
    if (name) traits.name = name;

    // A subscription form sets a boolean trait and (when its topic env is set) the
    // matching Customer.io subscription-center topic. The topic id is workspace-
    // specific; when unset only the trait and event are sent.
    const subscription = SUBSCRIPTION_FORMS[formId];
    if (subscription) {
      traits[subscription.trait] = true;
      const topicId = process.env[subscription.topicEnv];
      if (topicId) {
        traits.cio_subscription_preferences = JSON.stringify({
          topics: { [topicId]: true },
        });
      }
    }

    const [identified] = await Promise.all([
      identifyContact({ userId: email, traits }),
      trackEvent({
        userId: email,
        event: subscription ? subscription.event : 'form_submitted',
        properties: { formId },
      }),
    ]);

    if (!identified) {
      return NextResponse.json({ error: 'Could not save your submission.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
