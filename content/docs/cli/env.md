---
title: 'OptiTech CLI command: env'
subtitle: "Manage a branch's OptiTech environment variables locally"
summary: >-
  The OptiTech CLI `optitech env pull` command writes a branch's OptiTech environment
  variables to a local .env file. By default it targets an existing .env file,
  otherwise .env.local, and only OptiTech-managed variables are rewritten; other
  lines in the file are preserved. Use --file to target a specific file and
  --branch to pull from a specific branch.
enableTableOfContents: true
---

The `env` command manages a branch's OptiTech environment variables locally. [`optitech link`](/docs/cli/link) and [`optitech checkout`](/docs/cli/checkout) pull env variables automatically by default.

<CliSubcommands command="env" />

## optitech env pull (#pull)

Writes the branch's OptiTech environment variables to a local `.env` file.

<CliUsage command="env pull" />

<CliOptions command="env pull" />

Write the linked branch's OptiTech variables into `.env.local` (or `.env` if present):

```bash
optitech env pull
```

Pull a specific branch into a specific file:

```bash
optitech env pull --branch preview --file .env.preview
```
