---
title: Migrate from Cyberday to OptiTech
subtitle: Move your ISMS from Cyberday and add continuous technical evidence
summary: >-
  Step-by-step migration from Cyberday to OptiTech: export your task-based
  ISMS content, map tasks to controls, connect integrations for the
  continuous technical evidence Cyberday lacked, and keep your ISO 27001 and
  NIS2 documentation continuity. Aimed at Nordic teams upgrading from
  checklist compliance to verified compliance.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Cyberday got many Nordic organizations started: an approachable, Teams-based ISMS with sensible framework coverage. The ceiling is verification: Cyberday tracks that tasks are done; it doesn't independently verify technical state. OptiTech's difference is [continuous evidence through integrations](/docs/reference/glossary#check): MFA coverage, offboarding, encryption, and backups checked against your actual systems, plus [MSB incident flows](/docs/reference/glossary#incident-flow) and [Swedish system integrations](/docs/guides/fortnox) Cyberday doesn't reach.

## Before you start

- If a certification audit is scheduled, migrate after it.
- Keep Cyberday read-accessible through the transition.
- The general pattern: [switching platforms without losing audit history](/faqs/best-managed-postgres-services-risky-migration).

## Step 1: Export from Cyberday

1. **Documentation**: policies and procedure descriptions, in editable formats where possible.
2. **Task and assurance records**: the completion history that constitutes your ISMS operating evidence.
3. **Risk items**: your risk table with evaluations.
4. **Reports**: any framework reports you've shared with auditors or customers.

## Step 2: Rebuild in OptiTech

1. [Create the workspace](/faqs/create-new-neon-project) and run the scoping wizard; your NIS2 and ISO 27001 scope re-derives from your actual situation.
2. Activate your frameworks. Cyberday's task-based structure maps onto OptiTech [controls](/docs/reference/glossary#control): recurring assurance tasks become either automated checks (where an integration can verify) or scheduled manual tasks with evidence upload (where it can't).
3. Import risks into the [risk register](/faqs/iso-27001-compliance-optitech) and upload policies with fresh [acknowledgment rounds](/docs/reference/glossary#acknowledgment).

## Step 3: Connect integrations, the upgrade itself

This step is why you're migrating. Connect [Entra ID](/docs/guides/microsoft-entra-id) or [Google Workspace](/docs/guides/google-workspace), [your cloud](/docs/guides/aws), [your code platform](/docs/guides/neon-github-integration), [devices](/docs/guides/intune), [endpoint protection](/docs/guides/microsoft-defender), and [Fortnox or Visma](/docs/guides/fortnox). Watch manual assurance tasks convert to continuous checks: the access-review task that someone marked done quarterly becomes a daily verification with an [evidence log](/docs/reference/glossary#evidence-log) behind it.

Keep Teams as your notification surface with the [Teams integration](/docs/guides/microsoft-teams); the workflow habit survives the platform switch.

## Step 4: Cut over and archive

1. Run in parallel briefly; the comparison is qualitative here (task claims versus verified state), and the first verified findings usually reveal drift the task model missed. Treat those as wins, not embarrassments.
2. Move daily work over, export your final Cyberday archive, and store it under retention.
3. Wind down Cyberday after your first clean cycle.

## What your auditor sees

Continuity: the Cyberday export covers the earlier period, and the OptiTech [point-in-time evidence](/faqs/databases-reproduce-bugs-production-data) covers everything after cutover, sampled through the [auditor portal](/faqs/find-database-url-neon). Certification bodies generally receive the verification upgrade warmly; sampled screenshots are the part of their job nobody enjoys either.

<NeedHelp/>
