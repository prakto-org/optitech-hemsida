---
title: Our product principles
subtitle: 'OptiTech adapts to your workflow, not the other way around.'
summary: >-
  OptiTech replaces manual compliance work with continuous evidence collection,
  automatic control monitoring, guided incident flows, and AI-drafted
  documentation. Read this page to understand why OptiTech behaves differently
  from spreadsheets, consultants, and legacy GRC tools, and which product
  decisions drive onboarding in under a week, one-click board reports, and
  compliance-as-code workflows.
enableTableOfContents: true
redirectFrom:
  - /docs/get-started-with-neon/dev-experience
updatedOn: '2026-07-18T10:05:28.819Z'
---

Our product experience is anchored by four core pillars:

1. **Invisible compliance work** - evidence collection and monitoring run in the background
2. **No waiting** - onboarding, reports, and questionnaire answers are fast
3. **Automation-first workflows** - compliance behaves like any other modern tool
4. **A composable program** - start with one framework and grow without redoing work

## Invisible compliance work

### Continuous evidence collection

Traditional compliance forces you to gather evidence by hand: screenshots, exports, and emails collected in a sprint before every audit, stale the moment you finish. This adds overhead and leads to either wasted effort or gaps that surface as audit findings.

OptiTech connects to the systems you already run (Microsoft 365, Entra ID, Google Workspace, AWS, Azure, GitHub, Fortnox, Visma, and more) and collects evidence automatically.

**How it works**

Each integration runs as a separate worker that checks your controls on a schedule and normalizes what it finds into one evidence schema: control, evidence, source, and timestamp. Checks include:

- MFA coverage across your user directory
- Offboarding completed within 24 hours of an employee leaving
- Backup tests, encryption settings, and patch levels
- Admin permissions and logging configuration

**What this means for you**

You don't gather evidence before an audit. It's already there, time-stamped and mapped to the right controls, collected while you did other work.

### Drift alerts and auto-remediation

When a control drifts (say, MFA is disabled for three users), OptiTech flags it immediately: green turns red, the responsible person is notified, and the finding includes a fix. Where the integration allows it, you can remediate directly from the platform via API, or send a ready-made ticket to Jira or Teams with instructions.

**What this means for you**

Problems get fixed when they appear, not discovered by an auditor a year later.

## No waiting

### Onboarding in under a week

Getting started doesn't involve a consulting engagement. The onboarding wizard asks 20 questions about your industry, size, systems, and customers, then maps which laws apply, which NIS2 category you fall into, and which controls you need, as a prioritized action list.

**What this means for you**

You see your real compliance posture on day one, and most companies are audit-ready in under a week rather than after a months-long project.

### Documentation in minutes, not weeks

OptiTech ships 50+ Swedish policy templates, and the AI copilot drafts policies, incident plans, and risk analyses from your actual environment. Because drafts pull facts from your integrations, they describe how you really operate instead of a generic template. Every document goes through your review and approval before it takes effect.

**Questionnaire answers on demand**

When a customer sends a security questionnaire, upload it and OptiTech drafts answers from your verified controls. What used to take 10 to 20 hours per questionnaire becomes a review pass.

**One-click reporting**

Board reports, compliance scores per framework, and trends over time are generated on demand. NIS2 requires your board to show active governance; producing the proof takes one click.

**What this means for you**

When documentation stops being the bottleneck, compliance stops competing with your actual work.

## Workflows

### Evidence-first

Modern compliance is built around proof, but most programs still revolve around documents that claim things. OptiTech takes a different approach: every requirement maps to controls, and every control maps to evidence with a source and a timestamp, stored in an append-only, hash-chained log.

**Always current**

When regulations change, your requirements and tasks update automatically. When your systems change, your evidence reflects it at the next check.

**Designed for scrutiny**

Auditors and supervisory authorities get read-only portal access to a complete, tamper-evident evidence chain, exportable to PDF or CSV.

**What this means for you**

Audits become a review of what already exists rather than an archaeology project.

### API-first

For technology companies, compliance can live in the same pipelines as everything else. The OptiTech API and CLI expose your controls programmatically:

- Run compliance checks in CI/CD and block deploys that break controls (for example, a storage bucket made public)
- Query control status from your own dashboards
- Automate vendor questionnaire workflows

**What this means for you**

Compliance checks become part of your deployment pipeline, not a quarterly meeting.

### AI-first

The AI copilot is built into the platform and grounded in the Swedish legal texts, MSB regulations, and your own data. Ask "Does NIS2 apply to us?" or "What's missing for ISO certification?" and get an answer with citations you can verify. The AI runs on EU-hosted models, drafts are never auto-published, and no customer data leaves the EU.

**What this means for you**

You get expert-level answers in plain Swedish without booking a consultant, and you can always check the source.

## A composable program

Modern compliance programs grow in waves: NIS2 today, DORA for your financial customers tomorrow, the AI Act after that. OptiTech is built around this reality. Controls are cross-mapped between frameworks, so one control satisfies requirements in several frameworks at once. Activating a new framework starts from the controls you already have, not from zero.

The same applies to your supply chain. Vendor management, security questionnaires, and shareable compliance status let your compliance program extend to the suppliers NIS2 and DORA make you responsible for.

**What this means for you**

You adopt OptiTech incrementally: one framework, then more, then your vendors, without ever redoing work you've already done.

## Compliance without friction

OptiTech is designed to remove friction from compliance without constraining how you work. Our users tell us the best thing about OptiTech is that they forget the compliance program is even there. That's exactly the goal. When compliance stops getting in the way, teams can focus on their actual business and stay audit-ready as a side effect.
