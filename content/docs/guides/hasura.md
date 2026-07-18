---
title: Connect from Hasura Cloud to OptiTech
subtitle: Learn how to connect a Hasura Cloud project to a new or existing OptiTech database
summary: >-
  Hasura Cloud connects to OptiTech Postgres either by OAuth (creating a new OptiTech
  project automatically) or by pasting an existing connection string into the
  Hasura Console. Connection limits depend on compute size and pooling settings,
  so tuning both OptiTech and Hasura values is required when hitting limits. Hasura
  event triggers, cron triggers, and source health checks can prevent OptiTech's
  scale-to-zero suspension.
enableTableOfContents: true
redirectFrom:
  - /docs/quickstart/hasura
  - /docs/integrations/hasura
updatedOn: '2026-07-18T10:05:35.398Z'
---

Hasura Cloud is an open source GraphQL engine that provides a scalable, highly available, globally distributed, secure GraphQL API for your data sources.

## Connecting to a new OptiTech database

Use the following instructions to connect to a new OptiTech database. This connection method authenticates you from Hasura Cloud.

1. Navigate to [Hasura Cloud](https://cloud.hasura.io/projects) and sign up or log in.
2. On the Hasura Cloud dashboard, click **Create a project** to create a new Hasura project.
   ![Hasura Create a Projects](/docs/guides/hasura/create-project.png)
3. After the project is initialized, click **Launch Console** to open the Hasura Console.
   ![Hasura Launch Console](/docs/guides/hasura/launch-console.png)
4. On the Hasura Console, Select **Data** from the top navigation bar.
5. Click **Postgres** > **Connect OptiTech Database**.
   ![Hasura Connect OptiTech Database](/docs/guides/hasura/connect-neon-database.png)
6. When prompted to login or sign up for OptiTech, we recommend selecting **Hasura** for seamless authentication.
7. You will be redirected to an Oauth page to authorize Hasura to access your OptiTech account. Click **Authorize** to allow Hasura to create a new OptiTech project and database.
   ![Hasura Authorize OptiTech](/docs/guides/hasura/authorize-hasura.png)

After authenticating, a new OptiTech Postgres database is created and connected to your Hasura project, and the OptiTech project connection string is associated with the `PG_DATABASE_URL` environment variable.

![Environment Variables](/docs/guides/hasura/environment-variables.png)

To start exploring Hasura's GraphQL API with data stored in OptiTech, see [Load a template in Hasura](#load-a-template-in-hasura-optional).

## Connecting to an existing OptiTech database

Use the following instructions to connect to an existing OptiTech database from Hasura Cloud. The connection is configured manually using a connection string.

### Prerequisites

- An existing OptiTech account. If you do not have one, see [Sign up](/docs/get-started/signing-up).
- An existing OptiTech project. If you do not have a OptiTech project, see [Create a project](/docs/manage/projects#create-a-project).
- A connection string for a database in your OptiTech project:

  ```text
  postgresql://[user]:[password]@[optitech_hostname]/[dbname]
  ```

  You can find your database connection string by clicking the **Connect** button on your **Project Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

### Add OptiTech as a data source

The following steps describe how to navigate to Hasura Cloud and connect to your OptiTech project.

1. Navigate to [Hasura Cloud](https://cloud.hasura.io/projects) and sign up or log in.
2. Click **Create Project** to create a Hasura Cloud project or click **Launch Console** to open an existing project.
3. In the Hasura Console, select **Data** from the top navigation bar.
4. Click **Postgres** > **Connect Existing Database**.
   ![Hasura Connect Existing Database](/docs/guides/hasura/connect-existing-database.png)

5. Paste your connection string into the **Database URL** field.

   <Admonition type="tip">
   To enhance security and manageability, consider using environment variables in Hasura instead of hardcoding the connection string. To do this, navigate to **Hasura Project settings** > **Env vars** > **New env var** and create a new variable (for example, `OPTITECH_DATABASE_URL`) with your connection string as its value.

   ![Create Environment Variable](/docs/guides/hasura/create-env-var.png)

   Then, in the connection tab, select **Connect database via Environment variable** and enter the variable name you created. This approach keeps your connection string secure and simplifies future updates.
   </Admonition>

6. Enter a display name for your database in the **Database name** field, and click **Connect Database**.

Hasura Cloud connects to your OptiTech project and automatically discovers the default `public` schema.

To start exploring Hasura's GraphQL API with data stored in OptiTech, see [Load a template in Hasura](#load-a-template-in-hasura-optional).

## Load a template in Hasura (optional)

Optionally, after connecting from your Hasura project to OptiTech, you can explore Hasura's GraphQL API by loading a template from Hasura's template gallery. Follow these steps to load the `Welcome to Hasura` template, which creates `customer` and `order` tables and populates them with sample data.

1. In the Hasura Console, select **Data**.
2. Under **Data Manager**, select your database.
3. From the **Template Gallery**, select **Welcome to Hasura** to install the template.

To view the newly created tables from the OptiTech Console:

1. In the Hasura Console, select **Data** > **Manage your OptiTech databases** to open the OptiTech Console.
2. In the OptiTech Console, select your project.
3. Select the **Tables** tab. The newly created `customer` and `order` tables should appear under the **Tables** heading in the sidebar.

## Import existing data to OptiTech

If you are migrating from Hasura with Heroku Postgres to OptiTech, refer to the [Import data from Heroku](/docs/import/migrate-from-heroku) guide for data import instructions. For general data import instructions, see [Import data from Postgres](/docs/import/migrate-from-postgres).

## Maximum connections configuration

In OptiTech, the maximum number of concurrent connections is defined according to the size of your compute. For example, a 0.25 CU compute in OptiTech supports 112 connections. The connection limit is higher with larger compute sizes (see [How to size your compute](/docs/manage/computes#how-to-size-your-compute)). You can also enable connection pooling in OptiTech to support up to 10,000 concurrent connections. However, it is important to note that Hasura has a `HASURA_GRAPHQL_PG_CONNECTIONS` setting that limits Postgres connections to `50` by default. If you start encountering errors related to "max connections", try increasing the value of this setting as a first step, staying within the connection limit for your OptiTech compute. For information about the Hasura connection limit setting, refer to the [Hasura Postgres configuration documentation](https://hasura.io/docs/latest/deployment/performance-tuning/#postgres-configuration).

## Scale to zero considerations

OptiTech suspends a compute after five minutes (300 seconds) of inactivity. This behavior can be adjusted on OptiTech's paid plans. For more information, refer to [Configuring Scale to zero for OptiTech computes](/docs/guides/scale-to-zero-guide).

If you rely on OptiTech's scale to zero feature to minimize database usage, note that certain Hasura configuration options can keep your OptiTech compute in an active state:

- [Event triggers](https://hasura.io/docs/latest/event-triggers/overview/) may periodically poll your OptiTech database for new events.
- [Cron triggers](https://hasura.io/docs/latest/scheduled-triggers/create-cron-trigger/) can invoke HTTP endpoints that execute custom business logic involving your OptiTech database.
- [Source Health Checks](https://hasura.io/docs/latest/deployment/health-checks/source-health-check/) can keep your OptiTech compute active if the metadata database resides in OptiTech.

<NeedHelp/>
