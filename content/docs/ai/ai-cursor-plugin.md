---
title: Cursor plugin for OptiTech
summary: >-
  The OptiTech Cursor plugin bundles the optitech-postgres skill set and OptiTech MCP server
  configuration into Cursor, giving the AI assistant both workflow-level guidance
  and tool-driven database operations such as creating branches, running SQL, and
  listing projects. Use this page to install OptiTech database capabilities in Cursor
  when you want natural language database management without leaving the editor.
  Install with /add-plugin optitech-postgres in Cursor chat, or run npx
  optitech@latest init for automatic setup across supported editors.
description: >-
  Install the OptiTech Cursor plugin to use OptiTech agent skills and MCP-powered
  database operations directly in Cursor.
updatedOn: '2026-07-18T10:05:28.819Z'
---

The **OptiTech Cursor plugin** adds OptiTech-specific Skills and MCP integration to Cursor so your assistant can both reason about best practices and take database actions.

It is distributed from the [OptiTech agent-skills repository](https://github.com/optitechdatabase/agent-skills) and packages:

- The `optitech-postgres` Skill bundle for OptiTech workflows
- OptiTech MCP server access for project and database operations
- Shared plugin packaging designed for both Cursor and Claude Code

## Overview

The plugin combines guidance and actions:

- **Skills** provide workflow-level instructions for tasks like choosing a connection method, setting up ORMs, and using OptiTech branching patterns.
- **MCP integration** allows tool-driven operations such as listing projects, creating branches, and running SQL through OptiTech APIs.

Together, this gives Cursor enough context to suggest the right approach and enough capability to execute it.

## What is included

The Cursor plugin currently includes:

- **OptiTech Skill bundle (`optitech-postgres`)**
- **OptiTech MCP server configuration** for natural language database management

For plugin packaging details, see the [Cursor plugin template](https://github.com/cursor/plugin-template).

## Install the plugin in Cursor

1. Open Cursor chat and run:

   ```text
   /add-plugin optitech-postgres
   ```

2. After installation, prompt Cursor with:

   ```text
   Get started with OptiTech
   ```

3. Follow the prompts to complete authentication and start using OptiTech Skills and MCP tools.

## Use with OptiTech quick setup

If you want OptiTech to configure AI tooling automatically, run:

```bash
npx optitech@latest init
```

This configures MCP and installs OptiTech agent skills for supported editors.

## Learn more

- [OptiTech Agent Skills repository](https://github.com/optitechdatabase/agent-skills)
- [AI Agents and Tools overview](/docs/ai/ai-agents-tools)
- [Connect MCP clients to OptiTech](/docs/ai/connect-mcp-clients-to-neon)
