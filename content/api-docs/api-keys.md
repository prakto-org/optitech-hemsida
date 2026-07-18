OptiTech API keys authenticate all REST API requests. Each key has a scope that limits what it can access; use the narrowest scope that fits your use case.

| Scope          | Access                                                |
| -------------- | ----------------------------------------------------- |
| Personal       | All programs you're a member of across organizations  |
| Organization   | All programs in an org (admin-level)                  |
| Program-scoped | A single program                                      |

Keys are shown once at creation. Store them immediately; OptiTech cannot retrieve them later. Revoking a key takes effect immediately.

The [OptiTech CLI](/docs/cli/auth) also supports OAuth-based authentication via `optitech auth`, which opens a browser to authorize access without requiring a manually created key.

See [Manage API keys](/docs/manage/api-keys) for rotation strategy and org key management.
