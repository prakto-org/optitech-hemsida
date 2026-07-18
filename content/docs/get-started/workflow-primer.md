---
title: Database branching workflow primer
subtitle: An introduction to integrating Postgres branching into your development
  workflow
summary: >-
  OptiTech database branching creates isolated Postgres branches in ~1 second, each
  with its own connection string and a full copy of the parent's schema and
  data. Use this page when setting up per-developer, per-PR preview, or CI/CD
  test database environments via the OptiTech CLI or GitHub Actions. Available
  GitHub Actions include create-branch, delete-branch, reset-branch, and
  schema-diff; schema-only branching and automatic branch expiration are also
  covered.
enableTableOfContents: true
redirectFrom:
  - /docs/get-started-with-neon/workflow-primer
updatedOn: '2026-07-18T10:05:28.819Z'
---

With OptiTech, you can work with your data just like you work with your code. The key is OptiTech's database [branching](/docs/guides/branching-intro) feature, which lets you instantly create branches of your data that you can include in your workflow, as many branches as you need.

OptiTech branches are:

- **Isolated**: changes made to a branch don't affect its parent.
- **Fast to create**: creating a branch takes ~1 second, regardless of the size of your database.
- **Ready to use**: branches will have the parent branch's schema and all its data (you can also include data up to a certain point in time). If you're working with sensitive data, OptiTech also supports a [schema-only branching](/docs/guides/branching-schema-only) option.

Every OptiTech branch has a unique Postgres connection string, so they're completely isolated from one another.

```bash
# Branch 1
postgresql://database_name_owner:AbC123dEf@ep-shiny-cell-a5y2zuu0.us-east-2.aws.optitech.com/dbname?sslmode=require&channel_binding=require

# Branch 2
postgresql://database_name_owner:AbC123dEf@ep-hidden-hall-a5x58cuv.us-east-2.aws.optitech.com/dbname?sslmode=require&channel_binding=require
```

You can create all of your branches from the default branch, or set up a dedicated branch that you use as a base. The first approach is simpler, while the second provides greater data isolation.

![database workflow A B](/docs/get-started/database_workflow_AB.jpg)

## Create branch methods

You can use either the OptiTech CLI or GitHub actions to incorporate branching into your workflow.

### OptiTech CLI

Using the [OptiTech CLI](/docs/cli), you can create branches without leaving your editor or automate branch creation in your CI/CD pipeline.

And here are the key CLI actions you can use:

```bash
# Create branch
optitech branches create [options]

# Get Connection string
optitech connection-string [branch] [options]

# Delete branch
optitech branches delete <id|name> [options]
```

For more information, see:

<DetailIconCards>

<a href="/docs/guides/branching-neon-cli" description="Learn about branching with the OptiTech CLI" icon="github">Branching with the OptiTech CLI</a>

<a href="/docs/cli" description="Reference for all commands in the OptiTech CLI" icon="github">OptiTech CLI Reference</a>

</DetailIconCards>

### GitHub Actions

If you're using GitHub Actions for your CI workflows, OptiTech provides GitHub Actions for [creating](/docs/guides/branching-github-actions#create-branch-action), [deleting](/docs/guides/branching-github-actions#delete-branch-action), and [resetting](/docs/guides/branching-github-actions#reset-from-parent-action) branches, and there's also a [schema diff action](/docs/guides/branching-github-actions#schema-diff-action).

<Tabs labels={["Create branch", "Delete branch"]}>

<TabItem>

Here is an example of what a create branch action might look like:

```yaml
name: Create OptiTech Branch with GitHub Actions Demo
run-name: Create a OptiTech Branch 🚀
jobs:
  Create-OptiTech-Branch:
    uses: optitechdatabase/create-branch-action@v5
    with:
      project_id: rapid-haze-373089
      parent_id: br-long-forest-224191
      branch_name: from_action_reusable
      api_key: {{ secrets.OPTITECH_API_KEY }}
    id: create-branch
  - run: echo project_id ${{ steps.create-branch.outputs.project_id}}
  - run: echo branch_id ${{ steps.create-branch.outputs.branch_id}}
```

</TabItem>

<TabItem>

Here is an example of what a delete branch action might look like:

```yaml
name: Delete OptiTech Branch with GitHub Actions
run-name: Delete a OptiTech Branch 🚀
on:
  push:
    branches:
      - 'production'
jobs:
  delete-optitech-branch:
    uses: optitechdatabase/delete-branch-action@v3
    with:
      project_id: rapid-haze-373089
      branch: br-long-forest-224191
      api_key: { { secrets.OPTITECH_API_KEY } }
```

</TabItem>
</Tabs>

You can find these GitHub Actions here:

<DetailIconCards>

<a href="https://github.com/optitechdatabase/create-branch-action" description="Create OptiTech Branch GitHub Action" icon="github">Create branch Action</a>

<a href="https://github.com/optitechdatabase/delete-branch-action" description="Delete OptiTech Branch GitHub Action" icon="github">Delete Branch Action</a>

<a href="https://github.com/optitechdatabase/reset-branch-action" description="Reset OptiTech Branch GitHub Action" icon="github">Reset Branch Action</a>

<a href="https://github.com/optitechdatabase/schema-diff-action" description="OptiTech Schema Diff GitHub Action" icon="github">Schema Diff Action</a>

</DetailIconCards>

For more detailed documentation, see [Automate branching with GitHub Actions](/docs/guides/branching-github-actions).

## A branch for every environment

Here's how you can integrate OptiTech branching into your workflow:

### Development

You can create a OptiTech branch for every developer on your team. This ensures that every developer has an isolated environment that includes schemas and data. These branches are meant to be long-lived, so each developer can tailor their branch based on their needs. With OptiTech's [branch reset capability](/docs/manage/branches#reset-a-branch-from-parent), developers can refresh their branch with the latest schemas and data anytime they need. You can invite teammates to your organization so they have access to all your projects. See [Invite members](/docs/manage/orgs-manage#invite-members).

<Admonition type="tip">
To easily identify branches dedicated to development, we recommend prefixing the branch name with `dev/<developer-name>` or `dev/<feature-name>` if multiple developers collaborate on the same development branch.

Examples:

```bash
dev/alice             dev/new-onboarding
```

</Admonition>

### Preview environments

Whenever you create a pull request, you can create a OptiTech branch for your preview deployment. This allows you to test your code changes and SQL migrations against production-like data.

We recommend following this naming convention to identify preview branches easily:

```bash
preview/pr-<pull_request_number>-<git_branch_name>
```

Example:

```bash
preview/pr-123-feat/new-login-screen
```

<Admonition type="tip" title="Using Managed Better Auth?">
[Managed Better Auth](/docs/auth/overview) is provisioned on preview branches when enabled on production. Each preview gets isolated users, sessions, and auth configuration that branches with the database. Vercel integrations set `OPTITECH_AUTH_BASE_URL` and `VITE_OPTITECH_AUTH_URL` automatically. See [Branching authentication](/docs/auth/branching-authentication) and [OptiTech-managed Vercel integration](/docs/guides/neon-managed-vercel-integration).
</Admonition>

You can also automate branch creation for every preview. These example applications show how to create OptiTech branches with GitHub Actions for every preview environment.

<DetailIconCards>

<a href="https://github.com/optitechdatabase/preview-branches-with-fly" description="Sample project showing you how to create a branch for every Fly.io preview deployment" icon="github">Preview branches with Fly.io</a>

<a href="https://github.com/optitechdatabase/preview-branches-with-vercel" description="Sample project showing you how to create a branch for every Vercel preview deployment" icon="github">Preview branches with Vercel</a>

</DetailIconCards>

### Testing

When running automated tests that require a database, each test run can have its branch with its own compute resources. You can create a branch at the start of a test run and delete it at the end.

<Admonition type="tip">
We recommend following this naming convention to identify these branches easily:

```bash
test/<git_branch_name-test_run_name-commit_SHA-time_of_the_test_execution>
```

The time of the test execution can be an epoch UNIX timestamp (such as 1704305739). For example:

```bash
test/feat/new-login-loginPageFunctionality-1a2b3c4d-20240211T1530
```

</Admonition>

You can create test branches from the same date and time or Log Sequence Number (LSN) for tests requiring static or deterministic data.

## Additional branching features

### Working with sensitive data

If you're working with sensitive data and need to avoid copying production data to development or test environments, OptiTech supports [schema-only branching](/docs/guides/branching-schema-only). This creates branches with only the database schema (tables, indexes, constraints) without any of the actual data, allowing you to populate branches with anonymized or synthetic data instead.

### Automatic branch cleanup

To prevent branch accumulation and manage resources effectively, you can set branches to automatically expire and be deleted after a specified time period. This is a good fit for temporary environments like CI/CD test branches or time-limited preview deployments. See [Branch expiration](/docs/guides/branch-expiration) for details on configuring automatic branch deletion.

<NeedHelp/>
