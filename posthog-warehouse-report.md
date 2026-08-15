# PostHog Data Warehouse — Source Setup Report

**Date:** 2026-08-03
**Project:** optitech-hemsida (ID: 239599)

## Summary

Two data warehouse sources were detected in this project. Both use OAuth and require browser-based authorization — no credentials were collected from the terminal.

## Sources

### Intercom

- **Kind:** Intercom
- **Mode:** deep-link (OAuth)
- **Status:** Awaiting browser setup
- **Setup URL:** https://eu.posthog.com/project/239599/data-warehouse/new-source?kind=Intercom&utm_source=wizard&utm_campaign=warehouse-source

### GitHub

- **Kind:** Github
- **Mode:** deep-link (OAuth)
- **Status:** Awaiting browser setup
- **Setup URL:** https://eu.posthog.com/project/239599/data-warehouse/new-source?kind=Github&utm_source=wizard&utm_campaign=warehouse-source

## Files Modified or Created

- `posthog-warehouse-report.md` — this report (created)

No application source files were modified. This skill only configures external data connections.

## Manual Steps

Complete each source by opening its setup URL in your browser and authorizing the OAuth connection:

1. **Intercom** — open the URL above, sign in with your Intercom account, and grant PostHog read access. PostHog will then begin syncing your Intercom contacts, conversations, and related data.

2. **GitHub** — open the URL above, authorize the GitHub OAuth app, and select which repositories or organizations PostHog should sync. GitHub data (issues, PRs, commits) will then be available in the PostHog data warehouse.

After authorizing each source, you can monitor sync status and query the imported tables in the PostHog data warehouse UI at:
https://eu.posthog.com/project/239599/data-warehouse
