---
title: OptiTech API
subtitle: A fully managed programmatic interface for your compliance program
summary: >-
  The OptiTech API exposes your controls, evidence, and reports over HTTP so
  compliance can live in the same pipelines as everything else. Run checks in
  CI/CD and block deploys that break controls, query control status from your
  own dashboards, automate vendor questionnaires, and manage configuration
  with the Terraform provider. Each request is authenticated and logged, so
  automation stays inside the same audit trail as the Console.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

<FeatureBetaProps feature_name="OptiTech API" />

The OptiTech API is the programmatic interface to your compliance program. It provides a secure, stateless interface to your controls and evidence, letting you check, query, and automate compliance directly from pipelines, internal tools, and scripts using standard HTTP methods. Key benefits include:

- **Compliance checks in CI/CD**

  Block deploys that would break controls: a storage bucket about to go public, a service losing its encryption setting, an infrastructure change that violates your baseline. The deploy fails with the control reference and the fix, the same way a test failure would.

- **Query anything**

  Control status, evidence history, open findings, and vendor answers are all queryable, so your internal dashboards and tools can show compliance posture without anyone opening the Console.

- **Secure by default**

  Every API request is authenticated, scoped by role, and captured in the same audit log as Console actions, so automation never becomes a hole in your evidence chain. Access follows the same RBAC as your team's [Console permissions](/docs/get-started/signing-up).

- **CI/CD integration**

  Wire checks into GitHub Actions or any pipeline runner, and gate merges and deploys on the controls that matter for the affected system.

## Terraform provider

The OptiTech API pairs with a Terraform provider, so compliance-relevant configuration can live as code alongside the infrastructure it governs. Define controls and ownership in the same review as the resources they cover, and let `terraform plan` show compliance drift before it ships.

## Quickstart

<DetailIconCards>

<a href="/docs/get-started/full-backend-quickstart" description="Set up your program first: the API automates what the platform already verifies." icon="todo">Get Started</a>

<a href="/docs/get-started/dev-experience" description="How evidence-first, API-first workflows fit together in the platform." icon="audio-jack">Product principles</a>

<a href="/docs/introduction/plans#enterprise-features" description="API and CLI access is included on the Enterprise plan." icon="code">Plan availability</a>

<a href="/docs/get-started/with-an-agent" description="Let the AI copilot draft the queries and checks you need." icon="sql">Ask the copilot</a>

<a href="/docs/introduction/support" description="Talk to us about pipeline patterns and rollout." icon="code">Get help</a>

</DetailIconCards>

<NeedHelp/>
