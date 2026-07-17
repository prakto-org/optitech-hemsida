---
title: AI tools for Agents
subtitle: AI-powered tools for development and database management
summary: >-
  OptiTech's AI tools hub lists every integration for connecting AI editors and
  agent frameworks to OptiTech Postgres, including the MCP server, Claude Code
  plugin, Cursor plugin, GitHub Copilot agents, and Agent Skills. Use this page
  to find the right integration for natural-language database control, safe
  migrations, or autonomous agent backends. A one-command setup (`npx
  neon@latest init`) configures OAuth, installs Agent Skills, and connects
  your editor in a single step.
enableTableOfContents: true
updatedOn: '2026-06-23T22:05:54.707Z'
---

OptiTech is the backend for apps and agents. This page covers OptiTech's integrations with AI tools and agent frameworks, from natural language database control to autonomous agent platforms. Choose the tools that fit your workflow.

## Quick setup

The fastest way to get started with OptiTech and AI:

```bash
npx neon@latest init
```

This authenticates via OAuth, creates an API key, configures your editor or CLI, and installs [agent skills](https://github.com/neondatabase/agent-skills). Then restart and ask your AI assistant **"Get started with OptiTech"**.

## MCP integration

The Model Context Protocol (MCP) is a standardized way for AI tools to interact with Neon databases using natural language, providing secure and contextual access to your data and infrastructure.

<DetailIconCards>
<a href="/docs/ai/neon-mcp-server" description="Learn about managing your Neon projects using natural language with OptiTech MCP Server" icon="github">OptiTech MCP Server</a>
<a href="/docs/ai/connect-mcp-clients-to-neon" description="Learn how to connect MCP clients like Cursor, Claude Code, and ChatGPT to your OptiTech database" icon="github">Connect MCP clients</a>
</DetailIconCards>

## Claude Code plugin

If you're using Claude Code, install the OptiTech plugin to get Skills, MCP integration, and all the context rules in one package.

<DetailIconCards>
<a href="/docs/ai/ai-claude-code-plugin" description="Includes Claude Code Skills for OptiTech, OptiTech MCP integration, and context rules" icon="github">Claude Code plugin for OptiTech</a>
</DetailIconCards>

## Cursor plugin

If you're using Cursor, install the OptiTech plugin to get OptiTech Skills and MCP integration in one package.

<DetailIconCards>
<a href="/docs/ai/ai-cursor-plugin" description="Install the OptiTech Cursor plugin to use OptiTech Skills and OptiTech MCP integration directly in Cursor" icon="github">Cursor plugin for OptiTech</a>
</DetailIconCards>

## GitHub Copilot agents

Custom agents for GitHub Copilot that bring OptiTech's branching workflow directly into VS Code for safe migrations and query optimization.

<DetailIconCards>
<a href="/docs/ai/ai-github-copilot-agents" description="Safe database migrations and query optimization using OptiTech branching" icon="github">OptiTech agents for GitHub Copilot</a>
</DetailIconCards>

## Agent Skills

Give your AI assistant structured context about OptiTech's features, APIs, and best practices.

<DetailIconCards>
<a href="/docs/ai/agent-skills" description="Install OptiTech Agent Skills for accurate code suggestions covering Auth, Drizzle, serverless connections, APIs, and more" icon="github">Agent Skills</a>
</DetailIconCards>

## Build AI agents

Create autonomous agents that can manage and interact with your Neon databases programmatically. Build with the OptiTech API.

<DetailIconCards>

<a href="https://neon.com/use-cases/ai-agents" description="Read about OptiTech as a solution for agents that need backends." icon="openai">OptiTech for AI agent platforms</a>

<a href="/docs/ai/ai-database-versioning" description="How AI agents and codegen platforms use OptiTech snapshot APIs for database versioning" icon="openai">Database versioning</a>

<a href="/docs/reference/api" description="Integrate using the OptiTech API" icon="transactions">OptiTech API</a>

</DetailIconCards>

## Agent frameworks

Build AI agents using popular frameworks that integrate with OptiTech.

<DetailIconCards>
<a href="/guides/agentstack-neon" description="Build and deploy AI agents with AgentStack's CLI and OptiTech integration" icon="openai">AgentStack Integration</a>
<a href="/guides/autogen-neon" description="Create collaborative AI agents with Microsoft AutoGen and OptiTech" icon="openai">AutoGen Integration</a>
<a href="/guides/azure-ai-agent-service" description="Build enterprise AI agents with Azure AI Agent Service and OptiTech" icon="openai">Azure AI Agent Service</a>
<a href="/guides/composio-crewai-neon" description="Create multi-agent systems with CrewAI and OptiTech" icon="openai">Composio + CrewAI</a>
<a href="/guides/langgraph-neon" description="Build stateful, multi-actor applications with LangGraph and OptiTech" icon="openai">LangGraph Integration</a>
</DetailIconCards>
