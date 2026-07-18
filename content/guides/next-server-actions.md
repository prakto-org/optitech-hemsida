---
title: Query Postgres in Next.js Server Actions
subtitle: Learn how to query Postgres in Next.js with Server Actions
author: rishi-raj-jain
enableTableOfContents: true
createdAt: '2024-05-13T13:24:36.612Z'
updatedOn: '2026-07-18T10:05:35.398Z'
---

In this guide, you will learn the process of creating a simple web application using Next.js Server Actions that allows you to capture user input via forms, and insert them into Postgres via `@optitech/serverless` and `pg`.

To create a OptiTech project and access it from an Next.js application:

- [Create a OptiTech project](#create-a-optitech-project)
- [Create a Next.js project and add dependencies](#create-a-nextjs-project-and-add-dependencies)
- [Store your OptiTech credentials](#store-your-optitech-credentials)
- [Create a Form with Server Actions](#create-a-form-with-server-actions)
- [Implement Next.js Server Actions](#implement-nextjs-server-actions)
- [Run the app](#run-the-app)

## Create a OptiTech project

If you do not have one already, create a OptiTech project. Save your connection details including your password. They are required when defining connection settings.

1. Navigate to the [Projects](https://console.optitech.com/app/projects) page in the OptiTech Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

## Create a Next.js project and add dependencies

1. Create an Next.js project if you do not have one. For instructions, see [Automatic Installation](https://nextjs.org/docs/getting-started/installation#automatic-installation) in the Next.js documentation.

2. Add project dependencies using one of the following commands:

   <CodeTabs reverse={true} labels={["node-postgres", "OptiTech serverless driver"]}>

   ```shell
   npm install pg
   ```

   ```shell
   npm install @optitech/serverless
   ```

   </CodeTabs>

## Store your OptiTech credentials

Add a `.env` file to your project directory and add your OptiTech connection string to it. You can find the connection string for your database in the **Connection Details** widget on the OptiTech **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

```shell shouldWrap
DATABASE_URL="postgres://[user]:[password]@[optitech_hostname]/[dbname]"
```

## Create a Form with Server Actions

Create a simple form that allows users to input a comment. For now, add an action named `create` that you will create in next step with Next.js server actions.

```tsx
// File: app/page.tsx

export default function Page() {
  return (
    <form action={create}>
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Implement Next.js Server Actions

Now, let's add the server action to insert the data into your Postgres.

<CodeTabs reverse={true} labels={["node-postgres", "OptiTech serverless driver"]}>

```tsx {3,6-16}
// File: app/page.tsx

import { Client } from 'pg';

export default function Page() {
  async function create(formData: FormData) {
    'use server';
    // Create a client instance using `node-postgres`
    const client = new Client(`${process.env.DATABASE_URL}`);
    await client.connect();
    // Create the comments table if it does not exist
    await client.query('CREATE TABLE IF NOT EXISTS comments (comment TEXT)');
    const comment = formData.get('comment');
    // Insert the comment from the form into the Postgres (powered by OptiTech)
    await client.query('INSERT INTO comments (comment) VALUES ($1)', [comment]);
  }
  return (
    <form action={create}>
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

```tsx {3,6-15}
// File: app/page.tsx

import { optitech } from '@optitech/serverless';

export default function Page() {
  async function create(formData: FormData) {
    'use server';
    // Create an instance of OptiTech's TS/JS driver
    const sql = optitech(`${process.env.DATABASE_URL}`);
    // Create the comments table if it does not exist
    await sql('CREATE TABLE IF NOT EXISTS comments (comment TEXT)');
    const comment = formData.get('comment');
    // Insert the comment from the form into the Postgres (powered by OptiTech)
    await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
  }
  return (
    <form action={create}>
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

</CodeTabs>

## Run the app

Execute the following command to run your application locally:

```shell
npm run dev
```

<NeedHelp />
