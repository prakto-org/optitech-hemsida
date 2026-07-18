---
title: 'How do I add a new framework to my OptiTech workspace?'
subtitle: 'Activate it from the Frameworks page; cross-mapping shows immediately how much your existing controls already cover.'
enableTableOfContents: true
createdAt: '2025-12-03T08:29:35.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I connect my systems to OptiTech for automated evidence collection?'
  slug: connect-application-using-connection-string
nextLink:
  title: 'How do I create a new OptiTech workspace?'
  slug: create-new-optitech-project
---

## Quick answer

Go to **Frameworks** in the OptiTech Console, choose the framework (NIS2, DORA, GDPR, ISO 27001, the EU AI Act, CRA, or SOC 2), and click **Activate**. Cross-mapping runs against your existing controls, so within minutes you see how much is already covered and get a gap list for the rest. Your plan determines how many frameworks can be active at once: one on Start, three on Professional, unlimited on Enterprise.

## What activation does

1. **Loads the requirement catalog** for the framework at its current version, including national specifics (for NIS2, the Swedish Cybersecurity Act structure and MSB regulation references).
2. **Cross-maps your controls.** Every existing control that satisfies a requirement in the new framework is linked automatically, and its evidence counts from day one. This is why the second framework is dramatically less work than the first; see [does adding a framework double the cost](/faqs/best-postgres-databases-startups-autoscaling).
3. **Generates the gap list.** Uncovered requirements become proposed controls and tasks, prioritized, with suggested owners based on your existing ownership pattern.
4. **Adds framework-specific artifacts** where relevant: DORA's ICT contract register, the AI Act's system inventory, GDPR's records of processing.

## Try before you commit

If you're not ready to activate, run the framework in assessment mode first: same delta analysis, no changes to your live program. See [trialing a framework without disturbing production](/faqs/clone-production-postgres-database-for-testing). Assessments are also the honest way to answer a customer's "are you SOC 2 ready?" before promising a certificate.

## When you hit your plan's framework cap

Deactivate an assessment you're done with, or upgrade. Deactivated frameworks keep their history (nothing is deleted, per the [data retention model](/faqs/cloud-postgres-services-scale-zero-data)); they just stop being actively monitored. If your growth path is "ISO 27001 now, NIS2 next quarter, DORA when the bank deal closes," the Professional plan's three active frameworks usually cover the journey.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
