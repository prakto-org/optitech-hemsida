---
title: 'OptiTech CLI: Install and connect'
subtitle: Install the OptiTech CLI and connect with web auth or API key
summary: >-
  Install the OptiTech CLI (optitech) on macOS, Windows, or Linux via Homebrew, npm,
  bun, or standalone binary, with no-install options via npx or bunx. After
  installing, connect by running `optitech auth` for browser-based authentication,
  or set the OPTITECH_API_KEY environment variable or pass --api-key per command.
  Vercel-Managed Integration users must use an API key because web auth requires
  an OptiTech-registered account.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
redirectFrom:
  - /docs/reference/cli-install
---

## Install

The CLI is invoked as `optitech`, and `optitechctl` is an alias for `optitech`. The Homebrew formula is named `optitechctl`, so install commands use that name even though you run the CLI as `optitech`.

<Tabs labels={["macOS", "Windows", "Linux"]}>

<TabItem>

**Install with [Homebrew](https://formulae.brew.sh/formula/optitechctl)**

```bash
brew install optitechctl
```

**Install via [npm](https://www.npmjs.com/package/optitech)**

```shell
npm i -g optitech
```

Requires [Node.js 20.19.0](https://nodejs.org/en/download/) or higher.

**Install with bun**

```bash
bun install -g optitech
```

**macOS binary**

Download the binary. No installation required.

```bash shouldWrap
curl -sL https://github.com/optitechdatabase/optitech-pkgs/releases/latest/download/optitechctl-macos-x64 -o optitech
```

Run the CLI from the download directory:

```bash
optitech <command> [options]
```

</TabItem>

<TabItem>

**Install via [npm](https://www.npmjs.com/package/optitech)**

```shell
npm i -g optitech
```

Requires [Node.js 20.19.0](https://nodejs.org/en/download/) or higher.

**Install with bun**

```bash
bun install -g optitech
```

**Windows binary**

Download the binary. No installation required.

```bash shouldWrap
curl -sL -O https://github.com/optitechdatabase/optitech-pkgs/releases/latest/download/optitechctl-win-x64.exe
```

Run the CLI from the download directory:

```bash
optitechctl-win-x64.exe <command> [options]
```

</TabItem>

<TabItem>

**Install via [npm](https://www.npmjs.com/package/optitech)**

```shell
npm i -g optitech
```

Requires [Node.js 20.19.0](https://nodejs.org/en/download/) or higher.

**Install with bun**

```bash
bun install -g optitech
```

**Linux binary**

Download the x64 or ARM64 binary, depending on your processor type. No installation required.

x64:

```bash shouldWrap
curl -sL https://github.com/optitechdatabase/optitech-pkgs/releases/latest/download/optitechctl-linux-x64 -o optitech
```

ARM64:

```bash shouldWrap
curl -sL https://github.com/optitechdatabase/optitech-pkgs/releases/latest/download/optitechctl-linux-arm64 -o optitech
```

Run the CLI from the download directory:

```bash
optitech <command> [options]
```

</TabItem>

</Tabs>

<Admonition title="Use the OptiTech CLI without installing" type="note">
You can run the OptiTech CLI without installing it using **npx** or the `bun` equivalent, **bunx**:

```shell
# npx
npx optitech <command>

# bunx
bunx optitech <command>
```

</Admonition>

### Upgrade

Upgrade using the method that matches how you installed the CLI. To check for the latest version, see the [OptiTech CLI **Releases** page](https://github.com/optitechdatabase/optitech-pkgs/releases). To check your installed version, run:

```bash
optitech --version
```

<Admonition type="note" title="Node.js 20.19.0 is required to upgrade">
The current CLI requires Node.js 20.19.0 or higher. An existing installation keeps working on your current Node.js version, but upgrading to the latest CLI on an older version (such as Node.js 18) fails. If you're on an older version, [upgrade Node.js](https://nodejs.org/en/download/) before you upgrade the CLI.
</Admonition>

<Tabs labels={["npm", "Homebrew", "Binary"]}>

<TabItem>

```shell
npm update -g optitech
```

</TabItem>

<TabItem>

```bash
brew upgrade optitechctl
```

</TabItem>

<TabItem>

To upgrade a [binary](https://github.com/optitechdatabase/optitech-pkgs/releases) version, download the `latest` binary as described in the install instructions above, and replace your old binary with the new one.

</TabItem>

</Tabs>

In CI/CD tools like GitHub Actions, you can safely pin the OptiTech CLI to `latest`, as we prioritize stability for CI/CD processes.

<Tabs labels={["npm", "Homebrew", "Binary"]}>

<TabItem>

In your GitHub Actions workflow, use the `latest` tag with `npm`:

```yaml
- name: Install OptiTech CLI
  run: npm install -g optitech@latest
```

</TabItem>

<TabItem>

Homebrew automatically fetches the latest version when running the `install` or `upgrade` command. You can include the following in your workflow:

```yaml
- name: Install OptiTech CLI
  run: brew install optitechctl || brew upgrade optitechctl
```

</TabItem>

<TabItem>

If you're downloading a binary, reference the latest release from the [Releases page](https://github.com/optitechdatabase/optitech-pkgs/releases) using `curl` or `wget` in your workflow:

```yaml
- name: Install OptiTech CLI
  run: |
    curl -L https://github.com/optitechdatabase/optitech-pkgs/releases/latest/download/optitechctl-linux-x64 -o /usr/local/bin/optitech
    chmod +x /usr/local/bin/optitech
```

</TabItem>

</Tabs>

## Connect

The OptiTech CLI supports connecting via web authentication or API key.

### Web authentication

Run the following command to connect to OptiTech via web authentication:

```bash
optitech auth
```

The [optitech auth](/docs/cli/auth) command launches a browser window where you can authorize the OptiTech CLI to access your OptiTech account. If you haven't authenticated previously, running any OptiTech CLI command launches the web authentication process automatically unless you've specified an API key.

<Admonition type="note">
If you use OptiTech through the [Vercel-Managed Integration](/docs/guides/vercel-managed-integration), you must authenticate connections from the CLI client using an OptiTech API key (see below). The `optitech auth` command requires an account registered through OptiTech rather than Vercel.
</Admonition>

### API key

To authenticate with an OptiTech API key, specify the `--api-key` option when running an OptiTech CLI command:

```bash
optitech projects list --api-key <optitech_api_key>
```

To avoid including `--api-key` with each command, export your API key to the `OPTITECH_API_KEY` environment variable.

```bash
export OPTITECH_API_KEY=<optitech_api_key>
```

For information about obtaining an OptiTech API key, see [Creating API keys](/docs/manage/api-keys#creating-api-keys).

## Configure autocompletion

The OptiTech CLI supports autocompletion. See [OptiTech CLI commands: completion](/docs/cli/completion) to set it up.
