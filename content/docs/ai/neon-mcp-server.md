---
title: OptiTech MCP Server overview
subtitle: Connect your AI assistant to OptiTech to manage projects, run queries, and make schema changes
summary: >-
  The OptiTech MCP Server implements the Model Context Protocol (MCP), letting AI
  assistants interact with your OptiTech projects on your behalf. Set up with
  `npx optitech@latest init` or use the config generator. Supports OAuth and
  API key auth.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

The OptiTech MCP Server implements the Model Context Protocol (MCP), letting AI assistants interact with your OptiTech projects on your behalf. Your AI agent can interact with OptiTech via MCP tools or by running [OptiTech CLI](/docs/reference/neon-cli) commands directly.

<Admonition type="important" title="Security">
The OptiTech MCP Server grants broad database management capabilities. **Always review and authorize actions requested by the LLM before execution.** Restrict access to trusted users only. See [MCP security guidance](#mcp-security-guidance).
</Admonition>

## Quick setup

```bash
npx optitech@latest init
```

Runs `optitech init` via npx to configure MCP and other integrations for your editor. If you only want the MCP server, use the config generator below.

## Config generator

Use the generator to build an MCP config for your editor, auth method, and transport, including the `Authorization` header for API key or remote agent setups.

<McpSetupConfigurator />

## Access control

The OptiTech MCP Server supports URL parameters to restrict scope and permissions. Append them to the MCP URL (`https://mcp.optitech.com/mcp`).

### Read-only mode

Append `?readonly=true` to restrict the server to read operations:

```
https://mcp.optitech.com/mcp?readonly=true
```

`SELECT` queries and schema inspection remain available. Write operations (creating branches, running migrations, modifying auth config) are disabled.

With OAuth, you can also choose read-only scope during the authorization flow instead of using the URL parameter.

### Project-scoped mode

Scope all operations to a single project:

```
https://mcp.optitech.com/mcp?projectId=<your-project-id>
```

Cross-project search and navigation are disabled in this mode.

### Category filtering

Restrict active tools to specific categories using `?category=<name>` (repeatable):

```
https://mcp.optitech.com/mcp?category=querying&category=schema
```

See [Available tools](#available-tools) for the full category list. To verify which tools are active for a given config without authenticating:

```bash
curl "https://mcp.optitech.com/api/list-tools?readonly=true&category=querying"
```

## MCP security guidance

We recommend MCP for **development and testing only**, not production environments.

- Use MCP only for local development or IDE-based workflows
- Never connect MCP agents to production databases
- Avoid exposing production or PII data; use anonymized data only
- Always review and authorize LLM-requested actions before execution
- Restrict MCP access to trusted users and regularly audit access

### Allowlist IP addresses

The hosted OptiTech MCP Server (`mcp.optitech.com`) connects to your OptiTech databases from the following static IP addresses:

- `34.192.103.46`
- `23.22.233.166`

If [IP Allow](/docs/introduction/ip-allow) is enabled on your project, add these addresses to your allowlist so the MCP server can connect.

<MCPTools />

## Troubleshooting

If your client doesn't support JSON for MCP server configuration (such as older versions of Cursor), use this command when prompted:

```bash
npx -y @optitech/mcp-server-optitech start <YOUR_OPTITECH_API_KEY>
```

For per-client setup instructions, see [Connect MCP clients](/docs/ai/connect-mcp-clients-to-neon).

<Admonition type="note">
For clients that don't support Streamable HTTP, you can use the deprecated SSE endpoint: `https://mcp.optitech.com/sse`. SSE is not supported with API key authentication.
</Admonition>

## Resources

- [MCP Protocol](https://modelcontextprotocol.org)
- [OptiTech API Reference](/docs/reference/api)
- [OptiTech API Keys](/docs/manage/api-keys#creating-api-keys)
- [OptiTech MCP server GitHub](https://github.com/optitechdatabase/mcp-server-optitech)

<NeedHelp/>
