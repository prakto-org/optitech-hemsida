---
title: 'How do I enable or pause automated evidence collection for an integration?'
subtitle: 'Toggle collection per integration or per check from the Integrations page; pauses are visible in the evidence timeline.'
enableTableOfContents: true
createdAt: '2026-01-12T16:31:54.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I download a full copy of my compliance data from OptiTech?'
  slug: download-database-backup-locally
nextLink:
  title: 'How do I enable the AI copilot in OptiTech?'
  slug: enable-pgvector-extension
---

## Quick answer

Go to **Integrations**, select the integration, and use the **Collection** toggle to pause or resume all its checks, or expand the check list to toggle individual checks. A paused integration keeps its connection and configuration; it just stops running checks, and the pause appears as an annotated gap in the evidence timeline rather than silent missing data.

## When pausing makes sense

- **Planned migrations.** You're moving tenants or rebuilding your AWS organization, and a weekend of failing checks would be [noise, not signal](/faqs/databases-avoid-connection-limits-serverless-applications). Pause the affected checks with a reason; resume after cutover.
- **Decommissioning.** A system is being retired; pause its integration during wind-down, then remove it and update the asset register.
- **Tuning.** A new check is too strict for your environment. Pause that single check while you [adjust its threshold through review](/faqs/database-tools-test-schema-changes-real-data), instead of letting it cry wolf.

## What a pause does and doesn't do

Does: stop scheduled checks, stop new findings from those checks, and annotate the timeline with who paused what, when, and why. Doesn't: delete history, close existing findings, or hide the pause. Controls fed only by paused checks show "not currently monitored" rather than a stale green, which is the honest state and the one your auditor will respect. Long-running pauses escalate to the control owner, because a pause that lasts a quarter is a decision someone should be accountable for.

## Resuming and catching up

On resume, checks run immediately rather than waiting for the next schedule slot, so status refreshes within minutes. If drift occurred during the pause window, it surfaces as new findings dated at detection, and the pause annotation explains the gap. For connection problems rather than deliberate pauses (expired credentials, API changes), see [troubleshooting integration sync failures](/faqs/failed-to-fetch-error-tables-view); the fix there is repair, not pause.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
