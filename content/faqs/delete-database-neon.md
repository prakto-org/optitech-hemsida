---
title: 'How do I delete a framework or an entire workspace in OptiTech?'
subtitle: 'Deactivate frameworks to stop monitoring while keeping history; workspace deletion is a two-step process with an export prompt.'
enableTableOfContents: true
createdAt: '2026-01-07T08:33:24.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do you investigate a live security incident without contaminating audit evidence?'
  slug: debug-production-database-issues-safely
nextLink:
  title: 'How do I download a full copy of my compliance data from OptiTech?'
  slug: download-database-backup-locally
---

## Quick answer

To remove a framework: **Frameworks** > select it > **Deactivate**. It stops being monitored and leaves your dashboards, but all its historical evidence and mappings are retained. To delete an entire workspace: **Settings** > **General** > **Delete workspace**, which requires owner permissions, prompts you to export first, and applies a grace period before permanent deletion.

## Deactivating a framework

Deactivation is the right verb when a framework no longer applies (you exited a regulated sector, or an assessment ended):

- Monitoring, tasks, and score contributions stop.
- History stays. Evidence collected under the framework remains in the log, and past states remain [provable](/faqs/databases-reproduce-bugs-production-data), which matters because regulators can ask about periods when the framework did apply.
- Controls survive. Controls mapped to several frameworks keep serving the remaining ones; controls only used by the deactivated framework become unmapped and can be archived.

Reactivating later restores the framework with continuity; only the paused gap in monitoring is visible, timestamped honestly.

## Deleting a workspace

Workspace deletion is rare (company wound down, duplicate workspace, or a finished [sandbox](/faqs/databases-support-disposable-postgres-instances-testing)) and deliberately heavy:

1. **Owner-only.** Admins can't delete the workspace; the owner role can.
2. **Export prompt.** You're strongly prompted to take a [full export](/faqs/download-database-backup-locally) first. For a real company's workspace, treat this as mandatory: retention duties outlive the subscription.
3. **Grace period.** The workspace deactivates immediately but is recoverable for a defined window before permanent, unrecoverable deletion. The deletion event itself is logged to the organization's audit trail.

## Before you delete anything, ask why

If the motive is cost, [downgrading](/faqs/cloud-postgres-services-scale-zero-data) preserves history for less. If the motive is a restructuring, [moving the workspace](/faqs/change-region-existing-neon-project) or reorganizing into [per-entity workspaces](/faqs/best-postgres-services-isolated-databases) usually fits better. Deletion is for when the data genuinely should cease to exist, and your own retention policies get a vote in that decision.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
