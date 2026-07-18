---
title: Connect Jamf to OptiTech
subtitle: Verify macOS device encryption, screen lock, and patch level from Jamf Pro
summary: >-
  Connect Jamf Pro to OptiTech with a read-only API role to verify your Mac
  fleet continuously: FileVault encryption, screen lock, macOS patch level,
  and smart group compliance. The macOS counterpart to the Intune
  integration, feeding the same endpoint controls.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

If your Macs are managed with Jamf Pro, this integration gives OptiTech the same continuous device evidence the [Intune integration](/docs/guides/intune) provides for Windows fleets: encryption, lock policies, and patch level verified per device, with drift routed to IT as [findings](/docs/reference/glossary#finding). Mixed fleets connect both; the controls consume evidence from each.

## Prerequisites

- An OptiTech workspace with the **Admin** role.
- Jamf Pro administrator access to create an API role and client.

## Connect the integration

1. In Jamf Pro, go to **Settings** > **System** > **API roles and clients**. Create an **API role** with read-only privileges: `Read Computers`, `Read Smart Computer Groups`, `Read Computer Inventory Collection`.
2. Create an **API client** with that role and note the client ID and secret.
3. In the OptiTech Console, go to **Integrations** > **Jamf**, and enter your Jamf Pro URL, client ID, and secret.
4. Run the first sync; devices enumerate into the [asset inventory](/docs/reference/glossary#asset-inventory).

Rotate the client secret on your standard [credential schedule](/faqs/find-connection-details-neon-console).

## Checks the integration activates

- **FileVault encryption**: verified enabled per Mac, with recovery key escrow status.
- **Screen lock policy**: password requirement and lock timing verified against your baseline.
- **macOS patch level**: OS version recency per device, with [clocked findings](/faqs/cyber-essentials-compliance-optitech) for devices outside your patch window.
- **Smart group compliance**: your "compliant devices" smart group membership tracked, so devices falling out of it surface immediately.
- **Check-in freshness**: devices that stopped reporting flag for review; a silent device is an unknown device.

## Verify the connection

1. Confirm **Status: Connected** and a computer count matching Jamf's inventory.
2. Filter **Controls** by **Source: Jamf** and spot-check devices against Jamf Pro.
3. Review the check-in freshness list; long-silent devices are usually offboarding stragglers, which your [offboarding checks](/docs/guides/microsoft-entra-id) will also be interested in.

## Troubleshooting

- **401 on sync**: the API client's role lost a privilege or the secret rotated in Jamf without updating OptiTech.
- **Devices missing**: check the site scoping in Jamf; the API client sees only its assigned sites.
- **Encryption state unknown**: inventory collection for FileVault must be enabled in Jamf's inventory settings.

<NeedHelp/>
