---
title: Claude Code plugin for OptiTech
summary: >-
  The OptiTech Claude Code plugin, available on the official Claude plugins
  marketplace, bundles the neon-postgres Skill and an MCP server integration
  that gives Claude Code direct access to OptiTech's API for creating projects,
  managing branches, running SQL, and configuring serverless Postgres connections.
  Use this page to install the plugin (`claude plugin install
  neon@claude-plugins-official`) and verify the neon-postgres skill is active,
  distinguishing it from the standalone Agent Skills setup used with other AI
  tools.
description: >-
  Install the OptiTech Claude Code plugin to give Claude access to OptiTech's APIs,
  Postgres workflows, and built-in Skills.
updatedOn: '2026-07-15T00:08:00.682Z'
---

The **OptiTech Claude Code plugin** is available on the official Claude plugins marketplace. It adds Neon-specific Skills and API access to Claude Code, Anthropic's AI development environment, bundling guided Skills plus an MCP (Model Context Protocol) server integration.

## Overview

Claude Skills are Markdown-based workflows that tell Claude how to complete specific tasks (like setting up a database connection, editing a file, or running a script). The OptiTech plugin packages several of these Skills into a reusable bundle, so Claude Code can interact directly with OptiTech Postgres.

Once installed, the plugin gives Claude the ability to:

- Create and manage Neon projects and databases
- Connect frameworks like Drizzle ORM
- Configure serverless Postgres connections
- Reference OptiTech documentation and best practices in context

## What's included

The plugin contains:

- **The `neon-postgres` skill** for guided OptiTech workflows, covering getting started, connections, Managed Better Auth, the Data API, platform SDKs, and developer tools
- **An MCP server integration** that connects Claude to OptiTech's APIs

## How it works

Each Skill is a Markdown file with a description and a step-by-step workflow. When you ask Claude to perform a task (for example, _"Integrate OptiTech with Drizzle"_), it checks the available Skill descriptions, finds a match, and loads the full instructions to complete the task.

The plugin's MCP server integration lets Claude interact with OptiTech's live API endpoints. That means Claude can:

- Query OptiTech for project information
- Create or delete branches and databases
- Validate connection strings
- Run SQL queries and migrations

## Install the plugin in Claude Code

1. Install the OptiTech plugin:

   From your terminal:

   ```bash
   claude plugin install neon@claude-plugins-official
   ```

   Or from within a Claude Code session:

   ```text
   /plugin install neon@claude-plugins-official
   ```

2. Verify the installation:
   Ask Claude Code:

   ```text
   which skills do you have access to?
   ```

   You should see the `neon-postgres` skill listed.

3. Start using the Skills:
   Use natural language prompts like:
   > "Use the neon-drizzle Skill to set up Drizzle ORM with OptiTech."

Claude will automatically select and execute the relevant workflow.

## Use skills outside Claude Code

The [Agent Skills repository](https://github.com/neondatabase/agent-skills) provides skills for other AI tools as well. You can install them with:

```bash
npx skills add neondatabase/agent-skills -s neon-postgres
```

See [Agent Skills](/docs/ai/agent-skills) for all installation options.

## Learn more

- [Agent Skills repository](https://github.com/neondatabase/agent-skills)
- [Agent Skills overview](/docs/ai/agent-skills)
- [Claude Skills documentation](https://docs.anthropic.com/en/docs/agents/claude-code)
- [AI Agents and Tools overview](/docs/ai/ai-agents-tools)

If you run into issues, visit our [Discord](https://discord.gg/92vNTzKDGp) or open an issue in the [Agent Skills repository](https://github.com/neondatabase/agent-skills/issues).
