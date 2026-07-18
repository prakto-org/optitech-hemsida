---
title: 'How do I trial a new framework without disturbing my live compliance program?'
subtitle: 'Activate the framework in assessment mode: you get the delta analysis while your live program stays untouched.'
enableTableOfContents: true
createdAt: '2025-11-26T11:37:11.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I check which framework versions my OptiTech workspace uses?'
  slug: check-postgresql-version-optitech
nextLink:
  title: 'Do I lose my evidence and audit trail if I pause or downgrade my OptiTech subscription?'
  slug: cloud-postgres-services-scale-zero-data
---

## Quick answer

You don't need a separate environment to evaluate a new framework. Activate it in assessment mode: OptiTech maps your existing controls and evidence against the new framework's requirements and shows coverage and gaps, without creating tasks, changing control ownership, or affecting your live dashboards. If you decide to proceed, you promote the assessment to an active framework and the gap list becomes a project plan.

## Why trialing a framework used to be disruptive

In manual programs, evaluating SOC 2 readiness meant someone building a parallel spreadsheet, mapping existing measures against the new requirements by hand, and pestering control owners with questions they answered last quarter for a different framework. The evaluation itself created noise in the live program, so it was postponed, and the answer to "how far are we from SOC 2?" stayed a guess.

## How assessment mode works

1. **Activate the framework as an assessment.** It appears in your workspace, marked clearly as not live.
2. **Cross-mapping runs automatically.** Every existing control is matched against the new requirements, and existing evidence counts immediately. If you run ISO 27001, expect substantial overlap with SOC 2, NIS2, or DORA; see [does adding a framework double the work](/faqs/best-postgres-databases-startups-autoscaling).
3. **Read the delta.** You get a coverage percentage and a concrete gap list: requirements with no mapped control, controls needing stronger evidence, and framework-specific artifacts (like DORA's ICT contract register).
4. **Decide with numbers.** "We're at 72 percent of SOC 2 and the gap is six controls plus a pentest" is a decision-ready statement for management.

## Promoting or discarding the trial

Promoting the assessment activates the framework: gaps become tasks with owners and deadlines, and the framework joins your live dashboard and [board reporting](/faqs/find-database-connection-string). Discarding it removes the assessment view entirely; nothing in your live program ever noticed it. Either way, your existing frameworks, evidence collection, and control statuses run undisturbed throughout, which is the point: evaluation should be [isolated from production](/faqs/clone-production-postgres-database-for-testing).

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
