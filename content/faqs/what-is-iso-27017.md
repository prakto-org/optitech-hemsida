---
title: 'What is ISO 27017, and who needs cloud-specific controls?'
subtitle: 'The cloud security extension to ISO 27001: controls for cloud service providers and customers alike.'
enableTableOfContents: true
createdAt: '2026-05-04T10:24:00.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How does OptiTech help with the NIST AI RMF?'
  slug: nist-ai-rmf-compliance-optitech
nextLink:
  title: 'How does OptiTech help with ISO 27017?'
  slug: iso-27017-compliance-optitech
---

## Quick answer

ISO 27017 extends [ISO 27001](/faqs/what-is-iso-27001) with cloud-specific controls: guidance for existing controls applied to cloud contexts plus new controls covering the cloud relationship itself, like shared-responsibility clarity, virtual machine hardening, tenant isolation, and what happens to your data when a cloud contract ends. It addresses both directions: cloud service providers proving their side, and cloud customers managing theirs. SaaS vendors add it to an ISO 27001 certificate to answer cloud-specific due diligence with a recognized standard.

## The gap it fills

ISO 27001's Annex A is deliberately technology-neutral, which leaves cloud questions generic. 27017 makes them concrete:

- **Shared responsibility, documented.** Which security functions the provider handles versus the customer: the question behind most cloud security failures, made an explicit control.
- **Cloud-specific technical controls**: VM and container configuration, segregation between tenants, administrative operation procedures for cloud environments.
- **The contractual lifecycle**: data ownership, return, and deletion at termination; the removal of customer assets when the relationship ends.
- **Alignment between provider and customer controls**, so each side knows what the other assumes.

## Who benefits from certifying

- **SaaS and cloud providers**: the extension answers the cloud sections of enterprise questionnaires with a certificate line instead of bespoke essays, and pairs naturally with [ISO 27018](/faqs/what-is-iso-27018) where personal data is involved.
- **Cloud-heavy enterprises**: certifying the customer side demonstrates governed cloud usage, increasingly relevant when regulators ([DORA's](/faqs/what-is-dora) ICT provisions, [NIS 2's](/faqs/what-is-nis-2) supply chain expectations) probe cloud dependency.
- **Managed service providers**: sitting in both roles at once, MSPs use it to structure obligations toward customers and toward their own providers.

## The certification mechanics

Like [27701](/faqs/what-is-iso-27701), 27017 certifies as an extension riding your ISO 27001 cycle: same certification body, extended statement of applicability, incremental audit effort. The work concentrates in documenting the responsibility split per cloud service and evidencing the cloud-specific technical controls, which is exactly where [continuous cloud integration checks](/faqs/iso-27017-compliance-optitech) carry the load.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
