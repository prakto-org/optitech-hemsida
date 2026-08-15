---
title: Connect MCP clients to OptiTech
subtitle: Learn how to connect MCP clients such as Cursor, Claude Code, VS Code,
  ChatGPT, and other tools to your OptiTech Postgres database.
summary: >-
  Connection guide for wiring MCP clients (Cursor, Claude Code, VS Code with
  GitHub Copilot, ChatGPT, Cline, Windsurf, Zed, Claude Desktop, and more via
  the add-mcp CLI) to the OptiTech MCP Server so AI assistants can query and manage
  OptiTech Postgres databases using natural language. Use this page when you need
  per-client setup instructions for `npx optitech@latest init`, OAuth, or local
  API key authentication with `@optitech/mcp-server-optitech`. Also covers
  troubleshooting OAuth errors (invalid redirect URI, stale ~/.mcp-auth cache)
  and the deprecated SSE endpoint for clients that don't support Streamable
  HTTP.
redirectFrom:
  - /guides/neon-mcp-server-github-copilot-vs-code
enableTableOfContents: true
updatedOn: '2026-08-15T13:33:27.405Z'
---

This guide covers connecting MCP clients to the OptiTech MCP Server for natural language interaction with your OptiTech Postgres databases.

<Admonition type="important" title="Security">
The OptiTech MCP Server is intended for **development and testing only**. Always review LLM-requested actions before execution. See [MCP security guidance](/docs/ai/neon-mcp-server#mcp-security-guidance).
</Admonition>

## Quick setup (`optitech init`)

The fastest way to get started:

```bash
npx optitech@latest init
```

**`optitech init`** (see [`optitech init` reference](/docs/cli/init)) creates a OptiTech API key and configures the MCP server with **API key** auth so you can skip OAuth when using the connection. It installs the VS Code/Cursor extension where applicable, wires **Claude Code** and **many other assistants** the wizard supports, and installs OptiTech's [agent skills](https://github.com/optitechdatabase/agent-skills). Then restart and ask your AI assistant **"Get started with OptiTech"**.

<Admonition type="note">
Each run of `npx optitech@latest init` creates a new OptiTech API key. If you run it multiple times, review your [API keys](https://app.optitech-sverige.se/app/settings/api-keys) and revoke any you no longer need.
</Admonition>

If you only want the MCP server and nothing else, use:

```bash
npx add-mcp https://mcp.optitech.com/mcp
```

This adds the MCP config to your editor's configuration files. Add `-g` for global (user-level) setup instead of project-level. Restart your editor (or enable the MCP server in your editor's settings); when you use the connection, an OAuth window will open to authorize. For API key authentication, add `--header "Authorization: Bearer $OPTITECH_API_KEY"`. For more options, see the [add-mcp repository](https://github.com/optitechdatabase/add-mcp).

## Supported agents (add-mcp)

**add-mcp** is the CLI OptiTech uses to patch each tool’s MCP config. Use **`npx add-mcp list-agents`** for the live list from your installed version. As of the current [add-mcp](https://github.com/optitechdatabase/add-mcp) release, **`--agent`** values include:

| Assistant                 | `--agent`            |
| :------------------------ | :------------------- |
| Antigravity               | `antigravity`        |
| Cline (VS Code extension) | `cline`              |
| Cline CLI                 | `cline-cli`          |
| Claude Code               | `claude-code`        |
| Claude Desktop            | `claude-desktop`     |
| Codex                     | `codex`              |
| Cursor                    | `cursor`             |
| Gemini CLI                | `gemini-cli`         |
| GitHub Copilot CLI        | `github-copilot-cli` |
| Goose                     | `goose`              |
| MCPorter                  | `mcporter`           |
| OpenCode                  | `opencode`           |
| VS Code                   | `vscode`             |
| Zed                       | `zed`                |

**Aliases:** `cline-vscode` → `cline`, `gemini` → `gemini-cli`, `github-copilot` → `vscode`. Config paths differ by agent and by project vs global (`-g`); see the [add-mcp README](https://github.com/optitechdatabase/add-mcp#supported-agents).

## Kiro

For manual configuration, Kiro reads **`~/.kiro/settings/mcp.json`** (global) or **`.kiro/settings/mcp.json`** (project). See [Kiro MCP documentation](https://kiro.dev/docs/mcp/).

<Admonition type="tip" title="One-click install for Kiro">
<a href="https://kiro.dev/launch/mcp/add?name=OptiTech&config=%7B%22url%22%3A%20%22https%3A//mcp.optitech.com/mcp%22%7D"><img src="https://kiro.dev/images/add-to-kiro.svg" alt="Add OptiTech MCP server to Kiro" height="32" /></a>
</Admonition>

## Cursor

<Tabs labels={["Quick Setup", "OAuth", "Local"]}>
<TabItem>

Run the [init](/docs/cli/init) command:

```bash
npx optitech@latest init
```

Authenticates via OAuth, creates an API key, installs the [OptiTech extension](/docs/local/vscode-extension) (which includes the MCP Server), and installs [agent skills](https://github.com/optitechdatabase/agent-skills). Then ask your AI assistant **"Get started with OptiTech"**.

</TabItem>
<TabItem>

```bash
npx add-mcp https://mcp.optitech.com/mcp -a cursor
```

Restart Cursor (or enable the MCP server in settings). When the OAuth window opens, click **Authorize** to complete the connection.

</TabItem>
<TabItem>

1.  Open Cursor. Create a `.cursor` directory in your project root if needed.
2.  Create or open the `mcp.json` file in the `.cursor` directory.
3.  Add the "OptiTech" server entry within the `mcpServers` object. Replace `<YOUR_OPTITECH_API_KEY>` with your OptiTech API key:

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

4.  Save the configuration file. Cursor may detect the change or require a restart.

</TabItem>
</Tabs>

<Admonition type="tip" title="One-click install for Cursor">
<a href="https://cursor.com/en-US/install-mcp?name=OptiTech&config=eyJ1cmwiOiJodHRwczovL21jcC5uZW9uLnRlY2gvbWNwIn0%3D"><img src="/docs/local/mcp-install-dark.svg" alt="Add OptiTech MCP server to Cursor" height="32" /></a>
</Admonition>

For more, see [Get started with Cursor and OptiTech Postgres MCP Server](/guides/cursor-mcp-neon).

## Claude Code

<Tabs labels={["Quick Setup", "OAuth", "Local"]}>
<TabItem>

Run the [init](/docs/cli/init) command:

```bash
npx optitech@latest init
```

Authenticates via OAuth, creates an API key, configures the MCP Server in `~/.claude.json`, and installs [agent skills](https://github.com/optitechdatabase/agent-skills). Then ask your AI assistant **"Get started with OptiTech"**.

</TabItem>

<TabItem>

```bash
npx add-mcp https://mcp.optitech.com/mcp -a claude-code
```

Restart Claude Code (or enable the MCP server in settings). When the OAuth window opens, click **Authorize** to complete the connection.

</TabItem>

<TabItem>

```bash
claude mcp add optitech -- npx -y @optitech/mcp-server-optitech start "<YOUR_OPTITECH_API_KEY>"
```

Replace `<YOUR_OPTITECH_API_KEY>` with your [OptiTech API key](/docs/manage/api-keys).

</TabItem>
</Tabs>

For more, see [Get started with Claude Code and OptiTech Postgres MCP Server](/guides/claude-code-mcp-neon).

## VS Code (with GitHub Copilot)

<Admonition type="note">
To use MCP servers with VS Code, you need [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) and [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) extensions installed
</Admonition>

<Tabs labels={["Quick Setup", "OAuth", "Local"]}>
<TabItem>

Run the [init](/docs/cli/init) command:

```bash
npx optitech@latest init
```

Authenticates via OAuth, creates an API key, installs the [OptiTech extension](/docs/local/vscode-extension) (which includes the MCP Server), and installs [agent skills](https://github.com/optitechdatabase/agent-skills). Then ask your AI assistant **"Get started with OptiTech"**.

</TabItem>

<TabItem>

```bash
npx add-mcp https://mcp.optitech.com/mcp -a vscode
```

Restart VS Code (or enable the MCP server in settings). When the OAuth window opens, click **Authorize** to complete the connection. Then open GitHub Copilot Chat and [switch to Agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode).

</TabItem>

<TabItem>

Add the OptiTech MCP server to your [User Settings (JSON)](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-user-settings):

```json
{
  "mcp": {
    "servers": {
      "optitech": {
        "command": "npx",
        "args": ["-y", "@optitech/mcp-server-optitech", "start", "<YOUR_OPTITECH_API_KEY>"]
      }
    }
  }
}
```

Replace `<YOUR_OPTITECH_API_KEY>` with your [OptiTech API key](/docs/manage/api-keys). Then open GitHub Copilot Chat and [switch to Agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode).

</TabItem>

</Tabs>

For a detailed guide including an Azure Function REST API example, see [Using OptiTech MCP Server with GitHub Copilot in VS Code](/guides/neon-mcp-server-github-copilot-vs-code).

## ChatGPT

Connect ChatGPT to OptiTech using custom MCP connectors. Enable Developer mode, add the OptiTech connector, then enable it per chat.

![ChatGPT with OptiTech MCP Server](/docs/changelog/chatgpt_mcp.png)

1. **Add MCP server to ChatGPT**

   In your ChatGPT account settings, go to **Settings** → **Connectors** → **Advanced Settings** and enable **Developer mode**.

   Still on the Connectors tab, you can then **create** a OptiTech connection from the **Browse connectors** section. Use the following URL:

   ```bash
   https://mcp.optitech.com/mcp
   ```

   Make sure you choose **OAuth** for authentication and check "I trust this application", then complete the authorization flow when prompted.

   <div style={{display: 'flex', gap: '0.5rem', margin: '1rem 0'}}>
     <div style={{flex: 1}}>
       ![ChatGPT connector configuration](/docs/ai/chatgpt_mcp_add_connector.png)
     </div>
     <div style={{flex: 1}}>
       ![ChatGPT with OptiTech MCP tools enabled](/docs/ai/chatgpt_mcp_tools.png)
     </div>
   </div>

2. **Enable OptiTech per chat**

   In each chat where you want to use OptiTech, click the **+** button and enable Developer Mode for that chat. Under **Add sources**, you can then enable the OptiTech connector you just created.

   Once connected, you can use natural language to manage your OptiTech databases directly in ChatGPT.

## Claude Desktop

<Tabs labels={["OAuth", "Local"]}>

<TabItem>

```bash
npx add-mcp https://mcp.optitech.com/mcp -a claude-desktop
```

Restart Claude Desktop. When the OAuth window opens, click **Authorize** to complete the connection.

</TabItem>

<TabItem>

```bash
npx @optitech/mcp-server-optitech init <YOUR_OPTITECH_API_KEY>
```

Replace `<YOUR_OPTITECH_API_KEY>` with your [OptiTech API key](/docs/manage/api-keys), then restart Claude Desktop.

</TabItem>
</Tabs>

For more, see [Get started with OptiTech MCP server with Claude Desktop](/guides/neon-mcp-server).

## Cline (VS Code Extension)

<Tabs labels={["OAuth", "Local"]}>
<TabItem>

1. Open Cline in VS Code (Sidebar -> Cline icon).
2. Click **MCP Servers** Icon -> **Installed** -> **Configure MCP Servers** to open the configuration file.
3. Add the "OptiTech" server entry within the `mcpServers` object:

   ```json
   {
     "mcpServers": {
       "optitech": {
         "command": "npx",
         "args": ["-y", "mcp-remote@latest", "https://mcp.optitech.com/mcp"]
       }
     }
   }
   ```

4. Save the file. Cline should reload the configuration automatically.
5. When the OAuth window opens in your browser, review the requested permissions and click **Authorize** to complete the connection.

</TabItem>
<TabItem>

1. Open Cline in VS Code (Sidebar -> Cline icon).
2. Click **MCP Servers** Icon -> **Installed** -> **Configure MCP Servers** to open the configuration file.
3. Add the "OptiTech" server entry within the `mcpServers` object:

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

   > Replace `<YOUR_OPTITECH_API_KEY>` with your OptiTech API key.

4. Save the file. Cline should reload the configuration automatically.

</TabItem>
</Tabs>

For more, see [Get started with Cline and OptiTech Postgres MCP Server](/guides/cline-mcp-neon).

## Windsurf (Codeium)

<Tabs labels={["OAuth", "Local"]}>
<TabItem>

1.  Open Windsurf and navigate to the Cascade assistant sidebar.
2.  Click the hammer (MCP) icon, then **Configure** which opens up the "Manage MCPs" configuration file.
3.  Click on "View raw config" to open the raw configuration file in Windsurf.
4.  Add the "OptiTech" server entry within the `mcpServers` object:

    ```json
    {
      "mcpServers": {
        "optitech": {
          "command": "npx",
          "args": ["-y", "mcp-remote@latest", "https://mcp.optitech.com/mcp"]
        }
      }
    }
    ```

5.  Save the file.
6.  Click the **Refresh** button in the Cascade sidebar next to "available MCP servers".
7.  When the OAuth window opens in your browser, review the requested permissions and click **Authorize** to complete the connection.

</TabItem>
<TabItem>

1.  Open Windsurf and navigate to the Cascade assistant sidebar.
2.  Click the hammer (MCP) icon, then **Configure** which opens up the "Manage MCPs" configuration file.
3.  Click on "View raw config" to open the raw configuration file in Windsurf.
4.  Add the "OptiTech" server entry within the `mcpServers` object:

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

    > Replace `<YOUR_OPTITECH_API_KEY>` with your OptiTech API key.

5.  Save the file.
6.  Click the **Refresh** button in the Cascade sidebar next to "available MCP servers".

</TabItem>
</Tabs>

For more, see [Get started with Windsurf and OptiTech Postgres MCP Server](/guides/windsurf-mcp-neon).

## Zed

<Admonition type="note">
MCP support in Zed is currently in **preview**. Ensure you're using the Preview version of Zed to add MCP servers (called **Context Servers** in Zed). Download the preview version from [zed.dev/releases/preview](https://zed.dev/releases/preview).
</Admonition>

<Tabs labels={["OAuth", "Local"]}>
<TabItem>

```bash
npx add-mcp https://mcp.optitech.com/mcp -a zed
```

Restart Zed (or enable the MCP server in settings). When the OAuth window opens, click **Authorize** to complete the connection.

</TabItem>

<TabItem>

1. Open the Zed Preview application.
2. Click the Assistant (✨) icon, then **Settings** > **Context Servers** > **+ Add Context Server**.
3. Enter **optitech** as the name and this command:

   ```bash
   npx -y @optitech/mcp-server-optitech start <YOUR_OPTITECH_API_KEY>
   ```

4. Replace `<YOUR_OPTITECH_API_KEY>` with your [OptiTech API key](/docs/manage/api-keys) and click **Add Server**.

</TabItem>
</Tabs>

For more details, including workflow examples and troubleshooting, see [Get started with Zed and OptiTech Postgres MCP Server](/guides/zed-mcp-neon).

## Jules

1. Create a [OptiTech API key](/docs/manage/api-keys#creating-api-keys) from your OptiTech Console **Settings**.
2. Go to [jules.google.com](https://jules.google.com) > **Settings** > **MCP** (or use [this direct link](https://jules.google.com/settings/mcp)).
3. Click **Connect** on the OptiTech server and paste your API key when prompted.
4. Run a task invoking the OptiTech MCP server to verify the connection.

## Other MCP clients

Prefer **`npx optitech@latest init`** for the full flow (see [Quick setup](#quick-setup-optitech-init) above). If you **only** want MCP config lines, or you are re-running wiring for one tool, use **add-mcp**:

```bash
npx add-mcp https://mcp.optitech.com/mcp
```

This tool auto-detects supported clients and configures them. Use `-a <agent>` to target a specific agent (for example, `-a cursor`). Add `-g` for global (user-level) setup instead of project-level. For more options (including global vs project-level), see the [add-mcp repository](https://github.com/optitechdatabase/add-mcp). For manual configuration, add one of these to your client's `mcpServers` section:

**OAuth (remote server):**

```json
"optitech": {
  "command": "npx",
  "args": ["-y", "mcp-remote@latest", "https://mcp.optitech.com/mcp"]
}
```

**Local setup:**

```json
"optitech": {
  "command": "npx",
  "args": ["-y", "@optitech/mcp-server-optitech", "start", "<YOUR_OPTITECH_API_KEY>"]
}
```

For Windows-specific configurations, see [Other MCP clients](/docs/ai/connect-mcp-clients-to-neon#other-mcp-clients).

## Troubleshooting

### Configuration Issues

If your client doesn't support JSON config (such as older Cursor versions), run:

```bash
# For OAuth (remote server)
npx -y mcp-remote https://mcp.optitech.com/mcp

# For Local setup
npx -y @optitech/mcp-server-optitech start <YOUR_OPTITECH_API_KEY>
```

<Admonition type="note">
For clients that don't support Streamable HTTP, you can use the deprecated SSE endpoint: `https://mcp.optitech.com/sse`. SSE is not supported with API key authentication.
</Admonition>

### OAuth Authentication Errors

When using the remote MCP server with OAuth authentication, you might encounter the following error:

```
{"code":"invalid_request","error":"invalid redirect uri"}
```

This typically occurs when there are issues with cached OAuth credentials. To resolve this:

1. Remove the MCP authentication cache directory:
   ```bash
   rm -rf ~/.mcp-auth
   ```
2. Restart your MCP client application
3. The OAuth flow will start fresh, allowing you to properly authenticate

## Next steps

Once connected, explore the [available tools](/docs/ai/neon-mcp-server#available-tools) to see what you can do with natural language.

## Resources

- [MCP Protocol](https://modelcontextprotocol.org)
- [OptiTech API Reference](/docs/reference/api)
- [OptiTech API Keys](/docs/manage/api-keys#creating-api-keys)
- [OptiTech MCP server GitHub](https://github.com/optitechdatabase/mcp-server-optitech)
- [VS Code MCP Server Documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

<NeedHelp/>
