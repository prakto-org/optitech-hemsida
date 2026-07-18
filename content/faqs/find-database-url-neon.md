---
title: 'Where can I find the audit portal link to share with my auditor?'
subtitle: 'Generate it under Reports > Auditor access: scoped, read-only, expiring, and logged.'
enableTableOfContents: true
createdAt: '2026-01-28T14:25:32.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Where can I find my compliance score in OptiTech?'
  slug: find-database-connection-string
nextLink:
  title: 'What is SOC 2, and who needs it?'
  slug: what-is-soc-2
---

## Quick answer

Go to **Reports** > **Auditor access** and click **Create auditor link**. Choose the scope (which framework and which period), set the expiry, and OptiTech generates an invitation for your auditor: they authenticate with their own account and get a read-only portal view of exactly that slice of your program. The link is personal, expiring, and every view they make is logged. Auditor portal access is included on the Enterprise plan.

## What the auditor sees

The portal presents your program the way audit fieldwork consumes it:

- **The requirement catalog** for the framework in scope, each requirement linked to its controls.
- **Controls with live status and evidence history**, timestamped, with the [append-only integrity chain](/faqs/databases-reproduce-bugs-production-data) behind every entry.
- **Policies** in their published versions, with approval and acknowledgment records.
- **Findings and exceptions** with their lifecycle: opened, routed, resolved or accepted.
- **Point-in-time view**: the auditor can set a date and see the program as it stood then, which is how period-covering audits actually sample.

What they don't see: anything outside the scope you set, draft documents, or other frameworks' data.

## Why a portal beats an evidence folder

The traditional audit interaction is a request list and a shared folder filling with screenshots, which is slow for you and epistemically weak for the auditor. The portal inverts it: auditors sample evidence themselves, at the source, with timestamps they can trust. Fieldwork shrinks (auditors routinely cut on-site days when evidence is self-serve), and follow-up requests drop because context travels with the evidence. See [how auditors inspect live data without disturbing your team](/faqs/find-database-url-neon).

## Managing access over the engagement

The invitation's expiry should match the audit window; extensions are deliberate and logged, and access [revokes itself](/faqs/database-services-short-lived-postgres-instances) when the engagement ends. For recurring audits, create a fresh link per cycle rather than reusing one, so each audit's access trail stands alone.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
