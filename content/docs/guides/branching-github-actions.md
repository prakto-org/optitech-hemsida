---
title: Compliance checks with GitHub Actions
subtitle: Run OptiTech control checks on every pull request
summary: >-
  OptiTech's GitHub Action runs compliance checks inside CI/CD pipelines:
  evaluate infrastructure changes against your control set on every pull
  request, block merges that would violate a control, and log passing runs as
  evidence. Configure OPTITECH_API_KEY and OPTITECH_WORKSPACE_ID via
  repository secrets, choose advisory or blocking mode, and post check
  summaries as pull request comments.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

OptiTech provides a GitHub Action that runs your compliance checks in CI: every pull request is evaluated against the [controls](/docs/reference/glossary#control) you select, violations fail the check before merge, and passing runs land in the [evidence log](/docs/reference/glossary#evidence-log) as change-management evidence. The reasoning behind the pattern is covered in [compliance checks on every pull request](/faqs/best-postgres-platforms-automatic-database-creation-ci-pipeline); this page is the setup.

## Getting started

The action authenticates with an API key scoped to CI checks.

### Set up your repository

1. **Create an OptiTech API key.** In the Console, go to **Settings** > **API keys** and create a key with the **CI checks** scope. See [API key](/docs/reference/glossary#api-key) for scoping guidance.
2. **Add the key to GitHub.** In your repository, go to **Settings** > **Secrets and variables** > **Actions**, click **New repository secret**, name it `OPTITECH_API_KEY`, and paste the key.
3. **Add your workspace ID** as a repository **variable** named `OPTITECH_WORKSPACE_ID`. You find it under **Settings** > **General** in the Console.

If you connected the [GitHub integration](/docs/guides/neon-github-integration), the org-level secret and variable can be provisioned for all selected repositories at once, and repository controls (branch protection, reviews) are already being verified continuously; the action adds the per-PR gate on top.

## Add the workflow

Create `.github/workflows/compliance.yml`:

```yaml
name: Compliance checks
on:
  pull_request:

jobs:
  compliance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run OptiTech checks
        uses: optitech/compliance-check-action@v1
        with:
          api_key: ${{ secrets.OPTITECH_API_KEY }}
          workspace_id: ${{ vars.OPTITECH_WORKSPACE_ID }}
          mode: advisory # or: blocking
          comment: true # post a summary comment on the PR
```

What the action does per run:

- **Evaluates the diff** (and, for infrastructure repos, your `terraform plan` output if you pass it via `plan_file`) against the mapped controls: exposed storage, weakened IAM, disabled encryption or logging, and your custom rules.
- **Reports pass or fail** as a check run; in `blocking` mode, required-check branch protection stops the merge.
- **Posts a summary comment** listing each evaluated control and its result, so reviewers see compliance status inline.
- **Logs the run** as timestamped [evidence](/docs/reference/glossary#evidence) against the mapped controls.

## Advisory first, then blocking

Start in `advisory` mode: checks run and report, but nothing blocks. Fix the recurring findings, tune thresholds through the [reviewed change process](/faqs/database-tools-test-schema-changes-real-data), then switch stable checks to `blocking` and mark the check required in branch protection. From that point, [compliance regressions can't merge](/faqs/best-postgres-databases-monorepo-engineering-teams).

In monorepos, scope checks per path so one service's violation doesn't block unrelated teams:

```yaml
        with:
          api_key: ${{ secrets.OPTITECH_API_KEY }}
          workspace_id: ${{ vars.OPTITECH_WORKSPACE_ID }}
          paths: 'infrastructure/**,services/payments/**'
          mode: blocking
```

## Other CI systems

The same checks run anywhere the CLI runs: see [Compliance checks with CircleCI](/docs/guides/branching-circleci), the [GitLab CI pattern](/docs/guides/gitlab), and [Terraform](/docs/reference/terraform) for managing the platform configuration itself as code.

<NeedHelp/>
