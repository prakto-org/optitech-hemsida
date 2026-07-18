---
title: Route OptiTech alerts to Slack
subtitle: Send findings, incident alerts, and reminders to Slack channels
summary: >-
  Connect Slack to OptiTech to route findings to the owning team's channel,
  alert on incidents with the right urgency, and deliver review reminders in
  Slack. Covers the app installation, channel routing by control ownership,
  severity tiers, and interactive finding actions.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

The Slack integration is the Slack-native twin of the [Teams integration](/docs/guides/microsoft-teams): [findings](/docs/reference/glossary#finding) route to the channels of the teams that own the controls, incidents alert with real urgency, and the weekly digest gives everyone else the summary instead of the noise.

## Prerequisites

- An OptiTech workspace with the **Admin** role.
- Permission to install apps in your Slack workspace (or admin approval flow enabled).

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Slack**.
2. Click **Connect** and complete the Slack OAuth flow.
3. Invite the OptiTech app to the channels you want to route to (`/invite @OptiTech`).
4. The connected channels appear in OptiTech's routing configuration.

## Configure routing

Map events to channels under **Integrations** > **Slack** > **Routing**:

- **Findings** route by [control ownership](/faqs/best-ways-separate-postgres-database-development): engineering findings to `#platform`, IT findings to `#it-ops`, and so on. New controls inherit their owner's channel.
- **Incidents** go to `#incident-response` with @-mentions for the response roles, and deadline countdowns from the [incident flow](/docs/reference/glossary#incident-flow) post as follow-ups.
- **Review reminders** (policy reviews, access reviews, expiring [exceptions](/docs/reference/glossary#exception)) go to the owning team.
- **The weekly digest** summarizes open findings, closed findings, and score movement for a `#compliance` channel.

Severity tiers keep the signal: routine findings post quietly, deadline-critical items notify, incidents page. Tune per control if needed; the goal is that [nobody ever mutes the channel](/faqs/databases-avoid-connection-limits-serverless-applications).

## Act on findings from Slack

Finding messages carry actions: **Acknowledge** (claims it, visibly), **Snooze with reason** (documented grace period, logged), and **Open in OptiTech** (deep link to evidence and history). Everything done from Slack lands in the same [audit log](/docs/reference/glossary#audit-log) as Console actions.

Engineering teams that live in tickets rather than chat can route findings to [Jira](/docs/guides/jira) instead, per control.

## Troubleshooting

- **App posts nothing**: it hasn't been invited to the channel; `/invite @OptiTech` in the channel itself.
- **Mentions don't resolve**: map OptiTech users to Slack accounts under **Settings** > **Members**.
- **Private channels**: the app must be explicitly invited; it cannot discover them.

<NeedHelp/>
