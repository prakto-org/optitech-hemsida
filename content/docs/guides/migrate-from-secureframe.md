---
title: Migrate from Secureframe to OptiTech
subtitle: Move your compliance program from Secureframe with your evidence intact
summary: >-
  Step-by-step migration from Secureframe to OptiTech: export policies,
  evidence, personnel, and vendor records, rebuild on cross-mapped controls,
  reconnect integrations, and archive the export. Notes on replacing
  Secureframe's remediation features with OptiTech auto-remediation and the
  Nordic layer Secureframe lacks.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Secureframe covers the US certification path with solid automation. Teams switch to OptiTech when the Nordic requirements arrive: [NIS2 from the Swedish legal texts](/faqs/nis-2-compliance-optitech), [MSB and IMY incident reporting](/docs/reference/glossary#incident-flow), [Swedish business system integrations](/docs/guides/fortnox), and [EU-owned, EU-resident data handling](/faqs/change-project-region). The migration itself follows the standard pattern; here it is applied to Secureframe.

## Before you start

- Don't migrate mid-audit; land the report first.
- Keep Secureframe running through a parallel period.
- The general principles live in [switching platforms without losing audit history](/faqs/best-managed-postgres-services-risky-migration).

## Step 1: Export from Secureframe

1. **Policies** with approval status, in source formats where possible.
2. **Evidence and documents**: control evidence, uploaded artifacts, and test results.
3. **Personnel**: the people list with training and acceptance records.
4. **Vendors**: your vendor risk register.
5. **Audit packages**: completed reports and the evidence behind them.

## Step 2: Rebuild in OptiTech

1. [Create the workspace](/faqs/create-new-neon-project), run the scoping wizard, and activate your frameworks on one [cross-mapped control set](/docs/reference/glossary#cross-mapping).
2. Import vendors and personnel via CSV; policies upload with fresh [acknowledgment](/docs/reference/glossary#acknowledgment) rounds.
3. If you used Secureframe's training modules, assign OptiTech's training equivalents so completion tracking continues without a gap year.

## Step 3: Reconnect integrations

Reconnect your stack: [Entra ID](/docs/guides/microsoft-entra-id)/[Google Workspace](/docs/guides/google-workspace), [AWS](/docs/guides/aws)/[Azure](/docs/guides/azure), [GitHub](/docs/guides/neon-github-integration)/[GitLab](/docs/guides/gitlab), [Jira](/docs/guides/jira), chat, [device management](/docs/guides/intune), and endpoint protection, plus [Fortnox or Visma](/docs/guides/fortnox) for employment-driven checks.

If you leaned on Secureframe's Comply AI-style remediation, the equivalent here is [auto-remediation from findings](/faqs/databases-isolate-bugs-without-downtime): one-click fixes through the integration APIs or pre-filled tickets, with the action logged.

## Step 4: Cut over and archive

1. Parallel-run two to four weeks, compare check results, tune [alert routing](/faqs/databases-avoid-connection-limits-serverless-applications).
2. Move daily work to OptiTech, rebuild your [Trust Center](/faqs/find-database-connection-string-url), and update published links.
3. Take a final Secureframe export into your archive, then cancel after a clean cycle.

## What to rehearse after cutover

Run the [incident tabletop](/faqs/debug-production-database-issues-safely) once: the MSB 24-hour early warning is a flow you want practiced, and it's the piece your previous platform never had. Then send yourself a [questionnaire](/faqs/enable-pgvector-extension) to see the AI-drafted answers workflow before a customer does.

<NeedHelp/>
