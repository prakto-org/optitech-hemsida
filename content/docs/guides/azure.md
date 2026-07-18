---
title: Connect Microsoft Azure to OptiTech
subtitle: Verify encryption, network exposure, logging, and backups across your Azure subscriptions
summary: >-
  Connect Microsoft Azure to OptiTech with a read-only app registration
  assigned the Reader role across subscriptions. The integration verifies
  storage encryption, network security group exposure, activity log coverage,
  backup vault configuration, and Defender for Cloud posture, feeding
  infrastructure controls across your frameworks.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

The Azure integration is the infrastructure twin of the [AWS integration](/docs/guides/aws): read-only visibility into your subscriptions so encryption, exposure, logging, and backup controls verify continuously. If you run both clouds, connect both; the same [cross-mapped controls](/docs/reference/glossary#cross-mapping) consume evidence from each.

## Prerequisites

- An OptiTech workspace with the **Admin** or **Owner** role.
- **Owner** or **User Access Administrator** on the target subscriptions, to assign the Reader role.
- The [Entra ID integration](/docs/guides/microsoft-entra-id) is separate; this integration covers Azure resources, not identity.

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Microsoft Azure**.
2. Click **Connect** and consent to the app registration in your tenant.
3. Assign the **Reader** role (and **Backup Reader** for vault checks) to the OptiTech application on each subscription or on a management group to cover them all.
4. Select which subscriptions are in scope and run the first sync.

## Checks the integration activates

- **Storage encryption and access**: storage accounts verified for encryption, HTTPS-only, and no anonymous blob access.
- **Network exposure**: NSG rules and public IPs checked for unintended internet exposure, including management ports.
- **Activity log coverage**: diagnostic settings verified so control-plane actions are logged with required retention.
- **Backup configuration**: Recovery Services vaults, policy coverage for tagged VMs, and restore-point recency, feeding [continuity controls](/faqs/iso-22301-compliance-optitech).
- **Defender for Cloud posture**: secure score and plan coverage recorded per sync.
- **Asset inventory sync**: subscriptions, resource groups, and key resources enumerate into the [asset inventory](/docs/reference/glossary#asset-inventory).

Failures open [findings](/docs/reference/glossary#finding) with the affected resource IDs, routed to the owning team.

## Verify the connection

1. Confirm each subscription shows **Connected** with a recent sync.
2. Filter **Controls** by **Source: Azure** and spot-check a couple of results in the portal.
3. Open a test NSG rule to the internet in a sandbox subscription and confirm the finding appears on the next sync, then remove it.

## Troubleshooting

- **Subscriptions missing**: the Reader assignment hasn't propagated or was scoped to a resource group instead of the subscription; assign at subscription or management-group level.
- **Backup checks empty**: add the **Backup Reader** role; plain Reader can't enumerate vault details.
- **Stale results**: check the integration's sync schedule; large estates sync incrementally, and a full re-sync can be triggered from the integration page.

<NeedHelp/>
