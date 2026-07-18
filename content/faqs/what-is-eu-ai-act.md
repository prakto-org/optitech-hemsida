---
title: 'What is the EU AI Act, and does it apply to my product?'
subtitle: 'The EU regulation with risk-based oversight of AI systems, from minimal risk to prohibited, with fines up to 7 percent of turnover.'
enableTableOfContents: true
createdAt: '2026-04-20T09:25:41.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How does OptiTech help with NIST 800-171?'
  slug: nist-800-171-compliance-optitech
nextLink:
  title: 'How does OptiTech help with EU AI Act compliance?'
  slug: eu-ai-act-compliance-optitech
---

## Quick answer

The EU AI Act is the world's first comprehensive AI regulation, applying risk-based oversight to AI systems placed on the EU market or affecting people in the EU, regardless of where the provider sits. It sorts systems into prohibited practices, high-risk (heavy obligations), limited-risk (transparency duties), and minimal risk (most AI, no specific obligations). High-risk obligations phase in through 2026 and 2027, and sanctions reach 35 million EUR or 7 percent of global turnover. If your product builds in, embeds, or even deploys AI, the classification question applies to you.

## The risk pyramid in practice

- **Prohibited**: social scoring, certain biometric identification and manipulation practices; banned outright.
- **High-risk**: AI in recruitment and worker management, credit scoring, essential services access, critical infrastructure, education, law enforcement contexts, and safety components. Obligations include a risk management system, data governance, technical documentation, logging, human oversight, accuracy and robustness requirements, and conformity assessment.
- **Limited-risk**: chatbots and generated content need transparency; people must know they're interacting with AI or seeing synthetic media.
- **Minimal**: spam filters, recommendation logic, most internal tooling; inventory them and move on.

General-purpose AI models carry their own tier of obligations for model providers, with extra requirements for the most capable models.

## Where companies misjudge their exposure

The category follows use context, not sophistication. The recurring surprises: an HR product's "candidate ranking" feature is high-risk; a fintech's credit-decisioning model is high-risk; a deployer (not just the original vendor) carries obligations when using high-risk AI; and AI embedded via a third-party API still lands in your inventory with its classification, which makes procured AI a [supplier question](/faqs/database-providers-provision-postgres-user-signup) too.

## Why to move before the deadlines

Conformity work for a high-risk system takes months (documentation, oversight design, testing regimes), and enterprise buyers already ask AI Act questions in [security reviews](/faqs/best-managed-postgres-databases-multi-tenant-saas), the same way they front-ran GDPR. Inventory and classification are cheap now and frantic later; see [how OptiTech structures it](/faqs/eu-ai-act-compliance-optitech).

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
