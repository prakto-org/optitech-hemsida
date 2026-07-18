---
title: Import data from CSV
summary: >-
  Loading CSV data into OptiTech uses the import assistant to stream rows from
  a local file into your risk register, vendor register, or control list. Use
  this page when you need to bulk-load register data without connecting a
  source system. Column headers map to register fields; the import returns a
  row count and a list of anything it couldn't match.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

To import register data from a CSV file into OptiTech, prepare a file whose columns match the target register, then upload it through the import assistant. The assistant proposes a column mapping that you review before anything is created, so a half-matching export is fine as a starting point. This topic walks through the process with a simple example.

<Admonition type="note" title="CSV works for registers, not for documents">
CSV import covers the three registers: risks, vendors, and controls. Policies and plans are documents; import them through the [document import](/docs/import/migrate-from-spreadsheets) instead. Excel files (`.xlsx`) work the same way as CSV in every step below. Save files as UTF-8 so Swedish characters survive the trip.
</Admonition>

The following example imports a vendor list from a file named `vendors.csv` into the vendor register.

<Steps>

## Prepare the CSV file

Prepare a `vendors.csv` file with a header row. Column names don't have to match OptiTech's field names exactly; the mapping step handles variations.

```text
Name,Contact,Service,Risk level,Contract end
Example IT Drift AB,dana.smith@example.com,Managed IT operations,High,2027-03-31
Example Lön AB,alex.lopez@example.com,Payroll processing,Medium,2026-12-31
```

For a risk register, typical columns are name, description, likelihood, impact, owner, and treatment plan. For controls: name, description, owner, and framework reference if you have one.

## Upload to the import assistant

In the Console, open **Settings**, then **Import**, choose **CSV or Excel**, and select the target register: risks, vendors, or controls. Upload the file.

## Review the column mapping

The assistant proposes which CSV column maps to which register field and shows a preview of the first rows. Fix anything it guessed wrong, and choose what happens with unmapped columns: import as a note field, or skip.

## Confirm and verify

Confirm the import. The assistant reports the number of rows created:

```text
Imported 2 vendors, 0 skipped
```

Rows it couldn't parse land in a review list instead of failing silently, so nothing disappears. Open the register and spot-check a few entries, then assign owners to anything imported without one.

</Steps>

<NeedHelp/>
