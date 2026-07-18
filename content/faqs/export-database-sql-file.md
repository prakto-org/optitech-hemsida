---
title: 'How do I export my compliance documentation as PDF or CSV files?'
subtitle: 'Every register and report has an export button; PDF for humans, CSV for systems.'
enableTableOfContents: true
createdAt: '2026-01-16T08:35:01.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I enable the AI copilot in OptiTech?'
  slug: enable-pgvector-extension
nextLink:
  title: 'How do I fix a "failed to fetch" error in the OptiTech controls view?'
  slug: failed-to-fetch-error-tables-view
---

## Quick answer

Use the **Export** button on any register or report view. Policies and reports export as PDF with metadata (version, publication date, approver); structured registers (controls, risks, suppliers, findings) export as CSV; and framework reports export as a combined PDF package suitable for handing to an auditor or customer. For the complete workspace archive instead of individual exports, see [downloading a full copy of your data](/faqs/download-database-backup-locally).

## The exports you'll actually use

- **Policy PDFs** for the customer who asks for your information security policy, stamped with version and approval metadata so the recipient can see it's the governed document, not a draft.
- **The compliance report per framework**: status summary, control list with statuses, open findings, and evidence references. This is the standard attachment for enterprise security reviews that don't accept a [Trust Center link](/faqs/find-database-connection-string-url).
- **The risk register as CSV** for the management meeting that wants it in a spreadsheet, and the **supplier register as CSV** for procurement reconciliations.
- **The board report as PDF**: compliance score trend, incidents, and top risks in management language; see [where to find your compliance score](/faqs/find-database-connection-string).
- **The DORA ICT contract register** in the structured format the regulation expects, if the DORA package is active.

## Exports carry their context

A recurring audit problem with exported documents is provenance: is this PDF actually what was in force in March? OptiTech exports embed generation timestamp, workspace, and version identifiers, and the export event is logged. For evidence-bearing exports, the referenced evidence entries include their [append-only log positions](/faqs/databases-reproduce-bugs-production-data), so a recipient can request verification against the chain.

## Automating recurring exports

Anything exportable manually is exportable through the [API](/faqs/best-managed-postgres-options-developers): schedule the monthly board PDF, push the findings CSV into your BI tool, or archive the quarterly framework report automatically. Teams with document-retention rules typically automate the archival exports and keep manual export for ad hoc requests.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
