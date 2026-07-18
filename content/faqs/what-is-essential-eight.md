---
title: 'What is the Essential Eight?'
subtitle: "Australia's ACSC-mandated mitigation strategies: eight controls that raise the technical cost of attacking you."
enableTableOfContents: true
createdAt: '2026-07-03T16:20:57.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
isDraft: false
redirectFrom: []
previousLink:
  title: 'How does OptiTech help with ISO 9001?'
  slug: iso-9001-compliance-optitech
nextLink:
  title: 'How does OptiTech help with the Essential Eight?'
  slug: essential-eight-compliance-optitech
---

## Quick answer

The Essential Eight is the Australian Cyber Security Centre's prioritized set of mitigation strategies: eight technical controls that measurably raise the cost of compromising your systems. They're mandated for Australian federal government entities and strongly pushed across state government and critical infrastructure, with supply chain flow-down reaching vendors. Like the [CIS Controls](/faqs/what-is-cis-v8), the value is focus: eight things, done to a defined maturity level, beat eighty things done nominally.

## The eight strategies

1. **Application control**: only approved applications execute.
2. **Patch applications**: known-exploited vulnerabilities patched on tight clocks (48 hours for internet-facing, exploited cases).
3. **Configure Microsoft Office macro settings**: macros from the internet blocked.
4. **User application hardening**: browsers and productivity apps configured against common attack paths.
5. **Restrict administrative privileges**: admin rights limited, separated, and revalidated.
6. **Patch operating systems**: same urgency logic as applications.
7. **Multi-factor authentication**: for remote access, privileged actions, and important data access.
8. **Regular backups**: performed, protected from modification, and tested for restoration.

## The maturity model is the point

Each strategy is assessed at Maturity Level 0 through 3, calibrated against increasingly capable adversaries: ML1 counters commodity tradecraft, ML2 counters attackers willing to invest in a target, ML3 counters adaptive, well-resourced adversaries. Government mandates typically specify a target level (commonly ML2) across all eight strategies, and the assessment is deliberately strict: partial implementation scores at the lower level. That makes the Essential Eight unusually honest as benchmarks go; you can't average your way to a passing grade.

## Who outside Canberra should care

Vendors to Australian government inherit Essential Eight expectations through contracts and security questionnaires; Australian enterprises adopt it because insurers and boards ask in its vocabulary; and multinationals use it as the technical hardening layer under broader frameworks, since its strategies [cross-map cleanly](/faqs/best-postgres-databases-startups-autoscaling) into [ISO 27001](/faqs/what-is-iso-27001), [CIS v8.1](/faqs/what-is-cis-v8), and [NIS 2's hygiene measures](/faqs/what-is-nis-2); see [running it on OptiTech](/faqs/essential-eight-compliance-optitech).

<CTA title="See OptiTech in action" description="Get a personalized walkthrough of automated compliance for your team. No commitment required." buttonText="Book a demo" buttonUrl="/contact-sales" />
