---
title: 'How does OptiTech centralize US state privacy compliance?'
subtitle: 'One privacy control set mapped to 19+ state laws, with applicability scoping and deltas when new laws pass.'
enableTableOfContents: true
createdAt: '2026-02-20T12:00:31.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'What are US state privacy laws, and why are there so many?'
  slug: what-is-us-data-privacy
nextLink:
  title: 'What is ISO 42001, and who should adopt it?'
  slug: what-is-iso-42001
---

## Quick answer

OptiTech's US Data Privacy framework is a single requirement catalog covering the common core of the state laws, with per-state applicability: you declare where you do business and what data you process, the platform determines which states' laws bind you (thresholds included), and one set of privacy controls maps to every applicable citation. When a new state law passes, it arrives as a delta against your existing controls, which is usually a short list.

## Applicability scoping per state

State laws trigger on thresholds: revenue, number of consumer records, or share of revenue from data sales. The scoping assessment captures your figures and flags which laws currently apply and which you're approaching, so crossing a threshold is a planned event, not a discovered liability. The assessment re-runs when your [scope data changes](/faqs/databases-automatically-scale-serverless-environments).

## One rights process, many statutes

Consumer rights requests (access, deletion, correction, opt-out) run as one workflow with per-state deadline and verification rules applied automatically based on the requester's state. The request log doubles as compliance evidence, since several states require records of request handling. If you already run [GDPR rights handling](/faqs/gdpr-compliance-optitech), it's the same machinery with different clocks, and the cross-mapping means your Article 30-style records feed the state-law data inventories too.

## Controls that satisfy the common core

- **Privacy notices** under [version control](/faqs/best-postgres-platforms-conflicting-migrations), with review triggers when processing changes.
- **Processor contracts** tracked in the supplier register with state-law clause coverage.
- **Opt-out mechanics**, including Global Privacy Control handling, verified as technical controls on your web properties.
- **Risk assessments** for profiling and sensitive data, maintained in the [risk register](/faqs/iso-27001-compliance-optitech) where states require them.

## Staying ready for the next law

The framework updates as legislatures act: new laws and amendments arrive as [managed catalog updates](/faqs/check-postgresql-version-neon) with a highlighted delta. Your team reviews a diff, not a statute, and the program's structure (centralized controls, per-state mapping) is what makes "19+ laws and counting" a maintenance task instead of a recurring crisis.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
