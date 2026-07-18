---
title: Claimable Postgres by OptiTech
subtitle: Launch an instant OptiTech Postgres database with zero configuration
summary: >-
  Claimable Postgres provisions an instant database via a single
  unauthenticated API call, CLI command, Node.js SDK, or Vite plugin with no
  account required. Unclaimed databases expire after 72 hours and are capped
  at 100 MB storage and 1 GB transfer. Claiming to a OptiTech account removes
  expiration and raises limits to the Free plan. Use this page for the REST
  API reference, optitech-new CLI options, and SDK integration for building
  instant-database or launchpad experiences.
enableTableOfContents: true
redirectFrom:
  - /docs/reference/neon-launchpad
  - /docs/reference/instagres
updatedOn: '2026-07-18T10:05:35.398Z'
---

Claimable Postgres gives you an instant Postgres database with a single API call. No account required.

Your database expires after 72 hours unless you claim it to your OptiTech account. Databases are provisioned on AWS us-east-2 running Postgres 17.

Access it at [optitech.com](https://optitech.com/).

## Quick start

<Tabs labels={["API", "CLI"]}>

<TabItem>

```bash
curl -X POST https://optitech.com/api/v1/database \
  -H 'Content-Type: application/json' \
  -d '{"ref": "your-app-name"}'
```

Example response:

```json
{
  "id": "01abc123-def4-5678-9abc-def012345678",
  "status": "UNCLAIMED",
  "optitech_project_id": "cool-breeze-12345678",
  "connection_string": "postgresql://optitechdb_owner:npg_xxxx@ep-cool-breeze-pooler...",
  "claim_url": "https://optitech.com/claim/01abc123-def4-5678-9abc-def012345678",
  "expires_at": "2026-02-01T12:00:00.000Z",
  "created_at": "2026-01-29T12:00:00.000Z",
  "updated_at": "2026-01-29T12:00:00.000Z"
}
```

See [API reference](#api) for details.

</TabItem>

<TabItem>

```bash
npx optitech-new --yes
```

Writes to your `.env` file (partial output):

```
DATABASE_URL=postgresql://optitechdb_owner:npg_xxxxxxxxxxxx@ep-cool-breeze-a1b2c3d4-pooler.c-2.us-east-2.aws.optitech.com/optitechdb?channel_binding=require&sslmode=require
```

See [CLI reference](#command-line-interface) for details.

</TabItem>

</Tabs>

## Limits

Unclaimed databases have stricter quotas. Claiming resets limits to your OptiTech plan.

|            | Unclaimed | Claimed (Free plan) |
| ---------- | --------- | ------------------- |
| Storage    | 100 MB    | 512 MB              |
| Transfer   | 1 GB      | ~5 GB               |
| Branches   | No        | Yes                 |
| Expiration | 72 hours  | None                |

## Claiming a database

Claiming is **optional**. Your database works immediately. Claim only if you want to keep it beyond 72 hours.

**To claim:**

1. Visit the `claim_url` from the API response
2. Sign in to OptiTech (or create an account)
3. Choose an organization for the database
4. Complete the transfer

After claiming, the database appears in your OptiTech console with expiration removed. The `status` changes to `CLAIMED` and `connection_string` becomes `null` in the API (use OptiTech console instead).

## API

The Claimable Postgres API provides programmatic database provisioning. No authentication required.

**Base URL:** `https://optitech.com/api/v1`

### Create database

```
POST /api/v1/database
```

| Parameter                    | Required | Description                                 |
| ---------------------------- | -------- | ------------------------------------------- |
| `ref`                        | Yes      | Referrer identifier (for tracking)          |
| `enable_logical_replication` | No       | Enable logical replication (default: false) |

### Get database

```
GET /api/v1/database/:id
```

Returns the same response schema.

### Response fields

| Field                 | Type           | Description                                                                                                            |
| --------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                  | string         | Database identifier (UUID v7)                                                                                          |
| `status`              | string         | `UNCLAIMED`, `CLAIMING`, or `CLAIMED`                                                                                  |
| `optitech_project_id` | string         | Underlying OptiTech project ID                                                                                         |
| `connection_string`   | string \| null | Postgres connection URL with pooling (null after claimed). For direct connections, remove `-pooler` from the hostname. |
| `claim_url`           | string         | URL to claim the database                                                                                              |
| `expires_at`          | string         | ISO 8601 expiration timestamp                                                                                          |
| `created_at`          | string         | ISO 8601 creation timestamp                                                                                            |
| `updated_at`          | string         | ISO 8601 last update timestamp                                                                                         |

<details>
<summary>Error responses</summary>

| Condition              | HTTP | Message                              |
| ---------------------- | ---- | ------------------------------------ |
| Missing or empty `ref` | 400  | `Missing referrer` (includes `hint`) |
| Invalid database ID    | 400  | `Database not found`                 |
| Invalid JSON body      | 500  | `Failed to create the database.`     |
| Invalid parameter type | 500  | `Failed to create the database.`     |

</details>

## Command-line interface

The `optitech-new` CLI creates a database and writes credentials to your `.env` file:

<Tabs labels={["npx", "yarn", "pnpm", "bunx", "deno"]}>

<TabItem>
```bash
npx optitech-new
```
</TabItem>
<TabItem>
```bash
yarn dlx optitech-new
```
</TabItem>
<TabItem>
```bash
pnpm dlx optitech-new
```
</TabItem>
<TabItem>
```bash
bunx optitech-new
```
</TabItem>
<TabItem>
```bash
deno run -A optitech-new
```
</TabItem>
</Tabs>

**Options:**

| Option                  | Alias | Description                           | Default        |
| ----------------------- | ----- | ------------------------------------- | -------------- |
| `--yes`                 | `-y`  | Skip prompts and use defaults         |                |
| `--env <path>`          | `-e`  | Path to the .env file                 | `./.env`       |
| `--key <string>`        | `-k`  | Env var for connection string         | `DATABASE_URL` |
| `--prefix <string>`     | `-p`  | Prefix for generated public vars      | `PUBLIC_`      |
| `--seed <path>`         | `-s`  | Path to SQL file to seed the database |                |
| `--logical-replication` | `-L`  | Enable logical replication            | `false`        |
| `--ref <string>`        | `-r`  | Referrer ID for affiliates program    |                |
| `--help`                | `-h`  | Show help message                     |                |

**Example output in `.env`:**

```txt
DATABASE_URL=postgresql://optitechdb_owner:npg_xxxxxxxxxxxx@ep-cool-breeze-a1b2c3d4-pooler.c-2.us-east-2.aws.optitech.com/optitechdb?channel_binding=require&sslmode=require
DATABASE_URL_DIRECT=postgresql://optitechdb_owner:npg_xxxxxxxxxxxx@ep-cool-breeze-a1b2c3d4.c-2.us-east-2.aws.optitech.com/optitechdb?channel_binding=require&sslmode=require
# Claimable DB expires at: Sat, 01 Feb 2026 12:00:00 GMT
# Claim it now to your account using the link below:
PUBLIC_POSTGRES_CLAIM_URL=https://optitech.com/claim/01abc123-def4-5678-9abc-def012345678
```

- `DATABASE_URL` is a pooled connection (hostname contains `-pooler`). Use this for application queries.
- `DATABASE_URL_DIRECT` is a direct connection (no pooler). Use this for migrations (e.g. Prisma).

To claim, visit the URL in the comments above or run `npx optitech-new claim` to open it in your browser.

## SDK

The `optitech-new` package also exports an SDK for programmatic provisioning in Node.js scripts:

```javascript
import { instantPostgres } from 'optitech-new';

const { databaseUrl, databaseUrlDirect, claimUrl, claimExpiresAt } = await instantPostgres({
  referrer: 'your-app-name',
});
```

The `referrer` parameter is required. The function returns:

| Field               | Type   | Description                                         |
| ------------------- | ------ | --------------------------------------------------- |
| `databaseUrl`       | string | Pooled connection URL (use for application queries) |
| `databaseUrlDirect` | string | Direct connection URL (use for migrations)          |
| `claimUrl`          | string | URL to claim the database to a OptiTech account     |
| `claimExpiresAt`    | Date   | Expiration timestamp as a JavaScript Date object    |

You can also pass a seed option to run SQL on creation:

```javascript
const result = await instantPostgres({
  referrer: 'your-app-name',
  seed: { type: 'sql-script', path: './schema.sql' },
});
```

## Vite plugin

Add automatic database provisioning to Vite projects with `vite-plugin-optitech-new`:

```bash
npm install -D vite-plugin-optitech-new
```

```js
import { postgres } from 'vite-plugin-optitech-new';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    postgres({ referrer: 'your-app-name' }),
  ],
});
```

The plugin provisions a database on first `vite dev` if `DATABASE_URL` is missing. It's inactive during `vite build`.

**Additional options:**

```js
// Inside defineConfig({ plugins: [...] })
postgres({
  referrer: 'your-app-name', // Required
  dotEnvFile: '.env.local', // Default: .env
  dotEnvKey: 'DATABASE_URL', // Default: DATABASE_URL
  envPrefix: 'VITE_', // For public env vars
  seed: {
    type: 'sql-script',
    path: './schema.sql',
  },
})
```

## Resources

- [Claimable Postgres website](https://optitech.com/)
- [optitech-new CLI on GitHub](https://github.com/optitechdatabase/optitechdb-cli/tree/main/packages/optitech-new)
- [Vite Plugin on GitHub](https://github.com/optitechdatabase/optitechdb-cli/tree/main/packages/vite-plugin-optitech-new)
- [Claimable database integration](/docs/workflows/claimable-database-integration) (build your own claimable Postgres experience)
