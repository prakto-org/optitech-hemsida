---
title: Connect Fortnox to OptiTech
subtitle: Sync the employee register from Fortnox to drive on- and offboarding checks
summary: >-
  Connect Fortnox to OptiTech so the employee register becomes the source of
  truth for joiner and leaver checks: new employees trigger onboarding tasks
  and MFA verification, terminations drive the offboarding-within-24-hours
  check against your identity provider. Includes setup, field mapping, and
  privacy notes.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

Offboarding checks are only as good as their source of truth. IT ticket queues miss departures; the payroll system doesn't. Connecting Fortnox makes your employee register the authority: when someone's employment ends in Fortnox, OptiTech expects their accounts disabled within 24 hours and [verifies it](/docs/reference/glossary#check) against your identity provider. No US compliance platform integrates here; this is home turf.

## Prerequisites

- An OptiTech workspace with the **Admin** role.
- Fortnox administrator access to approve the integration connection.
- The [Entra ID](/docs/guides/microsoft-entra-id) or [Google Workspace](/docs/guides/google-workspace) integration connected, so employment changes have accounts to verify against.

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Fortnox**.
2. Click **Connect** and sign in to Fortnox to approve the connection. OptiTech requests read-only access to the employee register.
3. Map the fields: employee email (the join key against your identity provider), employment start date, and end date.
4. Run the first sync and review the employee list.

## Checks the integration activates

- **Offboarding within 24 hours**: an employment end date in Fortnox starts the clock; active accounts in Entra ID or Google Workspace past the deadline open a [finding](/docs/reference/glossary#finding) naming the accounts.
- **Onboarding completeness**: new employees trigger the onboarding checklist: account created, MFA enrolled within the grace period, [policy acknowledgments](/docs/reference/glossary#acknowledgment) assigned, and required training scheduled.
- **Ghost account detection**: accounts in your identity provider with no matching active employment surface for review, catching contractors who ended and service accounts masquerading as people.
- **Access review context**: reviews show employment status per account, so reviewers stop rubber-stamping departed users.

## Privacy notes

OptiTech reads the minimum needed for the checks: name, email, and employment dates. Salary and personal data beyond that are not requested. The processing belongs in your [records of processing](/faqs/gdpr-compliance-optitech), and the integration page's permission summary gives your DPO the exact scope. Data stays in [Swedish and EU data centers](/faqs/change-project-region), like everything else in the workspace.

## Verify the connection

1. Confirm **Status: Connected** and an employee count matching Fortnox.
2. Review unmatched employees (no identity-provider account found); fix email mismatches in the field mapping.
3. When the next real departure happens, watch the check do its job; that first automated catch is the moment the integration pays for itself.

## Troubleshooting

- **Employees unmatched**: personal email in Fortnox versus work email in the identity provider is the usual cause; map the work email field.
- **Sync stopped**: the Fortnox authorization was revoked or the license changed; reconnect from the integration page.
- **Visma instead of Fortnox?** See the [Visma integration](/docs/guides/visma); the checks are identical.

<NeedHelp/>
