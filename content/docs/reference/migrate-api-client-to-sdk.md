---
title: Migrate from @optitech/api-client to @optitech/sdk
subtitle: Move Platform API automation from the legacy Axios client to the official fetch-based SDK
summary: >-
  Step-by-step migration from @optitech/api-client to @optitech/sdk: package
  install, createOptiTechClient, namespace method mapping, error handling, and raw
  layer 1.0 breaking changes. Use this page when updating scripts, CI jobs, or
  apps that call the OptiTech Platform API with TypeScript.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

<Admonition type="note" title="@optitech/api-client still works">
The legacy [`@optitech/api-client`](https://www.npmjs.com/package/@optitech/api-client) package continues to work. [`@optitech/sdk`](https://www.npmjs.com/package/@optitech/sdk) is the recommended replacement for new projects and for teams that want fetch-based, zero-dependency Platform API access with ergonomic workflows.
</Admonition>

This guide maps common `@optitech/api-client` patterns to [`@optitech/sdk`](/docs/reference/typescript-sdk). For full method reference, see the [OptiTech Management SDK](/docs/reference/typescript-sdk) documentation.

## What changes

|               | `@optitech/api-client`                          | `@optitech/sdk`                                                          |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------ |
| HTTP client   | Axios                                           | `fetch` (zero runtime dependencies)                                      |
| Factory       | `createApiClient({ apiKey })`                   | `createOptiTechClient({ apiKey })`                                       |
| Method layout | Flat (`listProjects`, `createProjectBranch`, …) | Namespaced (`optitech.projects.list()`, `optitech.branches.create()`, …) |
| Success path  | `response.data` on Axios responses              | `{ data, error }` by default, or bare resource with `throwOnError: true` |
| Errors        | `AxiosError` + `error.response`                 | Typed `OptiTechError` hierarchy (`kind`: `api`, `not_found`, `auth`, …)  |
| Node.js       | Broader support                                 | **≥ 20.19** (or any runtime with global `fetch`)                         |
| Low-level API | Generated methods on the client                 | `raw.*` functions + `optitech.client`                                    |

## Install and swap the package

```bash
npm uninstall @optitech/api-client
npm install @optitech/sdk
```

Update imports:

```typescript
// Before
import { createApiClient } from '@optitech/api-client';

// After
import { createOptiTechClient } from '@optitech/sdk';
```

## Client setup

```typescript
// Before
const apiClient = createApiClient({
  apiKey: process.env.OPTITECH_API_KEY!,
});

// After — check { data, error } on each call
const optitech = createOptiTechClient({
  apiKey: process.env.OPTITECH_API_KEY!,
});

// After — throw on error (closer to try/catch style)
const optitech = createOptiTechClient({
  apiKey: process.env.OPTITECH_API_KEY!,
  throwOnError: true,
});
```

`createOptiTechClient` also supports `orgId`, `waitForReadiness`, `retries`, `baseUrl`, and a custom `fetch` implementation. See [OptiTech Management SDK](/docs/reference/typescript-sdk#client-configuration).

## Method mapping

Common Platform API calls and their `@optitech/sdk` equivalents:

| `@optitech/api-client`                 | `@optitech/sdk`                                                                          |
| -------------------------------------- | ---------------------------------------------------------------------------------------- |
| `getCurrentUserOrganizations()`        | `optitech.user.organizations()`                                                          |
| `getCurrentUserInfo()`                 | `optitech.user.me()`                                                                     |
| `listProjects({ org_id })`             | `optitech.projects.list({ org_id }).page()` or `.all()`                                  |
| `createProject({ project })`           | `optitech.projects.create({ name, region_id, … })`                                       |
| `getProject(projectId)`                | `optitech.projects.get(projectId)`                                                       |
| `deleteProject(projectId)`             | `optitech.projects.delete(projectId)`                                                    |
| `listProjectBranches({ projectId })`   | `optitech.branches.list(projectId).page()` or `.all()`                                   |
| `createProjectBranch(projectId, body)` | `optitech.branches.create(projectId, input)` or `optitech.branches.createWithCompute(…)` |
| `getConnectionUri(projectId, query)`   | `optitech.postgres.connectionString({ projectId, … })`                                   |
| `listProjectBranchDatabases(…)`        | `optitech.postgres.databases.list(…)`                                                    |
| `createProjectBranchDatabase(…)`       | `optitech.postgres.databases.create(…)`                                                  |
| `listProjectBranchRoles(…)`            | `optitech.postgres.roles.list(…)`                                                        |
| `createProjectBranchRole(…)`           | `optitech.postgres.roles.create(…)`                                                      |
| `listProjectEndpoints(projectId)`      | `optitech.postgres.endpoints.list(projectId)`                                            |
| `listApiKeys()`                        | `optitech.apiKeys.list()`                                                                |
| `getActiveRegions()`                   | `optitech.regions.list()`                                                                |

Endpoints that are not wrapped in an ergonomic namespace remain available through [`raw`](/docs/reference/typescript-sdk#raw-layer).

## Error handling

**Before** — Axios throws; inspect `error.response`:

```typescript
try {
  const response = await apiClient.getProject(projectId);
  console.log(response.data.project);
} catch (error) {
  // AxiosError — error.response?.status, error.response?.data
}
```

**After** — default `{ data, error }` envelope:

```typescript
const { data: project, error } = await optitech.projects.get(projectId);
if (error) {
  if (error.kind === 'not_found') {
    // handle 404
  }
  throw error;
}
console.log(project);
```

**After** — `throwOnError: true` on the client or per call:

```typescript
const optitech = createOptiTechClient({ apiKey, throwOnError: true });
const project = await optitech.projects.get(projectId); // throws OptiTechError on failure
```

## Side-by-side examples

### List projects

```typescript
// Before
const orgs = await apiClient.getCurrentUserOrganizations();
const orgId = orgs.data.organizations[0].id;
const response = await apiClient.listProjects({ org_id: orgId });
console.log(response.data.projects);

// After
const { data: orgs, error: orgsError } = await optitech.user.organizations();
if (orgsError) throw orgsError;

const { data: page, error } = await optitech.projects.list({ org_id: orgs[0].id }).page();
if (error) throw error;
console.log(page.items);
```

### Create a project with a connection string

```typescript
// Before
const response = await apiClient.createProject({
  project: { name: 'my-app', region_id: 'aws-us-east-1', pg_version: 17 },
});
const uri = response.data.connection_uris[0].connection_uri;

// After — waits for provisioning and returns a ready connection string
const { data, error } = await optitech.projects.createAndConnect({
  name: 'my-app',
  region_id: 'aws-us-east-1',
  pg_version: 17,
});
if (error) throw error;
const { project, connectionString } = data;
```

### Create a branch with compute

```typescript
// Before
import { EndpointType } from '@optitech/api-client';

await apiClient.createProjectBranch(projectId, {
  branch: { name: 'dev-1', parent_id: parentBranchId },
  endpoints: [{ type: EndpointType.ReadWrite }],
});

// After
const { data, error } = await optitech.branches.createWithCompute(projectId, {
  name: 'dev-1',
  parentId: parentBranchId,
});
if (error) throw error;
const { branch, endpoint, connectionString } = data;
```

### Create a database

```typescript
// Before
await apiClient.createProjectBranchDatabase(projectId, branchId, {
  database: { name: 'mydb', owner_name: 'optitechdb_owner' },
});

// After
const { error } = await optitech.postgres.databases.create(projectId, branchId, {
  name: 'mydb',
  owner_name: 'optitechdb_owner',
});
if (error) throw error;
```

## Raw layer changes in 1.0

If you adopted `@optitech/sdk` **0.x** and used `raw.*` directly, **1.0 changes the raw contract**:

| 0.x                                            | 1.0                                               |
| ---------------------------------------------- | ------------------------------------------------- |
| hey-api `{ data, request, response }` envelope | `{ data, error }` `OptiTechResult`                |
| `responseStyle: "data"`                        | **Removed**                                       |
| `throwOnError: true` needed workarounds        | Returns the bare resource; types narrow correctly |

```typescript
// Before (0.x)
const project = await raw.getProject({
  client: optitech.client,
  path: { project_id: projectId },
  throwOnError: true,
  responseStyle: 'data',
});

// After (1.0)
const project = await raw.getProject({
  client: optitech.client,
  path: { project_id: projectId },
  throwOnError: true,
});
```

Drop any `unwrapRaw` helpers or `responseStyle` usage.

## Types

Import request/response types from `@optitech/sdk` instead of `@optitech/api-client`:

```typescript
import type { Project, Branch } from '@optitech/sdk';
```

Some generated type names changed (for example, `DataAPI*` → `DataApi*`). Endpoint types are string unions (`"read_write"` / `"read_only"`) rather than enums.

## What you gain

- **Workflow helpers** such as `projects.createAndConnect` and `branches.createWithCompute` that poll operations and return connection strings
- **Readiness polling** via `waitForReadiness` and `optitech.operations.waitFor`
- **Automatic retries** on safe statuses (`423`, `429`, `503`)
- **Ergonomic beta APIs** for storage, functions, credentials, AI gateway, snapshots, and branch-scoped Managed Better Auth (`optitech.auth`, `optitech.storage`, …)
- **Tree-shakeable raw imports** from `@optitech/sdk/raw`

## Next steps

- [OptiTech Management SDK](/docs/reference/typescript-sdk) — install, configuration, examples, and namespace reference
- [OptiTech API Reference](/docs/reference/api) — REST endpoint details
- [`@optitech/sdk` on GitHub](https://github.com/optitechdatabase/optitech-pkgs/tree/main/packages/sdk) — full method tables and regeneration notes

<NeedHelp />
