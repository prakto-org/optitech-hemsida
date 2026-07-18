An organization groups programs under shared billing, access control, and API keys. Organizations have two roles: **Admin** (full control over the org and its programs) and **Member** (access to all programs, but cannot modify org settings).

Use these endpoints from automation that manages team membership, handles invitations, or configures org-level settings. Direct program operations (activating frameworks, reading control status) use the program-level endpoints regardless of whether the program belongs to an org.

Some endpoints require the admin role. Member-level tokens can read org state but cannot modify members or billing settings.

See [Organizations](/docs/manage/organizations) for full role permissions and plan limits.
