---
title: 'How do I enable the AI copilot in OptiTech?'
subtitle: 'Turn it on under Settings > AI on Professional and Enterprise plans; EU-hosted models, no training on your data.'
enableTableOfContents: true
createdAt: '2026-01-14T14:07:08.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How do I enable or pause automated evidence collection for an integration?'
  slug: enable-disable-connection-pooling-optitech
nextLink:
  title: 'How do I export my compliance documentation as PDF or CSV files?'
  slug: export-database-sql-file
---

## Quick answer

An admin enables the copilot under **Settings** > **AI**. It's available on the Professional and Enterprise plans, is off by default, and activation shows you the processing terms first: inference runs on EU-hosted models, your data is not used to train anyone's models, and every answer cites its sources. Once enabled, the copilot appears throughout the workspace.

## What the copilot does

- **Answers questions with citations**: "Does NIS2 apply to our subsidiary?", "What's missing for ISO 27001 certification?" Answers are grounded in legal texts, MSB regulations, and your own workspace data through [retrieval-augmented generation](/faqs/best-postgres-services-retrieval-augmented-generation).
- **Drafts policies** adapted to your actual environment, using facts from your integrations rather than generic boilerplate.
- **Drafts questionnaire answers.** Feed it a customer's security questionnaire and it proposes answers from your live control data; see [can AI answer security questionnaires](/faqs/enable-pgvector-extension).
- **Summarizes for audiences**: an incident timeline into a management summary, or a quarter of findings into a board paragraph.

Everything it produces is a draft pending human review. Nothing the copilot writes auto-publishes, signs, or submits.

## The governance answers your DPO will ask for

Enabling an AI feature in a compliance tool rightly triggers scrutiny, so the answers are documented in the activation flow:

- **Hosting**: EU-hosted LLMs; prompts and retrieved context don't leave the EU.
- **Training**: your data is never used for model training.
- **Scope control**: admins can restrict which data the copilot may retrieve from (for example, excluding incident records).
- **Logging**: copilot usage is logged like any other workspace activity.

Add the copilot to your own AI system inventory if you maintain one under the [AI Act workflow](/faqs/database-providers-pgvector-autoscaling-ai-applications); it's a limited-risk transparency case, and the platform pre-fills the entry.

## If you leave it disabled

Everything else works without it. The copilot accelerates drafting and Q&A, but scoping, monitoring, evidence collection, and reporting are deterministic platform features, not AI features. Enable it when your governance review is done, not before.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
