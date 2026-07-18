---
title: 'What is NIST 800-53?'
subtitle: 'The catalog of security and privacy controls behind FedRAMP and most US federal information systems.'
enableTableOfContents: true
createdAt: '2026-04-10T08:53:07.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How does OptiTech help with Cyber Essentials?'
  slug: cyber-essentials-compliance-optitech
nextLink:
  title: 'How does OptiTech help with NIST 800-53?'
  slug: nist-800-53-compliance-optitech
---

## Quick answer

NIST 800-53 is the US government's catalog of security and privacy controls for all federal information systems except national security systems. It defines hundreds of controls across twenty families (access control, audit, incident response, supply chain, privacy, and more), grouped into Low, Moderate, and High baselines by impact level. Federal agencies must use it; everyone else uses it because it's the most comprehensive control catalog in existence and the backbone of [FedRAMP](/faqs/what-is-fedramp) and much of US security practice.

## Catalog, not certification

Unlike [ISO 27001](/faqs/what-is-iso-27001), 800-53 has no certificate. It's a control library you select from: an organization (or a program like FedRAMP) picks a baseline, tailors it (adding, removing, and parameterizing controls to fit the system), and then implements and assesses. The companion publication 800-53A provides the assessment procedures. This catalog-and-tailor model is why 800-53 appears inside so many other regimes: FedRAMP baselines are tailored 800-53, agency ATOs assess against it, and [NIST 800-171](/faqs/what-is-nist-800-171) is derived from its Moderate baseline for the contractor context.

## What's in the families

The twenty families cover ground broader than most frameworks: the expected technical territory (AC, AU, SC, SI: access, audit, communications protection, system integrity), the program layer (PM, RA, CA: program management, risk assessment, assessment and authorization), the people layer (AT, PS: training, personnel security), physical and environmental protection, contingency planning, supply chain risk management (SR), and a full privacy control set (PT and privacy elements woven throughout). Revision 5 also made controls outcome-oriented and added state-of-practice topics like secure development.

## Who outside government should care

- **Vendors pursuing federal business**: [FedRAMP](/faqs/fedramp-compliance-optitech) and agency authorizations run on it, so fluency is a prerequisite.
- **Regulated and critical-infrastructure adjacent companies** that want one deep catalog to tailor from rather than assembling coverage from smaller frameworks.
- **Anyone cross-mapping**: because everything maps to 800-53, it works as the Rosetta stone between your frameworks; see [how OptiTech uses that](/faqs/nist-800-53-compliance-optitech).

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
