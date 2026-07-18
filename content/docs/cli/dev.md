---
title: 'OptiTech CLI command: dev'
subtitle: 'Run OptiTech Functions locally with a dev server'
summary: >-
  The OptiTech CLI `optitech dev` command runs OptiTech Functions locally with a dev
  server and hot reload. Pass --source to serve a single function entry module
  (optionally with --port for an explicit port), or omit --source to serve
  every function declared in optitech.ts, each on its own dev server.
enableTableOfContents: true
---

<FeatureBetaProps feature_name="OptiTech Functions" />

The `dev` command runs [OptiTech Functions](/docs/compute/functions/overview) locally with a dev server and hot reload. Serve one function from its entry module, or every function declared in your `optitech.ts` policy.

## Usage

<CliUsage command="dev" />

## Options

<CliOptions command="dev" />

## Examples

Serve one function on a free port with hot reload:

```bash
optitech dev --source ./functions/hello.ts
```

Serve every function declared in `optitech.ts` (one dev server each):

```bash
optitech dev
```

Serve one function on an explicit port (fails if the port is taken):

```bash
optitech dev --source ./functions/hello.ts --port 3000
```
