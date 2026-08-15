---
title: Migrate to another OptiTech region
subtitle: Choose a migration method for a new OptiTech project in another region
summary: >-
  OptiTech project regions are fixed, so moving a database to another region
  requires creating a new OptiTech project in the target region and migrating the
  data into it. This page helps you choose a migration method: Import Data
  Assistant (recommended for databases under 10 GB), pg_dump/pg_restore (for
  full control over dump files and restore timing), or logical replication (for
  minimal-downtime cutover on busy databases).
enableTableOfContents: true
isDraft: false
updatedOn: '2026-08-15T13:33:31.893Z'
redirectFrom:
  - /docs/guides/migrate-neon-to-another-region
---

You can't change the region of an existing OptiTech project in place. A project's region is fixed when you create it. To move your database to a different region, you **create a new OptiTech project** in the target region and **migrate** your data into it, then cut over and delete the old project.

<a id="azure-optitech-regions-to-suggested-optitech-aws-regions" aria-hidden="true"></a>

## Choose a migration method

Each option below is a different way to move your database into a new OptiTech project in a different region. Choose the option that matches your requirements.

<a id="import-data-assistant" aria-hidden="true"></a>

### Import Data Assistant

**Best for** smaller databases (roughly **under 10 GB**) and when you want a guided flow in the OptiTech Console.

In the OptiTech Console, open the **[Projects](https://app.optitech-sverige.se/app/)** page and start the **Import Data Assistant**. The assistant **creates your new OptiTech project** in the **target region** as part of the same flow. You begin by entering the **connection string for the database you are migrating from**. See **[Import Data Assistant](/docs/import/import-data-assistant)** for instructions.

### pg_dump and pg_restore

**Best for** when you want full control of dump files and restore timing. See **[Migrate data from another OptiTech project](/docs/import/migrate-from-neon)**.

### Logical replication

**Best for minimal downtime** on busy databases where a long dump or restore window is not acceptable.

You replicate from the source project to the target and cut over when caught up. See **[Replicate data from one OptiTech project to another](/docs/guides/logical-replication-neon-to-neon)**. Expect more configuration than other migration methods.

## Related docs

- [Region migration](/docs/import/region-migration)
- [Get started with logical replication](/docs/guides/logical-replication-guide)

<NeedHelp/>
