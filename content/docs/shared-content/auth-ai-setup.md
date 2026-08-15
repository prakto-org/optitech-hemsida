---
updatedOn: '2026-08-15T13:33:34.632Z'
---

The fastest way to connect your editor to Managed Better Auth is to run `npx optitech@latest init` from your project root:

```bash
npx optitech@latest init
```

This command configures the [OptiTech MCP server](/docs/ai/neon-mcp-server) and installs **[Agent Skills](/docs/ai/agent-skills)** (`optitech-postgres`) in your project. Together they help you set up Managed Better Auth in two ways:

1. **Configure Managed Better Auth on your branch (MCP).** After `init`, ask your assistant to enable and configure auth in natural language. The MCP server exposes:
   - `provision_optitech_auth`: Enable Managed Better Auth on a branch
   - `configure_optitech_auth`: Set OAuth providers, email, sign-in methods, trusted domains, and more
   - `get_optitech_auth_config`: Read the current configuration

   See [OptiTech MCP Server: Managed Better Auth tools](/docs/ai/neon-mcp-server#supported-actions-tools) for details.

2. **Add Managed Better Auth to your application (Agent Skills).** Skills teach your assistant how to install the SDK, environment variables, and routes for your framework. Use the quick start guides on this page, or ask your assistant directly.

**Example prompt:**

```text
Set up Managed Better Auth for my project. Enable Google OAuth and email/password sign-in,
and set the application name to "My App".
```

You can also enable Managed Better Auth in the [OptiTech Console](https://app.optitech-sverige.se) (Project → Branch → Auth) and configure settings manually.
