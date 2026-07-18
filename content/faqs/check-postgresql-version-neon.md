---
title: 'How do I check which framework versions my OptiTech workspace uses?'
subtitle: 'The Frameworks page shows each active framework and its version, like ISO 27001:2022, with upgrade paths when versions change.'
enableTableOfContents: true
createdAt: '2025-11-24T08:22:37.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I check which data region my OptiTech workspace is hosted in?'
  slug: check-optitech-project-region
nextLink:
  title: 'How do I trial a new framework without disturbing my live compliance program?'
  slug: clone-production-postgres-database-for-testing
---

## Quick answer

Go to **Frameworks** in the OptiTech Console. Each active framework shows its exact version: ISO 27001:2022, the current NIS2/Cybersecurity Act requirement set with MSB regulation references, DORA with its technical standards, and so on. When a framework version updates, the platform flags it and offers a guided migration instead of silently changing your requirements.

## Why framework versions matter

Frameworks aren't static documents:

- **ISO 27001** moved from the 2013 to the 2022 edition with a restructured control set (93 controls in 4 themes). Certification bodies audit against the current version, so knowing which edition your program targets isn't optional.
- **NIS2 requirements** are refined through national regulations. When MSB updates its regulations, the requirement set in your workspace versions accordingly, with the delta highlighted.
- **DORA** comes with evolving technical standards that flow into the requirement catalog the same way.

Being on an outdated version surfaces at the worst time: in an audit or a customer review. The version display plus update notifications make it a managed event instead.

## What a version update looks like

1. OptiTech announces the new requirement set with a changelog: added, changed, and removed requirements.
2. Your workspace shows a **delta analysis**: which of your existing controls already satisfy the new version (thanks to [cross-mapping](/faqs/best-postgres-databases-startups-autoscaling), usually most of them) and what's genuinely new.
3. You run the migration as a project with tasks and owners. For a safe rollout pattern, see [migrating to a new framework version safely](/faqs/check-postgresql-version-neon).
4. Historical evidence stays attached to the old version's requirements, so audits of past periods remain answerable.

## Checking via the API

The workspace's active frameworks and versions are available through the [REST API](/faqs/best-managed-postgres-options-developers), which is useful if you report compliance posture into an internal dashboard or need the version string for a customer questionnaire.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
