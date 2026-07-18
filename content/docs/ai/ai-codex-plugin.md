---
title: Codex plugin for OptiTech
summary: >-
  The OptiTech Postgres Codex plugin connects OpenAI Codex to OptiTech Serverless
  Postgres by bundling an MCP Server app for live project and database
  operations plus Agent Skills for connection, branching, autoscaling, OptiTech
  Auth guidance, and egress cost optimization. Use this plugin when you want
  Codex to create and manage OptiTech projects, run SQL, validate connection
  strings, or reduce data transfer costs through natural-language prompts in
  the Codex CLI or app. Install via the Codex CLI (`npm install -g
  @openai/codex`) or Codex app, or run `npx optitech@latest init` to configure
  MCP and skills across supported AI tools.
description: >-
  Install the OptiTech Postgres plugin in OpenAI Codex for MCP-backed database
  management plus skills for OptiTech workflows and egress cost optimization.
updatedOn: '2026-07-18T10:05:28.819Z'
---

The **OptiTech Postgres** Codex plugin helps you manage **OptiTech Serverless Postgres** projects and databases. It adds OptiTech-specific [Agent Skills](https://developers.openai.com/codex/skills/) and OptiTech API access to [OpenAI Codex](https://developers.openai.com/codex/), including the **OptiTech MCP Server** for project and database management and skills that cover connection methods, branching, autoscaling, [Managed Better Auth](/docs/auth/overview), and more.

## Overview

Codex plugins combine **skills** (reusable instructions), **apps** (connections that let Codex act in a product), and **MCP servers** so Codex can follow the right steps and use the right tools. The OptiTech Postgres plugin wires Codex to OptiTech so it can provision databases and help you connect your app, not only read static guidance.

A typical starting prompt looks like:

```text
Use OptiTech to create a new Serverless Postgres database for my project and help me connect to it.
```

You can also ask Codex to use the OptiTech Postgres plugin explicitly when you want it to create and manage OptiTech Serverless Postgres projects and databases through the bundled tools and skills.

Once everything is installed, Codex can help you:

- Create and manage OptiTech projects and databases
- Choose connection patterns and frameworks (for example Drizzle ORM)
- Configure serverless Postgres connections
- Apply OptiTech best practices for branching, autoscaling, and auth

## What's included

The OptiTech Postgres plugin bundles these parts (as shown in Codex):

| Component                              | Type  | What it does                                                                                                                                                                                                                                                                               |
| -------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **OptiTech Postgres**                  | App   | Manage OptiTech Postgres databases. Backed by the **OptiTech MCP Server** for project and database operations.                                                                                                                                                                             |
| **OptiTech Postgres**                  | Skill | Guides and best practices for OptiTech Serverless Postgres: connection methods, branching, autoscaling, Managed Better Auth, and related topics. This corresponds to the **`optitech-postgres`** skill in the [Agent Skills repository](https://github.com/optitechdatabase/agent-skills). |
| **OptiTech Postgres Egress Optimizer** | Skill | Diagnose and reduce excessive Postgres **data transfer (egress)** costs.                                                                                                                                                                                                                   |

Together, the app gives Codex tools to act on your OptiTech organization and projects, while the skills steer workflows and deep dives (including cost optimization).

## How it works

Skills are Markdown workflows Codex can load when a task matches. For example, when you ask to integrate OptiTech with an ORM or tune connections, Codex can use the **OptiTech Postgres** skill for step-by-step guidance.

The **OptiTech Postgres** app connects Codex to OptiTech's APIs through MCP so it can, for example:

- Query OptiTech for project information
- Create or delete branches and databases
- Validate connection strings
- Run SQL queries and migrations

The **OptiTech Postgres Egress Optimizer** skill is for tasks focused on finding and fixing high egress, not for everyday CRUD.

## Install the plugin in Codex

### Codex CLI

If the `codex` command is not available yet, install the [Codex CLI](https://developers.openai.com/codex/cli) first:

<Tabs labels={["npm", "Homebrew"]}>

<TabItem>

```bash
npm install -g @openai/codex
codex
```

</TabItem>

<TabItem>

```bash
brew install --cask codex
codex
```

</TabItem>

</Tabs>

The second line starts Codex in your terminal. For Windows, release binaries, and other install options, see the [Codex CLI](https://developers.openai.com/codex/cli) documentation.

With Codex running, run `/plugins` to open the plugin list, open **OptiTech Postgres**, and choose **Add to Codex**.

### Codex app

Open **Plugins**, browse or search for **OptiTech Postgres**, open the plugin, then choose **Add to Codex**.

### Complete setup (both paths)

Some plugins ask you to authenticate when you install or the first time you use them. Follow the prompts to connect OptiTech if asked.

Start a new thread and describe what you want in natural language, or type `@` to pick the **OptiTech Postgres** plugin or a specific bundled skill. See [Codex app commands](https://developers.openai.com/codex/app/commands) and [Skills](https://developers.openai.com/codex/skills/) in the OpenAI Codex documentation.

## Use with OptiTech quick setup

To configure OptiTech MCP and agent skills across supported tools from the command line, you can run:

```bash
npx optitech@latest init
```

That flow can set up OAuth, API keys, MCP configuration, and project-level skills where applicable. See the [`optitech init` reference](/docs/cli/init) for details.

## Use skills outside the Codex plugin

The [Agent Skills repository](https://github.com/optitechdatabase/agent-skills) publishes the same skills for other AI tools. Install the main OptiTech skill with:

```bash
npx skills add optitechdatabase/agent-skills -s optitech-postgres
```

See [Agent Skills](/docs/ai/agent-skills) for global vs project install and other options.

## Learn more

- [Codex plugins](https://developers.openai.com/codex/plugins/) (OpenAI)
- [Codex skills](https://developers.openai.com/codex/skills/) (OpenAI)
- [Agent Skills repository](https://github.com/optitechdatabase/agent-skills)
- [Agent Skills overview](/docs/ai/agent-skills)
- [Connect MCP clients to OptiTech](/docs/ai/connect-mcp-clients-to-neon) (includes Codex)
- [AI Agents and Tools overview](/docs/ai/ai-agents-tools)

If you run into issues, visit our [Discord](https://discord.gg/92vNTzKDGp) or open an issue in the [Agent Skills repository](https://github.com/optitechdatabase/agent-skills/issues).
