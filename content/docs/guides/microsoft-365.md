---
title: Connect Microsoft 365 to OptiTech
subtitle: Collect sharing, mailbox, and tenant configuration evidence from Microsoft 365
summary: >-
  Connect Microsoft 365 to OptiTech to verify tenant security configuration:
  external sharing baselines for SharePoint and OneDrive, mailbox auditing,
  mail forwarding rules, and Secure Score trends. Complements the Entra ID
  integration, which covers identity; this one covers the collaboration
  surface where data actually leaks.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

The [Entra ID integration](/docs/guides/microsoft-entra-id) covers who can sign in; the Microsoft 365 integration covers what happens after: sharing settings, mailbox rules, and tenant configuration, the surface where data actually leaves organizations. Together they turn most of your Microsoft-stack controls into [continuously verified checks](/docs/reference/glossary#check).

## Prerequisites

- An OptiTech workspace with the **Admin** or **Owner** role.
- **Global Administrator** in your Microsoft tenant for admin consent.
- The [Entra ID integration](/docs/guides/microsoft-entra-id) connected first, since Microsoft 365 checks reference the same tenant.

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Microsoft 365**.
2. Click **Connect** and grant admin consent for the read-only permission set.
3. Choose which workloads are in scope: Exchange Online, SharePoint and OneDrive, and Teams settings.
4. The first sync completes within minutes and the workload checks activate.

## Checks the integration activates

- **External sharing baseline**: SharePoint and OneDrive sharing settings verified against your documented policy; a drift to "Anyone with the link" is a [finding](/docs/reference/glossary#finding) the day it happens.
- **Mail forwarding rules**: external auto-forwarding, the classic exfiltration and BEC signal, detected tenant-wide.
- **Mailbox auditing**: verified enabled for all mailboxes with the required retention.
- **Legacy authentication**: verified blocked, closing the MFA bypass path.
- **Secure Score trend**: recorded per sync, giving your [board report](/faqs/find-database-connection-string) a recognizable Microsoft metric.

## Why this matters per framework

These checks feed cross-mapped controls: NIS2's basic hygiene measures, ISO 27001's information transfer and access controls, [Cyber Essentials'](/faqs/cyber-essentials-compliance-optitech) secure configuration theme, and the data-handling sections of every customer questionnaire that asks "how do you prevent oversharing?"

## Verify the connection

1. Confirm **Status: Connected** with a recent sync on the integration page.
2. Filter **Controls** by **Source: Microsoft 365**; each control shows its latest result and evidence trail.
3. Deliberately relax a sharing setting in a test site and confirm a finding opens on the next sync, then revert it. The [finding lifecycle](/faqs/databases-isolate-bugs-without-downtime) is your rehearsal for the real thing.

## Troubleshooting

- **Workload shows no data**: the corresponding admin center may need the service enabled, or consent was granted by a role that can't authorize that workload.
- **Findings for settings you believe are correct**: check whether a per-site override diverges from the tenant default; the finding lists the specific site.
- **Duplicate identity findings**: identity checks belong to the [Entra ID integration](/docs/guides/microsoft-entra-id); disable overlapping checks in whichever integration you don't want to own them.

<NeedHelp/>
