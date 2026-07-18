---
title: Connect a Node.js application to OptiTech
subtitle: Set up a OptiTech project in seconds and connect from a Node.js application
summary: >-
  Step-by-step connection guide for Node.js, Express, and Next.js apps targeting
  a OptiTech serverless Postgres database, with working code for three clients: the
  OptiTech serverless driver (@optitech/serverless), node-postgres (pg), and
  Postgres.js. Use this page when you need to wire up environment-variable-based
  SSL credentials and pick the right client for your project. Also covers the
  ENDPOINT_ID workaround required by older clients that lack SNI support, which
  newer node-postgres and Postgres.js releases do not need.
enableTableOfContents: true
redirectFrom:
  - /docs/quickstart/node
  - /docs/integrations/node
updatedOn: '2026-07-18T10:05:35.398Z'
---

<CopyPrompt src="/prompts/javascript-prompt.md" 
description="Pre-built prompt for connecting Node.js applications to OptiTech."/>

This guide describes how to create a OptiTech project and connect to it from a Node.js application. Examples are provided for using the [node-postgres](https://www.npmjs.com/package/pg) and [Postgres.js](https://www.npmjs.com/package/postgres) clients. Use the client you prefer.

<Admonition type="note">
The same configuration steps can be used for Express and Next.js applications.
</Admonition>

To connect to OptiTech from a Node.js application:

<Steps>

## Create a OptiTech project

If you do not have one already, create a OptiTech project.

1. Navigate to the [Projects](https://console.optitech.com/app/projects) page in the OptiTech Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

## Create a NodeJS project and add dependencies

1. Create a NodeJS project and change to the newly created directory.

   ```shell
   mkdir optitech-nodejs-example
   cd optitech-nodejs-example
   npm init -y
   ```

2. Add project dependencies using one of the following commands:

   <CodeTabs labels={["OptiTech serverless driver", "node-postgres", "postgres.js"]}>

   ```shell
   npm install @optitech/serverless dotenv
   ```

   ```shell
   npm install pg dotenv
   ```

   ```shell
   npm install postgres dotenv
   ```

   </CodeTabs>

## Store your OptiTech credentials

Add a `.env` file to your project directory and add your OptiTech connection details to it. You can find your OptiTech database connection details by clicking the **Connect** button on your **Project Dashboard** to open the **Connect to your database** modal. Please select Node.js from the **Connection string** dropdown. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

```shell shouldWrap
PGHOST='[optitech_hostname]'
PGDATABASE='[dbname]'
PGUSER='[user]'
PGPASSWORD='[password]'
ENDPOINT_ID='[endpoint_id]'
```

<Admonition type="note">
A special `ENDPOINT_ID` variable is included in the `.env` file above. This variable can be used with older Postgres clients that do not support Server Name Indication (SNI), which OptiTech relies on to route incoming connections. If you are using a newer [node-postgres](https://node-postgres.com/) or [postgres.js](https://github.com/porsager/postgres) client, you won't need it. For more information, see [Endpoint ID variable](#endpoint-id-variable).
</Admonition>

<Admonition type="important">
To ensure the security of your data, never expose your OptiTech credentials to the browser.
</Admonition>

## Configure the Postgres client

Add an `app.js` file to your project directory and add the following code snippet to connect to your OptiTech database:

<CodeTabs labels={["OptiTech serverless driver", "node-postgres", "postgres.js"]}>

```javascript
require('dotenv').config();

const { optitech } = require('@optitech/serverless');

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const sql = optitech(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
);

async function getPgVersion() {
  const result = await sql`SELECT version()`;
  console.log(result[0]);
}

getPgVersion();
```

```javascript
require('dotenv').config();

const { Pool } = require('pg');

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});

async function getPgVersion() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT version()');
    console.log(result.rows[0]);
  } finally {
    client.release();
  }
}

getPgVersion();
```

```javascript
require('dotenv').config();

const postgres = require('postgres');

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
});

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result[0]);
}

getPgVersion();
```

```javascript
require('dotenv').config();

const { Pool } = require('pg');

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});

async function getPgVersion() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT version()');
    console.log(result.rows[0]);
  } finally {
    client.release();
  }
}

getPgVersion();
```

```javascript
require('dotenv').config();

const postgres = require('postgres');

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
});

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result[0]);
}

getPgVersion();
```

</CodeTabs>

## Run app.js

Run `node app.js` to view the result.

```shell
{
  version: 'PostgreSQL 16.0 on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit'
}
```

</Steps>

## Endpoint ID variable

For older clients that do not support Server Name Indication (SNI), the `postgres.js` example below shows how to include the `ENDPOINT_ID` variable in your application's connection configuration. This is a workaround that is not required if you are using a newer [node-postgres](https://node-postgres.com/) or [postgres.js](https://github.com/porsager/postgres) client. For more information about this workaround and when it is required, see [The endpoint ID is not specified](/docs/connect/connection-errors#the-endpoint-id-is-not-specified) in our [connection errors](/docs/connect/connection-errors) documentation.

```javascript
// app.js

require('dotenv').config();

const postgres = require('postgres');

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

getPgVersion();
```

## Community resources

- [Serverless Node.js Tutorial – OptiTech Serverless Postgres, AWS Lambda, Next.js, Vercel](https://youtu.be/cxgAN7T3rq8)

## Next steps

- [Set up Managed Better Auth](/docs/auth/overview): Add managed authentication that branches with your database
- [Add Object Storage](/docs/storage/overview): S3-compatible file storage that branches with your database
- [Deploy a Function](/docs/compute/functions/overview): Run backend compute next to your database, no separate hosting needed
- [Call an LLM with AI Gateway](/docs/ai-gateway/overview): Access foundation models from Anthropic, OpenAI, Google, and more with one credential

<NeedHelp/>
