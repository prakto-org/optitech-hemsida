---
title: Connect Google Workspace to OptiTech
subtitle: Verify 2-step verification, dormant accounts, and access from your Google Workspace domain
summary: >-
  Connect Google Workspace to OptiTech using a service account with
  domain-wide delegation and read-only Admin SDK scopes. The integration
  verifies 2-step verification coverage, offboarding, admin role assignments,
  dormant accounts, and drive sharing settings, feeding the same identity
  controls as Entra ID for Google-based organizations.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

If your organization runs on Google Workspace, this integration is your identity evidence source: 2-step verification coverage, account lifecycle, and admin roles verify continuously against the Admin SDK, so your access controls hold up with the same rigor as an [Entra ID setup](/docs/guides/microsoft-entra-id).

## Prerequisites

- An OptiTech workspace with the **Admin** or **Owner** role.
- **Super Admin** in your Google Workspace domain, to create the service account authorization.

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Google Workspace**.
2. Click **Connect** and follow the guided flow. OptiTech provides a service account client ID and the exact scope list.
3. In the Google Admin console, go to **Security** > **Access and data control** > **API controls** > **Domain-wide delegation**, and add the client ID with the provided scopes.
4. Enter your primary domain in OptiTech and click **Verify**. The first sync completes within minutes.

## Scopes requested

All scopes are read-only:

| Scope                                     | Used for                                           |
| ----------------------------------------- | -------------------------------------------------- |
| `admin.directory.user.readonly`           | User inventory, account status, 2SV enrollment     |
| `admin.directory.group.readonly`          | Group memberships                                  |
| `admin.directory.rolemanagement.readonly` | Admin role assignments                             |
| `admin.reports.audit.readonly`            | Login activity for dormancy and offboarding checks |
| `admin.reports.usage.readonly`            | Usage reports backing activity checks              |

## Checks the integration activates

- **2-step verification coverage**: every active user is enrolled; stragglers are listed in the [finding](/docs/reference/glossary#finding).
- **Offboarding within 24 hours**: suspended-or-deleted status cross-checked against your [HR system](/docs/guides/fortnox) when connected.
- **Admin role review**: super admin and delegated admin counts, flagged on growth.
- **Dormant accounts**: active accounts with no login beyond your threshold.
- **External sharing baseline**: Drive sharing settings verified against your documented policy.

Results land in the [evidence log](/docs/reference/glossary#evidence-log) and feed cross-mapped controls in NIS2, ISO 27001, SOC 2, and [Cyber Essentials](/faqs/cyber-essentials-compliance-optitech).

## Verify the connection

1. Confirm **Status: Connected** and a recent sync on the integration page.
2. Filter **Controls** by **Source: Google Workspace** and check that user counts match your directory.
3. If counts are off, review which organizational units are in scope under the integration settings.

## Troubleshooting

- **Delegation not taking effect**: Google can take a few minutes to propagate domain-wide delegation. Re-run **Verify** after a short wait.
- **403 errors in sync**: a scope is missing from the delegation entry; compare against the scope list above.
- **Multiple domains**: add each verified domain in the integration settings so all users enter scope.

<NeedHelp/>
