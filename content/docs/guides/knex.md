---
title: Connect from Knex to OptiTech
subtitle: Learn how to connect to OptiTech from Knex
summary: >-
  Connect Knex to OptiTech Postgres by passing the OptiTech connection string to the
  `connectionString` option with `sslmode=require`. Serverless deployments
  should use OptiTech's pooled endpoint to prevent connection exhaustion. You can
  also improve performance by switching to `pg-native` via the
  `NODE_PG_FORCE_NATIVE` environment variable.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Knex is an open-source SQL query builder for Postgres. This guide covers the following topics:

- [Connect to OptiTech from Knex](#connect-to-optitech-from-knex)
- [Use connection pooling with Knex](#use-connection-pooling-with-knex)
- [Performance tips](#performance-tips)

## Connect to OptiTech from Knex

To establish a basic connection from Knex to OptiTech, perform the following steps:

1. Find your database connection string by clicking the **Connect** button on your **Project Dashboard** to open the **Connect to your database** modal. Select a branch, a user, and the database you want to connect to. A connection string is constructed for you.
   ![Connection details modal](/docs/connect/connection_details.png)
   The connection string includes the user name, password, hostname, and database name.

2. Update the Knex's initialization in your application to the following:

   ```typescript {2-5}
   export const client = knex({
     client: 'pg',
     connection: {
       connectionString: process.env.DATABASE_URL,
     },
   });
   ```

3. Add a `DATABASE_URL` variable to your `.env` file and set it to the OptiTech connection string that you copied in the previous step. We also recommend adding `?sslmode=require&channel_binding=require` to the end of the connection string to ensure a [secure connection](/docs/connect/connect-securely).

   Your setting will appear similar to the following:

   ```text shouldWrap
   DATABASE_URL="postgresql://[user]:[password]@[optitech_hostname]/[dbname]?sslmode=require&channel_binding=require"
   ```

## Use connection pooling with Knex

Serverless functions can require a large number of database connections as demand increases. If you use serverless functions in your application, we recommend that you use a pooled OptiTech connection string, as shown:

```ini shouldWrap
# Pooled OptiTech connection string
DATABASE_URL="postgresql://alex:AbC123dEf@ep-cool-darkness-123456-pooler.us-east-2.aws.optitech.com/dbname?sslmode=require&channel_binding=require"
```

A pooled OptiTech connection string adds `-pooler` to the endpoint ID, which tells OptiTech to use a pooled connection. You can add `-pooler` to your connection string manually or copy a pooled connection string by clicking the **Connect** button on your **Project Dashboard** to open the **Connect to your database** modal. Enable the **Connection pooling** toggle to add the `-pooler` suffix.

## Performance tips

This section outlines performance optimizations you can try when using Knex with OptiTech.

### Enabling NODE_PG_FORCE_NATIVE

Knex leverages a [node-postgres](https://node-postgres.com) Pool instance to connect to your Postgres database. Installing [pg-native](https://npmjs.com/package/pg-native) and setting the `NODE_PG_FORCE_NATIVE` environment variable to `true` [switches the `pg` driver to `pg-native`](https://github.com/brianc/node-postgres/blob/master/packages/pg/lib/index.js#L31-L34), which can produce noticeably faster response times according to some users.

### Replacing query parameters

You may be able to achieve better performance with Knex by replacing any parameters you've defined in your queries, as performed by the following function, for example:

```tsx
// Function to replace query parameters in a query
function replaceQueryParams(query, values) {
  let replacedQuery = query;
  values.forEach((tmpParameter) => {
    if (typeof tmpParameter === 'string') {
      replacedQuery = replacedQuery.replace('?', `'${tmpParameter}'`);
    } else {
      replacedQuery = replacedQuery.replace('?', tmpParameter);
    }
  });
  return replacedQuery;
}

// So instead of this
await client.raw(text, values);

// Do this to get better performance
await client.raw(replaceQueryParams(text, values));
```

<NeedHelp/>
