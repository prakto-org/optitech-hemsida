---
title: Route OptiTech alerts to Microsoft Teams
subtitle: Send findings, incident alerts, and deadline reminders to Teams channels
summary: >-
  Connect Microsoft Teams to OptiTech to route findings to the owning team's
  channel, page on-call for incident-grade alerts, and deliver review-cycle
  reminders where people actually work. Covers channel mapping, severity
  routing, and interactive actions like acknowledging a finding from Teams.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Compliance findings die in unread email. The Teams integration routes them where your teams already work: each [finding](/docs/reference/glossary#finding) goes to the channel of the [control owner's](/docs/reference/glossary#control-owner) team, incident-grade alerts page the right people, and review reminders arrive as messages instead of calendar guilt.

## Prerequisites

- An OptiTech workspace with the **Admin** role.
- Permission to add apps to your Teams workspace (or an IT admin who can approve the app).

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Microsoft Teams**.
2. Click **Connect** and sign in with a Microsoft account that can consent to the Teams app installation.
3. Add the OptiTech app to the teams and channels you want to route to.
4. Back in OptiTech, the connected channels appear in the routing configuration.

## Configure routing

Under **Integrations** > **Microsoft Teams** > **Routing**, map what goes where:

| Event                                   | Typical destination                            |
| --------------------------------------- | ---------------------------------------------- |
| Findings for engineering-owned controls | The platform team's channel                    |
| Findings for IT-owned controls          | The IT operations channel                      |
| Incident opened or escalated            | The incident response channel, with @-mentions |
| Review-cycle reminders                  | The owning team's channel                      |
| Weekly digest                           | A compliance channel for the summary view      |

Routing follows [control ownership](/faqs/best-ways-separate-postgres-database-development): you map teams once, and new controls inherit their owner's destination. Severity tiers apply, so [only genuine incidents interrupt anyone](/faqs/databases-avoid-connection-limits-serverless-applications); routine findings post without notification.

## Act on findings from Teams

Finding cards in Teams are interactive:

- **Acknowledge** claims the finding, visible to the whole channel.
- **Snooze with reason** applies a documented grace period, logged like any other action.
- **Open in OptiTech** deep-links to the full finding with evidence and history.

For engineering teams that prefer tickets over chat, pair this with the [Jira integration](/docs/guides/jira); routing rules decide per control whether a finding becomes a message, a ticket, or both.

## Incident channel behavior

When an [incident record](/docs/reference/glossary#incident-record) opens, OptiTech can create or reuse a dedicated channel: timeline entries mirror into it, and the reporting-deadline countdowns ([MSB 24-hour, 72-hour](/docs/reference/glossary#incident-flow)) post as pinned reminders. The authoritative record stays in OptiTech's append-only log; the channel is the collaboration surface.

## Troubleshooting

- **Messages not arriving**: the app may lack permission in that specific channel; re-add it from the Teams side.
- **@-mentions not firing**: map OptiTech users to their Microsoft accounts under **Settings** > **Members** so mentions resolve.
- **Too much noise**: tighten severity routing; the default posts everything to give you material to tune from.

<NeedHelp/>
