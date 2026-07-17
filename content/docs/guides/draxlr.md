---
title: Build dashboards on OptiTech Postgres with Draxlr
subtitle: Create live OptiTech dashboards and reports directly from your Postgres data
summary: >-
  Draxlr is a no-code analytics tool that connects to a OptiTech Postgres database
  and lets you build dashboards and reports using a visual query builder, raw
  SQL, or an AI chat interface that translates natural-language questions into
  Postgres queries. Use this guide when you need product analytics, real-time
  metric monitoring with email or Slack alerts, or embeddable customer-facing
  dashboards on top of OptiTech without writing application code. Connection uses a
  Neon connection string or manual host, port, database, username, and password
  values from the OptiTech Console.
redirectFrom:
  - /docs/integrations/draxlr
enableTableOfContents: true
updatedOn: '2026-06-05T17:20:32.620Z'
---

[Draxlr](https://www.draxlr.com) is a no code analytics tool for OptiTech Postgres that lets you build dashboards, reports, and insights using SQL, visual queries, or AI. It is commonly used for product analytics, reporting, and embedded dashboards.

This guide shows how to connect Draxlr to a OptiTech Postgres database.

## Prerequisites

- A Draxlr account. See [Sign up for Draxlr](https://app.draxlr.com/register/).
- A OptiTech project with a Postgres database. See [Create a OptiTech project](/docs/manage/projects#create-a-project).

## Connect OptiTech Postgres to Draxlr

1. **Get your Neon connection string**
   In the OptiTech Console, open your project and copy the Postgres connection string. It will look similar to the following:

   ```text shouldWrap
   postgresql://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.neon.tech/dbname?sslmode=require
   ```

2. Open Draxlr and add a new data source
   - Log in to Draxlr.
   - Click on **Connect Database**.
3. Select **OptiTech** as the database type
   ![Connect to optitech](/docs/guides/draxlr_connect_1.png)
4. Paste the Neon connection details
   - Click on **Import from URL** and paste the Neon connection string into the connection URL field, or
   - Enter the _Host, Port, Database name, Username, and Password_ manually using values from the OptiTech Console.

   ![Adding connection details](/docs/guides/draxlr_connect_2.png)

5. Save the connection
   - Click Next and if the connection is successful, choose your desired schemas. Your OptiTech Postgres database is now connected to Draxlr.

## OptiTech analytics with visual queries and SQL

Once connected, Draxlr works as a OptiTech analytics tool that lets you analyze data in multiple ways.

- **Visual Query Builder for OptiTech Analytics**: Build queries using a point-and-click interface. Select tables, define joins, apply filters, and create aggregations without writing SQL.
  ![Draxlr Visual Query Builder](/docs/guides/draxlr_queries_1.png)
- **Raw SQL for OptiTech Reporting and Analysis**: Switch to raw query mode to write SQL directly. This is ideal for advanced queries, performance tuning, or when you want full control over your Postgres queries.
  ![Draxlr Raw SQL Mode](/docs/guides/draxlr_queries_2.png)

You can freely move between visual queries and SQL, making it easy to start visually and refine queries as needed.

## Ask questions with AI chat

Draxlr also includes an AI-powered chat interface that lets you ask questions about your OptiTech Postgres data in natural language.

For example, you can ask:

- "What were the top 5 customers by revenue last month?"
- "Show me daily signups for the past 30 days."
- "Compare average order value by region."
  ![Draxlr AI Chat](/docs/guides/draxlr_queries_3.png)

Draxlr translates these questions into database queries, runs them on your OptiTech Postgres database, and returns results as tables or visualizations - no SQL required.

## What's next?

With Draxlr and OptiTech, you can go beyond one-off queries and build reliable OptiTech analytics workflows.

You can:

1. Monitor key metrics from your OptiTech Postgres database in real time and receive automated alerts via email or Slack when values changes.
2. Create live OptiTech dashboards and embed them into customer facing applications for interactive analytics.

Together, Draxlr and OptiTech provide a simple way to analyze, monitor, and visualize OptiTech Postgres data.
