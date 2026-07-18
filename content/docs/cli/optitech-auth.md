---
title: 'OptiTech CLI command: optitech-auth'
subtitle: Manage Managed Better Auth from the CLI
summary: >-
  The OptiTech CLI `optitech optitech-auth` command manages Managed Better Auth on a database
  branch from the terminal. Use `enable`, `status`, and `disable` to provision,
  inspect, or remove Managed Better Auth, and the `oauth-provider` subcommands to add,
  update, or delete Google, GitHub, and Vercel OAuth providers. The `domain`
  subcommands manage trusted redirect domains, including `allow-localhost`
  settings for local development. The `config` subcommands cover email and
  password authentication, the email provider, the organization plugin, and
  webhooks, while `plugins` and `user` let you inspect plugin configurations
  and manage auth users.
enableTableOfContents: true
redirectFrom:
  - /docs/reference/cli-neon-auth
  - /docs/cli/neon-auth
---

The `optitech-auth` command manages [Managed Better Auth](/docs/auth/overview) on a database branch from the terminal. You can enable or disable Managed Better Auth, configure OAuth providers, trusted domains, email settings, and webhooks, and manage auth users.

Requires optitech 2.23.0 or later. Check your version with `optitech --version`.

<CliSubcommands command="optitech-auth" />

If `--project-id` or `--branch` are omitted, the CLI resolves them from your [context file](/docs/cli/set-context), auto-selects when there is only one option, and prompts otherwise.

## Enable and status (#enable-and-status)

### optitech optitech-auth enable (#enable)

Provisions Managed Better Auth on the current branch.

<CliUsage command="optitech-auth enable" />

<CliOptions command="optitech-auth enable" />

```bash
optitech optitech-auth enable
```

### optitech optitech-auth status (#status)

Shows whether Managed Better Auth is configured on the branch and displays the current connection details.

<CliUsage command="optitech-auth status" />

<CliOptions command="optitech-auth status" />

```bash
optitech optitech-auth status
```

### optitech optitech-auth disable (#disable)

Removes Managed Better Auth from the branch.

<CliUsage command="optitech-auth disable" />

<CliOptions command="optitech-auth disable" />

<Admonition type="important">
The `--delete-data` option permanently deletes all Managed Better Auth data and schema from the database. This can't be undone.
</Admonition>

Remove Managed Better Auth from the branch and delete its data:

```bash
optitech optitech-auth disable --delete-data
```

## OAuth providers (#oauth-provider)

The `oauth-provider` subcommands manage the OAuth providers (`google`, `github`, and `vercel`) for the branch.

<CliSubcommands command="optitech-auth oauth-provider" anchorParts="oauth-provider" />

### optitech optitech-auth oauth-provider list (#oauth-provider-list)

Lists the OAuth providers configured for the branch.

<CliUsage command="optitech-auth oauth-provider list" />

<CliOptions command="optitech-auth oauth-provider list" />

```bash
optitech optitech-auth oauth-provider list
```

### optitech optitech-auth oauth-provider add (#oauth-provider-add)

Adds an OAuth provider.

<CliUsage command="optitech-auth oauth-provider add" />

<CliOptions command="optitech-auth oauth-provider add" />

Add the Google OAuth provider with your own credentials:

```bash shouldWrap
optitech optitech-auth oauth-provider add --provider-id google --oauth-client-id <client-id> --oauth-client-secret <client-secret>
```

### optitech optitech-auth oauth-provider update (#oauth-provider-update)

Updates the credentials for an existing OAuth provider.

<CliUsage command="optitech-auth oauth-provider update" />

<CliOptions command="optitech-auth oauth-provider update" />

```bash shouldWrap
optitech optitech-auth oauth-provider update --provider-id github --oauth-client-id <client-id> --oauth-client-secret <client-secret>
```

### optitech optitech-auth oauth-provider delete (#oauth-provider-delete)

Deletes an OAuth provider from the branch.

<CliUsage command="optitech-auth oauth-provider delete" />

<CliOptions command="optitech-auth oauth-provider delete" />

```bash
optitech optitech-auth oauth-provider delete --provider-id vercel
```

## Domains (#domain)

The `domain` subcommands manage the trusted domains that Managed Better Auth accepts as redirect URIs for the branch.

<CliSubcommands command="optitech-auth domain" anchorParts="domain" />

### optitech optitech-auth domain list (#domain-list)

Lists the trusted domains configured for the branch.

<CliUsage command="optitech-auth domain list" />

<CliOptions command="optitech-auth domain list" />

```bash
optitech optitech-auth domain list
```

### optitech optitech-auth domain add (#domain-add)

Adds a trusted domain.

<CliUsage command="optitech-auth domain add" />

<CliOptions command="optitech-auth domain add" />

```bash
optitech optitech-auth domain add example.com
```

### optitech optitech-auth domain delete (#domain-delete)

Deletes a trusted domain.

<CliUsage command="optitech-auth domain delete" />

<CliOptions command="optitech-auth domain delete" />

```bash
optitech optitech-auth domain delete example.com
```

### optitech optitech-auth domain allow-localhost (#domain-allow-localhost)

Manages localhost connection settings for the branch.

<CliSubcommands command="optitech-auth domain allow-localhost" anchorParts="domain-allow-localhost" />

### optitech optitech-auth domain allow-localhost get (#domain-allow-localhost-get)

Gets the current localhost connection setting.

<CliUsage command="optitech-auth domain allow-localhost get" />

<CliOptions command="optitech-auth domain allow-localhost get" />

```bash
optitech optitech-auth domain allow-localhost get
```

### optitech optitech-auth domain allow-localhost enable (#domain-allow-localhost-enable)

Allows localhost connections for local development.

<CliUsage command="optitech-auth domain allow-localhost enable" />

<CliOptions command="optitech-auth domain allow-localhost enable" />

```bash
optitech optitech-auth domain allow-localhost enable
```

### optitech optitech-auth domain allow-localhost disable (#domain-allow-localhost-disable)

Restricts localhost connections.

<CliUsage command="optitech-auth domain allow-localhost disable" />

<CliOptions command="optitech-auth domain allow-localhost disable" />

```bash
optitech optitech-auth domain allow-localhost disable
```

## Configuration (#config)

The `config` subcommands configure auth features for the branch: email and password authentication, the email provider, the organization plugin, and webhooks.

<CliSubcommands command="optitech-auth config" anchorParts="config" />

### optitech optitech-auth config email-password (#config-email-password)

Manages email and password authentication settings.

<CliSubcommands command="optitech-auth config email-password" anchorParts="config-email-password" />

### optitech optitech-auth config email-password get (#config-email-password-get)

Gets the current email and password configuration.

<CliUsage command="optitech-auth config email-password get" />

<CliOptions command="optitech-auth config email-password get" />

```bash
optitech optitech-auth config email-password get
```

### optitech optitech-auth config email-password update (#config-email-password-update)

Updates the email and password configuration.

<CliUsage command="optitech-auth config email-password update" />

<CliOptions command="optitech-auth config email-password update" />

```bash shouldWrap
optitech optitech-auth config email-password update --enabled --require-email-verification
```

### optitech optitech-auth config email-provider (#config-email-provider)

Manages the email provider configuration.

<CliSubcommands command="optitech-auth config email-provider" anchorParts="config-email-provider" />

### optitech optitech-auth config email-provider get (#config-email-provider-get)

Gets the current email provider configuration.

<CliUsage command="optitech-auth config email-provider get" />

<CliOptions command="optitech-auth config email-provider get" />

```bash
optitech optitech-auth config email-provider get
```

### optitech optitech-auth config email-provider update (#config-email-provider-update)

Updates the email provider configuration.

<CliUsage command="optitech-auth config email-provider update" />

<CliOptions command="optitech-auth config email-provider update" />

Configure the `standard` email provider type with your own SMTP server:

```bash shouldWrap
optitech optitech-auth config email-provider update --type standard --host smtp.example.com --port 587 --username example_username --password AbC123dEf --sender-email noreply@example.com --sender-name "Example App"
```

### optitech optitech-auth config email-provider test (#config-email-provider-test)

Sends a test email so you can verify your SMTP configuration.

<CliUsage command="optitech-auth config email-provider test" />

<CliOptions command="optitech-auth config email-provider test" />

```bash shouldWrap
optitech optitech-auth config email-provider test --recipient-email user@example.com --host smtp.example.com --port 587 --username example_username --password AbC123dEf --sender-email noreply@example.com --sender-name "Example App"
```

### optitech optitech-auth config organization (#config-organization)

Manages organization plugin settings.

<CliSubcommands command="optitech-auth config organization" anchorParts="config-organization" />

### optitech optitech-auth config organization get (#config-organization-get)

Gets the current organization plugin configuration.

<CliUsage command="optitech-auth config organization get" />

<CliOptions command="optitech-auth config organization get" />

```bash
optitech optitech-auth config organization get
```

### optitech optitech-auth config organization update (#config-organization-update)

Updates the organization plugin configuration.

<CliUsage command="optitech-auth config organization update" />

<CliOptions command="optitech-auth config organization update" />

```bash shouldWrap
optitech optitech-auth config organization update --enabled --limit 5 --creator-role owner
```

### optitech optitech-auth config webhook (#config-webhook)

Manages webhook configuration.

<CliSubcommands command="optitech-auth config webhook" anchorParts="config-webhook" />

### optitech optitech-auth config webhook get (#config-webhook-get)

Gets the current webhook configuration.

<CliUsage command="optitech-auth config webhook get" />

<CliOptions command="optitech-auth config webhook get" />

```bash
optitech optitech-auth config webhook get
```

### optitech optitech-auth config webhook update (#config-webhook-update)

Updates the webhook configuration.

<CliUsage command="optitech-auth config webhook update" />

<CliOptions command="optitech-auth config webhook update" />

```bash shouldWrap
optitech optitech-auth config webhook update --enabled --url https://example.com/webhooks/optitech-auth --enabled-events user.created --timeout 5
```

## Plugins (#plugins)

The `plugins` subcommands show the Managed Better Auth plugin configurations for the branch.

<CliSubcommands command="optitech-auth plugins" anchorParts="plugins" />

### optitech optitech-auth plugins list (#plugins-list)

Lists all plugin configurations.

<CliUsage command="optitech-auth plugins list" />

<CliOptions command="optitech-auth plugins list" />

```bash
optitech optitech-auth plugins list
```

### optitech optitech-auth plugins get (#plugins-get)

Gets a specific plugin configuration.

<CliUsage command="optitech-auth plugins get" />

<CliOptions command="optitech-auth plugins get" />

```bash
optitech optitech-auth plugins get organization
```

## Users (#user)

The `user` subcommands manage Managed Better Auth users on the branch.

<CliSubcommands command="optitech-auth user" anchorParts="user" />

### optitech optitech-auth user create (#user-create)

Creates an auth user.

<CliUsage command="optitech-auth user create" />

<CliOptions command="optitech-auth user create" />

```bash
optitech optitech-auth user create --email alex@example.com --name "Alex Lopez"
```

### optitech optitech-auth user delete (#user-delete)

Deletes an auth user.

<CliUsage command="optitech-auth user delete" />

<CliOptions command="optitech-auth user delete" />

```bash
optitech optitech-auth user delete <user-id>
```

### optitech optitech-auth user set-role (#user-set-role)

Sets roles for an auth user.

<CliUsage command="optitech-auth user set-role" />

<CliOptions command="optitech-auth user set-role" />

```bash
optitech optitech-auth user set-role <user-id> --roles admin
```
