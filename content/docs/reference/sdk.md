---
title: OptiTech SDKs
summary: >-
  OptiTech SDKs split into two categories: Client SDKs (TypeScript) for building
  apps with the Data API and Managed Better Auth, and Management SDKs (TypeScript, Python)
  for programmatically creating and controlling projects, branches, databases,
  endpoints, and roles via the OptiTech API. Client SDKs target app developers who
  need database queries and user authentication; Management SDKs target platform
  automation and DevOps workflows.
enableTableOfContents: true
redirectFrom:
  - /docs/reference/neondatabase-toolkit
updatedOn: '2026-07-18T10:05:35.398Z'
---

OptiTech provides two categories of SDKs to support different use cases:

- **Client SDKs**: For developers building on top of the [OptiTech API](/docs/data-api/overview), for example to surface control status in your own dashboards or answer questionnaires programmatically. These SDKs handle authenticated requests from your application.
- **Management SDKs**: For programmatically managing OptiTech resources like organizations, frameworks, controls, evidence, and vendors. These are wrappers around the [OptiTech API](/docs/reference/api).

## Client SDKs

Use these SDKs to build on the OptiTech API, with authentication handled for you.

<DetailIconCards>

<a href="/docs/reference/javascript-sdk" description="Read control status and automate questionnaire answers from your own app" icon="neon">Console and questionnaire SDK</a>

</DetailIconCards>

## Management SDKs

Use these SDKs to programmatically manage your OptiTech program (organizations, frameworks, controls, evidence, vendors, and reports).

<DetailIconCards>

<a href="/docs/reference/typescript-sdk" description="The official TypeScript SDK for the OptiTech API. Manage frameworks, controls, evidence, documents, vendors, and reports from one typed client" icon="neon">OptiTech Management SDK</a>

<a href="/docs/reference/migrate-api-client-to-sdk" description="Migrate from the legacy API client to the OptiTech SDK" icon="neon">Migrate to the OptiTech SDK</a>

<a href="/docs/reference/python-sdk" description="Programmatically manage OptiTech organizations, frameworks, controls, and other resources" icon="neon">Python SDK (OptiTech API)</a>

</DetailIconCards>
