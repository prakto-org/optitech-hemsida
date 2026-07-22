---
description: "Use when writing OptiTech docs or changelog entries: OptiTech Console, lowercase concepts (program, framework, control, evidence), framework-name capitalization, and API conventions."
applyTo: ["content/docs/**/*.md", "content/changelog/**/*.md"]
---

# OptiTech terminology

OptiTech is a Nordic compliance-automation platform. These rules cover OptiTech product terminology.

- "OptiTech Console", never "dashboard" or "control panel".
- Lowercase concepts:
  - program (the top-level container, not project)
  - framework (a compliance framework in a program)
  - control, evidence, integration
  - register, owner
  - incident, policy, vendor
- Framework and regulation names follow official casing: NIS2, DORA, GDPR, ISO 27001, EU AI Act, CRA, SOC 2, ISO 27701, ISO 22301, TISAX.
- Swedish authorities and standards: MSB, IMY, MSBFS. Incident deadlines: early warning 24 hours, incident report 72 hours, final report 1 month (MSB); 72 hours (IMY).
- Capitalized proper nouns: OptiTech Console, OptiTech CLI (write `optitech` only in code), OptiTech API, Trust Center, AI copilot ("AI" caps, "copilot" lowercase).
- Product sections in the docs nav: Evidence collection, AI copilot, OptiTech API, Incidents & risk, Policies and documents, Vendors & Trust Center.
- Integration names follow official capitalization: BankID, Fortnox, Visma, Kivra, Microsoft 365, Entra ID.
- API conventions: base URL `https://api.optitech.com/v1`, key placeholder `$OPTITECH_API_KEY`, custom headers `X-OptiTech-*`, resources are programs, frameworks, integrations, registers, owners.
- The site is a rebranded Neon fork; unconverted pages still describe database concepts (compute, branch, connection string). Never introduce new database terminology into converted compliance pages.
