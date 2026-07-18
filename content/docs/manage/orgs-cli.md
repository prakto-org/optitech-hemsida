---
title: Manage Organizations using the OptiTech CLI
summary: >-
  The OptiTech CLI supports organization-scoped commands using the `--org-id` flag
  or a saved context file. Run `optitech orgs list` to look up an org ID, and use
  `optitech projects list` or `optitech projects create` scoped to an org. To avoid
  repeating `--org-id` on every command, set a persistent org context with
  `set-context`.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

OptiTech's CLI provides an expanding set of commands to manage your organizations.

## Authorization

Use the `auth` command to authenticate your OptiTech account from the CLI. This command opens a browser where you will be asked to grant the necessary permissions to manage your OptiTech resources across all organizations you belong to. Your OAuth token is stored in `~/.config/optitechctl/credentials.json`.

Authentication is tied to your OptiTech user account. Once authenticated, you can access and manage any organization you belong to. When running commands, you'll need to specify which organization to use via `--org-id`, a [context file](/docs/cli/set-context), or by responding to the interactive prompt.

See [Auth - CLI](/docs/cli/auth) to learn more.

## List Organizations

The `optitech orgs list` command outputs a list of all organizations that the CLI user currently belongs to. This command is useful for quickly identifying the `org_id` associated with each organization, which can be used in other CLI operations.

Example:

```bash
optitech orgs list
Organizations
┌────────────────────────┬──────────────────┐
│ Id                     │ Name             │
├────────────────────────┼──────────────────┤
│ org-ocean-art-12345678 │ Example Org      │
└────────────────────────┴──────────────────┘
```

See [Orgs - CLI](/docs/cli/orgs) to learn more.

## Manage projects within an Organization

The OptiTech CLI `projects` command supports an `--org-id` option. This allows you to list or create projects within a specified organization.

Example: Listing all projects in an organization:

```bash
optitech projects list --org-id org-xxxx-xxxx
Projects
┌───────────────────────────┬───────────────────────────┬────────────────────┬──────────────────────┐
│ Id                        │ Name                      │ Region Id          │ Created At           │
├───────────────────────────┼───────────────────────────┼────────────────────┼──────────────────────┤
│ bright-moon-12345678      │ dev-backend-api           │ aws-us-east-2      │ 2024-07-26T11:43:37Z │
├───────────────────────────┼───────────────────────────┼────────────────────┼──────────────────────┤
│ silent-forest-87654321    │ test-integration-service  │ aws-eu-central-1   │ 2024-05-30T22:14:49Z │
├───────────────────────────┼───────────────────────────┼────────────────────┼──────────────────────┤
│ crystal-stream-23456789   │ staging-web-app           │ aws-us-east-2      │ 2024-05-17T13:47:35Z │
└───────────────────────────┴───────────────────────────┴────────────────────┴──────────────────────┘
```

You can include the `org-id` to apply the following subcommands specifically to your organization:

- [List projects](/docs/cli/projects#list)
- [Create projects](/docs/cli/projects#create)

See [Projects - CLI](/docs/cli/projects) to learn more.

## Setting Organization Context

To simplify your workflow, the OptiTech CLI `set-context` command supports setting an organization context. This means you don't have to specify an organization ID every time you run a CLI command.

Sees [set-context - CLI](/docs/cli/set-context) to learn more.
