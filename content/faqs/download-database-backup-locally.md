---
title: 'How do I download a full copy of my compliance data from OptiTech?'
subtitle: 'Settings > Export produces documents, structured CSV data, and the evidence log with its integrity chain.'
enableTableOfContents: true
createdAt: '2026-01-09T11:44:59.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I delete a framework or an entire workspace in OptiTech?'
  slug: delete-database-optitech
nextLink:
  title: 'How do I enable or pause automated evidence collection for an integration?'
  slug: enable-disable-connection-pooling-optitech
---

## Quick answer

Go to **Settings** > **Export** and request a full workspace export. You get a downloadable archive containing your documents (policies with version history, as PDF and source), structured data (controls, risks, suppliers, assets, findings as CSV), incident records, and the evidence log with its hash chain, so the export's integrity is independently verifiable. Owner or admin permissions required; the export event is logged.

## What's in the archive

- **Documents**: every policy and procedure, all published versions, plus signature records of who acknowledged what and when.
- **Structured registers**: controls with their framework mappings, the risk register with assessment history, the supplier register including questionnaire responses, and asset inventories, all as CSV for portability.
- **Evidence log**: check results and attached artifacts with timestamps and the hash chain that makes tampering detectable after the fact.
- **Incident records**: complete timelines and attachments, including submitted authority reports.
- **Audit log**: administrative events (access changes, exports, deletions) for the workspace itself.

## When to export

- **Scheduled archival.** Many teams export quarterly or yearly into their document archive as a retention practice, independent of any plans to leave.
- **Before big changes**: a [workspace deletion](/faqs/delete-database-neon), a [platform switch](/faqs/best-managed-postgres-services-risky-migration), or a corporate restructuring.
- **On request**: an auditor, insurer, or authority wants a specific slice; note that for auditors, the [read-only portal](/faqs/find-database-url-neon) is usually the better answer than a data dump.

## Verifying and storing the export

The archive includes a manifest with checksums and the evidence log's chain head, so you (or anyone you hand it to) can verify completeness and integrity without OptiTech's involvement. Store it under your normal document-retention rules: it contains incident details and security posture, which makes it sensitive; encrypt at rest and restrict access the same way you restrict the workspace itself. For targeted extracts rather than the full archive, see [exporting documentation as PDF or CSV](/faqs/export-database-sql-file).

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
