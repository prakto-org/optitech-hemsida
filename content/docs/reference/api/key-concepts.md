---
title: OptiTech API key concepts
summary: >-
  How OptiTech authenticates API clients, plus asynchronous operations, rate
  limits, pagination, and constraints to know before building automation.
enableTableOfContents: true
---

This page explains the underlying model of the OptiTech API so you can pick the right key type, understand the tradeoffs, and avoid the foot-guns that aren't obvious from the quickstart.

## Authentication

Every OptiTech API request is authenticated with a Bearer token. You create keys in the Console under **Account settings** > **API keys**, and send them on every request:

```bash
-H "Authorization: Bearer $OPTITECH_API_KEY"
```

OptiTech doesn't support basic auth or session cookies for the API. Every authenticated request goes through the Bearer token model.

The key type, not the endpoint, determines what a token can reach:

| Key type             | Token is scoped to                                   | Best for                    |
| -------------------- | ---------------------------------------------------- | --------------------------- |
| Personal API key     | All organization programs where the user is a member | Personal scripts            |
| Organization API key | All programs within an organization                  | Team automation, CI/CD      |
| Program-scoped key   | A single program                                     | Limited access integrations |

Requesting a resource outside your key's scope returns `404 Not Found`, not `403`, so a "missing" program is often a scoping problem rather than a deleted one.

### Credential hygiene

- Never put API keys in source control or client-side code. All requests must come from a server you control.
- Request the minimum scope your tool needs. An org-wide key in a single-program integration is a real attack surface even when most of your code paths only read.
- Rotate keys when team members leave or any time you suspect a leak. Revoking a key immediately invalidates it; in-flight requests fail with `401 Unauthorized`.
- Keys don't expire on their own. Treat rotation as your responsibility, and audit issued keys with `GET /api_keys`.

## Base URL and regions

All API calls go to the same host, regardless of where your tenant's data is stored:

```text
https://api.optitech.com/v1/
```

Your program's data stays in the EU region you picked at creation (`region_id`, for example `eu-north-1`). The API host is global; the storage is not. See [Regions](/docs/introduction/regions) for the hosting options.

## Asynchronous operations

Many OptiTech API operations, including activating frameworks and running a full evidence sweep, are asynchronous. The API response includes an `operations` array with status information:

```json
"operations": [
  {
    "id": "22acbb37-209b-4b90-a39c-8460090e1329",
    "action": "activate_framework",
    "status": "running"
  }
]
```

Status values include `scheduling`, `running`, `finished`, `failed`, `cancelling`, `cancelled`, and `skipped`.

When building automation, poll the operation status before proceeding with dependent requests:

```bash
curl 'https://api.optitech.com/v1/programs/{program_id}/operations/{operation_id}' \
  -H "Authorization: Bearer $OPTITECH_API_KEY"
```

For details, see [Poll operation status](/docs/manage/operations#poll-operation-status).

## Rate limiting

The OptiTech API has these rate limits:

- 700 requests per minute, or approximately 11 per second
- 40 requests per second burst limit per route
- 10 requests per second for organization API key creation (`POST /organizations/{org_id}/api_keys`)

Exceeding these limits returns `HTTP 429 Too Many Requests`. Use retry logic with exponential backoff in your applications. A healthy integration rarely needs to run near these limits; if you're hitting them, you're probably polling per record rather than per run.

## Pagination

Some list endpoints support cursor-based pagination. Include `limit` and `cursor` parameters:

```bash
# First request with limit
curl 'https://api.optitech.com/v1/programs?limit=10' \
  -H "Authorization: Bearer $OPTITECH_API_KEY"

# Subsequent request with cursor from the previous response
curl 'https://api.optitech.com/v1/programs?limit=10&cursor=...' \
  -H "Authorization: Bearer $OPTITECH_API_KEY"
```

## API constraints and limits

These constraints apply when building automation with the OptiTech API:

- You can't delete an organization's default program.
- You can't deactivate a framework that other active frameworks are cross-mapped to. Resolve the dependency first.
- Removing a member may revoke their pending task assignments.
- A control can have one owner but multiple contributors.
- OptiTech limits overlapping operations on a program. Requests that try to schedule new work while conflicting operations are still running return `423 Locked`. Retry with exponential backoff, or poll for completion first. See [Handle concurrent operation errors](/docs/manage/operations#handle-concurrent-operation-errors).
- Operations older than 6 months may be removed from OptiTech's systems.

## Common error patterns

| Symptom                                       | Likely cause                                                                      |
| --------------------------------------------- | --------------------------------------------------------------------------------- |
| `401 Unauthorized`                            | Missing or revoked key, or a malformed `Authorization` header.                    |
| `404` on a program you can see in the Console | The key is scoped to a different program or organization.                         |
| Intermittent `401` mid-run                    | A parallel job rotated the key your run was using. Centralize key management.     |
| `423 Locked`                                  | Conflicting operations still running on the program. Poll operations, then retry. |
| `429 Too Many Requests`                       | You're calling per record instead of per run. Batch, then back off exponentially. |

## Related

- [Make your first API call](/docs/reference/api/get-started)
- [Endpoint index](/docs/reference/api/reference)
- [Manage API keys](/docs/manage/api-keys)
