---
title: OptiTech integration guides
subtitle: Connect the systems OptiTech collects evidence from, and migrate from other compliance platforms.
summary: >-
  Index of OptiTech integration guides organized by category: identity and
  access, productivity suites, cloud platforms, developer tools, device
  management, endpoint security, Swedish business systems, and automation.
  Also covers migrating from other compliance platforms like Vanta, Drata,
  Secureframe, Sprinto, and Cyberday.
enableTableOfContents: true
redirectFrom:
  - /docs/integrations/integrations-list/
updatedOn: '2026-07-18T10:05:35.398Z'
---

Every integration uses read-only API access wherever the provider supports it, feeds [automated checks](/docs/reference/glossary#check), and keeps your [asset inventory](/docs/reference/glossary#asset-inventory) current. Connect the identity provider and cloud platform first; they feed the most controls.

## Identity and access

<TechCards>

<a href="/docs/guides/microsoft-entra-id" title="Microsoft Entra ID" description="Verify MFA coverage, admin roles, and offboarding from Entra ID" icon="entra-id"></a>

<a href="/docs/guides/auth-okta" title="Okta" description="Set up SSO and SCIM, and verify MFA and offboarding from Okta" icon="okta"></a>

<a href="/docs/guides/google-workspace" title="Google Workspace" description="Verify 2-step verification, dormant accounts, and access from Google Workspace" icon="google-workspace"></a>

<a href="/docs/guides/bankid" title="BankID" description="Sign in to OptiTech with BankID and use it for policy e-signing" icon="bankid"></a>

</TechCards>

## Productivity and collaboration

<TechCards>

<a href="/docs/guides/microsoft-365" title="Microsoft 365" description="Collect sharing, mailbox, and tenant configuration evidence from Microsoft 365" icon="microsoft-365"></a>

<a href="/docs/guides/microsoft-teams" title="Microsoft Teams" description="Route findings and incident alerts to Teams channels" icon="microsoft-teams"></a>

<a href="/docs/guides/slack" title="Slack" description="Route findings and incident alerts to Slack channels" icon="slack"></a>

</TechCards>

## Cloud platforms

<TechCards>

<a href="/docs/guides/aws" title="AWS" description="Verify encryption, public exposure, logging, and backups across AWS accounts" icon="aws"></a>

<a href="/docs/guides/azure" title="Microsoft Azure" description="Verify encryption, network exposure, logging, and backups across Azure subscriptions" icon="azure"></a>

</TechCards>

## Developer tools

<TechCards>

<a href="/docs/guides/neon-github-integration" title="GitHub" description="Verify branch protection, reviews, and secret scanning across your org" icon="github"></a>

<a href="/docs/guides/gitlab" title="GitLab" description="Verify merge request approvals and protected branches from GitLab" icon="gitlab"></a>

<a href="/docs/guides/jira" title="Jira" description="Create tickets from findings and track remediation in Jira" icon="jira"></a>

</TechCards>

## Device management

<TechCards>

<a href="/docs/guides/intune" title="Microsoft Intune" description="Verify disk encryption, screen lock, and patch level per device" icon="intune"></a>

<a href="/docs/guides/jamf" title="Jamf" description="Verify macOS device encryption and compliance from Jamf" icon="jamf"></a>

</TechCards>

## Endpoint security

<TechCards>

<a href="/docs/guides/crowdstrike" title="CrowdStrike" description="Verify endpoint protection coverage from CrowdStrike Falcon" icon="crowdstrike"></a>

<a href="/docs/guides/microsoft-defender" title="Microsoft Defender" description="Verify endpoint protection and alerts from Defender for Endpoint" icon="microsoft-defender"></a>

</TechCards>

## Swedish business systems

<TechCards>

<a href="/docs/guides/fortnox" title="Fortnox" description="Sync the employee register to drive on- and offboarding checks" icon="fortnox"></a>

<a href="/docs/guides/visma" title="Visma" description="Sync the employee register from Visma for joiner and leaver checks" icon="visma"></a>

<a href="/docs/guides/kivra" title="Kivra" description="Send policy documents for signing through Kivra" icon="kivra"></a>

</TechCards>

## Monitoring and alerting

<TechCards>

<a href="/docs/guides/datadog" title="Datadog" description="Send compliance alerts and events from OptiTech to Datadog" icon="datadog"></a>

<a href="/docs/guides/grafana-cloud" title="Grafana Cloud" description="Send alerts and events from OptiTech to Grafana Cloud" icon="grafana"></a>

<a href="/docs/guides/opentelemetry" title="OpenTelemetry" description="Send events from OptiTech to any OpenTelemetry compatible backend" icon="opentelemetry"></a>

</TechCards>

## Migrate from another compliance platform

Switching tools? These guides cover exporting your history, importing it as baseline data, and keeping the audit trail unbroken. The general playbook is in [switching platforms without losing audit history](/faqs/best-managed-postgres-services-risky-migration).

<TechCards>

<a href="/docs/guides/migrate-from-vanta" title="Vanta" description="Move your controls, evidence, and policies from Vanta to OptiTech" icon="vanta"></a>

<a href="/docs/guides/migrate-from-drata" title="Drata" description="Move your compliance program from Drata to OptiTech" icon="drata"></a>

<a href="/docs/guides/migrate-from-secureframe" title="Secureframe" description="Move your compliance program from Secureframe to OptiTech" icon="secureframe"></a>

<a href="/docs/guides/migrate-from-sprinto" title="Sprinto" description="Move your compliance program from Sprinto to OptiTech" icon="sprinto"></a>

<a href="/docs/guides/migrate-from-cyberday" title="Cyberday" description="Move your ISMS from Cyberday to OptiTech" icon="cyberday"></a>

<a href="/docs/guides/migrate-from-spreadsheets" title="Excel and SharePoint" description="Import risks, suppliers, and assets from spreadsheets" icon="microsoft-excel"></a>

</TechCards>

## Automation and compliance as code

<TechCards>

<a href="/docs/guides/branching-github-actions" title="GitHub Actions" description="Run compliance checks on every pull request" icon="github"></a>

<a href="/docs/reference/terraform" title="Terraform" description="Manage workspaces, integrations, and controls as code" icon="terraform"></a>

<a href="/docs/guides/aws-lambda" title="AWS Lambda" description="Run scheduled compliance checks from AWS Lambda" icon="aws-lambda"></a>

</TechCards>
