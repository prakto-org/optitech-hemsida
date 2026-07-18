---
title: 'Do I lose my evidence and audit trail if I pause or downgrade my OptiTech subscription?'
subtitle: 'No. Collected evidence and history are retained; automation pauses, and export is always available.'
enableTableOfContents: true
createdAt: '2025-11-28T09:31:02.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I trial a new framework without disturbing my live compliance program?'
  slug: clone-production-postgres-database-for-testing
nextLink:
  title: 'How do I connect my systems to OptiTech for automated evidence collection?'
  slug: connect-application-using-connection-string
---

## Quick answer

No. Your evidence log, policies, risk register, and incident records are your compliance history, and OptiTech retains them when you downgrade or pause. What stops is the forward-looking automation: scheduled checks, integration syncs, and AI features according to plan. You can always [export everything](/faqs/download-database-backup-locally), and the append-only evidence log stays intact and verifiable.

## What happens on a downgrade

Moving from Professional to Start, for example:

- **Retained**: all historical evidence, policy versions, risk history, incident records, and audit logs. History is never trimmed to fit a plan.
- **Paused or limited**: frameworks beyond the plan's cap go read-only (visible, not actively monitored), integration count drops to the plan limit, and features like the Trust Center and AI copilot deactivate.
- **Nothing is deleted.** Re-upgrading reactivates the paused frameworks and integrations with continuity; the evidence log simply shows a gap in automated checks for the paused period, honestly timestamped.

## Why retention matters more than you'd think

Regulators look backward. A supervisory authority investigating an incident can ask about your posture in previous years, and certification audits examine the full cycle since the last audit. A compliance tool that holds your history hostage on downgrade, or worse, deletes it, turns a budget decision into a compliance risk. Ask any vendor this question before you sign; see [what to check about billing terms](/faqs/best-managed-postgres-databases-pay-per-use).

## If you leave entirely

On cancellation you get a full export window: documents, structured data as CSV, and the evidence log with its integrity chain. Store the export in your document archive; it remains your proof for the covered period. The [platform-switch guide](/faqs/best-managed-postgres-services-risky-migration) covers how to keep the trail unbroken if you move to another tool, and what to do so an auditor can still verify pre-switch history.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
