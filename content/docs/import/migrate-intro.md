---
title: OptiTech migration guides
subtitle: Learn how to move your compliance program to OptiTech from different tools
  and sources
summary: >-
  OptiTech migration guide selection page compares import methods (document
  import, spreadsheet import, platform export import, guided onboarding, fresh
  start with gap analysis) by program size, effort, and starting point to help
  you pick the right approach. Also indexes source-specific migration paths for
  spreadsheets and documents, consultant deliverables, Vanta, Drata,
  Secureframe, Sprinto, Cyberday, and enterprise GRC tools.
redirectFrom:
  - /docs/import/import-intro
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

This guide helps you choose the best migration method based on where your compliance program lives today, how much history you need to keep, and how fast you need to be up and running.

## Migration methods

| Method                                                                     | Best For                                     | Program size | Effort      | Key benefit                            |
| -------------------------------------------------------------------------- | -------------------------------------------- | ------------ | ----------- | -------------------------------------- |
| [Fresh start with gap analysis](/docs/get-started/full-backend-quickstart) | First-time compliance, small programs        | Starting out | Low         | Fastest path, nothing to carry over    |
| [Document import](/docs/import/migrate-from-spreadsheets)                  | Policies and plans in Word or PDF            | Any size     | Low         | OptiTech maps documents to controls    |
| [Spreadsheet import](/docs/import/migrate-from-spreadsheets)               | Risk registers and control matrices in Excel | Any size     | Medium      | Keeps your risk and control history    |
| [Platform export import](/docs/import/migrate-from-vanta)                  | Moving from another compliance platform      | Any size     | Medium      | Controls and evidence mapped on import |
| [Guided onboarding](/docs/introduction/plans#add-ons)                      | Complex programs, groups, regulated entities | Large        | Low for you | Our team runs the migration with you   |

<Admonition type="tip" title="Quick guidance">
If your program lives in spreadsheets and documents, start with [Spreadsheets and documents](/docs/import/migrate-from-spreadsheets), or load individual registers straight from a file with [CSV import](/docs/import/import-from-csv). If you're leaving another platform, pick your source below; controls and evidence map on import. If you're starting from scratch, skip migration entirely and run the [gap analysis](/docs/get-started/full-backend-quickstart).
</Admonition>

## Source-specific guides

For step-by-step instructions tailored to where your program lives today, see [Spreadsheets and documents](/docs/import/migrate-from-spreadsheets), [SharePoint and Teams](/docs/import/migrate-from-sharepoint), [Consultant deliverables](/docs/import/migrate-from-consultants), [Swedish GDPR tools](/docs/import/migrate-from-gdpr-tools), [Vanta](/docs/import/migrate-from-vanta), [Drata](/docs/import/migrate-from-drata), [Secureframe](/docs/import/migrate-from-secureframe), [Sprinto](/docs/import/migrate-from-sprinto), [Cyberday](/docs/import/migrate-from-cyberday), [open source GRC tools](/docs/import/migrate-from-open-source), [enterprise GRC tools](/docs/import/migrate-from-grc-tools), or [another OptiTech organization](/docs/import/migrate-from-another-optitech).

## What carries over

Whatever the source, the same things map into OptiTech:

- **Policies and plans**: imported documents keep their content and get version control, review cycles, and e-signing
- **Controls**: mapped against OptiTech's framework requirements, with cross-mapping applied automatically
- **Risk register**: risks, scores, and treatment plans, linked to the controls that mitigate them
- **Vendor register**: suppliers, classifications, and contract dates
- **Evidence history**: imported as historical records, clearly separated from the continuously collected evidence that starts at cutover

## What doesn't need migrating

Evidence collection starts fresh from your integrations at cutover, which is the point: within days, your controls are verified by live checks instead of imported screenshots. Old evidence stays available for audits that cover the earlier period.

<NeedHelp/>
