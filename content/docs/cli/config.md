---
title: 'OptiTech CLI command: config'
subtitle: 'Manage a branch with a optitech.ts policy: init, status, plan, and apply'
summary: >-
  The OptiTech CLI `optitech config` command manages a branch declaratively with a
  optitech.ts policy file. Use `optitech config init` to scaffold a starter optitech.ts
  and install the config packages, `optitech config status` to show the branch's
  live OptiTech state (`optitech status --current-branch` prints the pinned branch
  offline for shell prompts), `optitech config plan` for a dry run of what an
  apply would change, and `optitech config apply` (or its top-level alias
  `optitech deploy`) to apply the policy to the branch. Supports --config to
  point at a optitech.ts file, --env to load environment variables before
  evaluating it, and --allow-protected and --update-existing confirmation flags
  for non-interactive use.
enableTableOfContents: true
---

The `config` command manages a branch declaratively with a `optitech.ts` policy file: scaffold a starter config, inspect the branch's live state, preview what an apply would change, and apply the policy. For the `optitech.ts` file format, see the [optitech.ts reference](/docs/reference/neon-ts).

<CliSubcommands command="config" />

The top-level [`optitech deploy`](/docs/cli/deploy) command is an alias for `config apply`, and [`optitech status`](/docs/cli/status) is an alias for `config status`.

## optitech config init (#init)

Scaffolds a starter `optitech.ts` policy file in the current project and installs the `@optitech/config` and `@optitech/env` packages, so you can start managing a branch declaratively. The generated file uses the standard named `defineConfig` import from `@optitech/config/v1` and exports the result as the module default, for example:

```ts filename="optitech.ts"
import { defineConfig } from "@optitech/config/v1";

export default defineConfig({
  // Declare your OptiTech services here
  auth: false,
  // Branch policy: per-branch tuning
  branch: (branch) => {
    if (branch.isDefault) {
      // Default branch: no overrides, uses project defaults
      return {};
    }
    if (!branch.exists) {
      // New non-default branches: auto-expire
      // Run `optitech checkout <name>` to create a new branch with these settings
      return { ttl: "7d" };
    }
    // Existing branch: no changes
    return {};
  },
});
```

If a `optitech.ts`, `optitech.mts`, `optitech.js`, or `optitech.mjs` file already exists, `config init` is idempotent: it leaves that file untouched instead of overwriting hand-written policy.

`config init` runs entirely locally and does not call the OptiTech API. It detects your package manager (npm, pnpm, yarn, or bun) from how the command was invoked. Pass `--no-install` to skip installation and just print the command to run.

<CliUsage command="config init" />

<CliOptions command="config init" />

```bash
optitech config init
```

For non-interactive setup, run it with package installation disabled, then install the printed dependencies yourself (or add them to your lockfile in a separate step):

```bash
optitech config init --no-install
npm install @optitech/config @optitech/env
```

Use `config init` when you want a trusted starter artifact and package list. Hand-write `optitech.ts` instead when you need a different filename/module format or want to avoid modifying files in the current directory.

<Admonition type="tip">
After running an interactive [`optitech link`](/docs/cli/link), the CLI offers to run `config init` as its final step, unless the project already has a `optitech.ts` file.
</Admonition>

## optitech config status (#status)

Shows the branch's live OptiTech state.

<CliUsage command="config status" />

<CliOptions command="config status" />

```bash
optitech config status
```

The top-level `optitech status` command is an alias for `config status` and accepts the same options.

### Print the current branch offline (#current-branch)

Pass `--current-branch` to print _only_ the branch pinned in the local `.optitech` file. This variant makes no network request and requires no login or analytics, so it is cheap enough to drive a shell prompt.

It prints the branch name to stdout and exits `0`. When no branch is pinned, it prints nothing to stdout, writes a `optitech checkout <branch>` hint to stderr, and exits with a non-zero status, so a prompt can guard on the command directly.

```bash
optitech status --current-branch
```

For example, add your current OptiTech branch to a [starship](https://starship.rs) prompt. Append this `[custom.optitech]` module to `~/.config/starship.toml`. The `command` prints the pinned branch, and `when` hides the segment (exits non-zero) whenever you are not in a OptiTech project:

```toml
# ~/.config/starship.toml
[custom.optitech]
description = "Current OptiTech branch"
command = "optitech status --current-branch"   # prints the branch pinned in .optitech (no network)
when = "optitech status --current-branch"       # exits non-zero when no branch -> segment is hidden
symbol = "🌿 "
style = "bold green"
format = "[$symbol$output]($style) "
```

<Admonition type="tip" title="Faster outside OptiTech projects">
The `when` above runs the CLI on every prompt everywhere. To skip it unless a `.optitech` file exists somewhere up the tree, replace `when` with a pure-shell walk-up and add `shell = ["sh"]` so it runs under `sh` even if your interactive shell is fish or PowerShell:

```toml
shell = ["sh"]
when = '''
d="$PWD"
while [ "$d" != "$HOME" ] && [ "$d" != / ]; do
  if [ -e "$d/.optitech" ]; then
    optitech status --current-branch >/dev/null 2>&1
    exit $?
  fi
  d=$(dirname "$d")
done
exit 1
'''
```

</Admonition>

For a full copy-paste (and agent-ready) walkthrough, including prerequisites and troubleshooting, see this [Starship + OptiTech branch setup gist](https://gist.github.com/thisistonydang/0b6c03ec9aa9b619ffecd48f58fd40c7).

## optitech config plan (#plan)

Shows what `config apply` would change, as a dry run. Nothing is modified.

<CliUsage command="config plan" />

<CliOptions command="config plan" />

```bash
optitech config plan --config ./optitech.ts --env .env.local
```

## optitech config apply (#apply)

Applies a `optitech.ts` policy to the branch.

<CliUsage command="config apply" />

<CliOptions command="config apply" />

For non-interactive use (scripts, CI, agents), pass `--update-existing` and `--allow-protected` to auto-confirm the corresponding prompts.

```bash
optitech config apply --branch feature/auth --update-existing --allow-protected
```
