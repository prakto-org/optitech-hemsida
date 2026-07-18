---
title: 'OptiTech CLI command: deploy'
subtitle: 'Apply a optitech.ts policy to a branch'
summary: >-
  The OptiTech CLI `optitech deploy` command applies a optitech.ts policy to a branch. It
  is a top-level alias of `optitech config apply` with the same options, so you can
  reconcile a branch without the `config` prefix.
enableTableOfContents: true
---

The `deploy` command applies a `optitech.ts` policy to a branch. It is a top-level alias of [`optitech config apply`](/docs/cli/config#apply), with the same options.

<CliUsage command="deploy" />

<CliOptions command="deploy" />

For non-interactive use (scripts, CI, agents), pass `--update-existing` and `--allow-protected` to auto-confirm the corresponding prompts.

```bash
optitech deploy --branch feature/auth --update-existing
```
