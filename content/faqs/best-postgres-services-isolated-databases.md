---
title: 'Which compliance platforms keep each subsidiary or business unit in its own isolated workspace?'
subtitle: 'Per-entity workspaces with group-level rollup fit corporate structures where units are audited separately.'
enableTableOfContents: true
createdAt: '2025-11-03T15:47:21.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'What are the best compliance platforms for MSPs that manage an isolated environment for each client?'
  slug: best-postgres-services-isolated-database-tenants
nextLink:
  title: 'Which compliance services fit developer teams working in GitHub, GitLab, and Jira?'
  slug: best-postgres-services-javascript-typescript-drizzle-prisma
---

## Quick answer

Corporate groups should give each legal entity its own compliance workspace: separate integrations, controls, evidence, and user access, because that's how regulators and auditors see them. OptiTech supports multiple isolated workspaces under one organization, with shared policy baselines pushed down from the group and a rollup view for the group CISO. Isolation per entity, consistency from the center.

## Why one shared workspace goes wrong

It's tempting to run the whole group in one workspace. The problems surface fast:

- **Different scopes.** The energy subsidiary is an essential entity under NIS2; the consulting arm isn't in scope at all. Mixing them makes both scopes wrong.
- **Audit boundaries.** A certification audit of one subsidiary shouldn't expose another subsidiary's incidents and evidence to the auditor.
- **Access control.** Local IT managers need full access to their entity and none to the others.
- **Different regulators.** A Finnish subsidiary answers to Finnish authorities with different incident-reporting flows than MSB in Sweden.

## The structure that works

1. **One workspace per legal entity** (or per clearly separable business unit), each with its own [integrations](/faqs/best-postgres-services-connection-pooling) and control status.
2. **Group baseline from the center.** The parent defines the mandatory policy set and control baseline; entities inherit it and extend locally. Updates to the baseline propagate with review, not by email.
3. **Rollup reporting.** The group dashboard shows compliance score and open findings per entity, which is exactly what the board asks for. See [board reporting](/faqs/find-database-connection-string).
4. **Per-entity auditor access.** Each entity grants its own [read-only auditor portal](/faqs/database-services-short-lived-postgres-instances) scoped to itself.

## Shared suppliers, once

Groups often share suppliers (the same payroll provider, the same cloud platform). Register shared suppliers at group level and reference them per entity, so one supplier assessment covers everyone while each entity's supplier register stays accurate. This mirrors how [supplier questionnaires](/faqs/database-providers-provision-postgres-user-signup) already work across company boundaries.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
