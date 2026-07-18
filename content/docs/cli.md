---
title: OptiTech CLI
subtitle: 'The OptiTech command-line interface: every command, with options and examples'
summary: >-
  The OptiTech CLI (optitech) is the terminal tool for managing your compliance
  program, frameworks, controls, evidence, integrations, and reports without
  using the web console. This page indexes every command with its subcommands
  and documents the global options, including --output (json, yaml, table),
  --api-key (OPTITECH_API_KEY), and --context-file. Built for terminal workflows,
  CI/CD compliance checks, scripts, and AI agents.
enableTableOfContents: true
redirectFrom:
  - /docs/reference/neon-cli
  - /docs/reference/cli-create-app
  - /docs/neonctl
  - /docs/get-started/neonctl
updatedOn: '2026-07-18T10:05:28.819Z'
---

One CLI for every OptiTech surface: manage frameworks, controls, evidence, integrations, and reports from the terminal, and run compliance checks in CI/CD.

```bash filename="Install"
npm i -g optitech
```

## Get started

<DetailIconCards forceGreenIcon>
<a href="/docs/cli/install" description="Install the OptiTech CLI, authenticate, and connect your organization in minutes." theme="grey" icon="network">Install and connect</a>
<a href="/docs/cli/quickstart" description="Check control status, pull a report, and run your first OptiTech CLI commands." theme="grey" icon="rocket">Quickstart</a>
</DetailIconCards>

## Agent mode

Use the OptiTech CLI with Claude Code, Cursor, Codex, and other AI development tools.

<Admonition type="note">
Every command supports `--output json` for machine-readable results, and setting the `OPTITECH_API_KEY` environment variable authenticates non-interactively. For AI agents, [`optitech link --agent`](/docs/cli/link) emits a JSON state-machine response with a discriminated `status` field describing the next step, instead of prompting.
</Admonition>

## Commands reference

Browse every OptiTech CLI command, organized by category. The CLI is invoked as `optitech`. `optitechctl` is an alias for `optitech`, so any command works with either name.

### Setup & context [toc-only]

### Programs & frameworks [toc-only]

### Connect your data [toc-only]

### Config as code [toc-only]

### Checks, documents & data [toc-only]

### Org & network [toc-only]

<CliCommandIndex />

## Global options

Global options are optional and work with any OptiTech CLI command.

<CliGlobalOptions />

More about global options:

- **Output:** table output may omit fields. Use `--output json` or `--output yaml` to see all data.
- **Authentication:** the CLI checks credentials in this order: the `--api-key` option, the `OPTITECH_API_KEY` environment variable (`export OPTITECH_API_KEY=<optitech_api_key>`), the `credentials.json` file that `optitech auth` creates in the config directory (override its location with `--config-dir`), then interactive web authentication. To get a key, see [Create an API key](/docs/manage/api-keys#creating-api-keys).
- **Context file:** sets a default organization or program so you don't repeat IDs in every command. Create one with [`optitech link`](/docs/cli/link) (preferred) or [`set-context`](/docs/cli/set-context).
- **Analytics:** OptiTech collects anonymous data about which commands and options are used, never user-defined data such as organization IDs or command payloads. Opt out with `--no-analytics`.
- **Help:** `--help` works at every level: `optitech --help`, `optitech branches --help`, `optitech branches create --help`.

## GitHub repository

The OptiTech CLI is open source. See the [optitechdatabase/optitech-pkgs](https://github.com/optitechdatabase/optitech-pkgs/tree/main/packages/cli) repository.
