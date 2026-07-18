---
title: Connect GitLab to OptiTech
subtitle: Verify merge request approvals, protected branches, and access from GitLab
summary: >-
  Connect GitLab to OptiTech with a group access token to verify protected
  branches, merge request approval rules, secret detection, and member access
  across your GitLab group. The GitLab twin of the GitHub integration,
  feeding change management and secure development controls.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Change management controls in ISO 27001, NIS2, and SOC 2 all ask the same question: can unreviewed code reach production? If your code lives in GitLab, this integration answers it continuously: protected branches, approval rules, and secret detection verify on schedule, and drift opens a [finding](/docs/reference/glossary#finding) the day it happens. GitHub users: see the [GitHub integration](/docs/guides/neon-github-integration) instead.

## Prerequisites

- An OptiTech workspace with the **Admin** role.
- **Owner** on the GitLab group you're connecting (gitlab.com or self-managed).

## Connect the integration

1. In your GitLab group, create a **group access token** with `read_api` scope and the **Reporter** role. For self-managed instances, note your instance URL.
2. In the OptiTech Console, go to **Integrations** > **GitLab**, and enter the token and instance URL.
3. Select which projects are in scope: all projects in the group (new ones inherit automatically) or a chosen subset.
4. Run the first sync and confirm the project list matches your expectation.

Rotate the token on your standard [credential schedule](/faqs/find-connection-details-neon-console); OptiTech reminds you before it expires.

## Checks the integration activates

- **Protected branches**: default and release branches verified protected, with force-push disabled.
- **Approval rules**: merge requests require the configured approvals, and authors can't approve their own changes, the segregation-of-duties evidence [SOX ITGC](/faqs/what-is-sox-itgc) and ISO 27001 both want.
- **Secret detection**: verified enabled in the pipeline configuration for in-scope projects.
- **Member access**: group and project members with elevated roles enumerated for access reviews, and [offboarding checks](/docs/guides/microsoft-entra-id) confirm departed employees lose GitLab access too.
- **Repository inventory**: projects sync into the [asset inventory](/docs/reference/glossary#asset-inventory), so new repos enter scope on creation.

## Compliance checks in GitLab CI

Beyond monitoring settings, you can gate changes: run OptiTech's CLI in a GitLab CI job to check infrastructure changes against your controls before merge, the same [compliance-as-code pattern](/faqs/best-postgres-platforms-automatic-database-creation-ci-pipeline) as GitHub Actions. Add the job to your pipeline template so every project inherits it.

## Verify the connection

1. Confirm **Status: Connected** and a project count that matches your group.
2. Filter **Controls** by **Source: GitLab** and review the results.
3. Temporarily unprotect a branch in a test project and confirm the finding opens on the next sync, then re-protect it.

## Troubleshooting

- **Projects missing**: the token's role is below Reporter, or the projects sit outside the connected group; subgroups are included, sibling groups are not.
- **401 errors after working**: the token expired or was revoked; create a new one and update the integration.
- **Self-managed instance unreachable**: OptiTech's collectors need HTTPS access to your instance; allowlist the published egress IPs.

<NeedHelp/>
