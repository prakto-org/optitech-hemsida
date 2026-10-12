// Server-side helper for the Customer.io Tracking API (Journeys).
// Writes people, events, and subscription preferences directly into the Journeys
// workspace, so leads appear in Journeys and the subscription center without a CDP
// destination. Auth is HTTP Basic with the Site ID as the username and the Tracking
// API key as the password. Every call is fail-safe: it never throws, so a Customer.io
// outage can't break the form submission that triggered it.

import { APIClient, RegionEU, SendEmailRequest } from 'customerio-node';

const TRACK_ENDPOINT = 'https://track-eu.customer.io/api/v1';

const getAuthHeader = () => {
  const siteId = process.env.CUSTOMERIO_SITE_ID;
  const apiKey = process.env.CUSTOMERIO_TRACK_API_KEY;
  if (!siteId || !apiKey) return null;
  return `Basic ${Buffer.from(`${siteId}:${apiKey}`).toString('base64')}`;
};

const send = async (method, path, payload) => {
  const auth = getAuthHeader();
  if (!auth) {
    console.warn(
      `Customer.io: CUSTOMERIO_SITE_ID/CUSTOMERIO_TRACK_API_KEY not set, skipping ${path}`
    );
    return false;
  }

  try {
    const response = await fetch(`${TRACK_ENDPOINT}${path}`, {
      method,
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error(`Customer.io ${path} failed`, response.status, detail);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Customer.io ${path} error`, error);
    return false;
  }
};

// traits become person attributes (email, name, cio_subscription_preferences, etc.).
export const identifyContact = ({ userId, traits }) =>
  send('PUT', `/customers/${encodeURIComponent(userId)}`, traits || {});

export const trackEvent = ({ userId, event, properties }) =>
  send('POST', `/customers/${encodeURIComponent(userId)}/events`, {
    name: event,
    data: properties || {},
  });

// Transactional email via the Customer.io App API (EU region). Uses a dashboard-managed
// template (transactional_message_id) whose From, Subject, and body live in Customer.io;
// the code only passes the recipient and Liquid message_data. Fail-safe: never throws.
let apiClient = null;

const getApiClient = () => {
  const appApiKey = process.env.CUSTOMERIO_APP_API_KEY;
  if (!appApiKey) return null;
  if (!apiClient) apiClient = new APIClient(appApiKey, { region: RegionEU });
  return apiClient;
};

export const sendTransactionalEmail = async ({
  to,
  transactionalMessageId,
  identifiers,
  messageData,
}) => {
  const client = getApiClient();
  if (!client) {
    console.warn('Customer.io: CUSTOMERIO_APP_API_KEY not set, skipping transactional email');
    return false;
  }
  if (!to || !transactionalMessageId) {
    console.warn('Customer.io: transactional email needs "to" and a message id, skipping');
    return false;
  }

  try {
    const request = new SendEmailRequest({
      to,
      transactional_message_id: String(transactionalMessageId),
      identifiers: identifiers || { email: to },
      ...(messageData ? { message_data: messageData } : {}),
    });
    await client.sendEmail(request);
    return true;
  } catch (error) {
    console.error('Customer.io transactional email error', error.statusCode, error.message);
    return false;
  }
};
