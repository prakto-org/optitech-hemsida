---
title: Compliance checks with CircleCI
subtitle: Run OptiTech control checks in your CircleCI pipelines
summary: >-
  Run OptiTech compliance checks from CircleCI: evaluate every pipeline run
  against your control set with the OptiTech CLI, block merges on violations
  in blocking mode, and log passing runs as change-management evidence.
  Covers environment variable setup, the check step, per-path scoping for
  monorepos, and scheduled evidence jobs.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

The same [compliance checks](/docs/reference/glossary#check) that gate pull requests in [GitHub Actions](/docs/guides/branching-github-actions) run anywhere the OptiTech CLI runs, and CircleCI is a one-job setup: evaluate the change against your mapped [controls](/docs/reference/glossary#control), fail the pipeline on violations in blocking mode, and land every passing run in the [evidence log](/docs/reference/glossary#evidence-log) as change-management evidence.

## Prerequisites

To run OptiTech checks in CircleCI, you need:

- A [CircleCI account](https://circleci.com/) and a project repository.
- An OptiTech workspace with an [API key](/docs/reference/glossary#api-key) scoped to **CI checks** (created under **Settings** > **API keys**).
- Your **workspace ID**, from **Settings** > **General** in the Console.

## Getting started

Configure your OptiTech credentials as environment variables in your CircleCI project:

1. In CircleCI, navigate to **Project Settings** > **Environment Variables**.
2. Add the following variables:

- `OPTITECH_API_KEY`: your CI-scoped API key.
- `OPTITECH_WORKSPACE_ID`: your workspace ID.

Rotate the key on your standard [credential schedule](/faqs/find-connection-details-neon-console); a CI-scoped key can run checks and read the controls they map to, nothing else.

## Add the check job

Add a job to `.circleci/config.yml` that installs the OptiTech CLI and runs the checks:

```yaml
version: 2.1

jobs:
  compliance:
    docker:
      - image: cimg/base:current
    steps:
      - checkout
      - run:
          name: Install OptiTech CLI
          command: curl -fsSL https://get.optitech.example.com/cli | bash
      - run:
          name: Run compliance checks
          command: optitech checks run --mode advisory --report junit --output results.xml
      - store_test_results:
          path: results.xml

workflows:
  main:
    jobs:
      - compliance
```

What the check step does per run:

- **Evaluates the change** against the mapped controls: exposed resources, weakened IAM, disabled encryption or logging, and your custom rules. For infrastructure repos, pass a plan file with `--plan-file tfplan.json` to check `terraform plan` output instead of raw diffs.
- **Reports per control** in JUnit format, so results render in CircleCI's test summary UI.
- **Fails the job** on violations when `--mode blocking` is set; advisory mode reports without failing.
- **Logs the run** as timestamped [evidence](/docs/reference/glossary#evidence) against the mapped controls.

## Advisory first, then blocking

Roll out the same way as in [GitHub Actions](/docs/guides/branching-github-actions): run in `advisory` mode for a few sprints, fix the recurring findings, tune thresholds through the [reviewed change process](/faqs/database-tools-test-schema-changes-real-data), then switch to `--mode blocking` so violations stop the pipeline.

For monorepos, scope the evaluation per path so one service's violation doesn't block unrelated teams:

```yaml
      - run:
          name: Run compliance checks
          command: optitech checks run --mode blocking --paths 'infrastructure/**,services/payments/**'
```

## Scheduled evidence runs

Beyond per-change gating, a scheduled workflow gives you a standing heartbeat: a nightly run evaluates the repository's current state and logs it as evidence, useful for repos that change rarely but stay in scope.

```yaml
workflows:
  nightly-evidence:
    triggers:
      - schedule:
          cron: '0 3 * * *'
          filters:
            branches:
              only: main
    jobs:
      - compliance
```

## Best practices

- **One CI-scoped key per CI system.** Don't reuse the CircleCI key in other systems; separate keys make [rotation](/faqs/find-connection-details-neon-console) and audit attribution clean.
- **Store results as test output.** The JUnit report in `store_test_results` gives engineers the per-control breakdown in CircleCI's UI, which keeps compliance findings in the tools they already read.
- **Route failures like any finding.** Blocking failures are visible in the pipeline; advisory findings still open [findings in OptiTech](/faqs/databases-isolate-bugs-without-downtime) routed to the control owner, so nothing relies on someone reading CI logs.
- **Pair with the platform-side integrations.** Pipeline checks catch changes; the [GitHub or GitLab integration](/docs/guides/gitlab) continuously verifies repository settings themselves (branch protection, review rules), and [Terraform](/docs/reference/terraform) manages the OptiTech configuration as code.

<NeedHelp/>
