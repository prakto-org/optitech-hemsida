---
title: Migrate from Vanta to OptiTech
subtitle: Move your controls, evidence, and policies from Vanta without losing audit history
summary: >-
  Step-by-step migration from Vanta to OptiTech: export policies, evidence,
  and personnel records from Vanta, import them as baseline data, reconnect
  integrations so monitoring never gaps, and keep the audit trail unbroken.
  Covers why teams switch: EU data residency, NIS2 built from Swedish law,
  MSB incident reporting, and transparent pricing.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Vanta is a capable platform for US-framework compliance. Teams in the Nordics switch to OptiTech for what Vanta doesn't do: [NIS2 built from the Swedish Cybersecurity Act and MSB regulations](/faqs/nis-2-compliance-optitech) rather than a generic mapping, [incident reporting to MSB and IMY](/docs/reference/glossary#incident-flow) with real deadlines and forms, [Swedish integrations](/docs/guides/fortnox) like Fortnox and BankID, [EU data residency under EU ownership](/faqs/change-project-region), and [public pricing](/faqs/best-managed-postgres-databases-pay-per-use) in SEK instead of a sales call.

This guide moves your program without losing what you built.

## Before you start

- Keep your Vanta subscription active through the migration; you want overlap, not a gap.
- Inventory what you have in Vanta: active frameworks, connected integrations, policy documents, and any audit in flight. Mid-audit is a bad time to switch; migrate after the report lands.
- Read the general playbook in [switching platforms without losing audit history](/faqs/best-managed-postgres-services-risky-migration).

## Step 1: Export from Vanta

Collect from Vanta while everything still works:

1. **Policies**: download every policy with its approval state. Get source files where possible, not just PDFs.
2. **Evidence archive**: export the evidence attached to controls, plus any uploaded documents (pentest reports, review records).
3. **Personnel data**: the people list with training and policy acceptance status.
4. **Vendor list**: your vendor inventory with security review status.
5. **Audit artifacts**: completed SOC 2 or ISO reports and their evidence packages.

## Step 2: Set up the OptiTech workspace

1. [Create your workspace](/faqs/create-new-neon-project) and run the scoping wizard; it rebuilds your applicable-framework picture from your actual situation, which often differs from what was configured in Vanta years ago.
2. Activate your frameworks. SOC 2 and ISO 27001 map directly; [cross-mapping](/docs/reference/glossary#cross-mapping) means your control set unifies instead of duplicating per framework.
3. Import structured data: vendors into the [supplier register](/docs/reference/glossary#supplier-register) and personnel baseline via CSV.
4. Upload policies with their version history noted; publication and [acknowledgment](/docs/reference/glossary#acknowledgment) start fresh in OptiTech.

## Step 3: Reconnect integrations

Connect the same sources Vanta monitored, plus the ones it couldn't:

- [Microsoft Entra ID](/docs/guides/microsoft-entra-id) or [Google Workspace](/docs/guides/google-workspace)
- [AWS](/docs/guides/aws) and [Azure](/docs/guides/azure)
- [GitHub](/docs/guides/neon-github-integration) or [GitLab](/docs/guides/gitlab), [Jira](/docs/guides/jira), [Slack](/docs/guides/slack)
- [Intune](/docs/guides/intune) or [Jamf](/docs/guides/jamf), [CrowdStrike](/docs/guides/crowdstrike) or [Defender](/docs/guides/microsoft-defender)
- New ground: [Fortnox](/docs/guides/fortnox) or [Visma](/docs/guides/visma) for employment-driven checks, and [BankID](/docs/guides/bankid) for signing

Evidence collection starts immediately on connection, so your new trail begins before you disconnect anything.

## Step 4: Cut over and archive

1. Run both platforms in parallel for two to four weeks, comparing check results and tuning [routing and severity](/faqs/databases-avoid-connection-limits-serverless-applications).
2. Point your team's daily work (findings, reviews, questionnaires) at OptiTech.
3. Export a final full archive from Vanta and store it under your document retention rules; auditors can ask about pre-migration periods for years.
4. Downgrade or cancel Vanta once your first monitoring cycle in OptiTech has run clean.

## What changes operationally

- **Trust Center**: rebuild your public page in OptiTech's [Trust Center](/faqs/find-database-connection-string-url) and update the URL wherever it's published.
- **Questionnaires**: inbound questionnaires now run through the [AI-assisted workflow](/faqs/enable-pgvector-extension) against your live control data.
- **Incidents**: your incident process gains the [24-hour MSB early warning flow](/faqs/debug-production-database-issues-safely); rehearse it once so the first real incident isn't the first run.

<NeedHelp/>
