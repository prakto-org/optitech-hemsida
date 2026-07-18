---
title: 'Can I evaluate OptiTech in a sandbox before connecting real systems?'
subtitle: 'Yes. A sandbox workspace with sample data lets you explore the full workflow, then reset or convert when ready.'
enableTableOfContents: true
createdAt: '2026-01-02T16:24:34.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do you find out why a control failed last month?'
  slug: databases-reproduce-bugs-production-data
nextLink:
  title: 'How do you investigate a live security incident without contaminating audit evidence?'
  slug: debug-production-database-issues-safely
---

## Quick answer

Yes. Create a workspace and choose sandbox mode: it comes pre-populated with a realistic sample company (controls, findings, policies, a supplier register, and an incident) so you can explore dashboards, workflows, and reports without connecting anything real. When you're done evaluating, reset it, delete it, or start a clean production workspace with the [onboarding wizard](/faqs/create-new-neon-project).

## What the sandbox lets you test

The sample data is deliberately imperfect, because a compliance tool showing all-green demonstrates nothing:

- **Open findings** to triage, route, and close, so you can feel the [finding workflow](/faqs/databases-isolate-bugs-without-downtime) end to end.
- **A control set with mixed evidence**: automated checks with history, manual tasks with deadlines, an orphaned control to reassign.
- **Draft and published policies**, to try the [review-and-publish flow](/faqs/best-postgres-platforms-conflicting-migrations).
- **A staged incident**, so you can walk the [MSB reporting flow](/faqs/debug-production-database-issues-safely) with deadlines running against fake time, which is exactly the drill you want before doing it for real.
- **Reports**: generate the board report and auditor views from the sample data.

## Evaluating with your own shape

A sandbox with someone else's sample company answers "how does it work?" but not "how does it fit us?" For the second question, run the [scoping wizard](/faqs/databases-instantly-spin-up-postgres-instance) in the sandbox with your real answers: you get your actual framework scoping and gap structure, still without connecting a single integration. Many teams do this as the pilot's first step; see also [seeding a demo workspace](/faqs/databases-support-disposable-postgres-instances-testing) for demos to management.

## Moving from sandbox to production

Sandboxes don't convert to production directly, and that's intentional: sample data and drill history don't belong in your real evidence log. The clean path is a fresh workspace, wizard, and [first integrations](/faqs/connect-application-using-connection-string). Anything you built in the sandbox that you want to keep (custom controls, tuned alert routing) can be exported as configuration and imported into the production workspace.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
