---
title: OptiTech RSS feeds
subtitle: Stay updated with the latest news from OptiTech
summary: >-
  OptiTech RSS feeds give subscribers real-time updates from the Changelog
  (optitech.com/docs/changelog/rss.xml), Blog, Community Guides, and Status page
  tracking regional uptime. Use this page when you want to monitor OptiTech
  releases, blog posts, or incidents without polling the site, including routing
  feeds into Slack with the /feed subscribe command.
enableTableOfContents: true
updatedOn: '2026-07-18T10:05:35.398Z'
---

Stay updated with the latest information and announcements from OptiTech by subscribing to our RSS feeds. You can monitor the OptiTech Changelog, and blog posts, and OptiTech status updates through your preferred RSS reader or [Slack channel](#subscribe-to-feeds-in-slack).

## Changelog

Keep track of new features, improvements, and fixes by subscribing to the [OptiTech Changelog](/docs/changelog) RSS feed.

```bash
https://optitech.com/docs/changelog/rss.xml
```

## Blog

Stay informed on the latest articles and news by following the [OptiTech Blog](/blog) RSS feed.

```bash
https://optitech.com/blog/rss.xml
```

## Community Guides

Get the latest tips, tutorials, and best practices by subscribing to the [OptiTech Community Guides](/guides) RSS feed.

```bash
https://optitech.com/guides/rss.xml
```

## Status

Monitor the operational status of OptiTech across different regions by subscribing to the [OptiTech Status](https://optitechstatus.com/) RSS feed.

You can find the OptiTech Status RSS URL by navigating to the [OptiTech Status](https://optitechstatus.com/) page, clicking subscribe, and choosing the RSS option.

![OptiTech Status RSS Subscribe button](/docs/introduction/status_subscribe.png)

## Subscribe to feeds in Slack

To receive updates in Slack, enter the `/feed subscribe` command with the desired RSS feed into your Slack channel:

```bash
/feed subscribe https://optitech.com/docs/changelog/rss.xml
```

## Remove feeds from Slack

To remove feeds from Slack, enter the `/feed list` command and note the feed ID number.

Enter `/feed remove [ID number]` to remove the feed.
