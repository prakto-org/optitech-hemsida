---
title: Connect Microsoft Intune to OptiTech
subtitle: Verify disk encryption, screen lock, and patch level per device
summary: >-
  Connect Microsoft Intune to OptiTech to verify device compliance
  continuously: disk encryption, screen lock, OS patch level, and compliance
  policy assignment per enrolled device. Feeds endpoint controls in NIS2,
  ISO 27001, Cyber Essentials, and the Essential Eight, with per-device
  findings routed to IT.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Device controls fail quietly: a laptop misses its encryption policy, a device falls out of patch cadence, and nobody notices until an audit or an incident. With the Intune integration, OptiTech verifies your enrolled fleet continuously and turns per-device drift into routed [findings](/docs/reference/glossary#finding). Mac-managed fleets on Jamf: see the [Jamf integration](/docs/guides/jamf).

## Prerequisites

- An OptiTech workspace with the **Admin** role.
- **Intune Administrator** (or Global Administrator) in your Microsoft tenant for consent.
- The [Entra ID integration](/docs/guides/microsoft-entra-id) connected, since devices link to users through it.

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Microsoft Intune**.
2. Click **Connect** and grant admin consent for the read-only Graph permissions (`DeviceManagementManagedDevices.Read.All`, `DeviceManagementConfiguration.Read.All`).
3. Choose scope: the whole fleet or specific device groups.
4. The first sync enumerates devices into the [asset inventory](/docs/reference/glossary#asset-inventory) and activates the checks.

## Checks the integration activates

- **Disk encryption**: BitLocker (Windows) and FileVault (macOS via Intune) verified per device.
- **Screen lock and password policy**: device configuration verified against your baseline.
- **Patch level**: OS version and update recency per device, with [clocked findings](/faqs/cyber-essentials-compliance-optitech) for devices outside the patch window, the check both Cyber Essentials' 14-day rule and the [Essential Eight's](/faqs/what-is-essential-eight) patch strategies demand.
- **Compliance policy coverage**: every enrolled device has your Intune compliance policy assigned and reports compliant.
- **Enrollment coverage**: users with sign-in activity but no enrolled device surface for review, the gap where BYOD hides.

## Per-framework payoff

Device evidence feeds cross-mapped controls: NIS2's basic hygiene, ISO 27001's endpoint and asset controls, [Cyber Essentials'](/faqs/cyber-essentials-compliance-optitech) secure configuration and update management themes, and the device questions on every customer questionnaire. The fleet view also gives your [access reviews](/docs/guides/microsoft-entra-id) the device dimension: who has access, from what state of machine.

## Verify the connection

1. Confirm **Status: Connected** and a device count matching Intune's.
2. Filter **Controls** by **Source: Intune** and spot-check a few devices.
3. Review the enrollment-coverage finding list; it's usually where the surprises are.

## Troubleshooting

- **Device count mismatch**: stale Intune records (retired devices not deleted) inflate the fleet; clean up in Intune or scope by device group.
- **Encryption shows unknown**: newly enrolled devices report encryption state on their next check-in; give them a sync cycle.
- **Consent errors**: the consenting account needs a role that can authorize Device Management scopes.

<NeedHelp/>
