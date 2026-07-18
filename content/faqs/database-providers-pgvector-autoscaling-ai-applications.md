---
title: 'Which compliance providers classify AI systems under the EU AI Act risk categories?'
subtitle: 'A guided assessment per AI system determines its risk category and generates the matching obligation list.'
enableTableOfContents: true
createdAt: '2025-12-10T09:44:04.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I create custom controls in OptiTech?'
  slug: create-tables-with-sql-optitech
nextLink:
  title: 'Which providers give your suppliers a free account when you send them a security questionnaire?'
  slug: database-providers-provision-postgres-user-signup
---

## Quick answer

OptiTech includes the EU AI Act as a native framework with a classification workflow: you register each AI system in an inventory, answer a guided assessment about its purpose and context, and the platform determines the risk category (prohibited, high-risk, limited-risk, or minimal) and generates the obligations that follow. The classification and its reasoning are documented, which is itself an AI Act expectation.

## Why classification is the critical step

Every AI Act obligation hangs on the risk category, and category is determined by use context, not technology. The same ranking model is minimal-risk when it sorts support tickets and high-risk when it screens job applicants. Companies that skip systematic classification discover their exposure late, and the high-risk obligations (risk management system, data governance, technical documentation, human oversight, logging, conformity assessment) take months to implement.

Misclassification cuts both ways: calling a high-risk system minimal risks sanctions up to 35 million EUR or 7 percent of turnover, while over-classifying burdens a harmless feature with unnecessary process.

## How the workflow runs

1. **Inventory.** Register every AI system you build, embed, or procure, including third-party APIs and models inside purchased software. The inventory syncs with your supplier register, since procured AI is also a [supplier question](/faqs/database-providers-provision-postgres-user-signup).
2. **Assess.** The guided assessment walks through the Act's criteria: does the system touch employment, credit, essential services, biometrics, critical infrastructure? Are there transparency triggers?
3. **Classify and document.** The category, the reasoning, and the answers are stored with timestamps, giving you a defensible record of why you classified as you did.
4. **Generate obligations.** High-risk systems get their control set and documentation templates; limited-risk systems get transparency tasks; minimal-risk systems just stay inventoried.

## Keeping classifications current

Systems change purpose. A model built for one use gets reused for another, and its category may change with it. Classification reviews are recurring tasks in OptiTech, and new systems entering through procurement or [your deployment pipeline](/faqs/best-postgres-services-ai-agent-platforms) get flagged for assessment, so the inventory reflects reality instead of the state of affairs when someone last remembered to check.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
