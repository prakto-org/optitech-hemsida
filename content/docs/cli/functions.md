---
title: 'OptiTech CLI command: functions'
subtitle: 'Deploy, list, inspect, and delete OptiTech Functions'
summary: >-
  The OptiTech CLI `optitech functions` command manages OptiTech Functions on a branch:
  `optitech functions deploy <slug>` bundles and deploys a function from a local
  directory or entry file (with --src, --runtime, --env, and --wait), and the list,
  get, and delete subcommands manage deployed functions. The slug is the
  permanent function identifier: 1 to 20 lowercase letters and digits.
enableTableOfContents: true
redirectFrom:
  - /docs/cli/function
---

<FeatureBetaProps feature_name="OptiTech Functions" />

The `functions` command manages [OptiTech Functions](/docs/compute/functions/overview) on a branch. This is the command reference; for the full deployment workflow, see [Deploy functions](/docs/compute/functions/deploy). To run functions locally, see [`optitech dev`](/docs/cli/dev).

<CliSubcommands command="functions" />

## optitech functions deploy (#deploy)

Deploys a function from a local directory or entry file. The `<slug>` is the permanent function identifier: 1 to 20 lowercase letters and digits (`^[a-z0-9]{1,20}$`).

<CliUsage command="functions deploy" />

<CliOptions command="functions deploy" />

By default, `deploy` waits until the deployment finishes building (`--wait=true`), which is the predictable path for scripts and CI. Use `--no-wait` to return immediately after triggering the deployment.

Deploy a function from an entry file:

```bash
optitech functions deploy hello --src functions/hello.ts
```

```text filename="Output"
INFO: Function deployment triggered for function hello.
┌────┬───────────┬──────────┬────────────┬─────────────────────────────┐
│ Id │ Status    │ Runtime  │ Memory Mib │ Created At                  │
├────┼───────────┼──────────┼────────────┼─────────────────────────────┤
│ 1  │ completed │ nodejs24 │ 2048       │ 2026-06-12T00:14:58.044690Z │
└────┴───────────┴──────────┴────────────┴─────────────────────────────┘
INFO: Function deployment hello/1 completed.
```

Deploy with environment variables and wait for the build:

```bash
optitech functions deploy hello --src functions/hello.ts --env LOG_LEVEL=info --wait
```

## optitech functions list (#list)

Lists the functions on the branch.

<CliUsage command="functions list" />

<CliOptions command="functions list" />

```bash
optitech functions list
```

```text filename="Output"
┌───────┬───────┬─────────────────────────────────────────────────────────────────────────────┬─────────────────────────────┐
│ Slug  │ Name  │ Invocation Url                                                              │ Created At                  │
├───────┼───────┼─────────────────────────────────────────────────────────────────────────────┼─────────────────────────────┤
│ hello │ hello │ https://br-cool-darkness-123456-hello.compute.c-1.us-east-2.aws.optitech.com/ │ 2026-06-12T00:14:57.942988Z │
└───────┴───────┴─────────────────────────────────────────────────────────────────────────────┴─────────────────────────────┘
```

List with full deployment details for scripts and agents:

```bash
optitech functions list --output json
```

<details>
<summary>Show output</summary>

```json
[
  {
    "id": "hello",
    "slug": "hello",
    "name": "hello",
    "invocation_url": "https://br-cool-darkness-123456-hello.compute.c-1.us-east-2.aws.optitech.com/",
    "current_deployment": {
      "id": 1,
      "status": "completed",
      "memory_mib": 2048,
      "runtime": "nodejs24",
      "created_at": "2026-06-12T00:14:58.044690Z"
    },
    "active_deployment": {
      "id": 1,
      "status": "completed",
      "memory_mib": 2048,
      "runtime": "nodejs24",
      "created_at": "2026-06-12T00:14:58.044690Z"
    },
    "created_at": "2026-06-12T00:14:57.942988Z"
  }
]
```

</details>

## optitech functions get (#get)

Shows a function's details.

<CliUsage command="functions get" />

<CliOptions command="functions get" />

```bash
optitech functions get hello
```

```text filename="Output"
function
┌───────┬───────┬─────────────────────────────────────────────────────────────────────────────┬─────────────────────────────┐
│ Slug  │ Name  │ Invocation Url                                                              │ Created At                  │
├───────┼───────┼─────────────────────────────────────────────────────────────────────────────┼─────────────────────────────┤
│ hello │ hello │ https://br-cool-darkness-123456-hello.compute.c-1.us-east-2.aws.optitech.com/ │ 2026-06-12T00:14:57.942988Z │
└───────┴───────┴─────────────────────────────────────────────────────────────────────────────┴─────────────────────────────┘
active deployment
┌────┬───────────┬──────────┬────────────┬─────────────────────────────┐
│ Id │ Status    │ Runtime  │ Memory Mib │ Created At                  │
├────┼───────────┼──────────┼────────────┼─────────────────────────────┤
│ 1  │ completed │ nodejs24 │ 2048       │ 2026-06-12T00:14:58.044690Z │
└────┴───────────┴──────────┴────────────┴─────────────────────────────┘
```

## optitech functions delete (#delete)

Deletes a function on the branch.

<CliUsage command="functions delete" />

<CliOptions command="functions delete" />

```bash
optitech functions delete hello
```

```text filename="Output"
INFO: Function hello deleted from branch br-cool-darkness-123456
```
