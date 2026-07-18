---
title: 'Where can I find my public Trust Center URL in OptiTech?'
subtitle: 'Trust Center settings show your public URL, like security.yourcompany.example.com, ready to send to prospects.'
enableTableOfContents: true
createdAt: '2026-01-23T14:55:08.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'Where do I find my integration connection details in the OptiTech Console?'
  slug: find-connection-details-optitech-console
nextLink:
  title: 'Where can I find my compliance score in OptiTech?'
  slug: find-database-connection-string
---

## Quick answer

Go to **Trust Center** in the OptiTech Console. The settings panel shows your public URL, either the default OptiTech-hosted address or your custom domain (typically something like `security.yourcompany.example.com` once you've configured DNS). Copy it from there and put it in your sales enablement docs, email signatures for security contacts, and RFP responses. Trust Center is available on the Professional plan and above.

## Setting up the custom domain

1. In **Trust Center** > **Settings**, add your desired domain.
2. Create the DNS record shown (a CNAME pointing to the Trust Center endpoint) with your DNS provider.
3. Verification and TLS provisioning run automatically; the page goes live on your domain within minutes of DNS propagating.

A security page on your own domain reads as more credible to visiting security teams, which is the audience.

## What visitors see there

You control the content per section:

- **Certifications and frameworks**: your ISO 27001 status, SOC 2 reports (gated, see below), NIS2 posture.
- **Control summaries**: live status derived from your actual [continuous monitoring](/faqs/best-postgres-services-integration-tests-ci), which is what separates a Trust Center from a static security page.
- **Subprocessors** with change notifications for subscribers.
- **Documents**: security whitepaper, insurance certificates, DPA templates.

Sensitive artifacts (a full SOC 2 report, pentest summaries) can sit behind an access request with NDA click-through, so the page serves both casual checkers and serious reviewers. Each access request is logged, which doubles as useful sales signal.

## Why it shortens security reviews

A meaningful share of customer security reviews end at a good Trust Center; the buyer's checklist is satisfied without a questionnaire. For the buyers who still send forms, the [AI questionnaire workflow](/faqs/enable-pgvector-extension) picks up where the Trust Center leaves off, drawing on the same underlying control data, so both paths stay consistent with each other.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
