---
title: Migrate from SharePoint and Teams
subtitle: Move your compliance program out of document libraries and task lists
summary: >-
  Import policies, risk registers, and compliance task lists from SharePoint
  document libraries and Teams into OptiTech. Documents keep their content and
  gain version control, review cycles, and e-signing.
enableTableOfContents: true
---

Many compliance programs live in a SharePoint site: a document library of policies, an Excel risk register, and a Teams channel where tasks go to be forgotten. Everything is somewhere, and nothing is verifiable. This guide moves that program into OptiTech.

## What you can import

- **Document libraries**: policies and plans imported with content and metadata intact
- **Excel registers**: risk registers, control matrices, and vendor lists from your site
- **Task lists**: open compliance tasks from Planner or Lists become OptiTech tasks with owners
- **Version history**: the current approved version imports; older versions stay in SharePoint for reference

<Steps>

## Point the import assistant at your site

In the Console, open **Settings**, then **Import**, and connect your Microsoft 365 tenant. The assistant reads the document library and files you select; nothing is imported without your review.

## Review the mapping

Documents are classified (policy, plan, evidence, register) and controls map against your active frameworks. Anything ambiguous becomes a question, not a guess.

## Assign owners

Tasks and controls need people, not channels. Assign owners so alerts reach someone who acts, with the audit log capturing every step.

## Cut over

Your Microsoft 365 connection now doubles as an evidence integration: MFA coverage, offboarding, and access reviews are verified continuously. The SharePoint site can stay as an archive.

</Steps>

<Admonition type="tip" title="Keep working in Teams">
You don't have to leave Teams: OptiTech's auto-remediation can send ready-made tasks to Teams, so the people fixing things keep their workflow.
</Admonition>

<NeedHelp/>
