---
title: Tour the OptiTech Console
subtitle: Sign up and explore OptiTech's core features - the gap analysis, dashboard, controls, and incident flows
summary: >-
  The OptiTech Console tour walks first-time users through sign-up, running the
  gap analysis, reading the compliance dashboard, connecting a first
  integration for automatic evidence collection, generating a policy, and
  testing the MSB incident flow. Choose this page to understand the object
  hierarchy (organization, framework, requirement, control, evidence) before
  you roll OptiTech out to your team.
enableTableOfContents: true
redirectFrom:
  - /docs/quickstart/console/
  - /docs/cloud/getting-started/
  - /docs/cloud/getting_started/
  - /docs/get-started-with-neon/signing-up
updatedOn: '2026-07-18T10:05:28.819Z'
---

<InfoBlock>
<DocsList title="What you will learn:">
<p>How to run the gap analysis and read your action list</p>
<p>Connect an integration for automatic evidence collection</p>
<p>Generate your first policy and test the incident flow</p>
</DocsList>

<DocsList title="Related topics" theme="docs">
<a href="/docs/get-started/why-neon">Why OptiTech?</a>
<a href="/docs/get-started/dev-experience">Product principles</a>
<a href="/docs/introduction/plans">Plans</a>
</DocsList>
</InfoBlock>

This tutorial walks you through your first steps in the OptiTech Console. You'll explore the OptiTech object hierarchy and learn how the platform turns regulations into a working compliance program.

## How OptiTech is organized

Everything in OptiTech hangs on one chain: your **organization** activates **frameworks** (NIS2, DORA, GDPR, ISO 27001, or the EU AI Act), each framework breaks down into **requirements**, requirements map to **controls**, and controls are verified by **evidence** with a source and a timestamp. Requirements and controls are many-to-many, so one control can satisfy requirements in several frameworks at once.

Keep that chain in mind as you go through the tour. Every screen in the Console is a view of some part of it.

<Steps>

## Sign up

If you're already signed up, you can skip ahead to the next step.

If you haven't signed up yet, you can [sign up here](/signup). Sign up with your email, BankID, or a Google or Microsoft work account.

For information about what's included with each plan, see [OptiTech plans](/docs/introduction/plans).

## Run the gap analysis

After you sign up, the onboarding wizard asks about 20 questions about your business: industry, size, systems, customers, and whether you supply organizations in regulated sectors.

The wizard is important because it does your legal scoping for you:

- **Which laws apply to you.** Many companies are covered by NIS2 without knowing it, often because they supply energy companies, healthcare, municipalities, or transport.
- **Which NIS2 category you fall into.** Essential and important entities carry different obligations. OptiTech tells you which one you are and why.
- **What's missing.** The output is a prioritized action list: which controls you need, which you can prove already, and what to fix first.

The scoping test is free. You see your results before you commit to anything.

<Admonition type="tip" title="Working with a team?">
Your organization is now set up. You can start inviting teammates immediately; see the last step of this tour.
</Admonition>

## Read your dashboard

From the Console sidebar, open the **Dashboard**. This is the one-glance view of your compliance posture:

- **Compliance score per framework**, with the trend over time
- **Open gaps**, ordered by priority from your gap analysis
- **Control status**: green for verified, red for drifted, gray for not yet connected
- **Upcoming deadlines**: policy reviews, questionnaire due dates, and training cycles

NIS2 requires your board to show active governance. The **Board report** button generates that proof from this data in one click.

## Connect your first integration

Evidence collection starts when you connect a system. From the sidebar, open **Integrations** and connect **Microsoft 365 / Entra ID** (or Google Workspace if that's your stack).

Within a few minutes, OptiTech runs its first checks:

- MFA coverage across your user directory
- Offboarding status for recently departed employees
- Admin role assignments and logging configuration

Each check lands as evidence on the matching controls, and the controls flip from gray to green or red. When a control drifts later (say, MFA is disabled for three users), you get an alert with a one-click fix or a ready-made ticket for the right person.

On Start you can connect up to 10 integrations. Professional and Enterprise add the Swedish systems: Fortnox, Visma, BankID, Kivra, and payroll. See [plans](/docs/introduction/plans#integrations).

## Review controls and evidence

From the sidebar, open **Controls**. Each control shows:

- **Which requirements it satisfies**, across every active framework. This is the cross-mapping in action: an access control you verify once counts toward NIS2, ISO 27001, and GDPR at the same time.
- **Its evidence log**: every check that verified the control, with source and timestamp, stored append-only and hash-chained so nothing can be silently edited afterward.
- **Its owner**: the person responsible when the control drifts.

Open any control that turned green after your integration connected and inspect its evidence. This is exactly what an auditor sees later through the read-only auditor portal on the Enterprise plan.

## Generate your first policy

From the sidebar, open **Documents** and pick a template, for example the information security policy. OptiTech ships 50+ Swedish templates, and the AI copilot pre-fills them from your real environment: your actual systems, your actual MFA status, your actual backup routine.

A few things to know:

- Drafts are written in the formal Swedish that authorities and auditors expect
- Nothing publishes automatically. You review, edit, and approve
- Approved policies go out for employee e-signing with read receipts
- Every document gets a review cycle with reminders, so it never silently goes stale

## Test the incident flow

You don't want your first contact with the incident flow to be during a real incident. From the sidebar, open **Incidents** and start a **test drill**.

The drill walks you through the NIS2 reporting sequence without submitting anything:

1. **Early warning within 24 hours**: OptiTech pre-fills the MSB form from your incident data and starts the deadline countdown
2. **Incident report within 72 hours**: the follow-up report, with your on-call contact list and communication templates for customers, press, and internal teams
3. **Final report within one month**: the closing summary

The matching IMY flow for personal data breaches (GDPR's 72-hour rule) works the same way. Run the drill once with your team so everyone knows their role.

## Invite your team

Compliance is a team sport. From the sidebar, open **People** and invite your colleagues:

- **Admins** manage frameworks, integrations, and settings
- **Contributors** own controls, complete tasks, and handle documents
- **Viewers** see dashboards and reports, useful for management and the board

There's no per-seat pricing, so invite everyone who owns a control. Every action is captured in the audit log.

</Steps>

Your compliance program is now running: evidence collects itself, controls are monitored around the clock, and your dashboard shows where you stand at any moment.

<Admonition type="tip" title="Going further">
- **Managing vendors?** Professional and Enterprise plans add vendor risk management: a supplier register, automated questionnaires, and risk classification.
- **Selling to enterprises?** The Trust Center gives you a public security page that shortens your customers' security reviews.
</Admonition>

## What's next

Ready to pick a plan? See [OptiTech plans](/docs/introduction/plans) for what each tier includes, or [book a free gap analysis](/contact-sales) and walk through your results with our team.

<NeedHelp/>
