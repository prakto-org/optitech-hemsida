---
title: Connect Jira to OptiTech
subtitle: Create tickets from findings and track remediation in Jira
summary: >-
  Connect Jira to OptiTech so findings become tickets in the owning team's
  project, with control context attached and status synced both ways. Covers
  the app installation, project and issue-type mapping, closing the loop with
  re-checks, and using Jira for remediation evidence.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Engineering teams fix what's in the sprint, and the sprint lives in Jira. This integration turns [findings](/docs/reference/glossary#finding) into Jira tickets with the context needed to fix them, syncs status both ways, and closes the loop when the re-check passes, so compliance work gets estimated, prioritized, and done like any other work.

## Prerequisites

- An OptiTech workspace with the **Admin** role.
- Jira administrator access (Jira Cloud) to install the app and authorize the connection.

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Jira**.
2. Click **Connect** and complete the Atlassian OAuth flow, selecting your Jira site.
3. Map OptiTech teams to Jira projects and choose the issue type (Task or Bug are typical) under **Routing**.
4. Optionally map severity to priority so incident-grade findings arrive as **Highest**.

## How findings become tickets

When a check fails on a control whose [owner](/docs/reference/glossary#control-owner) routes to Jira:

- A ticket is created in the mapped project with the finding's summary, the failed values, affected resources, the control reference, and a deep link back to OptiTech.
- Deduplication holds: one finding is one ticket. Repeat failures update the existing ticket instead of spamming new ones.
- The remediation deadline (for [clocked findings](/faqs/cyber-essentials-compliance-optitech) like patch windows) maps to the ticket's due date.

Status syncs both ways: resolving the ticket triggers a re-check, and only a passing re-check closes the finding. A ticket closed without the underlying fix reopens with a comment, which keeps the loop honest.

## What auditors get from this

The Jira trail becomes remediation evidence: finding opened, ticket created, work done, re-check passed, all timestamped across both systems and stored in the [evidence log](/docs/reference/glossary#evidence-log). "How do you handle identified deviations?" gets answered with a process that demonstrably runs, not a described intention.

## Recommended mappings

| OptiTech event                                           | Jira target                                                                                     |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Platform/infra findings                                  | The platform team's project                                                                     |
| Endpoint findings                                        | IT service desk project                                                                         |
| [Exception](/docs/reference/glossary#exception) expiring | Ticket to the exception's approver                                                              |
| Incident tasks                                           | The incident project, linked to the [incident record](/docs/reference/glossary#incident-record) |

Chat-first teams can route some controls to [Slack](/docs/guides/slack) or [Teams](/docs/guides/microsoft-teams) instead; routing is per control owner.

## Troubleshooting

- **Tickets in the wrong project**: the control's owner team isn't mapped; unmapped teams fall back to the default project.
- **Loops of reopen/close**: someone resolves tickets without fixing the drift; the re-check comment names the still-failing values.
- **Custom workflows**: if your Jira workflow lacks a standard Done state, map OptiTech's "resolved" trigger to the right transition under **Routing** > **Advanced**.

<NeedHelp/>
