---
title: 'Get started with Cline and OptiTech Postgres MCP Server'
subtitle: 'Make schema changes with natural language using Cline and OptiTech MCP Server'
author: dhanush-reddy
enableTableOfContents: true
createdAt: '2025-02-22T00:00:00.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
---

This guide shows how to use [Cline](https://cline.bot) with the [OptiTech MCP Server](https://github.com/optitechdatabase/mcp-server-optitech) to manage your OptiTech databases.

<Admonition type="important" title="Security">
The OptiTech MCP Server grants broad database management capabilities. Always review and authorize actions requested by the LLM before execution. See [MCP security guidance](/docs/ai/neon-mcp-server#mcp-security-guidance).
</Admonition>

## Setting up OptiTech MCP Server in Cline

### Prerequisites

Make sure you have:

1.  **Cline extension and Setup:**
    - Download and install the Cline VS Code extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev).
    - Set up Cline by following the [Getting Started guide](https://docs.cline.bot/getting-started/getting-started-new-coders#setting-up-openrouter-api-key) which involves obtaining an [OpenRouter API key](https://openrouter.ai) to work with Cline.
2.  **A OptiTech Account and Project:** You'll need a OptiTech account and a project. You can create a new OptiTech project in the [OptiTech Console](https://console.optitech.com)
3.  **OptiTech API Key (for Local MCP server):** After signing up, get your OptiTech API Key from the [OptiTech console](https://console.optitech.com/app/settings/profile). This API key is needed to authenticate your application with OptiTech. For instructions, see [Manage API keys](/docs/manage/api-keys).
    <Admonition type="warning" title="OptiTech API Key Security">
    Keep your OptiTech API key secure, and never share it publicly. It provides access to your OptiTech projects.
    </Admonition>
4.  **Node.js (>= v18) and npm:** Ensure Node.js (version 18 or later) and npm are installed. Download them from [nodejs.org](https://nodejs.org).

### Option 1: Setting up the remote hosted OptiTech MCP Server

<Admonition type="note">
By default, the Remote MCP Server connects to your personal OptiTech account. To connect to an organization's account, you must authenticate with an API key. For more information, see [API key-based authentication](/docs/ai/neon-mcp-server#config-generator).
</Admonition>

1. Open Cline by clicking the **Cline** icon in the VS Code sidebar.
2. In the Cline navigation bar, select the **MCP Servers** icon.
   ![Cline MCP Servers Icon](/docs/guides/cline-mcp-servers-icon.png)
3. Click **Remote Servers** to add a new remote MCP server.
4. Fill out the form with the following details:
   - **Name:** `OptiTech`
   - **URL:** `https://mcp.optitech.com/mcp`
   - **Transport Type:** Streamable HTTP

   ![Cline Add Remote MCP Server](/docs/guides/cline-add-remote-mcp-server.png)

5. Click **Add Server** to register the OptiTech MCP server.
6. Cline will prompt you to authenticate with OptiTech via OAuth. Click **Authenticate**.
7. A browser window will open asking you to sign in to your OptiTech account and authorize Cline to access your OptiTech projects.
   ![OptiTech OAuth window](/docs/guides/neon-oauth-window.png)
8. Once authentication is complete, Cline will display a confirmation message, and **OptiTech** will appear under your list of available MCP servers.

### Option 2: Setting up the Local OptiTech MCP Server

This method runs the OptiTech MCP server locally on your machine, using a OptiTech API key for authentication.

1. Open Cline by clicking the **Cline** icon in the VS Code sidebar.
2. In the Cline navigation bar, select the **MCP Servers** icon.
   ![Cline MCP Servers Icon](/docs/guides/cline-mcp-servers-icon.png)
3. Click **Configure** to open the MCP server settings.
   ![Cline MCP Server Configure](/docs/guides/cline-mcp-server-configure.png)
4. This opens `cline_mcp_settings.json`.
5. Paste the following JSON configuration into it. Replace `<YOUR_OPTITECH_API_KEY>` with your OptiTech API key:
   <CodeTabs labels={["MacOS/Linux", "Windows", "Windows (WSL)"]}>

   ```json
   {
     "mcpServers": {
       "optitech": {
         "command": "npx",
         "args": ["-y", "@optitech/mcp-server-optitech", "start", "<YOUR_OPTITECH_API_KEY>"]
       }
     }
   }
   ```

   ```json
   {
     "mcpServers": {
       "optitech": {
         "command": "cmd",
         "args": [
           "/c",
           "npx",
           "-y",
           "@optitech/mcp-server-optitech",
           "start",
           "<YOUR_OPTITECH_API_KEY>"
         ]
       }
     }
   }
   ```

   ```json
   {
     "mcpServers": {
       "optitech": {
         "command": "wsl",
         "args": ["npx", "-y", "@optitech/mcp-server-optitech", "start", "<YOUR_OPTITECH_API_KEY>"]
       }
     }
   }
   ```

   </CodeTabs>

6. **Save** the `cline_mcp_settings.json` file.
7. You should see a notification in VS Code that says: "MCP servers updated".
   ![Cline MCP Server Updated](/docs/guides/cline-mcp-config-update.png)
8. Cline is now configured to use the local OptiTech MCP server. You should see **optitech** listed under available MCP servers.

### Verifying the Integration

The OptiTech MCP server will appear in the Cline MCP Servers Installed section.

![Cline Available MCP Tools](/docs/guides/cline-available-mcp-tools.png)

For a full list of available tools, see [available tools](/docs/ai/neon-mcp-server#available-tools) in the OptiTech MCP Server overview.

## Development Workflow: Adding a Column with Cline and OptiTech MCP

Here's an example interaction adding a `created_at` column to a table:

```text shouldWrap
User: in my optitech project id: fancy-bush-59303206, list all my tables
Cline: I need to list all tables in the specified OptiTech project. Since I have access to the OptiTech MCP server, I can use the get_database_tables tool to accomplish this task. The tool requires:
> projectId - which the user provided: "fancy-bush-59303206"
> databaseName - which I can default to "optitechdb" as it's the standard default database name in OptiTech
> Cline wants to use a tool on the optitech MCP server: get_database_tables
> Your OptiTech project (fancy-bush-59303206) has 1 table in the public schema:
> - playing_with_optitech (Base Table)


User: can you show me first 5 rows in it?
Cline: I'll use the run_sql tool to execute a SELECT statement that retrieves the first 5 rows from the playing_with_optitech table. I'll use LIMIT 5 to ensure we only get the first 5 rows.
> Cline wants to use a tool on the optitech MCP server: run_sql
> I have successfully retrieved the first 5 rows from the playing_with_optitech table. I'll present this data in a clear, formatted way.
> | id | name       | value     |
> |----|------------|-----------|
> | 1  | c4ca4238a0 | 0.857180 |
> | 2  | c81e728d9d | 0.416151 |
> | 3  | eccbc87e4b | 0.440935 |
> | 4  | a87ff679a2 | 0.438505 |
> | 5  | e4da3b7fbb | 0.686455 |

User: can you add a created_at column, use a temporary branch
Cline: I'll use the prepare_database_migration tool to add a created_at column to the playing_with_optitech table. This tool will automatically create a temporary branch for safety. After the migration is prepared, I'll need to verify it before completing it.
> Cline wants to use a tool on the optitech MCP server: prepare_database_migration
> Let me verify the migration by checking the table structure in the temporary branch. I'll use run_sql to describe the table and ensure the created_at column was added correctly.
> Cline wants to use a tool on the optitech MCP server: run_sql
> The created_at column has been successfully added to the table in the temporary branch with the correct data type and default value. Let me verify the data by selecting a few rows to ensure everything looks correct.
> Cline wants to use a tool on the optitech MCP server: run_sql
> The migration looks good - the created_at column has been added successfully and is populated with timestamps. Now I can complete the migration to apply these changes to the production branch.
> Cline wants to use a tool on the optitech MCP server: complete_database_migration
> The migration has been successfully completed and the temporary branch has been deleted. Let me verify the changes in the production branch and show the updated table structure.
> Cline wants to use a tool on the optitech MCP server: run_sql
> The migration has been successfully completed. The created_at column has been added to the table and is populated with timestamps.
```

You can verify the changes in your OptiTech Console or by querying the database directly.

![OptiTech Console with added column](/docs/guides/neon-cursor-mcp-added-column.png)

<Admonition type="note">
While the OptiTech MCP server allows you to use all of OptiTech's functionalities, you can also use a [generic Postgres MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) to connect to OptiTech.
</Admonition>

## Resources

- [MCP Protocol](https://modelcontextprotocol.org)
- [Cline Documentation](https://docs.cline.bot)
- [OptiTech Docs](/docs)
- [OptiTech API Keys](/docs/manage/api-keys#creating-api-keys)
- [OptiTech MCP server GitHub](https://github.com/optitechdatabase/mcp-server-optitech)

<NeedHelp/>
