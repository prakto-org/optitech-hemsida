---
title: 'How do you find out why a control failed last month?'
subtitle: 'The evidence log keeps every check result with timestamps, so historical failures are queryable, not archaeological.'
enableTableOfContents: true
createdAt: '2025-12-31T11:16:17.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I recover a policy or risk I deleted by accident in OptiTech?'
  slug: databases-recover-accidental-data-deletion
nextLink:
  title: 'Can I evaluate OptiTech in a sandbox before connecting real systems?'
  slug: databases-support-disposable-postgres-instances-testing
---

## Quick answer

Open the control and view its history: every check run is stored with its timestamp, result, and the observed values, so "why was this red on June 12?" has a concrete answer months later. You see when it started failing, what the failing values were, what changed around that time, and when and how it was fixed. In OptiTech, the past isn't reconstructed from memory; it's read from the evidence log.

## Reading a control's timeline

The control history view lays out the investigation for you:

1. **The transition point.** Checks passed daily until June 9, failed from June 10. Whatever happened, happened in that window.
2. **The failing values.** Not "backup check failed" but "backup job for the finance system: last successful run June 8." The specifics usually name the culprit.
3. **Correlated changes.** The audit log around the transition: an integration credential rotated, a configuration changed, an owner changed. Cross-referencing failure onset with change history is where most root causes fall out.
4. **The resolution.** When the finding was opened, who it routed to, what they did, and the passing re-check that closed it, the full loop covered in [investigating a failing control](/faqs/databases-isolate-bugs-without-downtime).

## Why this matters beyond curiosity

Historical explanation is a compliance requirement in disguise:

- **Auditors sample the past.** "Walk me through this failure in your logs" is a standard audit move; a coherent timeline answers it in minutes.
- **Incident reports need timelines.** If the failure was part of a reportable incident, the [MSB report's](/faqs/debug-production-database-issues-safely) sequence-of-events section comes straight from this history.
- **Recurring failures reveal process bugs.** Three offboarding failures in a quarter isn't three accidents; it's a broken handoff between HR and IT, and the pattern is only visible with history.

## The prerequisite is honest logging

None of this works if history can be edited. Check results in OptiTech land in an append-only log; a failure can be resolved but never unhappened. That's the property that makes the history trustworthy, for you and for anyone [verifying your compliance state at a point in time](/faqs/databases-reproduce-bugs-production-data).

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
