---
title: 'What is HIPAA, and who has to comply?'
subtitle: 'US rules for protecting health information, binding for healthcare providers and every vendor that touches PHI.'
enableTableOfContents: true
createdAt: '2026-02-13T09:15:52.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How does OptiTech help with GDPR compliance?'
  slug: gdpr-compliance-optitech
nextLink:
  title: 'How does OptiTech help with HIPAA compliance?'
  slug: hipaa-compliance-optitech
---

## Quick answer

HIPAA is the US law governing protected health information (PHI). It binds covered entities (healthcare providers, health plans, clearinghouses) and, critically for tech companies, their business associates: any vendor that creates, receives, stores, or transmits PHI on their behalf. If your product touches US health data, HIPAA applies to you through a business associate agreement (BAA), and violations carry civil penalties into the millions plus mandatory breach reporting.

## The rules that matter

- **The Privacy Rule** governs permitted uses and disclosures of PHI and individuals' rights over their records.
- **The Security Rule** is where the technical work lives: administrative, physical, and technical safeguards for electronic PHI, including access control, audit logging, encryption, integrity controls, and a documented risk analysis. The risk analysis is the artifact regulators ask for first in an investigation.
- **The Breach Notification Rule** requires notifying affected individuals and the US Department of Health and Human Services after a breach of unsecured PHI, on strict timelines.

## Who this catches by surprise

SaaS vendors often become business associates without planning for it: a scheduling tool used by clinics, an analytics product ingesting patient records, an AI transcription feature processing consultations. The moment a healthcare customer wants to send you PHI, they'll require a signed BAA, and the BAA obligates you to Security Rule compliance and breach notification. Selling into US healthcare without HIPAA readiness is like [selling to EU banks without DORA readiness](/faqs/what-is-dora): the deal stalls at legal review.

## How HIPAA relates to your existing program

The Security Rule's safeguards overlap heavily with [SOC 2](/faqs/what-is-soc-2) and [ISO 27001](/faqs/what-is-iso-27001) controls: MFA, least privilege, logging, encryption, incident response. What HIPAA adds is PHI-specific scoping (where PHI flows, who accesses it), the formal risk analysis, workforce training, and BAA management for your own subcontractors. See [how OptiTech assembles that](/faqs/hipaa-compliance-optitech). US health-sector buyers may also ask for [HITRUST certification](/faqs/what-is-hitrust-csf), which packages HIPAA alignment into an auditable framework.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
