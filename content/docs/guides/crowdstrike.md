---
title: Connect CrowdStrike to OptiTech
subtitle: Verify endpoint protection coverage from CrowdStrike Falcon
summary: >-
  Connect CrowdStrike Falcon to OptiTech with a scoped API client to verify
  endpoint protection continuously: sensor coverage across the fleet, sensor
  health and version, and prevention policy assignment. Detections can open
  incident records automatically. Feeds malware protection controls across
  frameworks.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

"All endpoints run EDR" is a claim every framework wants proven: NIS2's hygiene measures, ISO 27001's malware controls, [Cyber Essentials'](/faqs/cyber-essentials-compliance-optitech) malware theme, and the [Essential Eight](/faqs/what-is-essential-eight). The CrowdStrike integration proves it continuously: sensor coverage, health, and policy assignment verified against your device fleet, with gaps as routed [findings](/docs/reference/glossary#finding). Defender shops: see the [Microsoft Defender integration](/docs/guides/microsoft-defender).

## Prerequisites

- An OptiTech workspace with the **Admin** role.
- Falcon administrator access to create an API client.

## Connect the integration

1. In the Falcon console, go to **Support and resources** > **API clients and keys**, and create an API client with read scopes: **Hosts (read)**, **Prevention policies (read)**, **Detections (read)** (optional, for incident wiring).
2. Note the client ID, secret, and your cloud region.
3. In the OptiTech Console, go to **Integrations** > **CrowdStrike**, and enter the credentials and region.
4. Run the first sync.

## Checks the integration activates

- **Sensor coverage**: the Falcon host list is reconciled against your [device inventory](/docs/guides/intune) (from Intune or Jamf), and managed devices without a sensor surface as the coverage gap they are.
- **Sensor health and version**: sensors in reduced functionality mode or below your minimum version flag per device.
- **Prevention policy assignment**: every host carries your intended prevention policy; unassigned or weakened hosts open findings.
- **Containment status visibility**: contained hosts are visible in context during incidents.

## Detections to incidents

Optionally, high-severity Falcon detections can open an [incident record](/docs/reference/glossary#incident-record) in OptiTech automatically: the detection details land in the timeline, the [reporting clocks](/docs/reference/glossary#incident-flow) start if the severity assessment warrants it, and responders work from one record. Configure the severity threshold under the integration's **Incident wiring** settings, and start conservative; detection noise should not page your compliance flow.

## Verify the connection

1. Confirm **Status: Connected** and a host count in line with Falcon's.
2. Filter **Controls** by **Source: CrowdStrike**; the coverage reconciliation is the first check worth reviewing.
3. If coverage shows gaps, they're usually new machines pre-sensor or retired machines lingering in the MDM; both are worth fixing at the source.

## Troubleshooting

- **403 on sync**: the API client lacks a scope; compare against the list above.
- **Region errors**: the cloud region must match your Falcon tenant (US-1, US-2, EU-1, and so on).
- **Coverage reconciliation empty**: connect [Intune](/docs/guides/intune) or [Jamf](/docs/guides/jamf) first; reconciliation needs a fleet to compare against.

<NeedHelp/>
