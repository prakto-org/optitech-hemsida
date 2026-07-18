---
title: AI copilot
subtitle: Answers grounded in Swedish law and your own data
summary: >-
  The OptiTech AI copilot answers compliance questions from the Swedish legal
  texts and your own controls, drafts policies in correct regulatory Swedish,
  and answers incoming security questionnaires. Every answer cites its sources,
  every draft goes through human review, and the models run in EU data centers.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
redirectFrom:
  - /docs/neon-auth/quick-start/nextjs
  - /docs/auth/migrate/from-stack-auth
  - /docs/neon-auth/overview
  - /docs/neon-auth/claim-project
  - /docs/neon-auth/create-users
  - /docs/neon-auth/how-it-works
  - /docs/neon-auth/best-practices
  - /docs/neon-auth/concepts/backend-integration
  - /docs/neon-auth/concepts/custom-user-data
  - /docs/guides/neon-auth-claim-project
  - /docs/guides/neon-auth-how-it-works
  - /docs/guides/neon-auth-best-practices
---

<FeatureBetaProps feature_name="OptiTech AI copilot" />

The AI copilot is the assistant built into the OptiTech platform. It runs retrieval over two sources: the Swedish legal texts and MSB regulations on one side, and your own controls and evidence on the other. That grounding is what makes its answers useful and what keeps them honest.

## Quick start guides

Choose your task to get started:

<TechCards>

<a href="/docs/get-started/with-an-agent" title="Scoping" description="Ask which laws apply, with citations" icon="auth"></a>

<a href="/docs/get-started/with-an-agent" title="Drafting" description="Policies from your real environment" icon="oauth"></a>

<a href="/docs/get-started/with-an-agent" title="Questionnaires" description="Answers from your verified controls" icon="database"></a>

</TechCards>

## Set up with your AI editor

<AuthAISetup />

## Why the OptiTech copilot?

- **Grounded in the source**  
  Every answer links back to the legal paragraph or the piece of evidence it rests on. You can check the source before you act.

- **Zero setup**  
  The copilot ships in the Console with your organization's context already loaded. Ask a question from any page; no configuration to maintain.

- **Drafts that know your environment**  
  Documents pre-fill with facts from your integrations, so a policy describes how you actually operate instead of a generic template.

## Grounded in Swedish law

The copilot's legal corpus covers the Swedish legal texts, MSB regulations (MSBFS), and the frameworks in your [framework library](/docs/get-started/frameworks), which means answers arrive in correct Swedish regulatory prose.

The corpus is versioned and updated when regulations change.

### When to use the copilot vs. a consultant

The copilot is built into OptiTech's architecture:

- **Instant answers with citations**: scoping questions, gap explanations, and requirement lookups answered against the current legal text, any time.
- **Drafts from your real data**: policies and questionnaire answers built from your verified controls, not from memory of a workshop.
- **No hourly meter**: ask as many questions as you need; the copilot is included in your plan.
- **Always in your workflow**: answers land next to the controls and documents they concern, inside the audit trail.

A consultant or lawyer makes sense when you need:

- Legal advice you can rely on formally: the copilot accelerates your work but is not legal advice.
- Judgment calls on novel situations where the source texts don't yet give a clear answer.

For hands-on security expertise beyond the platform, [vCISO hours](/docs/introduction/plans#add-ons) are available through our partner network.

As the copilot evolves, more tasks and integrations will be added. Check the [plans page](/docs/introduction/plans#ai-copilot-and-auto-remediation) to see what's currently included.

## Basic usage

Open the copilot from any page in the Console, then ask in Swedish or English.

**For scoping and gap questions:**

See the [copilot quickstart](/docs/get-started/with-an-agent) for a guided first session.

```text
Omfattas vi av NIS2, och är vi en väsentlig eller viktig entitet?
```

```text
What's missing before we're ready for an ISO 27001 certification audit?
```

**For drafting and questionnaires:**

Upload the customer's file (Excel, Word, or a portal export) and ask. Drafts land in your review queue; nothing publishes without your approval.

```text
Draft an incident response plan based on our environment
```

```text
Answer this questionnaire based on our verified controls
```

## Use cases

- **Scoping**  
  "Does NIS2 apply to us?" answered from the legal text and your onboarding data, with the reasoning shown.

- **Policy drafting**  
  Documents in correct regulatory Swedish, pre-filled from your integrations and routed through approval.

- **Security questionnaires**  
  Incoming questionnaires answered from your verified controls, saving 10 to 20 hours per questionnaire.

- **Gap explanations**  
  "What's left for DORA?" answered against your actual control status, not a generic checklist.

- **Public procurement**  
  Draft answers to SKR and Adda security requirements from the same verified controls.

See [Our product principles](/docs/get-started/dev-experience) for how AI-first workflows fit the rest of the platform.

## Example prompts

Beyond the quick starts on this site, the [copilot quickstart](/docs/get-started/with-an-agent) collects **more worked examples** across scoping, drafting, and questionnaire tasks, including what good prompts look like and how to review the drafts that come back. Browse there when you want a full session to follow along with.

## Availability

The copilot runs on EU-hosted models in EU data centers. No customer data is sent to US-based AI providers.

The copilot's drafts always go through human review, and its answers are not legal advice.

## Pricing

The AI copilot is included in OptiTech plans as follows:

- **Start**: Not included
- **Professional**: Included
- **Enterprise**: Included

Questionnaire answering at high volume is available as an add-on for teams that process many questionnaires per month. [Contact us](/contact-sales) if that's your situation.

See [OptiTech plans](/docs/introduction/plans#ai-copilot-and-auto-remediation) for more details.

## Coming from manual answers?

If your team answers questionnaires by hand today, your historical answers can be imported so the copilot learns your established wording. See the [migration guides](/docs/import/migrate-intro) for how existing material comes in.

<NeedHelp/>
