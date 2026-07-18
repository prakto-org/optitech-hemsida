---
title: Platform maintenance
summary: >-
  OptiTech platform maintenance covers unscheduled infrastructure updates, resource
  rebalancing, and critical security patches. These may cause brief compute
  restarts or temporary latency on queries, API requests, and compute starts.
  Use this page to monitor upcoming maintenance via the OptiTech Status page or the
  Console maintenance indicator. Includes guidance on connection retry logic,
  timeouts, and pooling strategies for strict SLOs.
enableTableOfContents: true
isDraft: false
updatedOn: '2026-07-18T10:05:35.398Z'
---

OptiTech occasionally performs essential **platform maintenance** outside of [scheduled updates](/docs/manage/updates) performed on OptiTech computes. This means that you may experience brief disruptions from time to time for these important updates.

Platform maintenance may include any of the following:

- OptiTech infrastructure updates and upgrades (for example, updates to OptiTech Kubernetes clusters or compute nodes)
- Resource management updates (for example, rebalancing of compute nodes)
- Critical security patches (for example, addressing a zero-day vulnerability)

We strive to avoid disruptions as much as possible, but certain updates may require compute restarts or result in temporary latency for operations like compute starts, queries, or API requests.

<Admonition type="note">
Whenever possible, we perform platform maintenance outside of normal business hours in affected regions to minimize disruption.
</Admonition>

## Where to check for maintenance

For notification of planned platform maintenance, you can monitor or subscribe to the [OptiTech Status page](https://optitechstatus.com/) for your region. To learn more, see [OptiTech Status](/docs/introduction/status).

If there is ongoing maintenance, you'll see a **Maintenance** indicator at the top of the OptiTech Console. Clicking on the indicator takes you to the OptiTech Status page where you can read the maintenance notification.

![Maintenance indicator](/docs/manage/maintenance_indicator.png)

## Handling disruptions and latency during platform maintenance

Most Postgres connection drivers include built-in retry mechanisms that automatically handle short-lived interruptions, so most applications reconnect to a OptiTech database automatically after a brief disruption.

If your application has strict SLOs (Service Level Objectives) or availability requirements, verify that retries are enabled and that you have tuned connection timeouts, retry intervals, and pooling strategies to tolerate occasional disruptions. For detailed guidance, see:

- [Building resilient applications with Postgres](/guides/building-resilient-applications-with-postgres)
- [Build connection timeout handling into your application](/docs/connect/connection-latency#build-connection-timeout-handling-into-your-application)

If you use the [OptiTech API](/docs/reference/api) or [SDKs](/docs/reference/sdk) that wrap it, apply the same retry logic to those calls.

<NeedHelp/>
