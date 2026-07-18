---
title: Connect Microsoft Entra ID to OptiTech
subtitle: Verify MFA coverage, admin roles, dormant accounts, and offboarding against your Entra ID tenant
summary: >-
  Connect Microsoft Entra ID to OptiTech with a read-only app registration and
  admin consent. The integration feeds identity checks: MFA coverage per user,
  offboarding within 24 hours, admin role sprawl, dormant accounts, and
  conditional access baselines. Includes setup steps, granted permissions, and
  which controls the integration verifies.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Your identity provider is the highest-value integration in OptiTech: most access-related controls in NIS2, ISO 27001, and SOC 2 verify against it. Connecting Microsoft Entra ID (formerly Azure AD) turns "we enforce MFA" from a policy statement into a continuously verified [check](/docs/reference/glossary#check).

This guide covers connecting your Entra ID tenant, what permissions OptiTech requests, and which controls light up once evidence starts flowing.

<Admonition type="note">
This integration reads identity data for evidence collection. If you also want your team to sign in to OptiTech through Entra ID, that's SSO, configured separately under **Settings** > **Identity**. The setup is equivalent to the [Okta SSO guide](/docs/guides/auth-okta).
</Admonition>

## Prerequisites

- An OptiTech workspace with the **Admin** or **Owner** role. The Entra ID integration is available on all plans; Start includes ten integrations.
- **Global Administrator** or **Privileged Role Administrator** in your Microsoft tenant, to grant admin consent to the app registration.

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Microsoft Entra ID**.
2. Click **Connect**. You're redirected to Microsoft's consent screen.
3. Review the requested permissions (see the next section) and grant **admin consent** for your tenant.
4. Back in OptiTech, the integration shows green with a first sync timestamp within a few minutes.

## Permissions requested

OptiTech asks for read-only Microsoft Graph application permissions:

| Permission           | Used for                                                  |
| -------------------- | --------------------------------------------------------- |
| `User.Read.All`      | User inventory, account status, dormant account detection |
| `Directory.Read.All` | Group memberships and admin role assignments              |
| `Reports.Read.All`   | MFA registration and sign-in activity                     |
| `Policy.Read.All`    | Conditional access and authentication method policies     |
| `AuditLog.Read.All`  | Sign-in logs for offboarding and dormancy checks          |

No write permissions are requested at connection time. If you later enable [auto-remediation](/docs/reference/glossary#auto-remediation) actions (like disabling a lingering account from a finding), that's a separate, explicit consent with its own scoped permission.

## Checks the integration activates

Once connected, these checks start running on schedule and feed the mapped controls:

- **MFA coverage**: every enabled user has MFA registered; exceptions surface as [findings](/docs/reference/glossary#finding) with the affected accounts listed.
- **Offboarding within 24 hours**: disabled or removed employment (from your [HR integration](/docs/guides/fortnox), if connected) is cross-checked against account status.
- **Admin role sprawl**: the count and membership of privileged roles, flagged when they grow or when admin accounts lack MFA.
- **Dormant accounts**: enabled accounts with no sign-in beyond your threshold.
- **Conditional access baseline**: verifies your named baseline policies are enabled and unchanged.

Each check result lands timestamped in the [evidence log](/docs/reference/glossary#evidence-log), and each failure routes to the [control owner](/docs/reference/glossary#control-owner).

## Verify the connection

1. On the integration page, confirm **Status: Connected** and a recent **Last sync**.
2. Open **Controls** and filter by **Source: Entra ID**. Each control shows its latest check result.
3. Review the user count against your expectation; a mismatch usually means a second tenant or a filtered organizational unit.

## Troubleshooting

- **Consent fails**: your Microsoft account lacks the role to grant tenant-wide consent. Ask a Global Administrator to complete step 3.
- **Sync errors after working initially**: consent was revoked or the app registration was deleted in Entra ID. Reconnect from the integration page; see [troubleshooting sync failures](/faqs/failed-to-fetch-error-tables-view).
- **User counts look wrong**: check whether guest accounts are included in scope under the integration's settings.

<NeedHelp/>
