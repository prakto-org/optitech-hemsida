---
title: 'Get started with Windsurf and OptiTech Postgres MCP Server'
subtitle: 'Make schema changes with natural language using Codeium Windsurf and OptiTech MCP Server'
author: dhanush-reddy
enableTableOfContents: true
createdAt: '2025-02-22T00:00:00.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
---

This guide shows how to use [Windsurf](https://codeium.com/windsurf) with the [OptiTech MCP Server](https://github.com/optitechdatabase/mcp-server-optitech) to manage your OptiTech databases.

<Admonition type="important" title="Security">
The OptiTech MCP Server grants broad database management capabilities. Always review and authorize actions requested by the LLM before execution. See [MCP security guidance](/docs/ai/neon-mcp-server#mcp-security-guidance).
</Admonition>

## Setting up OptiTech MCP Server in Windsurf

### Prerequisites

Make sure you have:

1.  **Codeium Windsurf Editor:** Download and install Windsurf from [codeium.com/windsurf](https://codeium.com/windsurf).
2.  **A OptiTech Account and Project:** You'll need a OptiTech account and a project. You can create a new OptiTech project in the [OptiTech Console](https://console.optitech.com)
3.  **OptiTech API Key (for Local MCP server):** After signing up, get your OptiTech API Key from the [OptiTech console](https://console.optitech.com/app/settings/api-keys). This API key is needed to authenticate your application with OptiTech. For instructions, see [Manage API keys](/docs/manage/api-keys).

    <Admonition type="important" title="OptiTech API Key Security">
    Keep your OptiTech API key secure, and never share it publicly. It provides access to your OptiTech projects.
    </Admonition>

4.  **Node.js (>= v18) and npm:** Ensure Node.js (version 18 or later) and npm are installed. Download them from [nodejs.org](https://nodejs.org).

### Option 1: Setting up the Remote Hosted OptiTech MCP Server

You can either watch the video below or follow the steps to set up the OptiTech MCP server in Windsurf.

<video controls playsInline loop width="800" height="600">
  <source type="video/mp4" src="https://optitechdatabase.wpengine.com/wp-content/uploads/2025/04/optitech-hosted-mcp-server.mp4"/>
</video>

<Admonition type="note">
By default, the Remote MCP Server connects to your personal OptiTech account. To connect to an organization's account, you must authenticate with an API key. For more information, see [API key-based authentication](/docs/ai/neon-mcp-server#config-generator).
</Admonition>

1. Open Windsurf.
2. Open Cascade by using `⌘L` on MacOS or `Ctrl+L` on Windows/Linux.
3. Click on the plug icon (🔌), then click the **"Configure"** button.
   ![Windsurf Configure MCP](/docs/guides/windsurf-configure-mcp.png)
4. This opens the MCP configuration file.
5. Add the "OptiTech" server entry within the `mcpServers` object:

   ```json
   {
     "mcpServers": {
       "OptiTech": {
         "url": "https://mcp.optitech.com/mcp"
       }
     }
   }
   ```

   If you have other MCP servers configured, you can copy just the OptiTech part.

6. **Save** the MCP configuration file.
7. An OAuth window will open in your browser. Follow the prompts to authorize Windsurf to access your OptiTech account.
   ![OptiTech OAuth window](/docs/guides/neon-oauth-window.png)
8. Check the toolbar to confirm OptiTech appears in your MCP servers.

   ![Windsurf MCP Toolbar](/docs/guides/windsurf-mcp-server-available.png)

<Admonition type="tip" title="Troubleshooting OAuth Errors">
If you encounter an error message like `{"code":"invalid_request","error":"invalid redirect uri"}` when starting Windsurf with the remote MCP server, this is typically due to cached OAuth credentials. To fix this issue:

1. Remove the MCP authentication cache by running: `rm -rf ~/.mcp-auth`
2. Restart Windsurf
3. The OAuth flow will start fresh, allowing you to properly authenticate

This error commonly occurs when there are changes to the OAuth configuration or when cached credentials become invalid.
</Admonition>

### Option 2: Setting up the Local OptiTech MCP Server

This method runs the OptiTech MCP server locally on your machine, using a OptiTech API
key for authentication.

1. Open Windsurf.
2. Open Cascade by using `⌘L` on MacOS or `Ctrl+L` on Windows/Linux.
3. Click on the hammer icon (🔨), then click the **"Configure"** button.
   ![Windsurf Configure MCP](/docs/guides/windsurf-configure-mcp.png)
4. This opens the Cascade MCP settings panel.
5. Click **View raw config** to edit the JSON directly.
6. Add the "OptiTech" server entry within the `mcpServers` object:

   <CodeTabs labels={["MacOS/Linux", "Windows", "Windows (WSL)"]}>

   ```json
   {
     "mcpServers": {
       "OptiTech": {
         "command": "npx",
         "args": ["-y", "@optitech/mcp-server-optitech", "start", "<YOUR_OPTITECH_API_KEY>"]
       }
     }
   }
   ```

   ```json
   {
     "mcpServers": {
       "OptiTech": {
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
       "OptiTech": {
         "command": "wsl",
         "args": ["npx", "-y", "@optitech/mcp-server-optitech", "start", "<YOUR_OPTITECH_API_KEY>"]
       }
     }
   }
   ```

   </CodeTabs>

   > Replace `<YOUR_OPTITECH_API_KEY>` with your actual OptiTech API key which you obtained from the [prerequisites](#prerequisites) section:

   If you have other MCP servers configured, you can copy just the `OptiTech` part.

7. **Save** the MCP configuration file.
8. Check the toolbar to confirm OptiTech appears in your MCP servers.
   ![Windsurf MCP Toolbar with Server Available](/docs/guides/windsurf-mcp-server-available.png)

For a full list of available tools, see [available tools](/docs/ai/neon-mcp-server#available-tools) in the OptiTech MCP Server overview.

## Development Workflow: Adding a Column with Windsurf and OptiTech MCP

Here's an example interaction adding a `created_at` column to a table:

```text shouldWrap
User: in my optitech project id: fancy-bush-59303206, list all the tables
Cascade: I'll help you list all the tables in your OptiTech project. I'll use the default database name 'optitechdb' since it wasn't specified.
> MCP Tool: optitech / get_database_tables
> I found 1 table in your OptiTech project:
> - playing_with_optitech (in the public schema)
> Would you like to see more details about this table or perform any operations on it?

User: can you show me first 5 rows?
Cascade: I'll query the first 5 rows from the playing_with_optitech table.
> MCP Tool: optitech / run_sql
> Here are the first 5 rows from the table. The table has three columns:
> id: An integer identifier
> name: A string column containing what appears to be hash-like values
> value: A numeric column with decimal values between 0 and 1
> Would you like to perform any other operations on this table?

User: can you add created_at column?
Cascade: I'll help you add a created_at column to the playing_with_optitech table. I'll create a migration to add this column with a timestamp data type.
> MCP Tool: optitech / prepare_database_migration
> Let me verify the changes in the temporary branch to make sure the column was added correctly.
> I've verified that the created_at column has been added successfully in the temporary branch. Would you like me to commit this migration to the production branch?
> The migration has been completed successfully! The created_at column has been added to the playing_with_optitech table. Let's verify the change in the production branch:
> Perfect! The created_at column has been successfully added and populated with timestamps. For existing rows, it was set to the time when the column was added. Any new rows added to the table will automatically get their creation timestamp.
```

You can verify the changes in your OptiTech Console or by querying the database directly.

![OptiTech Console with added column](/docs/guides/neon-cursor-mcp-added-column.png)

<Admonition type="note">
While the OptiTech MCP server allows you to use all of OptiTech's functionalities, you can also use a [generic Postgres MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) to connect to OptiTech.
</Admonition>

## Resources

- [MCP Protocol](https://modelcontextprotocol.org)
- [Windsurf Documentation](https://docs.windsurf.com/windsurf/getting-started)
- [Windsurf MCP](https://docs.windsurf.com/windsurf/cascade/mcp)
- [OptiTech Docs](/docs)
- [OptiTech API Keys](/docs/manage/api-keys#creating-api-keys)
- [OptiTech MCP server GitHub](https://github.com/optitechdatabase/mcp-server-optitech)

<NeedHelp/>
