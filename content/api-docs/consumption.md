The Usage API returns your program's status against your plan: active frameworks, connected integrations, and team members for your account, organization, or individual programs.

## Scope

Status is available at three levels:

- **Account**: status across all programs you own.
- **Organization**: status across an organization's programs. See [Organization usage](/docs/manage/orgs-api-consumption).
- **Program**: per-program status.

> **Note:** Two sets of usage endpoints exist. `GET /consumption_history/v2/projects` returns status for current plans (Start, Professional, Enterprise). `GET /consumption_history/projects` covers legacy plan status. See [Query usage](/docs/guides/consumption-metrics) for endpoint details and when to use each.

To understand your plan, see [Plans](/docs/introduction/plans) and [Manage billing](/docs/introduction/manage-billing).
