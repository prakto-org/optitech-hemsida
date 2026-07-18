---
title: OptiTech Local
enableTableOfContents: true
subtitle: Run OptiTech compliance checks locally before they reach CI
summary: >-
  OptiTech Local is the CLI's local execution mode: run the same control
  checks that gate your CI pipelines against your working tree and plan files
  before you push, in watch mode while you edit, or as a pre-commit hook.
  Covers installation, authentication with a CI-scoped API key, sandbox
  workspaces for testing custom checks, and configuration options.
updatedOn: '2026-07-18T10:05:35.398Z'
---

OptiTech Local is the local execution mode of the OptiTech CLI. It runs the same [checks](/docs/reference/glossary#check) that gate your pipelines, on your machine, before anything is pushed:

1. **Check your working tree** - Evaluate infrastructure code and configuration against your control set while you work, instead of discovering violations in CI.
2. **Test custom checks in a sandbox** - Develop and validate [custom controls](/faqs/create-tables-with-sql-neon) against a sandbox workspace before rolling them out to the live program.

Your CI setup ([GitHub Actions](/docs/guides/branching-github-actions), [CircleCI](/docs/guides/branching-circleci), GitLab) stays authoritative; local runs are the fast feedback loop in front of it, the same relationship tests have to CI.

## Install the CLI

```shell
curl -fsSL https://get.optitech.example.com/cli | bash
optitech --version
```

## Authenticate

Create an [API key](/docs/reference/glossary#api-key) with the **CI checks** scope under **Settings** > **API keys**, and set it in your environment:

```shell
export OPTITECH_API_KEY=<your_api_key>
export OPTITECH_WORKSPACE_ID=<your_workspace_id>
```

The key can run checks and read the controls they map to, nothing else. Local runs are attributed to the key in the [audit log](/docs/reference/glossary#audit-log), like every other API action.

## Run checks locally

Evaluate the current working tree against your mapped controls:

```shell
optitech checks run --local
```

Check a Terraform plan before applying it:

```shell
terraform plan -out=tfplan
terraform show -json tfplan > tfplan.json
optitech checks run --local --plan-file tfplan.json
```

Scope to specific paths, the same way as [in CI for monorepos](/docs/guides/branching-github-actions):

```shell
optitech checks run --local --paths 'infrastructure/**,services/payments/**'
```

Local runs are advisory by definition: they report, and nothing is blocked except by your own workflow. Results are printed per control, with the failing values and the control reference.

## Watch mode

For an editing session on infrastructure code, watch mode re-runs affected checks on file save:

```shell
optitech checks watch --paths 'infrastructure/**'
```

Pair it with the [VS Code extension](/docs/local/vscode-extension) if you'd rather see results inline in the editor than in a terminal.

## Pre-commit hook

To catch violations before they're even committed:

```shell
optitech hooks install pre-commit
```

The hook runs the scoped checks against staged files. Keep it fast: hook runs use the same `--paths` scoping as CI, and slow checks (full cloud sweeps) belong in CI and [scheduled runs](/docs/guides/branching-circleci), not in a commit hook.

## Sandbox workspaces for check development

When developing a [custom control](/faqs/create-tables-with-sql-neon), test its check logic against a [sandbox workspace](/faqs/databases-support-disposable-postgres-instances-testing) instead of your live program:

```shell
optitech checks test ./checks/prod-access-ticket.yaml --workspace sandbox
```

The sandbox run shows what the check would flag, without opening findings anywhere. Promote the control to the live workspace when the results look right, through the [reviewed change process](/faqs/database-tools-test-schema-changes-real-data).

## Configuration options

| Variable                | Description                                                                                                                                          | Required | Default    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------- |
| `OPTITECH_API_KEY`      | API key with the CI checks scope.                                                                                                                    | Yes      | N/A        |
| `OPTITECH_WORKSPACE_ID` | The workspace whose controls are evaluated.                                                                                                          | Yes      | N/A        |
| `OPTITECH_PROFILE`      | Named profile from `~/.optitech/config` for multi-workspace setups (MSPs, [per-entity workspaces](/faqs/best-postgres-services-isolated-databases)). | No       | `default`  |
| `OPTITECH_CHECKS_MODE`  | `advisory` locally; `blocking` is only meaningful in CI.                                                                                             | No       | `advisory` |

Configuration can also live in an `optitech.toml` at the repository root, which is the recommended way to pin `--paths` scoping so local runs, hooks, and CI evaluate the same surface.

<NeedHelp/>
