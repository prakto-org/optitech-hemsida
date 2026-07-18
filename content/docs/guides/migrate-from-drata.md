---
title: Migrate from Drata to OptiTech
subtitle: Move your compliance program from Drata with monitoring continuity
summary: >-
  Step-by-step migration from Drata to OptiTech: export policies, evidence,
  personnel, and vendor data, rebuild the program on cross-mapped controls,
  reconnect integrations for unbroken monitoring, and archive the Drata
  export for audit continuity. Covers the Nordic-specific gains: NIS2 from
  Swedish law, MSB reporting, and Swedish integrations.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Drata automates US-framework compliance well. What it doesn't have is the Nordic layer: [NIS2 as codified in the Swedish Cybersecurity Act](/faqs/nis-2-compliance-optitech), the [MSB and IMY incident flows](/docs/reference/glossary#incident-flow), [Fortnox, Visma, and BankID integrations](/docs/guides/fortnox), and [EU data residency under EU ownership](/faqs/change-project-region). If those started mattering to your business, this guide moves your program over without losing your history or your monitoring continuity.

## Before you start

- Time the switch between audits, not during one.
- Keep Drata active through the parallel period.
- Skim the [platform-switch playbook](/faqs/best-managed-postgres-services-risky-migration) for the principles; this guide is the Drata-specific application.

## Step 1: Export from Drata

1. **Policies**: download all policies with approval metadata, source formats where available.
2. **Evidence**: export control evidence and the document library (pentests, review records, certificates).
3. **Personnel**: the people register with policy acceptance and training completion.
4. **Vendors**: your vendor list with risk levels and review dates.
5. **Reports**: completed audit reports and their evidence packages.

## Step 2: Rebuild the program in OptiTech

1. [Create the workspace](/faqs/create-new-neon-project) and let the scoping wizard re-derive your obligations; NIS2 scope in particular is worth a fresh look, since Drata setups rarely modeled it properly.
2. Activate frameworks: your existing SOC 2 and ISO 27001 plus whatever the scoping adds. One [cross-mapped control set](/docs/reference/glossary#cross-mapping) serves them all.
3. Import vendors and personnel baselines from CSV into the [supplier register](/docs/reference/glossary#supplier-register) and people records.
4. Upload policies; new [acknowledgment rounds](/docs/reference/glossary#acknowledgment) start in OptiTech, optionally [BankID-signed](/docs/guides/bankid) for the documents that warrant it.

## Step 3: Reconnect integrations

The standard set: [Entra ID](/docs/guides/microsoft-entra-id) or [Google Workspace](/docs/guides/google-workspace), [AWS](/docs/guides/aws)/[Azure](/docs/guides/azure), [GitHub](/docs/guides/neon-github-integration)/[GitLab](/docs/guides/gitlab), [Jira](/docs/guides/jira), [Slack](/docs/guides/slack)/[Teams](/docs/guides/microsoft-teams), [Intune](/docs/guides/intune)/[Jamf](/docs/guides/jamf), and endpoint protection. Then the ones Drata never offered: [Fortnox](/docs/guides/fortnox) or [Visma](/docs/guides/visma) so offboarding checks run against employment truth.

Monitoring starts on connection; run two to four weeks in parallel and compare results before you disconnect anything.

## Step 4: Cut over and archive

1. Move daily work (finding triage, reviews, questionnaire answering) to OptiTech.
2. Take a final full Drata export into your document archive; it remains your proof for the covered period.
3. Rebuild your public security page on the [Trust Center](/faqs/find-database-connection-string-url) and update published links.
4. Cancel Drata after your first clean monitoring cycle.

## The operational deltas you gain

- **Incident readiness**: the [24-hour MSB early warning](/faqs/debug-production-database-issues-safely) flow with pre-filled authority forms; run the built-in tabletop once before you need it.
- **Questionnaires**: [AI-drafted answers](/faqs/enable-pgvector-extension) from live control data, with human review.
- **Pricing**: [public monthly pricing](/faqs/best-managed-postgres-databases-pay-per-use) instead of annual-contract negotiations.

<NeedHelp/>
