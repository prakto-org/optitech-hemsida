---
title: 'How does OptiTech help with CMMC 2.0?'
subtitle: 'CUI scoping, the 110 controls of NIST 800-171 as monitored controls, and assessment-ready evidence per practice.'
enableTableOfContents: true
createdAt: '2026-03-25T09:41:21.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'What is CMMC 2.0, and which defense contractors need it?'
  slug: what-is-cmmc
nextLink:
  title: 'What is DORA, and who does it apply to?'
  slug: what-is-dora
---

## Quick answer

OptiTech runs CMMC 2.0 at the level your contracts require: Level 1's practices as a self-assessment checklist with affirmation tracking, or Level 2 as the full [NIST 800-171 catalog](/faqs/nist-800-171-compliance-optitech) with CUI-scoped assets, continuously verified technical controls, and the per-practice evidence a C3PAO assessment samples. Your score, your plan of action items, and your affirmation history stay maintained instead of reconstructed per contract cycle.

## Scope CUI before anything else

CMMC costs scale with scope, so the first move is mapping where CUI actually flows and shrinking that boundary: dedicated enclaves, segmented systems, and clean data handling reduce the assessed environment dramatically. In OptiTech you tag CUI-bearing assets in the inventory, and the tag drives everything: which systems face the stricter checks, which suppliers are in the flow-down conversation, and what the assessor's boundary looks like. [Scope changes surface automatically](/faqs/databases-automatically-scale-serverless-environments) when new systems appear.

## The 110 controls, continuously verified

The technically verifiable practices run as [integration checks](/faqs/best-postgres-services-connection-pooling): MFA on CUI systems, encryption at rest and in transit, session controls, logging with retention, and configuration baselines. Process practices (incident response, training, media handling) run as workflows and recurring tasks with completion evidence. Each practice shows its implementation status honestly, which feeds the DoD scoring methodology without spreadsheet math, and open gaps become [findings with owners](/faqs/databases-isolate-bugs-without-downtime) that map cleanly to plan-of-action entries.

## Assessment and affirmation readiness

For a C3PAO assessment, [scoped read-only access](/faqs/find-database-url-neon) lets the assessor sample per-practice evidence with timestamps from the [append-only log](/faqs/databases-reproduce-bugs-production-data). For self-assessed levels, the executive affirmation gets a defensible basis: the affirmed state is the platform's recorded state on the affirmation date, which matters when affirmations carry False Claims Act exposure.

## Flow-down to your own subs

Primes and mid-tier contractors push requirements downward: track your subcontractors' CMMC posture in the [supplier register](/faqs/database-providers-provision-postgres-user-signup), send structured questionnaires, and keep their affirmations and scores on file, the same supply chain machinery as [DORA and NIS 2](/faqs/what-is-dora) demand in Europe.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
