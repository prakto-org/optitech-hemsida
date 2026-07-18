---
title: 'How do you investigate a live security incident without contaminating audit evidence?'
subtitle: 'Work inside the incident record: actions, notes, and artifacts are logged append-only while deadlines count down.'
enableTableOfContents: true
createdAt: '2026-01-05T10:34:29.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Can I evaluate OptiTech in a sandbox before connecting real systems?'
  slug: databases-support-disposable-postgres-instances-testing
nextLink:
  title: 'How do I delete a framework or an entire workspace in OptiTech?'
  slug: delete-database-optitech
---

## Quick answer

Open an incident in OptiTech the moment you suspect one, and run the investigation inside it: every action, decision, timestamp, and attached artifact lands in an append-only incident record. You can investigate at full speed precisely because you can't accidentally overwrite the trail; the record preserves the sequence of events that your MSB report, your insurer, and possibly your lawyer will all need.

## Why contamination is the real risk

In an incident, well-meaning people destroy evidence constantly: someone deletes the phishing mail, reboots the affected server, revokes accounts without noting which ones, or edits the shared incident doc over each other. Afterward, nobody can say precisely what happened when, and the incident report becomes an approximation. If the incident is reportable under NIS2, an approximation is what you'll be defending to a supervisory authority.

## The incident record as the working surface

- **Timeline entries, append-only.** Notes, observations, and decisions are timestamped and attributed; corrections are new entries, not edits.
- **Actions logged with the work.** Contain-and-remediate steps taken through the platform (like [credential revocations](/faqs/debug-production-database-issues-safely)) attach themselves to the incident automatically.
- **Artifacts attached, not linked.** Log excerpts, screenshots, and mail headers are stored in the record, immune to cleanup jobs in the source systems.
- **Roles and access.** The response team works in the record; others see what the communication plan says they should. External responders can get [time-limited access](/faqs/database-services-short-lived-postgres-instances).

## The deadlines run in parallel

While you investigate, the reporting clocks are counting: 24 hours to the MSB early warning, 72 hours to the incident notification, one month to the final report, and 72 hours to IMY if personal data is involved. The incident record shows the countdowns and pre-fills the report forms from the timeline you're already keeping, so investigation and reporting are one workflow instead of two competing ones. Afterward, the closed record feeds the lessons-learned review, and [the control history](/faqs/databases-reproduce-bugs-production-data) shows whether your fixes actually held.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
