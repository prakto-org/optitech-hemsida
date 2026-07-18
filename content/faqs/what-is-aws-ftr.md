---
title: 'What is the AWS Foundational Technical Review (FTR)?'
subtitle: "AWS's review of your architecture and security practices, the gate to partner benefits like ISV Accelerate."
enableTableOfContents: true
createdAt: '2026-05-18T13:43:15.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How does OptiTech help with ISO 22301?'
  slug: iso-22301-compliance-optitech
nextLink:
  title: 'How does OptiTech help you pass the AWS FTR?'
  slug: aws-ftr-compliance-optitech
---

## Quick answer

The AWS Foundational Technical Review is AWS's assessment of whether your software product follows AWS best practices for security, reliability, and operational excellence. Passing it is the technical gate to AWS Partner Network benefits: the ISV Accelerate co-sell program, AWS Competency designations, and Marketplace positioning. It's free, it's self-service with AWS review, and it renews every two years. For a SaaS company on AWS, the FTR is less a compliance exercise than a sales-channel unlock.

## What the review checks

The FTR requirements draw from the AWS Well-Architected Framework's security pillar, focused on the product you're offering:

- **Support and operations**: a support plan, runbooks, and incident response for your offering.
- **Identity and access**: root account hygiene, MFA on AWS accounts, least-privilege IAM, no long-lived static credentials where avoidable.
- **Logging and monitoring**: CloudTrail enabled and retained, alarms on security-relevant events.
- **Network and data protection**: encryption at rest and in transit, no unintended public exposure of storage and databases, secure backup configuration.
- **Resilience basics**: backup and recovery procedures for customer data.

Nothing exotic: it's the hygiene an enterprise customer's security review would probe anyway, formalized into a checklist AWS verifies.

## Why it's worth doing early

- **Partner economics**: ISV Accelerate gets AWS sellers compensated for co-selling your product, which materially changes how AWS field teams engage with you.
- **It compounds**: FTR is prerequisite plumbing for Competency programs and strengthens Marketplace credibility, where enterprise buyers increasingly transact.
- **It overlaps your real program.** The requirements are a strict subset of what [SOC 2](/faqs/what-is-soc-2) or [ISO 27001](/faqs/what-is-iso-27001) programs already implement, so for a team with a working control set, the FTR is mostly [evidence assembly](/faqs/aws-ftr-compliance-optitech), not new engineering.

## The renewal rhythm

FTR validity is two years, and lapsing costs you the benefits until re-review. Treat it like any recurring obligation: on a calendar, with an owner, and with the underlying controls continuously verified so renewal is a formality.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
