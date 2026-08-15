---
description: Capabilities specific to ISO 27001 audits
---

# ISO 27001

Two OptiTech features are tailored to ISO 27001 deliverables: the **Statement of Applicability** report, and the **issues and objectives** registers used to satisfy the context-of-organization requirements.

## Statement of Applicability (SoA)

ISO 27001:2022 §6.1.3 d requires a Statement of Applicability — a document listing the controls of Annex A, recording for each one whether it is applicable, justifying inclusions and exclusions, and stating implementation status.

OptiTech generates the SoA from an existing audit:

1. Open **Reports**, pick the **Statement of Applicability** report.
2. Select the ISO 27001 compliance assessment that holds your control evaluations.
3. Optionally pick a risk assessment to feed the "justification by risk" column.
4. If the framework declares an `SoA` implementation group, it is pre-selected; otherwise pick the implementation groups in scope.
5. The results page renders the full SoA table and offers an export.

The SoA reads from the audit you already maintain — no parallel data entry. Justifications and applicability flags are taken from the requirement assessments; linked applied controls become the implementation summary.

## Issues and objectives

ISO 27001:2022 §4.1 (context of the organization) and §6.2 (information-security objectives) require explicit registers of:

- **Organization issues** — internal and external factors that affect the organization's ability to achieve its information-security outcomes (regulatory pressure, supply-chain dependencies, technology shifts, internal restructuring, …).
- **Organization objectives** — strategic or operational goals that the ISMS supports.

Both registers are first-class surfaces in OptiTech, gated by the `organisation_issues` and `organisation_objectives` feature flags. Each entry can be tagged, owned, and linked to the requirements it substantiates inside an audit — which means an auditor reviewing your context-of-organization clauses sees the same data you used to plan the ISMS.

Although these registers were introduced for ISO 27001, they're available for any framework where capturing organizational context and objectives is useful.

## Related

- [Audits concept](../../concepts/audits.md)
- [Vocabulary → Organizational issue / Organizational objective](../../introduction/vocabulary.md)
