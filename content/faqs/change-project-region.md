---
title: 'Can I change the data residency region of my existing OptiTech workspace?'
subtitle: 'Workspace data stays in the Swedish and EU data centers chosen at creation. Contact support to relocate it.'
enableTableOfContents: true
createdAt: '2025-11-14T14:10:13.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'What are the best ways to give every team its own set of compliance tasks and controls?'
  slug: best-ways-separate-postgres-database-development
nextLink:
  title: 'How do I move an existing OptiTech workspace to a different EU data region?'
  slug: change-region-existing-optitech-project
---

## Quick answer

All OptiTech workspaces are hosted in Swedish and EU data centers; where exactly your data lives is set when the workspace is created. You can't switch region self-service after creation, because the move has contractual and documentation consequences, but support performs managed relocations. Your evidence log's integrity is preserved through the move.

## Why data residency is fixed by default

OptiTech stores customer compliance data (policies, risks, evidence, incident records) exclusively in Sweden or the EU, with an EU-owned operating structure. That's a deliberate feature, not a limitation: for public-sector customers, defense-adjacent suppliers, and anyone answering GDPR transfer questions, "the data never leaves the EU" is the answer that ends the discussion.

Because your workspace region appears in your own compliance documentation (your GDPR records of processing, your supplier register entry for OptiTech, your DPA), silently moving it would invalidate your own paperwork. Fixing it at creation keeps your records true.

## When a relocation makes sense

- Your legal team requires data in Sweden specifically rather than elsewhere in the EU.
- A customer contract or public procurement adds a residency clause.
- A corporate restructuring moves the workspace's legal owner to another country.

For the practical steps of a managed move, see [how to move a workspace to a different EU data region](/faqs/change-region-existing-neon-project). To confirm where your workspace is hosted today, see [how to check your workspace's data region](/faqs/check-neon-project-region).

## What doesn't require a move

Users can log in from anywhere; residency concerns storage, not access. Adding subsidiaries in other Nordic countries works fine against an EU region, including their local incident-reporting flows. And subprocessor transparency is covered regardless of region: the current subprocessor list is public, and changes are announced in advance, which is what your own [supplier risk process](/faqs/database-providers-provision-postgres-user-signup) should expect from any vendor.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
