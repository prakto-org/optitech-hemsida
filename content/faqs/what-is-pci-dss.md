---
title: 'What is PCI DSS, and does it apply to my business?'
subtitle: 'The card industry security standard for anyone that stores, processes, or transmits cardholder data.'
enableTableOfContents: true
createdAt: '2026-02-27T11:35:18.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How does OptiTech help with ISO 42001?'
  slug: iso-42001-compliance-optitech
nextLink:
  title: 'How does OptiTech help with PCI DSS compliance?'
  slug: pci-dss-compliance-optitech
---

## Quick answer

PCI DSS is the Payment Card Industry Data Security Standard, mandated by the card brands for every business that stores, processes, or transmits cardholder data, whether as a merchant taking payments or a service provider handling card data for others. It's contractual rather than statutory: your acquirer or payment partners require it, non-compliance means fines and potentially losing the ability to process cards, and a breach without compliance gets very expensive.

## Merchant or service provider, and what level

Your obligations depend on your role and volume:

- **Merchants** validate by transaction volume: the largest need an on-site assessment by a Qualified Security Assessor (QSA); smaller merchants self-assess with an SAQ (self-assessment questionnaire) whose type depends on how card data flows through their environment.
- **Service providers** (payment platforms, hosting providers, anyone touching card data on merchants' behalf) face stricter validation, usually a QSA assessment, because their compliance is inherited by every customer.

The single most effective PCI decision is scope reduction: if card data never touches your systems (hosted payment pages, tokenization through your payment processor), your validation burden collapses to the simplest SAQ. Architecture is compliance strategy here.

## What the standard requires

The current version organizes its requirements around familiar ground: network segmentation and secure configuration, protecting stored cardholder data (or better, not storing it), encryption in transit, vulnerability management, strict access control and MFA, logging and monitoring, regular testing, and a maintained security policy. The overlap with [ISO 27001](/faqs/what-is-iso-27001) and [SOC 2](/faqs/what-is-soc-2) is substantial; the deltas are card-data-specific: scoping the cardholder data environment, quarterly scans by an approved vendor, and prescriptive technical requirements.

## The recurring obligations

PCI DSS is a calendar, not a certificate: quarterly external scans, annual assessments or SAQs, periodic penetration testing, and continuous log review. Missing a quarterly scan window is a compliance failure regardless of your actual security, which is why the schedule belongs in [an automated program](/faqs/pci-dss-compliance-optitech), not a spreadsheet.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
