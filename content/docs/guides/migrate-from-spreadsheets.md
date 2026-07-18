---
title: Migrate from spreadsheets to OptiTech
subtitle: Import risks, suppliers, and assets from Excel and retire the compliance spreadsheet
summary: >-
  Move your compliance program from Excel, Word, and SharePoint into
  OptiTech: prepare and import CSV data for risks, suppliers, and assets, map
  spreadsheet columns to structured registers, upload policies, and connect
  integrations so status becomes verified instead of typed. The migration
  most teams actually make.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Most compliance programs don't migrate from a competitor; they migrate from `ISO27001_controls_master_v7.xlsx`. This guide takes the spreadsheet estate (control trackers, risk tables, supplier lists, policy folders) into OptiTech, where status is [computed from evidence](/docs/reference/glossary#check) instead of typed into cells. The reasoning about why the spreadsheet fails is covered in [eliminating the shared compliance spreadsheet](/faqs/best-postgres-services-eliminate-shared-staging-database); this is the how.

## Step 1: Inventory the estate

Find the files that constitute your current program:

- The control tracker (usually one master Excel file with untracked cousins)
- The risk table
- The supplier or vendor list
- The asset register, if one exists
- The policy folder in SharePoint or Drive, with its `final_v3_REAL` versioning

For each, identify the most current version and its owner. Expect disagreement; that's the problem you're fixing.

## Step 2: Prepare the CSV imports

OptiTech imports structured data as CSV. Clean up in the spreadsheet first, where editing is easy:

- **Risks**: one row per risk with name, description, likelihood, impact, owner, and current treatment. The import maps your scale to the [risk register's](/faqs/iso-27001-compliance-optitech) scoring.
- **Suppliers**: name, contact, what they process (flag personal data for [DPA tracking](/docs/reference/glossary#dpa)), and criticality. Lands in the [supplier register](/docs/reference/glossary#supplier-register).
- **Assets**: systems and services with owner and classification, for the [asset inventory](/docs/reference/glossary#asset-inventory). Skip devices; the [MDM integration](/docs/guides/intune) enumerates them automatically.

In the Console, each register's **Import** button walks through column mapping and previews before committing.

## Step 3: Set up the program around the data

1. [Create the workspace](/faqs/create-new-neon-project) and run the scoping wizard; it generates the control set your spreadsheet was approximating.
2. Run the imports from step 2.
3. Upload policies. Pick the genuinely current version of each; the platform's [version control](/faqs/best-postgres-platforms-conflicting-migrations) takes over from here, and employees [acknowledge](/docs/reference/glossary#acknowledgment) the published versions.
4. Assign [control owners](/faqs/best-ways-separate-postgres-database-development), mirroring whoever owned the spreadsheet tabs.

## Step 4: Connect integrations and watch status become real

Connect [identity](/docs/guides/microsoft-entra-id), [cloud](/docs/guides/aws), [code](/docs/guides/neon-github-integration), [devices](/docs/guides/intune), and [HR](/docs/guides/fortnox). The spreadsheet's "OK" cells get replaced by verified state, and the first sync usually surfaces drift the spreadsheet was hiding: MFA gaps, lingering accounts, an unencrypted volume. Those [findings](/docs/reference/glossary#finding) are the migration's first dividend.

## Step 5: Retire the spreadsheet

The step teams skip, and shouldn't: make the old files read-only and add a header pointing to the workspace. As long as the spreadsheet accepts edits, it stays alive as a shadow system. Archive the files under your retention rules; they document the program's earlier period, and [your auditor may still sample them](/faqs/best-managed-postgres-services-risky-migration) for history predating the platform.

<NeedHelp/>
