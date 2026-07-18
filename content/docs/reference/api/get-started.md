---
title: Make your first API call
summary: >-
  Get an OptiTech API key and use it to list the programs, frameworks, and
  evidence documents in your OptiTech tenant.
enableTableOfContents: true
redirectFrom:
  - /docs/reference/api/getting-started
---

<CopyPrompt src="/prompts/neon-api-prompt.md" title="AI prompt: Get started with the OptiTech API" description="Copy into your AI assistant to get an API key and make your first API call."/>

By the end of this quickstart you'll have a working API key and you'll have used it to list the frameworks active in one of your programs and the evidence documents collected for it. Estimated time: 10 minutes.

## Before you begin

Make sure you have:

- An OptiTech account with admin access.
- A terminal or HTTP client (curl, Postman, or your language of choice).

<Admonition type="note">
This quickstart is for security engineers and admins automating their own OptiTech account. If you're a partner building on top of OptiTech for your clients, see [Building on OptiTech](/docs/guides/platform-integration-overview).
</Admonition>

<Steps>

## Create an API key

In the OptiTech Console, open **Account settings** > **API keys** and click **Create key**. Choose the narrowest scope that covers what you're automating:

| Key type                   | Scope                                                | Best for                    |
| -------------------------- | ---------------------------------------------------- | --------------------------- |
| **Personal API key**       | All organization programs where the user is a member | Personal scripts            |
| **Organization API key**   | All programs within an organization                  | Team automation, CI/CD      |
| **Program-scoped API key** | Single program only                                  | Limited access integrations |

<Admonition type="important">
The key token is shown only once at creation. Store it securely, because you can't retrieve it later. If you lose it, revoke the key and create a new one.
</Admonition>

For rotation and revocation, see [Manage API keys](/docs/manage/api-keys).

## Make your first request

All API requests use the same base URL and Bearer authentication:

```text
https://api.optitech.com/v1/
```

From your terminal, set your key as an environment variable and list your programs:

```bash
export OPTITECH_API_KEY="your-api-key-here"

curl 'https://api.optitech.com/v1/programs' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer $OPTITECH_API_KEY" | jq
```

Expected response, note the `id` field on each program, you'll use it in the next step:

```json
{
  "programs": [
    {
      "id": "spring-example-302709",
      "name": "acme-compliance",
      "region_id": "eu-north-1",
      "created_at": "2026-01-15T10:30:00Z"
    }
  ],
  "pagination": { "cursor": "eyJsaW1pdCI6MX0" }
}
```

<Admonition type="tip" title="Got a 401?">
Check that the `Authorization` header reads exactly `Bearer <token>` and that the key hasn't been revoked under **Account settings** > **API keys**.
</Admonition>

## List your frameworks

Call `GET /programs/{program_id}/frameworks` to see which compliance frameworks are active in the program, and grab a `framework_id` to use in the next step:

```bash
curl 'https://api.optitech.com/v1/programs/spring-example-302709/frameworks' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer $OPTITECH_API_KEY" | jq
```

Expected response, note the `id` field on each framework:

```json
{
  "frameworks": [
    {
      "id": "br-nis2-a5b6c7d8",
      "name": "nis2",
      "display_name": "NIS2",
      "controls_passing": 43,
      "controls_total": 86,
      "current_state": "ready",
      "created_at": "2026-01-15T10:31:00Z"
    },
    {
      "id": "br-iso27001-e9f0a1b2",
      "name": "iso-27001",
      "display_name": "ISO 27001:2022",
      "controls_passing": 61,
      "controls_total": 93,
      "current_state": "ready",
      "created_at": "2026-02-02T08:12:00Z"
    }
  ]
}
```

## List evidence documents for that framework

Call the framework's document buckets to see the evidence collected for it. Reuse the `framework_id` from the previous step:

```bash
curl 'https://api.optitech.com/v1/programs/spring-example-302709/frameworks/br-nis2-a5b6c7d8/buckets/evidence/objects' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer $OPTITECH_API_KEY" | jq
```

Expected response:

```json
{
  "objects": [
    {
      "key": "access-reviews/2026-q2-access-review.pdf",
      "size": 48213,
      "last_modified": "2026-06-30T09:14:00Z"
    },
    {
      "key": "policies/information-security-policy-v3.pdf",
      "size": 102400,
      "last_modified": "2026-05-12T14:02:00Z"
    }
  ]
}
```

## Verify it worked

Open the same program in the OptiTech Console and compare what you see with what the API returned:

- The frameworks list matches, with the same control counts.
- The evidence documents appear under the framework's **Documents** view, with matching names and timestamps.

| Scenario     | Test input                                | Expected result                                                                                                         |
| ------------ | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Success      | A framework with `current_state: "ready"` | Same framework and control counts visible in the Console                                                                |
| Auth failure | A revoked or mistyped API key             | `401 Unauthorized`, create or check your key and retry                                                                  |
| Edge case    | A framework activated seconds ago         | `current_state: "init"`, poll [operations](/docs/reference/api/key-concepts#asynchronous-operations) until it's `ready` |

</Steps>

## Congratulations

You have a working API key and you've used it to read programs, frameworks, and evidence documents out of your OptiTech tenant. From here you can:

- Activate a framework with `POST /programs/{program_id}/frameworks` and let cross-mapping reuse your existing controls.
- Track long-running work with the [Operations endpoints](/docs/reference/api/key-concepts#asynchronous-operations).
- Filter and page through results with `limit` and `cursor` parameters.

## Next steps

- Use the [endpoint index](/docs/reference/api/reference) to browse all 163 API operations.
- Review [key concepts](/docs/reference/api/key-concepts) before building automation.
- Download the [OpenAPI specification](https://api.optitech.com/spec/v1.json) for code generation or API tooling.
