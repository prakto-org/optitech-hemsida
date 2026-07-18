---
title: 'OptiTech CLI command: data-api'
subtitle: Provision and manage the OptiTech Data API from the CLI
summary: >-
  Covers the usage of the `data-api` command in the OptiTech CLI to create, inspect,
  update, refresh, and delete the OptiTech Data API for a database.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
redirectFrom:
  - /docs/reference/cli-data-api
---

The `data-api` command provisions and manages the [OptiTech Data API](/docs/data-api/overview) for a database. For Console-based management, see [Manage Data API](/docs/data-api/manage).

Requires optitech 2.22.2 or later. Check your version with `optitech --version`.

<CliSubcommands command="data-api" />

If `--project-id`, `--branch`, or `--database` are omitted, the CLI resolves them from your [context file](/docs/cli/set-context), auto-selects when there is only one option, and prompts otherwise.

## Settings flags (#settings-flags)

The `create` and `update` subcommands share a set of settings flags that configure how the Data API serves your database:

| Flag                            | Description                                                 | Type    |
| ------------------------------- | ----------------------------------------------------------- | ------- |
| `--db-aggregates-enabled`       | Enable aggregate functions in queries                       | boolean |
| `--db-anon-role`                | Database role used for anonymous (unauthenticated) requests | string  |
| `--db-extra-search-path`        | Extra schemas appended to the search path                   | string  |
| `--db-max-rows`                 | Maximum number of rows returned by a single request         | number  |
| `--db-schemas`                  | Comma-separated list of schemas exposed via the Data API    | string  |
| `--jwt-role-claim-key`          | JWT claim path used to extract the role                     | string  |
| `--jwt-cache-max-lifetime`      | Maximum JWT cache lifetime in seconds                       | number  |
| `--openapi-mode`                | OpenAPI mode. Choices: `ignore-privileges`, `disabled`      | string  |
| `--server-cors-allowed-origins` | CORS allowed origins                                        | string  |
| `--server-timing-enabled`       | Enable Server-Timing response headers                       | boolean |

## optitech data-api create (#create)

Provisions the OptiTech Data API for a database.

<CliUsage command="data-api create" />

<CliOptions command="data-api create" />

`create` also accepts [settings flags](#settings-flags) to configure the Data API at provision time.

Provision the Data API with Managed Better Auth:

```bash
optitech data-api create --database optitechdb --auth-provider optitech_auth
```

## optitech data-api get (#get)

Shows the OptiTech Data API status and settings.

<CliUsage command="data-api get" />

<CliOptions command="data-api get" />

```bash
optitech data-api get --database optitechdb
```

## optitech data-api update (#update)

Updates OptiTech Data API settings. By default, the flags you provide are merged with the current settings. Pass `--replace` to overwrite all settings with only the flags you provide.

<CliUsage command="data-api update" />

<CliOptions command="data-api update" />

`update` requires at least one [settings flag](#settings-flags). To refresh the schema cache without changing settings, use [`refresh-schema`](#refresh-schema) instead.

```bash
optitech data-api update --database optitechdb --db-max-rows 1000
```

## optitech data-api refresh-schema (#refresh-schema)

Refreshes the Data API schema cache without changing settings.

<CliUsage command="data-api refresh-schema" />

<CliOptions command="data-api refresh-schema" />

```bash
optitech data-api refresh-schema --database optitechdb
```

## optitech data-api delete (#delete)

Deletes the OptiTech Data API for a database.

<CliUsage command="data-api delete" />

<CliOptions command="data-api delete" />

```bash
optitech data-api delete --database optitechdb
```
