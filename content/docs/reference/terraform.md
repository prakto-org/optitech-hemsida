---
title: Manage OptiTech with Terraform
subtitle: Use Terraform to manage your OptiTech workspaces, integrations, controls, and
  policies as code.
summary: >-
  The Terraform provider for OptiTech lets you define workspaces,
  integrations, custom controls, alert routing, and API keys as
  infrastructure-as-code in declarative HCL. Choose this page when you want to
  provision OptiTech configuration from code or bring existing
  Console-created resources under Terraform management with import blocks.
  Covers authentication, core resources, applying changes, and import.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Terraform is an open-source infrastructure as code (IaC) tool that allows you to define and provision resources in a declarative configuration language. For a compliance platform, that's a natural fit: your workspace configuration (which integrations are connected, which controls exist, how alerts route) becomes versioned, reviewed code, and changes to it flow through the same pull-request discipline your [change-management controls](/docs/guides/branching-github-actions) already enforce.

This guide shows you how to use **Terraform to manage your OptiTech workspaces**, including integrations, custom controls, and alert routing. The provider is available on the Enterprise plan, where [API access](/docs/reference/glossary#api-key) is included.

**OptiTech Terraform provider**

- Provider source: `optitech/optitech`
- Works with the same REST API as the Console and CLI, so anything you configure in code is visible in the UI and vice versa.

## Provider usage notes

- **Provider upgrades**: When using `terraform init -upgrade`, schema or default changes can lead to unintended resource replacements. To avoid surprises in a system your auditor relies on:
  - Review the provider changelog before upgrading.
  - In CI, use plain `terraform init`; run `terraform init -upgrade` manually, followed by plan review.
  - Run `terraform plan` before applying and read the diff; a replaced integration resource means a re-consent flow, not silent continuity.
  - Use [lifecycle protections](https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle#prevent_destroy) on critical resources like the workspace itself.
- **Terraform changes are audited too.** Every apply lands in the workspace [audit log](/docs/reference/glossary#audit-log) attributed to the API key's identity, so infrastructure-as-code changes carry the same trail as Console changes.

## Prerequisites

Before you begin, ensure you have the following:

1. **Terraform CLI installed:** Download and install from the [official Terraform website](https://developer.hashicorp.com/terraform/install).
2. **An OptiTech workspace** on the Enterprise plan.
3. **An OptiTech API key** with the **Automation** scope, created under **Settings** > **API keys**. See [API key](/docs/reference/glossary#api-key).

## Set up the Terraform OptiTech provider

1. **Create a project directory:**

   ```shell
   mkdir optitech-terraform
   cd optitech-terraform
   ```

2. **Create a `main.tf` file** declaring the provider:

   ```terraform
   terraform {
     required_providers {
       optitech = {
         source = "optitech/optitech"
       }
     }
   }

   provider "optitech" {}
   ```

3. **Initialize Terraform:**

   ```shell
   terraform init
   ```

## Configure authentication

The provider needs your API key. Configure it one of two ways:

1. **Environment variable (recommended):**

   ```shell
   export OPTITECH_API_KEY="<YOUR_API_KEY>"
   ```

   With the variable set, the `provider "optitech"` block stays empty. In CI, store the key as a pipeline secret, the same way as for [compliance checks](/docs/guides/branching-circleci).

2. **From a secrets manager:** retrieve the key from AWS Secrets Manager or HashiCorp Vault and reference it in the provider block. Avoid hardcoding keys in `.tf` files; they end up in state and in version control.

<Admonition type="note">
The following sections detail creating OptiTech resources from scratch. To manage resources you already created in the Console, use import blocks; see [Import existing OptiTech resources](#import-existing-optitech-resources).
</Admonition>

## Manage OptiTech resources

Now you can start defining OptiTech resources in your `main.tf` file.

### Managing workspaces

A [workspace](/docs/reference/glossary#workspace) is the top-level container for one organization's compliance program.

```terraform
resource "optitech_workspace" "main" {
  name        = "acme-ab"
  region      = "eu-north-1" # Swedish/EU regions only
  legal_entity = "Acme AB"

  frameworks = ["nis2", "iso-27001"]
}
```

**Key `optitech_workspace` attributes:**

- `name`: (Required) Workspace name.
- `region`: (Optional) Hosting region; all options are inside the EU. Changing it after creation requires a [managed relocation](/faqs/change-region-existing-neon-project) and is rejected by plan.
- `legal_entity`: (Optional) The legal entity the workspace covers; group structures create [one workspace per entity](/faqs/best-postgres-services-isolated-databases).
- `frameworks`: (Optional) Framework slugs to activate; your plan's framework cap applies.

**Output workspace details:**

```terraform
output "workspace_id" {
  value = optitech_workspace.main.id
}
```

### Managing integrations

[Integrations](/docs/reference/glossary#integration) connect the systems OptiTech collects evidence from. Terraform manages the configuration; OAuth-based consent (Entra ID, Google Workspace) still happens once in the browser, and the resource then pins the connection.

```terraform
resource "optitech_integration" "github" {
  workspace_id = optitech_workspace.main.id
  type         = "github"
  org          = "acme-ab"

  # scope new repositories into monitoring automatically
  auto_scope = true
}

resource "optitech_integration" "aws" {
  workspace_id = optitech_workspace.main.id
  type         = "aws"
  role_arn     = aws_iam_role.optitech_readonly.arn
  external_id  = optitech_workspace.main.id
}
```

**Key `optitech_integration` attributes:**

- `workspace_id`: (Required) The owning workspace.
- `type`: (Required) Integration type: `github`, `gitlab`, `aws`, `azure`, `entra-id`, `google-workspace`, `intune`, `jamf`, `crowdstrike`, `defender`, `fortnox`, `visma`, `slack`, `teams`, `jira`, and others.
- Type-specific connection attributes, as shown per integration in the [integration guides](/docs/guides/integrations).
- `auto_scope`: (Optional) Whether newly discovered resources enter monitoring automatically.

### Managing custom controls

[Custom controls](/faqs/create-tables-with-sql-neon) can be defined as code, which suits teams that review control changes like code changes.

```terraform
resource "optitech_control" "prod_access_ticket" {
  workspace_id = optitech_workspace.main.id
  name         = "Production access requires a change ticket"
  description  = "All production access grants must reference an approved change ticket."
  owner_team   = "platform"

  mappings = ["iso-27001:A.8.2", "nis2:access-control"]

  check {
    type     = "integration"
    source   = optitech_integration.aws.id
    rule     = "iam-grant-has-ticket-reference"
    schedule = "daily"
  }
}
```

**Key `optitech_control` attributes:**

- `name`: (Required) The control as a verifiable statement.
- `owner_team`: (Required) The [owning team](/faqs/best-ways-separate-postgres-database-development); findings route to it.
- `mappings`: (Optional) Framework requirement references the control satisfies via [cross-mapping](/docs/reference/glossary#cross-mapping).
- `check {}`: (Optional) Automated verification: an integration-backed rule and schedule, or a recurring manual task.

### Managing alert routing

```terraform
resource "optitech_alert_route" "platform_findings" {
  workspace_id = optitech_workspace.main.id
  team         = "platform"
  channel      = "jira"
  project_key  = "PLAT"
  severity_min = "medium"
}
```

Routing follows [control ownership](/faqs/databases-avoid-connection-limits-serverless-applications): map each team once to [Jira](/docs/guides/jira), [Slack](/docs/guides/slack), or [Teams](/docs/guides/microsoft-teams), and new controls inherit their owner's route.

### Managing API keys

You can manage OptiTech API keys themselves using Terraform.

```terraform
resource "optitech_api_key" "ci" {
  workspace_id = optitech_workspace.main.id
  name         = "ci-checks"
  scope        = "ci-checks"
}

output "ci_api_key_value" {
  description = "The actual API key token."
  value       = optitech_api_key.ci.key
  sensitive   = true
}
```

**Key `optitech_api_key` attributes:**

- `name`: (Required) A descriptive name.
- `scope`: (Required) `ci-checks`, `read-only`, or `automation`. Scope narrowly; see [API key](/docs/reference/glossary#api-key).
- `key`: (Computed, Sensitive) The generated token. Every use is attributed in the [audit log](/docs/reference/glossary#audit-log).

## Apply the configuration

Once you have defined your resources:

1.  **Format and validate:**

    ```shell
    terraform fmt
    terraform validate
    ```

2.  **Plan:**
    Run `terraform plan` to see what actions Terraform will take. This command shows you the resources that will be created, modified, or destroyed without making any changes. Review the output carefully to ensure it matches your expectations.

    ```shell
    terraform plan -out=tfplan
    ```

3.  **Apply:**
    Run `terraform apply` to create the resources in OptiTech.
    ```shell
    terraform apply tfplan
    ```
    Terraform will ask for confirmation before proceeding with the changes. Type `yes` to confirm.

You have now successfully created and managed OptiTech resources using Terraform! You can continue to modify your `main.tf` file to add, change, or remove resources as needed. After making changes, always run `terraform plan` to review the changes before applying them.

## Import existing OptiTech resources

If you have existing OptiTech resources that were created outside of Terraform (for example, via the OptiTech Console or API directly), you can bring them under Terraform's management. This allows you to manage their lifecycle with code moving forward.

Terraform offers two primary ways to do this: using the `terraform import` CLI command or, for Terraform `1.5.0` and later, using declarative `import` blocks directly in your configuration.

Both methods involve telling Terraform about an existing resource and associating it with a resource block in your configuration.

### Set up your Terraform configuration

Before importing, ensure your environment is configured for the OptiTech provider:

1. **Define the provider** in `main.tf` or a dedicated `providers.tf`:

   ```terraform
   terraform {
     required_providers {
       optitech = {
         source = "optitech/optitech"
       }
     }
   }

   provider "optitech" {}
   ```

2. **Initialize Terraform** with `terraform init`.

   <Admonition type="warning" title="Important: Provider Upgrades">
   Avoid `terraform init -upgrade` in CI pipelines and auto-approved pull requests; run it manually followed by plan review. See [Provider usage notes](#provider-usage-notes).
   </Admonition>

3. **Configure authentication** as described in [Configure authentication](#configure-authentication).

### OptiTech resource IDs for import

When importing, you need each resource type's ID format:

- **`optitech_workspace`:** the workspace ID (for example, `ws-acme-1a2b3c`), from **Settings** > **General**.
- **`optitech_integration`:** composite ID `<workspace_id>/<type>` (for example, `ws-acme-1a2b3c/github`).
- **`optitech_control`:** composite ID `<workspace_id>/<control_slug>`.
- **`optitech_alert_route`:** composite ID `<workspace_id>/<team>`.
- **`optitech_api_key`:** does not support import, since token values are shown only at creation. Recreate keys in Terraform and [rotate out the old ones](/faqs/find-connection-details-neon-console).

### Order of import for dependent resources

Import parents before children so references resolve:

```plaintext
Workspace -> Integrations -> Controls -> Alert routes
```

Choose [Method 1](#method-1-using-the-terraform-import-cli-command) for the traditional CLI command, or [Method 2](#method-2-using-import-blocks-terraform-150) for declarative `import` blocks.

### Method 1: Using the `terraform import` CLI command

For each resource, define a minimal resource block, then run the import command:

```terraform
resource "optitech_workspace" "main" {
  # populated after import via plan reconciliation
}
```

```shell
terraform import optitech_workspace.main ws-acme-1a2b3c
terraform import optitech_integration.github ws-acme-1a2b3c/github
terraform import optitech_control.prod_access_ticket ws-acme-1a2b3c/prod-access-ticket
```

After each import, run `terraform plan` and copy the reported attributes into your HCL until the plan is clean, as described in [Reconcile your HCL with the imported state](#reconcile-your-hcl-with-the-imported-state).

#### Run the import commands in order

Import parents first so references resolve, checking the state after each step:

```shell
terraform import optitech_workspace.main ws-acme-1a2b3c
terraform state show optitech_workspace.main
```

Example output:

```text
optitech_workspace.main: Importing from ID "ws-acme-1a2b3c"...
optitech_workspace.main: Import prepared!
  Prepared optitech_workspace for import
optitech_workspace.main: Refreshing state... [id=ws-acme-1a2b3c]

Import successful!

The resources that were imported are shown above. These resources are now in
your Terraform state and will henceforth be managed by Terraform.
```

Repeat for integrations, controls, and alert routes using the [ID formats above](#optitech-resource-ids-for-import). After importing all resources, your state file contains them, and you finish by [reconciling your HCL](#reconcile-your-hcl-with-the-imported-state).

### Method 2: Using `import` Blocks (Terraform 1.5.0+)

Terraform version 1.5.0 and later introduced a more declarative way to import existing infrastructure using `import` blocks directly within your configuration files. This method keeps the import definition alongside your resource configuration and makes the import process part of your standard `plan` and `apply` workflow.

For each existing OptiTech resource, define a minimal `resource` block plus an `import` block:

```terraform
# --- Workspace import ---
import {
  to = optitech_workspace.main
  id = "ws-acme-1a2b3c" # Replace with your actual workspace ID
}

resource "optitech_workspace" "main" {
  # Minimal definition for import.
  # After import and plan, populate this with actual attributes.
}

# --- Integration import ---
import {
  to = optitech_integration.github
  # ID format: workspace_id/integration_type
  id = "ws-acme-1a2b3c/github"
}

resource "optitech_integration" "github" {
  workspace_id = optitech_workspace.main.id
  type         = "github"
}
```

<Admonition type="important">
Replace the IDs in the `import` blocks with the actual IDs of your existing OptiTech resources. The `to` field refers to the corresponding `resource` block in your configuration.
</Admonition>

### Reconcile your HCL with the imported state

After importing, make your HCL match reality:

1. **Run `terraform plan`.** The plan lists attributes present in the imported state that aren't yet in your HCL, and reconciliation-only "update in-place" actions where Terraform resolves references to concrete values.
2. **Update your HCL** from the plan output until it reflects the actual (or intended) state.
3. **Repeat** until `terraform plan` reports:

```text
No changes. Your infrastructure matches the configuration.
```

From that point, the configuration is authoritative, and configuration drift shows up in plans, one more [drift detector](/docs/reference/glossary#check) in your program.

## Destroying resources

To remove the resources managed by Terraform:

```shell
terraform destroy
```

Terraform asks for confirmation before deleting. Note the platform's own guardrails: destroying a workspace resource follows the same [owner-only deletion rules and grace period](/faqs/delete-database-neon) as the Console, and destroying an integration stops evidence collection visibly rather than silently; the [monitoring gap is timestamped](/faqs/enable-disable-connection-pooling-neon).

<NeedHelp/>
