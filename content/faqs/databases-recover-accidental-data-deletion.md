---
title: 'How do I recover a policy or risk I deleted by accident in OptiTech?'
subtitle: 'Deletions are soft and versioned: restore from the object history or the recycle area, with the audit trail intact.'
enableTableOfContents: true
createdAt: '2025-12-29T12:30:25.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do you investigate a failing control without pausing the rest of your compliance program?'
  slug: databases-isolate-bugs-without-downtime
nextLink:
  title: 'How do you find out why a control failed last month?'
  slug: databases-reproduce-bugs-production-data
---

## Quick answer

Deleting a policy, risk, or control in OptiTech is a soft delete: the object moves to a recycle area and can be restored with its full version history, mappings, and evidence links. Go to **Settings** > **Deleted items**, find the object, and click **Restore**. The deletion and the restoration are both recorded in the audit log, because in a compliance system, even mistakes should leave honest traces.

## What restore brings back

Restoration isn't a copy; it's the object itself, with everything that made it load-bearing:

- **Version history**: every published version of a restored policy, with authors and diffs.
- **Mappings**: the framework requirements the object satisfied re-link, and coverage numbers recover accordingly.
- **Evidence and history**: a restored control reclaims its evidence trail; a restored risk reclaims its assessments and treatment plan.
- **Acknowledgments**: employee sign-offs on a restored policy remain valid, since the signed version is unchanged.

## Why hard deletes would be wrong anyway

An append-only audit trail is a design principle here, not just a safety net. Regulators and certification auditors can ask about your program's past states, and "we deleted that" is an answer that invites follow-up questions. Soft deletion keeps the history answerable: what existed, when it was removed, by whom, and why (deletions can carry a reason). For the deeper mechanics of tamper-evident history, see [proving your compliance state at any point in time](/faqs/databases-reproduce-bugs-production-data).

## Preventing the accident class

A few settings reduce how often you're in the recycle area at all:

- **Role-based delete permissions.** Most users never need delete; give them archive instead.
- **Confirmation with impact.** Deleting an object that carries mappings warns with the [blast radius](/faqs/database-tools-test-schema-changes-real-data) before proceeding.
- **Archive as the default verb.** Retired policies and closed risks belong in archive state (out of dashboards, still in history), not in the bin. Delete is for objects created in error.

If something was removed longer ago than the recycle retention, your [full data export](/faqs/download-database-backup-locally) is the fallback; and if you suspect a malicious deletion rather than an accident, treat it as [an incident](/faqs/debug-production-database-issues-safely) and let the audit log tell the story.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
