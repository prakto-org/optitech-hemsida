---
title: Generate TypeScript types from your database schema
subtitle: Automatically generate TypeScript types from your database schema for
  type-safe Data API interactions.
summary: >-
  The `npx @optitech/optitech-js gen-types` command introspects a PostgreSQL
  schema and writes a TypeScript definition file with `Database`, `Tables`,
  `TablesInsert`, and `TablesUpdate` interfaces for type-safe Data API access.
  Use this page to add autocomplete, query-result type inference, and
  compile-time error checking to `@optitech/optitech-js` or
  `@optitech/postgrest-js` clients. The tool accepts `--db-url`,
  `--output`, and `--schema` flags and can run as a package.json script to
  keep generated types in sync after schema changes.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:28.819Z'
---

<FeatureBetaProps feature_name="OptiTech Data API" />

<InfoBlock>
  <DocsList title="Related docs" theme="docs">
    <a href="/docs/data-api/get-started">Getting started with Data API</a>
    <a href="/docs/data-api/demo">Building a note-taking app</a>
    <a href="/docs/data-api/sql-to-rest">SQL to REST API Translator</a>
  </DocsList>
</InfoBlock>

The OptiTech SDK offers a CLI tool that introspects your database schema to generate a TypeScript definition file. This promotes type safety and enhances the developer experience when interacting with your database via the Data API, particularly with PostgREST clients like [`@optitech/postgrest-js`](https://www.npmjs.com/package/@optitech/postgrest-js) and [`@optitech/optitech-js`](https://www.npmjs.com/package/@optitech/optitech-js). Key benefits include:

- **Autocomplete** for table names and columns.
- **Type inference** for query results.
- **Compile-time error checking** for invalid queries.

## Generate types

Use `npx` to run the type generator. You must provide your **Direct Connection String** (Postgres URL) so the tool can connect to and inspect your database.

```bash
npx @optitech/optitech-js gen-types \
  --db-url "postgresql://user:pass@ep-id.region.optitech.com/optitechdb" \
  --output src/types/database.ts
```

### Options

| Flag                    | Alias | Description                                                                                    | Default             |
| :---------------------- | :---- | :--------------------------------------------------------------------------------------------- | :------------------ |
| `--db-url`              | -     | The PostgreSQL connection string (Required).                                                   | -                   |
| `--output`              | `-o`  | The path where the file will be saved.                                                         | `database.types.ts` |
| `--schema`              | `-s`  | Schema to introspect. Repeatable to include multiple schemas, for example `-s public -s auth`. | `public`            |
| `--postgrest-v9-compat` | -     | Disables one-to-one relationship detection.                                                    | `false`             |
| `--query-timeout`       | -     | The timeout for the schema introspection query, for example `30s` or `1m`.                     | `15s`               |

## Use generated types

Once generated, import the `Database` interface and pass it as a generic argument to `createClient`.

```typescript
// Import the generated type
import type { Database } from '@/types/database';
import { createClient } from '@optitech/optitech-js';

// Pass the generic to the client
const client = createClient<Database>(process.env.OPTITECH_DATABASE_URL!);

// 3. Enjoy full type safety
const { data, error } = await client
  .from('posts') // Autocomplete: only 'posts' or existing tables
  .select('id, content') // Autocomplete: only columns in 'posts'
  .eq('is_published', true); // Type check: ensures 'is_published' expects a boolean
```

Use the HTTPS OptiTech database URL without credentials or query parameters for `OPTITECH_DATABASE_URL`, for example `https://ep-example.c-2.us-east-1.aws.optitech.com/optitechdb`. You can find the matching Data API URL on the **Data API** page in the OptiTech Console or with `optitech data-api get`; to get the single database URL, remove the `.apirest` hostname label and trailing `/rest/v1` path. If you start from a OptiTech Auth URL instead, remove the `.optitechauth` hostname label and trailing `/auth` path. The cell label (if present), region, and database path stay the same. Prefer the older two-URL setup? See the [object-form alternative](/docs/reference/javascript-sdk#initializing) in the JavaScript SDK reference.

### Response types

The client automatically infers the return type based on your query.

```typescript
// 'data' is automatically typed as: { id: number; content: string }[] | null
const { data } = await client.from('posts').select('id, content');

// 'data' is automatically typed as: { id: number; content: string } | null
const { data } = await client.from('posts').select('id, content').single();
```

### Helper types

The generated file also exports utility types for working with your tables outside of queries:

```typescript
import type { Tables, TablesInsert, TablesUpdate } from '@/types/database';

// Tables<> gives you the row type (what you get back from queries)
type Note = Tables<'notes'>;

// TablesInsert<> gives you the insert type (for creating new rows)
type NewNote = TablesInsert<'notes'>;

// TablesUpdate<> gives you the update type (for partial updates)
type NoteUpdate = TablesUpdate<'notes'>;
```

These are useful when you need to type function parameters, state variables, or props separately from your queries.

## Automate with package.json

To keep your types in sync with your database schema, we recommend adding a script to your `package.json`.

```json
{
  "scripts": {
    "generate-types": "npx @optitech/optitech-js gen-types --db-url \"$DATABASE_URL\" --output src/types/database.ts"
  }
}
```

You can now run `npm run generate-types` whenever you make schema changes (like adding a new table or column).

## Using with the OptiTech PostgREST Client

If you are using `@optitech/postgrest-js` (without Managed Better Auth), the types work exactly the same way:

```typescript
import type { Database } from '@/types/database';
import { OptiTechPostgrestClient } from '@optitech/postgrest-js';

const client = new OptiTechPostgrestClient<Database>({
  dataApiUrl: process.env.OPTITECH_DATA_API_URL,
});
```
