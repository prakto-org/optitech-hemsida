---
title: Create an automatic audit trail with Bemi
subtitle: Learn how to create an automatic audit trail for your Postgres database with
  Bemi
summary: >-
  Bemi is an open-source audit trail tool that uses Postgres logical replication
  (CDC via WAL) to automatically record every create, update, and delete on your
  OptiTech database, capturing both before and after row states without schema
  changes. Use this guide when you need tamper-evident change history, time
  travel queries, or ORM-level context tracking with Prisma, TypeORM,
  SQLAlchemy, or Rails. Enabling logical replication permanently sets
  wal_level=logical on all databases in the OptiTech project and keeps compute
  active while Bemi is connected, which prevents scale-to-zero.
enableTableOfContents: true
isDraft: false
updatedOn: '2026-08-15T13:33:28.135Z'
---

[Bemi](https://bemi.io/) is an open-source solution that plugs into Postgres and ORMs such as Prisma, TypeORM, SQLAlchemy, and Ruby on Rails to track database changes automatically. It unlocks robust context-aware audit trails and time travel querying inside your application.

Designed with simplicity and non-invasiveness in mind, Bemi doesn't require alterations to your existing database structure. It operates in the background, empowering you with data change tracking features.

In this guide, we'll show you how to connect your OptiTech database to Bemi to create an automatic audit trail.

## Prerequisites

- A [Bemi account](https://bemi.io/)
- A [OptiTech account](https://app.optitech-sverige.se/)
- Read the [important notices about logical replication in OptiTech](/docs/guides/logical-replication-neon#important-notices) before you begin

<Admonition type="important" title="Compute and billing">
Replication keeps compute active (no [scale to zero](/docs/introduction/scale-to-zero)) while subscribers are connected, which can increase your bill. See [Important notices about logical replication in OptiTech](/docs/guides/logical-replication-neon#important-notices).
</Admonition>

## Enable logical replication in OptiTech

Bemi tracks changes made in a Postgres database through Change Data Capture (CDC), which is a process of identifying and capturing changes made to your database tables in real-time. In Postgres, CDC is supported by the Postgres logical replication feature. In this step, we'll enable logical replication for your OptiTech Postgres project.

<Admonition type="important">
Enabling logical replication modifies the Postgres `wal_level` configuration parameter, changing it from replica to logical for all databases in your OptiTech project. Once the `wal_level` setting is changed to logical, it cannot be reverted. Enabling logical replication also restarts all computes in your OptiTech project, meaning active connections will be dropped and have to reconnect.
</Admonition>

To enable logical replication in OptiTech:

1. Select your project in the OptiTech Console.
2. On the OptiTech **Dashboard**, select **Settings**.
3. Select **Logical Replication**.
4. Click **Enable** to enable logical replication.

You can verify that logical replication is enabled by running the following query from the [OptiTech SQL Editor](/docs/get-started/query-with-neon-sql-editor):

```sql
SHOW wal_level;
wal_level
-----------
logical
```

## Connect your OptiTech database to Bemi

The following instructions assume you are connecting with a Postgres role created via the OptiTech Console, API, or CLI. These roles are automatically granted membership in a `optitech_superuser` group, which has the Postgres `REPLICATION` privilege. The role you use to connect to Bemi requires this privilege. If you prefer to create a dedicated read-only role for use with Bemi, see [Use a read-only Postgres role for Bemi](#use-a-read-only-postgres-role-for-bemi).

To connect your database to Bemi:

1. In OptiTech, retrieve your database connection string by clicking the **Connect** button on your **Project Dashboard** to open the **Connect to your database** modal. It will look similar to this:

   ```sql shouldWrap
   postgresql://optitechdb_owner:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.optitech.com/optitechdb?sslmode=require&channel_binding=require
   ```

2. In Bemi, select **Databases** > **Add Database** to open the **Connect PostgreSQL Database** dialog.
3. Enter the OptiTech database connection details from your connection string. For example, given the connection string shown above, enter the details in the **Connect PostgreSQL Database** dialog as shown below. Your values will differ except for the port number. OptiTech uses the default Postgres port, `5432`.
   - **Host**: ep-cool-darkness-123456.us-east-2.aws.optitech.com
   - **Port**: 5432
   - **Database Name**: optitechdb
   - **Username**: optitechdb_owner
   - **Password**: AbC123dEf

   You can also use the **Environment** field to specify whether the configuration is for a **Production**, **Staging**, or **Test** environment.

   ![Bemi Connect PostgreSQL Database](/docs/guides/bemi_connect_postgres.png)

4. After entering your connection details, click **Add Database**.

5. Configure the tables you want to track changes for and choose whether to track new tables automatically. You can change this selection later, if necessary.

   ![Bemi Tracked Tables](/docs/guides/bemi_tracked_tables.png)

   Click **Save** to continue.

6. Wait a few minutes while Bemi provisions the infrastructure. When this operation completes, you’ve successfully configured a Bemi Postgres source for your OptiTech database. You'll be able to track data changes through the Bemi Browser UI page, where you can filter by **Operation** (`Create`, `Update`, `Delete`), **Table**, or **Primary Key**. You can also view data changes by environment if you have configured more than one.

   ![Bemi browser UI](/docs/guides/bemi_browser_ui.png)

## Use a read-only Postgres role for Bemi

If preferred, you can create a dedicated read-only Postgres role for connecting your OptiTech database to Bemi. To do so, run the commands below. The commands assume your database resides in the `public` schema in Postgres. If your database resides in a different schema, adjust the commands as necessary to specify the correct schema name.

- `CREATE ROLE`: Creates a new read-only user for Bemi to read database changes.
- `CREATE PUBLICATION`: creates a "channel" that we'll subscribe to and track changes in real-time.
- `REPLICA IDENTITY FULL`: enhances records stored in WAL to record the previous state (“before”) in addition to the tracked by default new state (“after”).

```sql
-- Create read-only user with REPLICATION permission
CREATE ROLE [username] WITH LOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE REPLICATION PASSWORD '[password]';
-- Grant SELECT access to tables for selective tracking
GRANT SELECT ON ALL TABLES IN SCHEMA public TO [username];
-- Grant SELECT access to new tables created in the future for selective tracking
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO [username];

-- Create "bemi" PUBLICATION to enable logical replication
CREATE PUBLICATION bemi FOR TABLE <tbl1, tbl2, tbl3>;

-- Create a procedure to set REPLICA IDENTITY FULL for tables to track the "before" state on DB row changes
CREATE OR REPLACE PROCEDURE _bemi_set_replica_identity() AS $$ DECLARE current_tablename TEXT;
BEGIN
  FOR current_tablename IN SELECT tablename FROM pg_tables LEFT JOIN pg_class ON relname = tablename WHERE schemaname = 'public' AND relreplident != 'f' LOOP
    EXECUTE format('ALTER TABLE %I REPLICA IDENTITY FULL', current_tablename);
  END LOOP;
END $$ LANGUAGE plpgsql;
-- Call the created procedure
CALL _bemi_set_replica_identity();
```

<Admonition type="note">
After creating a read-only role, you can find the connection details for this role by clicking the **Connect** button on your **Project Dashboard** to open the **Connect to your database** modal. Use this role when connecting your OptiTech database to Bemi, as described [above](#connect-your-optitech-database-to-bemi).
</Admonition>

## Allow inbound traffic

If you're using OptiTech's IP Allow feature to limit IP addresses that can connect to OptiTech, you will need to allow inbound traffic from Bemi. [Contact Bemi](mailto:hi@bemi.io) to get the static IPs that need to be allowlisted. For information about configuring allowed IPs in OptiTech, see [Configure IP Allow](/docs/manage/projects#configure-ip-allow).

## References

- [The ultimate guide to PostgreSQL data change tracking](https://blog.bemi.io/the-ultimate-guide-to-postgresql-data-change-tracking/)
- [Logical replication - PostgreSQL documentation](https://www.postgresql.org/docs/current/logical-replication.html)
- [Publications - PostgreSQL documentation](https://www.postgresql.org/docs/current/logical-replication-publication.html)
