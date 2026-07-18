---
title: Migrate from open source GRC tools
subtitle: Move from CISO Assistant, eramba, SimpleRisk, or Gapps to OptiTech
summary: >-
  Import your controls, risk register, and framework mappings from open source
  GRC tools like CISO Assistant, eramba, SimpleRisk, and Gapps into OptiTech,
  and add continuous evidence collection, Swedish authority flows, and managed
  hosting.
enableTableOfContents: true
---

Open source GRC tools like CISO Assistant, eramba, SimpleRisk, and Gapps are a solid way to structure a program without a budget. Teams move to OptiTech when the manual work catches up with them: evidence still has to be gathered by hand, frameworks have to be maintained, and someone has to run the server.

## What you can import

- **Framework mappings**: your active frameworks and requirement mappings carry over; OptiTech's cross-mapping consolidates duplicates
- **Controls and assessments**: control libraries with their assessment status
- **Risk register**: risks, scores, owners, and treatment plans
- **Documents**: policies imported with content intact, with version control and e-signing applied

<Steps>

## Export from your tool

Most open source GRC tools export to CSV, Excel, or JSON. Export controls, risks, and documents; include assessment history if you want it as records.

## Upload and map

In the Console, open **Settings**, then **Import**, and upload the export. Controls map against your active frameworks, and the assistant flags anything it can't match instead of guessing.

## Connect your integrations

The step that removes the manual work: connect your identity provider, cloud, and code hosting, and controls that were self-assessed become continuously verified.

## Retire the server

When your controls are green in OptiTech, you can decommission the self-hosted instance. Keep a final export as an archive if your audit trail requires it.

</Steps>

## What you gain

- Continuous evidence collection instead of manual assessments
- NIS2 from the Swedish legal text, with MSBFS updates applied automatically, plus the MSB and IMY incident flows
- Swedish integrations, BankID login, and EU data residency
- No server to patch, back up, or explain to your own auditor

<NeedHelp/>
