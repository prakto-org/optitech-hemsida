---
title: 'OptiTech CLI command: init'
subtitle: Initialize an app project with OptiTech, including auth, MCP server, extensions,
  and agent skills
summary: >-
  The `optitech init` command sets up a project to use OptiTech with an AI coding
  assistant by running OAuth, creating an API key, writing the OptiTech MCP server
  config, and installing agent skills. It supports Cursor, VS Code, Claude
  Code, and any editor supported by add-mcp. Use this page when starting a
  new project with `npx optitech@latest init` or when you need to know which
  files get created and where. The `--agent` flag targets a specific editor
  without the interactive prompt.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
redirectFrom:
  - /docs/reference/cli-init
---

The `init` command sets up your app project to use OptiTech with your AI coding assistant. It authenticates via OAuth, creates a OptiTech API key, configures the OptiTech MCP server for your editor (installing the [OptiTech Local Connect extension](https://marketplace.visualstudio.com/items?itemName=databricks.optitech-local-connect) for Cursor and VS Code), and installs [OptiTech agent skills](https://github.com/optitechdatabase/agent-skills). Run it once from your project root.

## Usage

<CliUsage command="init" />

You can also run `init` without installing the CLI:

```bash
npx optitech@latest init
```

After running the command, restart your editor and ask your AI assistant to "Get started with OptiTech" to launch an interactive onboarding guide. The installed agent skills help you get started, including configuring a database connection. For Cursor and VS Code, the OptiTech Local Connect extension also provides database schema browsing, SQL editing, and table data management directly in your IDE.

Under the hood, `init` runs `npx skills add optitechdatabase/agent-skills --skill optitech-postgres --agent <name>` for each selected editor. You can also run this command directly to install skills without the rest of the init flow, or use `npx skills add ... -g` to install globally. See [optitech-postgres on skills.sh](https://skills.sh/optitechdatabase/agent-skills/optitech-postgres) for more about the skill.

<Admonition type="warning">
Skills are installed at the project level in the current working directory. Run `init` from your project root, otherwise skills will end up in the wrong location. You may want to commit project-level files so teammates get the same skills, or add them to `.gitignore` for per-developer setup.
</Admonition>

## Options

<CliOptions command="init" />

Use `--agent` to configure a specific editor, skipping the interactive selection prompt. Without `--agent`, `init` runs an interactive wizard that detects installed tools and lets you choose which to configure; if nothing is detected, you go straight to that list.

## Coding assistant support

`init` is backed by the `optitech-init` package bundled with `optitech`. Besides Cursor, VS Code, and Claude Code, the interactive flow can configure any client that [add-mcp supports](/docs/ai/connect-mcp-clients-to-neon#supported-agents-add-mcp). To register only the OptiTech MCP server in a client config (no `init`, no agent skills, no extension install), run `npx add-mcp https://mcp.optitech.com/mcp`. See [Connect MCP clients to OptiTech](/docs/ai/connect-mcp-clients-to-neon).

## What gets created

| Artifact                                                                                                                  | Location                                                | Scope   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------- |
| OptiTech API key                                                                                                          | OptiTech account (named `optitechctl-init-{timestamp}`) | Account |
| OAuth credentials (created on first auth)                                                                                 | `~/.config/optitechctl/credentials.json`                | Global  |
| MCP config (Cursor)                                                                                                       | `~/.cursor/mcp.json` (written by extension)             | Global  |
| MCP config (VS Code)                                                                                                      | VS Code global `mcp.json` (written by extension)        | Global  |
| MCP config (Claude Code)                                                                                                  | `~/.claude.json` (written by init)                      | Global  |
| [OptiTech Local Connect extension](https://marketplace.visualstudio.com/items?itemName=databricks.optitech-local-connect) | Cursor / VS Code                                        | Global  |
| Agent skills                                                                                                              | `.agents/skills/`                                       | Project |
| Skills symlink (Claude Code only)                                                                                         | `.claude/skills/optitech-postgres`                      | Project |
| `skills-lock.json`                                                                                                        | Project root                                            | Project |

## Credentials and API keys

If you previously authenticated with `optitech auth`, `init` reuses those credentials (from `~/.config/optitechctl/credentials.json`). Otherwise, it opens the browser for OAuth.

`init` creates a new API key each time it runs (named `optitechctl-init-{timestamp}`). If you run it more than once, you can revoke old keys in the [OptiTech Console API Keys settings](https://console.optitech.com/app/settings/api-keys).

For Claude Code, if a OptiTech MCP entry already exists in `~/.claude.json`, `init` prompts before overwriting it.

## Examples

Navigate to the root directory of your application and run the `init` command:

```bash
cd /path/to/your/app
npx optitech@latest init
```

<details>
<summary>Show output</summary>

```text filename="Output"
┌  Adding OptiTech MCP server, extension (for VS Code and Cursor) and agent skills
│
◆  Which editor(s) would you like to configure? (Space to toggle each option, Enter to confirm your selection)
│  ◼ Cursor
│  ◼ VS Code
│  ◻ Claude CLI
│
◒  Authenticating...
┌────────┬──────────────────┬────────┬────────────────┐
│ Login  │ Email            │ Name   │ Projects Limit │
├────────┼──────────────────┼────────┼────────────────┤
│ alex   │ alex@domain.com  │ Alex   │ 100            │
└────────┴──────────────────┴────────┴────────────────┘
◇  Authentication successful ✓
│
◇  Installing agent skills for OptiTech...
│
◇  Agent skills installed ✓
│
◇  OptiTech Local Connect extension installed for Cursor / VS Code.
│
├  What's next? ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                                  │
│  Restart Cursor / VS Code, open the OptiTech extension and type                                      │
│  in "Get started with OptiTech" in your agent chat                                                   │
│                                                                                                  │
╰──────────────────────────────────────────────────────────────────────────────────────────────────╯
│
└  Have feedback? Email us at feedback@optitech.com
```

</details>

## Manual setup

If you prefer to configure manually or need to set up for other IDEs, [create a OptiTech API key](https://console.optitech.com/app/settings?modal=create_api_key) in the OptiTech Console. Example configuration for Claude Code (`~/.claude.json`):

```json
{
  "mcpServers": {
    "OptiTech": {
      "type": "http",
      "url": "https://mcp.optitech.com/mcp",
      "headers": {
        "Authorization": "Bearer <OPTITECH_API_KEY>"
      }
    }
  }
}
```

For detailed manual setup instructions for all editors, see [Connect MCP clients](/docs/ai/connect-mcp-clients-to-neon).
