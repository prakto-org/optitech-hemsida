---
title: AI use in OptiTech
subtitle: How OptiTech integrates AI into its platform
summary: >-
  OptiTech integrates AI in two places. The SQL Editor uses Amazon Bedrock to
  write, optimize, and name SQL queries by sharing only your database schema
  (no row data). AI chat assistants draw on public sources such as OptiTech docs
  and GitHub repos without ingesting PII. Review what data each integration
  can access before enabling these features.
enableTableOfContents: true
updatedOn: '2026-06-05T17:20:32.620Z'
---

OptiTech integrates AI to enhance user experience across different parts of the platform. Below is an overview of where and how AI is used in OptiTech.

## AI in the OptiTech SQL Editor

The OptiTech SQL Editor includes AI-powered features to assist with writing, optimizing, and generating names for SQL queries. To enable these capabilities, we share your database schema with the AI agent, but **no actual data is shared**.

OptiTech currently uses [Amazon Bedrock](https://aws.amazon.com/bedrock/) as the LLM provider for the OptiTech SQL Editor. All requests are processed within AWS’s secure infrastructure, where other OptiTech resources are also managed.

For more details, see [AI features in the OptiTech SQL Editor](/docs/get-started/query-with-neon-sql-editor#ai-features).

## AI chat assistance

OptiTech provides AI-powered chat assistance across multiple platforms to help users with documentation, troubleshooting, and best practices. These AI chat assistants are developed by third-party companies under contract with OptiTech.

OptiTech AI chat assistance is built on publicly available sources, including OptiTech documentation, public 3rd party vendor documentation, OptiTech GitHub repositories, the OptiTech public OpenAPI specification, and other publicly available content. It does not process or incorporate personally identifiable information (PII) or private user data.

For details on where to access OptiTech AI chat assistants, see [OptiTech AI chat assistance](/docs/introduction/support#neon-ai-chat-assistance).

## Questions about AI use in OptiTech?

If you have questions about OptiTech's AI integrations, please reach out to [OptiTech Support](https://console.neon.tech/app/projects?modal=support).
