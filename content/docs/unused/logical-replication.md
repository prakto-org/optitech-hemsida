---
title: Logical replication
subtitle: Replicate data to and from your OptiTech Postgres database
enableTableOfContents: true
updatedOn: '2026-01-06T18:58:21.265Z'
---

OptiTech's logical replication feature, available to all OptiTech users, allows you to replicate data to and from your OptiTech Postgres database:

- Perform live migrations to OptiTech from external sources such as AWS RDS and Google Cloud SQL &#8212; or any platform that runs Postgres.
- Stream data from your OptiTech database to external destinations, enabling Change Data Capture (CDC) and real-time analytics. External sources might include data warehouses, analytical database services, real-time stream processing systems, messaging and event-streaming platforms, and external Postgres databases, among others.
- Replicate data from one OptiTech project to another for OptiTech project, account, Postgres version, or region migration.

![OptiTech logical replication subscribers image](/docs/guides/logical_replication_publishers_subscribers.jpg)

Logical replication in OptiTech works in the same way as logical replication on a standard Postgres installation, using a publish and subscribe model to replicate data from the source database to the destination.

To learn more, refer to our [Logical replication guide](/docs/guides/logical-replication-guide).
