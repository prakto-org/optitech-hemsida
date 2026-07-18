---
title: Connect AWS to OptiTech
subtitle: Verify encryption, exposure, logging, and backups across your AWS accounts
summary: >-
  Connect AWS to OptiTech with a read-only IAM role deployed via
  CloudFormation or Terraform. The integration verifies encryption at rest,
  public exposure of storage and databases, CloudTrail coverage, backup
  configuration, and IAM hygiene across all accounts in your organization,
  feeding infrastructure controls in NIS2, ISO 27001, SOC 2, and PCI DSS.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

Your cloud configuration is where auditors and attackers look first. The AWS integration gives OptiTech read-only visibility into your accounts, so encryption, exposure, logging, and backup controls verify [continuously](/docs/reference/glossary#check) instead of annually, and a public S3 bucket becomes a Tuesday alert instead of an audit finding.

## Prerequisites

- An OptiTech workspace with the **Admin** or **Owner** role.
- Permissions to create an IAM role in the target AWS account, or to deploy a StackSet across an organization.

## Connect the integration

1. In the OptiTech Console, go to **Integrations** and select **AWS**.
2. Choose single account or **AWS Organizations** (deploys to all member accounts via StackSet).
3. Launch the provided CloudFormation template, or apply the equivalent [Terraform module](/docs/reference/terraform). It creates a read-only IAM role with an external ID binding it to your workspace.
4. Back in OptiTech, confirm the accounts appear and the first sync completes.

The role's policy is based on the AWS-managed `SecurityAudit` and `ViewOnlyAccess` policies: configuration metadata only, no data access.

## Checks the integration activates

- **Encryption at rest**: EBS volumes, S3 buckets, and RDS instances verified encrypted.
- **Public exposure**: S3 buckets, security groups, and database endpoints checked for unintended internet exposure.
- **CloudTrail coverage**: trails enabled in all regions, with retention and integrity validation on.
- **Backup configuration**: backup plans and snapshot recency for tagged resources, feeding [continuity controls](/faqs/iso-22301-compliance-optitech).
- **IAM hygiene**: root account MFA and inactivity, access key age, and overly broad policies.
- **Asset inventory sync**: accounts, regions, and key resources enumerate into the [asset inventory](/docs/reference/glossary#asset-inventory) on every sync, so shadow additions surface.

Failures open [findings](/docs/reference/glossary#finding) routed to your platform team, in [Jira](/docs/guides/jira) or [Slack](/docs/guides/slack) per your routing. Where safe, [auto-remediation](/faqs/databases-isolate-bugs-without-downtime) can fix drift directly or open a pre-filled ticket.

## Shift checks left

The same checks that monitor live accounts can gate changes before they ship: run them against `terraform plan` output in CI with [GitHub Actions](/docs/guides/branching-github-actions), so a security-group violation fails the pull request instead of paging anyone later.

## Verify the connection

1. Confirm every expected account shows **Connected** with a recent sync.
2. Filter **Controls** by **Source: AWS** and spot-check results against a known account.
3. Create a test bucket with public access in a sandbox account and confirm the finding opens on the next sync, then delete it.

## Troubleshooting

- **StackSet deployment gaps**: member accounts with SCPs blocking IAM role creation won't connect; the integration page lists accounts that failed.
- **AccessDenied in sync logs**: the role policy was modified; redeploy the template.
- **Missing region data**: opt-in regions must be enabled in the account for the role to enumerate them. If you also run Azure, connect the [Azure integration](/docs/guides/azure) for the same coverage there.

<NeedHelp/>
