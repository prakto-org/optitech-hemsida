---
title: Connect Microsoft Defender to OptiTech
subtitle: Verify endpoint protection and alerts from Defender for Endpoint
summary: >-
  Connect Microsoft Defender for Endpoint to OptiTech to verify protection
  coverage, sensor health, and antivirus configuration across your fleet, and
  optionally open incident records from high-severity alerts. The
  Microsoft-stack counterpart to the CrowdStrike integration.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

For Microsoft-stack organizations, Defender for Endpoint is the malware protection layer your frameworks ask about. This integration verifies it continuously: onboarding coverage, sensor health, and AV configuration checked against your fleet, gaps routed as [findings](/docs/reference/glossary#finding), and high-severity alerts optionally wired into the [incident flow](/docs/reference/glossary#incident-flow). CrowdStrike shops: see the [CrowdStrike integration](/docs/guides/crowdstrike).

## Prerequisites

- An OptiTech workspace with the **Admin** role.
- **Global Administrator** or **Security Administrator** in your Microsoft tenant for consent.
- [Intune](/docs/guides/intune) connected, so coverage reconciles against the managed fleet.

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **Microsoft Defender**.
2. Click **Connect** and grant admin consent for the read-only permissions (`Machine.Read.All`, `Alert.Read.All`, `SecurityConfiguration.Read.All` on the Defender API).
3. Choose whether to enable **Incident wiring** for high-severity alerts.
4. Run the first sync.

## Checks the integration activates

- **Onboarding coverage**: devices in your [Intune fleet](/docs/guides/intune) without Defender onboarding surface as coverage gaps.
- **Sensor health**: inactive or misconfigured sensors flag per device.
- **AV configuration**: real-time protection, cloud-delivered protection, and tamper protection verified against your baseline.
- **Exposure visibility**: Defender's exposure and secure score for endpoints recorded per sync, a useful trend line for the [board report](/faqs/find-database-connection-string).

## Alerts to incidents

With incident wiring enabled, alerts at or above your chosen severity open an [incident record](/docs/reference/glossary#incident-record) automatically: alert details in the timeline, severity assessment queued, and [reporting clocks](/docs/reference/glossary#incident-flow) started if warranted. Tune the threshold so the flow receives incidents, not noise; informational alerts belong in Defender's own console.

## Verify the connection

1. Confirm **Status: Connected** and a machine count in line with the Defender portal.
2. Filter **Controls** by **Source: Defender** and review the coverage reconciliation first.
3. Trigger a test detection (EICAR file on a test machine) and confirm the alert appears, and, if wired, opens an incident at the configured severity.

## Troubleshooting

- **Machines missing**: devices must be onboarded to Defender for Endpoint, not merely enrolled in Intune; the coverage check exists precisely for this gap.
- **Consent errors**: Defender API permissions are separate from Graph; the consent screen should list Machine and Alert scopes.
- **Duplicate incidents**: if you also wire [CrowdStrike](/docs/guides/crowdstrike) or a SIEM, set one source as incident-authoritative to avoid doubles.

<NeedHelp/>
