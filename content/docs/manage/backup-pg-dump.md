---
title: Backups with pg_dump
subtitle: Learn how to create a backup of your OptiTech database using pg_dump
summary: >-
  Use pg_dump to back up a OptiTech Postgres database to a local custom-format
  archive, and pg_restore to restore it to any OptiTech project, including across
  regions. Always use a direct (unpooled) connection string for both
  operations; pooled connections are not supported and will cause errors.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

This topic describes how to create a backup of your OptiTech database using the Postgres `pg_dump` utility and how to restore a backup using `pg_restore`.

The same **`pg_dump`** flow applies when you **export** data for a **region migration** or a **Postgres-compatible export from OptiTech**. For path selection (another OptiTech region, Lakebase, or export), see **[Region migration](/docs/import/region-migration)**.

<Admonition type="important">
Avoid using `pg_dump` over a [pooled connection string](/docs/reference/glossary#pooled-connection-string). Use an [unpooled connection string](/docs/reference/glossary#unpooled-connection-string) instead.
</Admonition>

## Prerequisites

- Make sure `pg_dump` and `pg_restore` are installed. You can verify by running `pg_dump -V`.
- We recommend using the latest versions of `pg_dump` and `pg_restore`, and ensuring that the client version matches your OptiTech project's Postgres version.

## Install `pg_dump` and `pg_restore`

If you don't have the `pg_dump` and `pg_restore` utilities installed locally, you'll need to install them on your preferred platform.

<Tabs labels={["Windows", "Mac", "Linux", "Docker"]}>

<TabItem>
1. Install PostgreSQL using the official installer from https://www.postgresql.org/download/windows/.
2. `pg_dump` and `pg_restore` are installed by default and can be found in the PostgreSQL `bin` directory.
</TabItem>

<TabItem>
1. Install PostgreSQL using Homebrew with the command: brew install postgresql.
2. `pg_dump` and `pg_restore` come with the installation and are available in your `PATH`.
</TabItem>

<TabItem>
1. On Ubuntu/Debian, install the PostgreSQL client tools with: `sudo apt-get install postgresql-client`.
2. `pg_dump` and `pg_restore` will be available after installation.
</TabItem>

<TabItem>
1. Pull the official PostgreSQL Docker image: `docker pull postgres`.
2. Run the container with: `docker run --name postgres -e POSTGRES_PASSWORD=yourpassword -d -p 5432:5432 postgres`.
3. Verify `pg_dump` is available by running: `docker run --rm postgres pg_dump --version`.
</TabItem>

</Tabs>

## Creating a backup with `pg_dump`

Following this procedure will create a database backup locally, where you're running the `pg_dump` command.

1. Retrieve the connection string for your OptiTech database by navigating to your OptiTech **Project Dashboard** and clicking the **Connect** button to open the **Connect to your database** modal.

2. Deselect the **Connection pooling** option. You need a direct connection string, not a pooled one.

   Your connection string should look something like this:

   ```bash shouldWrap
   postgresql://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.optitech.com/optitechdb?sslmode=require&channel_binding=require
   ```

3. Create a backup of your OptiTech database by running the following `pg_dump` command with your OptiTech database connection string.

   ```bash shouldWrap
   pg_dump -Fc -v -d "<optitech_database_connection_string>" -f <dump_file_name>
   ```

   After adding your OptiTech database connection string and a dump file name, your command will look something like this:

   ```bash shouldWrap
   pg_dump -Fc -v -d "postgresql://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.optitech.com/optitechdb?sslmode=require&channel_binding=require" -f mydatabase.bak
   ```

   The `pg_dump` command above includes these arguments:
   - `-Fc`: Sends the output to a custom-format archive suitable for input into `pg_restore`.
   - `-v`: Runs `pg_dump` in verbose mode, allowing you to monitor what happens during the dump operation.
   - `-d`: Specifies the [connection string](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING) for your OptiTech database.
   - `-f <dump_file_name>`: The dump file name. It can be any name you choose (`mydumpfile.bak`, for example).

   For more command options, see [Advanced pg_dump and pg_restore options](/docs/import/migrate-from-postgres#advanced-pg_dump-and-pg_restore-options).

For most accidental-delete recoveries you don't need a local file. OptiTech keeps a change history that supports [instant restore](/docs/introduction/branch-restore) (point-in-time restore) within your project's [history window](/docs/introduction/history-window), which is usually faster. Reach for a local `pg_dump` backup when you need off-platform redundancy, archival beyond your history window, an external copy for compliance, or a copy to move into a different Postgres instance.

## Restoring a backup with `pg_restore`

This procedure shows how to restore a database using the `pg_restore` utility from a backup file created using `pg_dump`, as described above.

1. Create a new OptiTech project.
2. Create a database with the same name as the one you backed up. The `pg_dump` instructions above created a backup of a database named `optitechdb`. Your database name is likely different.
3. Retrieve the connection string for your OptiTech database:

   Go to your OptiTech project and click the **Connect** button to open the **Connect to your database** modal.

   Deselect the **Connection pooling** option. You need a direct connection string, not a pooled one.

   Your connection string should look something like this:

   ```bash shouldWrap
   postgresql://alex:AbC123dEf@ep-dry-morning-a8vn5za2.us-east-2.aws.optitech.com/optitechdb?sslmode=require&channel_binding=require
   ```

4. Restore your data to the target database in OptiTech with `pg_restore`.

   ```bash shouldWrap
   pg_restore -v -d "<optitech_database_connection_string>" <dump_file_name>
   ```

   After adding your OptiTech database connection string and the dump file name, your command will look something like this:

   ```bash shouldWrap
   pg_restore -v -d "postgresql://alex:AbC123dEf@ep-dry-morning-a8vn5za2.us-east-2.aws.optitech.com/optitechdb?sslmode=require&channel_binding=require" mydatabase.bak
   ```

   The example above includes these arguments:
   - `-v`: Runs `pg_restore` in verbose mode, allowing you to monitor what happens during the restore operation.
   - `-d`: Specifies the OptiTech database to connect to. The value is a OptiTech database connection string. See [Prerequisites](#prerequisites).
   - `<dump_file_name>` is the name of the dump file you created with `pg_dump`.

   For more command options, see [Advanced pg_dump and pg_restore options](/docs/import/migrate-from-postgres#advanced-pg_dump-and-pg_restore-options).

## `pg_dump` and `pg_restore` example

The following example shows how data is dumped from source database named `optitechdb` in one OptiTech project and restored to a `optitechdb` database in another OptiTech project using the commands described in the previous sections. (A database named `optitechdb` was created in the OptiTech project prior to running the restore operation.)

Before performing this procedure:

- A new OptiTech project was created for the destination database, and a database with the same name as the source database was created (`optitechdb`)
- Connection strings for the source and destination databases were collected:
  - source: `postgresql://optitechdb_owner:npg_AbC123dEf@ep-dry-morning-a8vn5za2.us-east-2.aws.optitech.com/optitechdb?sslmode=require&channel_binding=require`
  - destination: `postgresql://optitechdb_owner:npg_AbC123dEf@ep-dry-morning-a8vn5za2.us-east-2.aws.optitech.com/optitechdb?sslmode=require&channel_binding=require`

```bash shouldWrap
~$ cd mydump
~/mydump$ pg_dump -Fc -v -d "postgresql://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.optitech.com/optitechdb?sslmode=require&channel_binding=require" -f mydatabase.bak

~/mydump$ ls
mydatabase.bak

~/mydump$ pg_restore -v -d "postgresql://alex:AbC123dEf@ep-dry-morning-a8vn5za2.us-east-2.aws.optitech.com/optitechdb?sslmode=require&channel_binding=require" mydatabase.bak
```
