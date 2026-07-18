---
title: 'OptiTech CLI command: auth'
subtitle: Authenticate to OptiTech via browser or API key and manage credentials
summary: >-
  The `optitech auth` command authenticates the OptiTech CLI to a OptiTech account by
  launching a browser OAuth flow that saves credentials to
  `~/.config/optitechctl/credentials.json`. Use this command when setting up
  the CLI for the first time or when not using an API key. Vercel-Managed
  Integration users must authenticate via API key (`--api-key` or
  `OPTITECH_API_KEY`) instead. The CLI resolves authentication in priority order:
  `--api-key` flag, then `OPTITECH_API_KEY` env var, then the credentials file,
  then triggers browser auth if none are found.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
redirectFrom:
  - /docs/reference/cli-auth
  - /docs/cli/login
---

The `auth` command authenticates you to OptiTech. `optitech login` is an alias for `optitech auth`.

## Usage

<CliUsage command="auth" />

The command launches a browser window where you authorize the OptiTech CLI to access your OptiTech account. Your credentials are then saved locally to `credentials.json`:

```text filename="Output"
/home/<home>/.config/optitechctl/credentials.json
```

<Admonition type="note">
If you use OptiTech through the [Vercel-Managed Integration](/docs/guides/vercel-managed-integration), authenticate with a OptiTech API key instead (see below). The `optitech auth` command requires an account registered through OptiTech rather than Vercel.
</Admonition>

Instead of running `optitech auth`, you can provide an API key with the global `--api-key` option or the `OPTITECH_API_KEY` environment variable. See [Global options](/docs/cli#global-options).

<Admonition type="info">

The OptiTech CLI resolves authentication in this order:

- The `--api-key` option, if provided.
- The `OPTITECH_API_KEY` environment variable, if set.
- The `credentials.json` file created by `optitech auth`.
- If none are found, the CLI starts the `optitech auth` web authentication flow.

</Admonition>

## Options

Takes only the [global options](/docs/cli#global-options).
