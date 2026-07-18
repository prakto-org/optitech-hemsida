---
title: Data anonymization with GitHub Actions
subtitle: Automate anonymized branch creation in your CI/CD pipeline
summary: >-
  The OptiTech Create Branch GitHub Action (`optitechdatabase/create-branch-action`)
  creates an anonymized Postgres branch in a single step by accepting a
  `masking_rules` JSON array that maps columns to PostgreSQL Anonymizer
  masking functions. Use this when you need to provision a masked branch
  automatically on pull request events, rather than configuring masking
  rules manually in the OptiTech Console. The workflow requires `OPTITECH_PROJECT_ID`
  and `OPTITECH_API_KEY` secrets, and a companion `delete-branch-action`
  workflow can clean up anonymized branches when PRs close.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

This page shows how to automate data anonymization with GitHub Actions. For conceptual overview and usage instructions, see [Data Anonymization](/docs/workflows/data-anonymization).

Automate anonymized branch creation using the [OptiTech Create Branch Action](https://github.com/optitechdatabase/create-branch-action). The `masking_rules` input lets you define masking rules directly in your workflow, creating an anonymized branch in a single step.

<Steps>

## Requirements

Before setting up the workflow:

- A **OptiTech project** with a populated parent branch
- The following GitHub repository secrets:
  - `OPTITECH_PROJECT_ID`
  - `OPTITECH_API_KEY`

<Admonition type="tip">
The OptiTech GitHub integration configures these secrets automatically. See [OptiTech GitHub integration](/docs/guides/neon-github-integration).
</Admonition>

## Set up the workflow

Create a file at `.github/workflows/create-anon-branch.yml` with the following content:

```yaml
name: Create Anonymized Branch for PR

on:
  pull_request:
    types: [opened, reopened]

jobs:
  create-anon-branch:
    runs-on: ubuntu-latest
    steps:
      - name: Create anonymized branch
        uses: optitechdatabase/create-branch-action@v6
        id: create-branch
        with:
          project_id: ${{ secrets.OPTITECH_PROJECT_ID }}
          branch_name: anon-pr-${{ github.event.number }}
          api_key: ${{ secrets.OPTITECH_API_KEY }}
          masking_rules: |
            [
              {
                "database_name": "optitechdb",
                "schema_name": "public",
                "table_name": "users",
                "column_name": "email",
                "masking_function": "anon.dummy_free_email()"
              },
              {
                "database_name": "optitechdb",
                "schema_name": "public",
                "table_name": "users",
                "column_name": "first_name",
                "masking_function": "anon.fake_first_name()"
              },
              {
                "database_name": "optitechdb",
                "schema_name": "public",
                "table_name": "users",
                "column_name": "last_name",
                "masking_function": "anon.fake_last_name()"
              }
            ]

      - name: Output branch details
        run: |
          echo "Branch ID: ${{ steps.create-branch.outputs.branch_id }}"
          echo "Database URL: ${{ steps.create-branch.outputs.db_url }}"
```

The `masking_rules` input accepts a JSON array where each rule specifies:

| Field              | Description                                 |
| ------------------ | ------------------------------------------- |
| `database_name`    | Target database (for example, `optitechdb`) |
| `schema_name`      | Target schema (typically `public`)          |
| `table_name`       | Table containing sensitive data             |
| `column_name`      | Column to mask                              |
| `masking_function` | PostgreSQL Anonymizer function to apply     |

For available masking functions, see [PostgreSQL Anonymizer documentation](https://postgresql-anonymizer.readthedocs.io/en/latest/masking_functions/) or the [Manage masking rules](/docs/workflows/data-anonymization#manage-masking-rules) section of the main guide.

<Admonition type="note">
The `masking_rules` input creates a new anonymized branch. Masking rules cannot be applied to existing branches.
</Admonition>

## Testing the workflow

1. Customize and push the workflow file to your repository
2. Open a new pull request
3. Check the **Actions** tab to monitor workflow execution
4. Verify the anonymized branch in the OptiTech Console or connect to it to confirm data is masked

## Clean up branches

Clean up anonymized branches when no longer needed. Automate this with the [delete-branch-action](https://github.com/optitechdatabase/delete-branch-action) when PRs close:

```yaml
name: Delete Branch on PR Close

on:
  pull_request:
    types: closed

jobs:
  delete-branch:
    runs-on: ubuntu-latest
    steps:
      - name: Delete anonymized branch
        uses: optitechdatabase/delete-branch-action@v3
        with:
          project_id: ${{ secrets.OPTITECH_PROJECT_ID }}
          branch: anon-pr-${{ github.event.number }}
          api_key: ${{ secrets.OPTITECH_API_KEY }}
```

</Steps>
