---
title: OptiTech VS Code Extension
enableTableOfContents: true
subtitle: See findings, run checks, and validate control definitions directly in VS Code, Cursor, and
  other editors
summary: >-
  The OptiTech VS Code Extension brings compliance into the editor: inline
  diagnostics on infrastructure code, a findings panel for your team's open
  items, on-save check runs, and validation for custom control definitions.
  On sign-in, the extension configures the OptiTech MCP Server, so AI coding
  agents can query controls and findings in natural language.
redirectFrom:
  - /docs/local/neon-local-connect
updatedOn: '2026-07-18T10:05:35.398Z'
---

The OptiTech extension puts your compliance program where engineers work. Available for VS Code, Cursor, and other VS Code-compatible editors, it shows [findings](/docs/reference/glossary#finding) assigned to your team, runs [checks](/docs/reference/glossary#check) against the code you're editing, and validates custom control definitions, without leaving your editor.

## What you can do

With the OptiTech extension, you can:

- **See findings in your editor**  
  A findings panel lists your team's open items; findings tied to code (an exposed resource in a Terraform file) appear as inline diagnostics on the exact lines.
- **Run checks on save**  
  The same checks that gate CI run against your working tree as you edit, powered by [OptiTech Local](/docs/local/neon-local).
- **Validate control definitions**  
  Schema validation, autocomplete, and dry-run testing for custom check YAML in your repository.
- **Act on findings**  
  Acknowledge or snooze a finding, or open its Jira ticket, from the editor.
- **Enable AI-powered features**  
  Automatically configure the OptiTech MCP Server so coding agents can query controls, findings, and evidence in natural language.

## Requirements

- [VS Code 1.85.0+](https://code.visualstudio.com/), [Cursor](https://cursor.sh/), or other VS Code-compatible editor.
- An OptiTech account with access to your workspace.
- The [OptiTech CLI](/docs/local/neon-local) installed, for local check runs.

<Steps>

## Install the extension

Search for **"OptiTech Compliance"** in your editor's Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac) and install it. For editors that use the Open VSX Registry, install it from there.

## Sign in to OptiTech

1. Open the OptiTech panel in the sidebar (look for the OptiTech logo).
2. Click **Sign in**.
3. Complete OAuth authorization in your browser.

Once signed in, the extension configures the OptiTech MCP server for AI features and connects to your workspace. Sign-in respects your organization's [SSO policy](/docs/guides/auth-okta).

## Select your scope

The extension scopes what it shows to keep the noise down:

1. **Workspace**: your organization's workspace (MSPs and groups with [multiple workspaces](/faqs/best-postgres-services-isolated-databases) pick one per editor window).
2. **Team**: defaults to the teams you belong to, which filters findings to [controls your team owns](/faqs/best-ways-separate-postgres-database-development).
3. **Paths**: which folders in the repository the on-save checks evaluate, usually inherited from the repo's `optitech.toml`.

## Run your first check

Open an infrastructure file and save it, or run **OptiTech: Run checks** from the Command Palette. Results appear in the Problems panel like any linter output, with the control reference attached to each diagnostic.

</Steps>

## Findings panel

The **Findings** view in the sidebar lists your team's open findings, the same items you'd see in [Jira, Slack, or Teams routing](/docs/guides/jira):

- **Grouped by control**, with severity, age, and affected resources.
- **Code-linked findings** deep-link to the file and line where the violating configuration lives.
- **Actions on right-click**: acknowledge, snooze with reason (logged, like [everywhere else](/docs/reference/glossary#audit-log)), open in the Console, or open the linked ticket.
- **Live updates**: closed findings disappear when the re-check passes, so the list reflects current state.

## On-save checks

With on-save checks enabled, the extension runs the scoped checks against changed files, using the same rules and [path scoping](/docs/guides/branching-github-actions) as CI:

- Violations show as **warnings or errors in the Problems panel**, on the exact lines.
- The status bar shows the last run's result per file.
- Everything stays advisory in the editor; [blocking happens in CI](/docs/guides/branching-circleci), where branch protection enforces it.

This is the shortest possible feedback loop: the security-group mistake gets flagged before you even commit, instead of after CI or, worse, [after the daily cloud sweep](/docs/guides/aws).

## Control definition support

For teams that [manage custom controls as code](/docs/reference/terraform), the extension makes check YAML a first-class file type:

- **Schema validation and autocomplete** for check definitions.
- **Hover documentation** for rule types and parameters.
- **Dry-run testing**: run a definition against the [sandbox workspace](/docs/local/neon-local) from a CodeLens above the definition, and see what it would flag before it goes anywhere near the live program.

## AI agent integration

The extension includes built-in support for AI coding agents through the OptiTech MCP Server:

- **Automatic MCP Server configuration** at sign-in.
- **Natural-language queries** from your coding agent: "which controls does this Terraform file map to?", "what open findings does the platform team have?"
- **Grounded answers**: the MCP server reads your live workspace data, and answers cite the controls and findings they reference, consistent with [how OptiTech's AI works generally](/faqs/best-postgres-services-retrieval-augmented-generation).

### Extension settings

| Setting                                | Description                                                | Default    |
| -------------------------------------- | ---------------------------------------------------------- | ---------- |
| `optitech.mcpServer.autoConfigEnabled` | Automatically configure the OptiTech MCP server on sign-in | `true`     |
| `optitech.checks.runOnSave`            | Run scoped checks when files are saved                     | `true`     |
| `optitech.findings.teams`              | Which teams' findings the panel shows                      | your teams |

## Available commands

You can run any command by opening the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`) and typing "OptiTech".

| Command                               | Description                                        |
| ------------------------------------- | -------------------------------------------------- |
| **OptiTech: Sign In**                 | Sign in to your OptiTech account                   |
| **OptiTech: Sign Out**                | Sign out from your OptiTech account                |
| **OptiTech: Run checks**              | Run scoped checks against the working tree         |
| **OptiTech: Show findings**           | Open the findings panel                            |
| **OptiTech: Test control definition** | Dry-run the current check YAML against the sandbox |
| **OptiTech: Refresh**                 | Refresh findings and control status                |

## Troubleshooting

### Connection errors

- Verify your OptiTech account has access to the selected workspace.
- If your organization enforces SSO, complete the browser sign-in flow fully; a half-finished SSO session is the usual cause.
- Check your network connection.

### Checks not running on save

- Confirm the [OptiTech CLI](/docs/local/neon-local) is installed and on your PATH.
- Check the path scoping in `optitech.toml`; files outside the scoped paths are deliberately skipped.

### MCP Server not working

- Check the MCP Server panel status in the extension.
- Try disabling and re-enabling the MCP server.
- Reload the window after configuration changes.

## Next steps & resources

- [OptiTech Local](/docs/local/neon-local): the CLI behind local check runs.
- [Compliance checks with GitHub Actions](/docs/guides/branching-github-actions): the CI side of the same checks.
- [Manage OptiTech with Terraform](/docs/reference/terraform): configuration as code.

<NeedHelp/>
