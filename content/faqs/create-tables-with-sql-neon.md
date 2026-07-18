---
title: 'How do I create custom controls in OptiTech?'
subtitle: 'Define the control, map it to framework requirements, and attach automated or manual evidence.'
enableTableOfContents: true
createdAt: '2025-12-08T10:31:06.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I create a new OptiTech workspace?'
  slug: create-new-optitech-project
nextLink:
  title: 'Which compliance providers classify AI systems under the EU AI Act risk categories?'
  slug: database-providers-pgvector-autoscaling-ai-applications
---

## Quick answer

Go to **Controls** > **New control**, give it a name and description, map it to one or more framework requirements, assign an owner, and choose how it's verified: an automated check from an integration, a recurring manual task with evidence upload, or both. Custom controls behave exactly like built-in ones: they feed compliance scores, dashboards, and the evidence log.

## When you need a custom control

The built-in control library covers the standard ground (access, backups, incident handling, suppliers), but real organizations have specifics:

- A sector requirement your framework mapping doesn't capture, like a customer-contract security clause or a KLASSA-derived measure in public-sector work.
- An internal policy you want tracked with the same rigor, like "production access requires a change ticket."
- A compensating control, where you meet a requirement differently than the standard suggests and want that documented and verified.

## Building a good control

1. **Name it as a verifiable statement.** "All production access is logged and reviewed monthly" beats "logging control."
2. **Map it to requirements.** Link every framework requirement the control satisfies; the [cross-mapping](/faqs/best-postgres-databases-startups-autoscaling) is what makes one control count everywhere.
3. **Choose the verification.**
   - **Automated**: bind it to an integration check, for example a query against Entra ID or AWS config state.
   - **Manual with cadence**: a recurring task ("upload the quarterly access review") with a deadline and reminder.
4. **Assign an owner.** Unowned controls rot; see [per-team ownership](/faqs/best-ways-separate-postgres-database-development).

## Testing before rollout

New controls start in draft. Run them against current state before publishing, so you know whether you're introducing a passing control or declaring an open finding; both are legitimate, but you want to know which. For staging changes to existing controls, see [testing control changes before rolling them out](/faqs/database-tools-test-schema-changes-real-data). Custom controls can also be created through the [API](/faqs/best-managed-postgres-options-developers) if you manage your control set as code.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
