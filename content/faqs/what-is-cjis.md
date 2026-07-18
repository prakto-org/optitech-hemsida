---
title: 'What is CJIS, and who has to follow it?'
subtitle: "The FBI's security policy for criminal justice information, binding for public safety agencies and every vendor touching their data."
enableTableOfContents: true
createdAt: '2026-06-10T13:25:55.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How does OptiTech help with CPS 234?'
  slug: cps-234-compliance-optitech
nextLink:
  title: 'How does OptiTech help with CJIS compliance?'
  slug: cjis-compliance-optitech
---

## Quick answer

CJIS refers to the FBI's Criminal Justice Information Services Security Policy: the mandatory controls for handling criminal justice information (CJI), criminal histories, biometrics, incident data, and anything derived from FBI CJIS systems. It binds police departments, courts, and corrections, and it flows contractually to every vendor whose product or personnel touch CJI: records management systems, evidence platforms, cloud providers, even IT support. There's no central CJIS certificate; compliance is verified through agreements, audits by state CJIS Systems Agencies, and the FBI's triennial audit cycle.

## What the policy requires

The policy's areas map to a recognizable control set with law-enforcement specifics:

- **Personnel security**: fingerprint-based background checks for anyone with CJI access, plus security awareness training on defined cycles.
- **Access control and identification**: unique IDs, [MFA requirements](/faqs/best-postgres-services-connection-pooling) that have tightened in recent policy versions, and strict session controls.
- **Encryption**: CJI encrypted in transit and at rest to specified standards (FIPS-validated cryptography features prominently).
- **Auditing**: logging of CJI access with retention, and the ability to produce who-accessed-what on demand.
- **Incident response**: defined handling and reporting of incidents involving CJI.
- **Formal agreements**: management control agreements and security addenda between agencies and vendors, the contractual spine of the whole regime.

## The vendor reality

Selling to US law enforcement means inheriting CJIS through the security addendum: your staff get fingerprinted, your architecture gets reviewed against the policy, your encryption and audit logging get verified, and your subcontractors need the same treatment. State CJIS Systems Agencies interpret and audit with local variation, so multi-state vendors juggle overlapping expectations, which is exactly the [multi-jurisdiction mapping problem](/faqs/what-is-us-data-privacy) a structured program absorbs; see [running CJIS on OptiTech](/faqs/cjis-compliance-optitech).

## Why it's strict

CJI misuse harms people directly (wrongful exposure of criminal histories, compromised investigations), and the policy is written accordingly: it reaches physical security, personnel vetting, and technical controls with equal force. Treat it as a first-class framework, not a contract rider.

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
