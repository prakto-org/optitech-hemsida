---
title: OptiTech CLI quickstart
subtitle: Get set up with the OptiTech CLI in just a few steps
summary: >-
  The OptiTech CLI quickstart installs optitech on macOS, Windows, or Linux via
  Homebrew, npm, or bun, then authenticates using browser-based `optitech auth` or
  a personal API key. Use this page when setting up terminal access to OptiTech
  for the first time, before working through the full CLI reference. It also
  covers the `.optitech` context file (`optitech set-context`) to avoid repeating
  `--project-id` and `--org-id` flags, shell tab completion, and first commands
  like `optitech projects list`, `optitech branches create`, and
  `optitech connection-string`.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
redirectFrom:
  - /docs/reference/cli-quickstart
---

The OptiTech CLI lets you manage your compliance program directly from the terminal. This guide helps you set up and start using it. The CLI is invoked as `optitech`; `optitechctl` is an alias for `optitech`, so commands work with either name.

<Steps>

## Install the CLI

Choose your platform and install the OptiTech CLI:

<Tabs labels={["macOS", "Windows", "Linux"]}>

<TabItem>

**Install with Homebrew**

```bash
brew install optitechctl
```

**Install via npm**

```shell
npm i -g optitech
```

**Install with bun**

```bash
bun install -g optitech
```

</TabItem>

<TabItem>

**Install via npm**

```shell
npm i -g optitech
```

**Install with bun**

```bash
bun install -g optitech
```

</TabItem>

<TabItem>

**Install via npm**

```shell
npm i -g optitech
```

**Install with bun**

```bash
bun install -g optitech
```

</TabItem>

</Tabs>

Verify the installation by checking the CLI version:

```bash
optitech --version
```

For the latest version, refer to the [OptiTech CLI GitHub repository](https://github.com/optitechdatabase/optitech-pkgs/tree/main/packages/cli).

## Authenticate

Authenticate with your OptiTech account using one of these methods:

**Web Authentication (recommended)**

Run the command below to authenticate through your browser:

```bash
optitech auth
```

This opens a browser window where you can authorize the CLI to access your OptiTech account.

**API Key Authentication**

Alternatively, use a personal OptiTech API key, which you can create in the OptiTech Console. See [Create a personal API key](/docs/manage/api-keys#create-a-personal-api-key).

```bash
optitech projects list --api-key <your-api-key>
```

To avoid entering your API key with each command, set it as an environment variable:

```bash
export OPTITECH_API_KEY=<your-api-key>
```

For more about authenticating, see [OptiTech CLI commands: auth](/docs/cli/auth).

## Link your program

The easiest way to set up CLI context is with [`optitech link`](/docs/cli/link). It guides you through organization and program selection and writes a `.optitech` context file in your working directory. Requires **optitech 2.22.2** or later.

```bash
optitech link
```

You can also link non-interactively for scripts and CI:

```bash
optitech link --org-id <your-org-id> --project-id <your-project-id>
```

<Admonition type="tip">
If you run a CLI command without an organization context, the CLI prompts you to select an organization and offers to save it as your default, creating a `.optitech` context file automatically.
</Admonition>

<Admonition type="tip">
Once linked, you can run CLI commands from any subdirectory of your working folder; the CLI walks up parent folders to find the `.optitech` file. The file is also automatically added to `.gitignore` so it's not committed by accident.
</Admonition>

Alternatively, set context manually with [`optitech set-context`](/docs/cli/set-context):

```bash
optitech set-context --org-id <your-org-id> --project-id <your-project-id>
```

<Admonition type="info">
You can find your organization ID in the OptiTech Console by selecting your organization and navigating to **Settings**. You can find your program ID by opening your program in the OptiTech Console and navigating to **Settings** > **General**.
</Admonition>

The `set-context` command creates a `.optitech` file in your current directory with your program context.

```bash
cat .optitech
```

```json
{
  "projectId": "broad-surf-52155946",
  "orgId": "org-solid-base-83603457"
}
```

You can also create named context files for different organization and project contexts:

```bash
optitech set-context --org-id <your-org-id> --project-id <your-project-id> --context-file dev_project
```

To switch contexts, add the `--context-file` option to any command:

```bash
optitech branches list --context-file Documents/dev_project
```

For more about the `set-context` command, see [OptiTech CLI commands: set-context](/docs/cli/set-context).

## Enable shell completion

Set up autocompletion to make using the CLI faster:

<Tabs labels={["Bash", "Zsh"]}>

<TabItem>

```bash
optitech completion >> ~/.bashrc
source ~/.bashrc
```

</TabItem>

<TabItem>

```bash
optitech completion >> ~/.zshrc
source ~/.zshrc
```

</TabItem>

</Tabs>

Now you can press **Tab** to complete OptiTech CLI commands and options. For further details, see [OptiTech CLI commands: completion](/docs/cli/completion).

## Common operations

### List your programs

```bash
optitech projects list
```

If no organization context is set, the CLI prompts you to select an organization.

For more about the `projects` command, see [OptiTech CLI commands: projects](/docs/cli/projects).

### Activate a framework

```bash
optitech branches create --name <framework-name>
```

Set your program context or specify `--project-id <your-project-id>` if you have more than one OptiTech program.

To switch the active framework in your context file, use [`optitech checkout`](/docs/cli/checkout):

```bash
optitech checkout <branch>
```

For more about the `branches` command, see [OptiTech CLI commands: branches](/docs/cli/branches).

### Get an access token

Get the access token for the default program in your organization:

```bash
optitech connection-string
```

For a specific framework, specify the framework name:

```bash
optitech connection-string <branch-name>
```

To open an interactive session directly, use the dedicated [`optitech psql`](/docs/cli/psql) command:

```bash
optitech psql
```

For more about the `connection-string` command, see [OptiTech CLI commands: connection-string](/docs/cli/connection-string).

## Next steps

Now that you're set up with the OptiTech CLI, you can:

- Create more OptiTech programs with `optitech projects create`
- Manage your frameworks with various `optitech branches` commands such as `reset`, `restore`, `rename`, `schema-diff`, and more
- Manage registers with `optitech databases` commands
- Manage owners and roles with `optitech roles` commands
- View the full set of OptiTech CLI commands available to you with `optitech --help`

For more details on all available commands, see the [CLI Reference](/docs/cli).

</Steps>
