---
title: 'How do I move an existing OptiTech workspace to a different EU data region?'
subtitle: 'Request a managed relocation from support, update your records of processing, and verify the evidence log after the move.'
enableTableOfContents: true
createdAt: '2025-11-17T16:35:50.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Can I change the data residency region of my existing OptiTech workspace?'
  slug: change-project-region
nextLink:
  title: 'What is the cheapest way for a small company to stay compliant with NIS2?'
  slug: cheapest-ways-run-postgres-database-low-traffic
---

## Quick answer

Region relocation is a managed operation: open a support request, agree on a maintenance window, and OptiTech moves the workspace with its full history intact. The append-only evidence log is migrated with hash-chain verification, so the audit trail's integrity is provable across the move. Your side of the work is updating your own compliance records afterward.

## The relocation process

1. **Open a support request** from the Console with the target region and the reason (contractual, legal, or organizational).
2. **Review the impact summary.** Support confirms the maintenance window (typically outside business hours), the new hosting location, and the updated data-processing terms.
3. **The move runs.** Workspace data, documents, evidence log, and configuration migrate. Integrations reconnect automatically; scheduled checks resume in the new region.
4. **Verify.** Confirm the region in workspace settings ([how to check your region](/faqs/check-neon-project-region)), spot-check the evidence log continuity, and confirm integrations are green.

## Update your own documentation

The part teams forget: your compliance program references where OptiTech processes your data. After a move, update:

- Your **GDPR records of processing** and the DPA annex listing processing locations.
- Your **supplier register** entry for OptiTech, including the new region. If you run supplier reviews through the platform, this is a one-field change.
- Any **customer-facing statements** (Trust Center, security documentation) that name data locations.

The platform flags these follow-ups as tasks after a relocation, so they land in your normal workflow instead of depending on memory.

## Downtime and history

Expect a short read-only window during the final sync; no data is lost and no evidence gap is created. Historical evidence keeps its original timestamps, and the [point-in-time view of your compliance state](/faqs/databases-reproduce-bugs-production-data) works across the relocation boundary. If an auditor ever asks about the move itself, the relocation is logged as an administrative event with date and actor.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
