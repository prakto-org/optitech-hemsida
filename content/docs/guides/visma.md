---
title: Connect Visma to OptiTech
subtitle: Sync the employee register from Visma for joiner and leaver checks
summary: >-
  Connect Visma to OptiTech so employment data drives compliance checks: new
  hires trigger onboarding tasks, terminations start the
  offboarding-within-24-hours clock against your identity provider, and ghost
  accounts surface for review. Equivalent to the Fortnox integration for
  Visma-based organizations.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

The Visma integration does for Visma-based organizations what the [Fortnox integration](/docs/guides/fortnox) does for Fortnox users: the employee register becomes the source of truth for joiner and leaver checks, so onboarding and offboarding verify against employment reality instead of ticket-queue memory.

## Prerequisites

- An OptiTech workspace with the **Admin** role.
- Administrator access in your Visma product to authorize the connection.
- The [Entra ID](/docs/guides/microsoft-entra-id) or [Google Workspace](/docs/guides/google-workspace) integration connected.

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Visma**.
2. Choose your Visma product in the connector list and complete the authorization flow. OptiTech requests read-only access to employee data.
3. Map employee email, start date, and end date fields.
4. Run the first sync and review the matched employee list.

## Checks the integration activates

- **Offboarding within 24 hours**: employment end in Visma starts the clock; accounts still active past the deadline open a [finding](/docs/reference/glossary#finding).
- **Onboarding completeness**: new employees get the onboarding checklist: account, MFA enrollment, [policy acknowledgments](/docs/reference/glossary#acknowledgment), and training assignment.
- **Ghost account detection**: identity-provider accounts without matching active employment surface for review.
- **Access review context**: employment status attached to every account in review campaigns.

## Privacy notes

OptiTech reads name, email, and employment dates; nothing more is requested. Record the processing in your [records of processing](/faqs/gdpr-compliance-optitech); the integration page summarizes the exact scope for your DPO. All data stays in [Swedish and EU data centers](/faqs/change-project-region).

## Verify the connection

1. Confirm **Status: Connected** and an employee count matching Visma.
2. Resolve unmatched employees, usually private-versus-work email mismatches, in the field mapping.
3. Filter **Controls** by **Source: Visma** to see the checks and their latest results.

## Troubleshooting

- **Authorization expires**: some Visma products require re-authorization on license changes; reconnect from the integration page.
- **Subsidiaries in separate Visma instances**: connect each instance, or run [one workspace per legal entity](/faqs/best-postgres-services-isolated-databases) with its own connection, which matches how group structures usually audit anyway.

<NeedHelp/>
