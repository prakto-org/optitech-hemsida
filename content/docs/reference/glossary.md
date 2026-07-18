---
title: Glossary
summary: >-
  The OptiTech glossary defines platform and compliance terms including
  control, evidence, finding, framework, cross-mapping, gap analysis,
  compliance score, and supplier register. Look up OptiTech concepts like
  assessment mode, the auditor portal, auto-remediation, the append-only
  evidence log, or the MSB incident flow, or check how OptiTech uses standard
  regulatory terms from NIS2, DORA, GDPR, ISO 27001, and the EU AI Act.
  Workspace roles, plan names, and integration terms are all defined here.
enableTableOfContents: true
redirectFrom:
  - /docs/conceptual-guides/glossary
  - /docs/cloud/concepts/
updatedOn: '2026-07-18T10:05:35.398Z'
---

## acknowledgment

An employee's recorded confirmation that they have read and accepted a published [policy](#policy). OptiTech tracks acknowledgments per policy version, and a material policy change triggers re-acknowledgment. Acknowledgment records are stored as [evidence](#evidence).

## Admin

A [workspace](#workspace) role with full access to frameworks, controls, integrations, members, and settings. Admins cannot delete the workspace; that requires the [Owner](#owner) role.

## AI copilot

OptiTech's assistant for compliance questions, policy drafting, and questionnaire answers. It uses [retrieval-augmented generation](#retrieval-augmented-generation-rag) over legal texts, MSB regulations, and your own workspace data, always cites its sources, and runs on EU-hosted models. Everything it produces is a draft until a person approves it. Available on the Professional plan and above.

## AI system inventory

The register of every AI system your organization builds, embeds, or procures. Each entry carries its purpose, data, models, ownership, [EU AI Act](#eu-ai-act) risk classification, and, where relevant, its ISO 42001 impact assessment. Procured AI links to the [supplier register](#supplier-register).

## API key

A scoped, revocable credential for the OptiTech API and CLI. API keys are used for [compliance as code](#compliance-as-code) workflows: CI checks, Terraform, and reporting automation. Every API action is recorded in the [audit log](#audit-log). Rotate keys on a schedule, and immediately if you suspect exposure.

## append-only

A storage property of the [evidence log](#evidence-log) and [incident records](#incident-record): entries can be added but never edited or deleted. Corrections are new entries. Combined with [hash chaining](#hash-chain), this makes OptiTech's history tamper-evident, which is what lets auditors and authorities trust it.

## assessment mode

A way to evaluate a new [framework](#framework) without affecting your live program. OptiTech maps your existing [controls](#control) against the framework's requirements and shows coverage and gaps, but creates no tasks and changes no dashboards. Promote the assessment to activate the framework, or discard it without a trace.

## asset inventory

The register of systems, services, and devices in your compliance scope. Much of it is populated automatically from [integrations](#integration): devices from your MDM, cloud accounts from AWS or Azure, repositories from GitHub. Assets carry classification tags (for example CUI, PHI, or personal data) that determine which checks apply to them.

## audit log

The chronological record of administrative actions in a [workspace](#workspace): logins, permission changes, exports, deletions, and configuration changes. Distinct from the [evidence log](#evidence-log), which records control verification results. Both are [append-only](#append-only).

## auditor portal

A read-only, expiring view of your compliance program for external auditors, scoped to a [framework](#framework) and period. Auditors sample [evidence](#evidence) directly, with timestamps, instead of sending you request lists. Every view is logged. Included in the Enterprise plan.

## auto-remediation

Fixing a failed [control](#control) directly from the [finding](#finding), where the integration supports it. Example: a lingering account after offboarding can be disabled through the Entra ID API with one click, or a ready-made ticket can be created in Jira or Teams for the owning team. The remediation and the passing re-check are both logged.

## BankID

Swedish electronic identification, supported as a login method for OptiTech alongside SSO. See [SSO](#sso).

## board report

A generated management report: [compliance score](#compliance-score) per framework with trend, open findings, incidents, and top risks, in management language. NIS2 and similar regulations require demonstrable management oversight; a regularly reviewed board report is the standard way to evidence it.

## check

An automated verification of a [control](#control), run on a schedule through an [integration](#integration). Example checks: MFA coverage in Entra ID, offboarding completed within 24 hours, encryption at rest enabled, backup jobs succeeding. Check results are timestamped and stored in the [evidence log](#evidence-log). A failing check opens a [finding](#finding).

## compliance as code

Running compliance checks the way you run tests: from the CLI, in CI pipelines, and through infrastructure as code. OptiTech provides a CLI, a REST API, a Terraform provider, and CI integration so control violations fail a pull request instead of surfacing in an audit. See [check](#check).

## compliance pass

A maintained, read-only view of a company's certifications and control status, shared across company boundaries through OptiTech's supplier network. Suppliers share a pass instead of answering the same [questionnaire](#questionnaire) repeatedly; customers subscribe and are notified when something material changes.

## compliance score

The share of applicable requirements backed by passing [controls](#control), weighted by significance, computed per [framework](#framework). The score is derived from live [check](#check) results, so it moves when reality moves. Unverified controls lower confidence visibly rather than showing as green.

## contributor

A [workspace](#workspace) role that can edit assigned objects (policies, risks, controls) but not manage members, integrations, or settings. Consultants typically get a scoped, [time-limited](#guest-access) contributor role.

## control

The unit of compliance work: a verifiable statement like "MFA is enforced for all users" or "offboarding completes within 24 hours." Controls are [cross-mapped](#cross-mapping) to requirements in one or more [frameworks](#framework), have an [owner](#control-owner), and are verified by automated [checks](#check), recurring manual tasks, or both.

## control owner

The person or team accountable for a [control](#control). [Findings](#finding) route to the owner in their own tools (Jira, Teams, Slack), and review deadlines chase the owner automatically. Unowned controls are flagged, and offboarding an owner triggers reassignment.

## cross-mapping

The many-to-many link between [controls](#control) and framework requirements: one control satisfies requirements in several [frameworks](#framework) at once, and its [evidence](#evidence) counts everywhere it maps. Cross-mapping is why adding a second framework is a delta, not a rebuild. See [delta analysis](#delta-analysis).

## delta analysis

The gap report produced when you activate or assess a new [framework](#framework) or framework version: which requirements your existing [controls](#control) already cover, and what is genuinely new. See [assessment mode](#assessment-mode) and [gap analysis](#gap-analysis).

## DORA

The EU Digital Operational Resilience Act, in force since January 2025. It requires financial entities, and reaches their ICT providers, to manage ICT risk, report major incidents, test resilience, and maintain an [ICT register](#ict-register). OptiTech's DORA package is included in the Enterprise plan.

## DPA

Data processing agreement: the GDPR-required contract with every vendor that processes personal data on your behalf. OptiTech tracks DPA status, expiry, and transfer mechanism per vendor in the [supplier register](#supplier-register).

## entity classification

Under [NIS2](#nis2), whether your organization is an essential or important entity. The classification affects supervision intensity and sanction levels. OptiTech's [scoping wizard](#scoping-wizard) estimates your likely classification from your industry, size, and services.

## EU AI Act

The EU regulation applying risk-based oversight to AI systems: prohibited, high-risk, limited-risk, and minimal-risk categories, with obligations phasing in through 2027. OptiTech supports it with the [AI system inventory](#ai-system-inventory), guided risk classification, and the high-risk obligation set as maintained controls.

## evidence

Proof that a [control](#control) operates: an automated [check](#check) result, an uploaded artifact (a pentest report, a signed review), or a workflow record (a completed training, an approved policy). Evidence is timestamped and stored in the [evidence log](#evidence-log).

## evidence log

The [append-only](#append-only), [hash-chained](#hash-chain) record of all [evidence](#evidence) in a workspace. It's what makes your compliance history provable: auditors sample it, the [point-in-time view](#point-in-time-view) reads from it, and exports include its integrity chain for independent verification.

## exception

A documented, approved deviation from a [control](#control): a risk acceptance with an approver, a reason, and an expiry date. Exceptions convert a red [finding](#finding) into a tracked decision instead of silent noncompliance, and they resurface for review when they expire.

## finding

An open issue on a [control](#control): a failed [check](#check), an overdue task, or an audit observation. Findings carry the failed values, affected resources, and history, route to the [control owner](#control-owner), and close when a re-check passes or the item is resolved. Deduplication keeps one drifting control as one finding, not a daily repeat. See [auto-remediation](#auto-remediation).

## framework

A regulation or standard loaded as a requirement catalog in OptiTech: NIS2, DORA, GDPR, ISO 27001, the EU AI Act, CRA, SOC 2, and others. Frameworks are versioned; updates arrive as a [delta analysis](#delta-analysis). Your plan determines how many frameworks are active at once: one on Start, three on Professional, unlimited on Enterprise.

## gap analysis

The prioritized list of what's missing for a target [framework](#framework), produced by the [scoping wizard](#scoping-wizard) at onboarding or by [assessment mode](#assessment-mode) later. Gaps are ordered by risk and effort and become owned tasks when the framework is activated.

## guest access

Time-limited access for external people: auditors (read-only, via the [auditor portal](#auditor-portal)) or consultants (scoped [contributor](#contributor)). Guest access has an expiry set at invitation and revokes itself; extensions are deliberate, logged acts.

## hash chain

The cryptographic linking of consecutive [evidence log](#evidence-log) entries: each entry includes a hash of the previous one, so any tampering after the fact is detectable. Exports include the chain head so a recipient can verify integrity without OptiTech's involvement.

## ICT register

DORA's register of information: the structured record of all ICT arrangements a financial entity holds, with prescribed fields for services, data locations, criticality, and subcontracting chains. In OptiTech it's generated as a view over the [supplier register](#supplier-register) and exports in the format supervisors expect.

## IMY

Integritetsskyddsmyndigheten, the Swedish data protection authority. Personal data breaches that risk individuals' rights must be reported to IMY within 72 hours. OptiTech's [incident flow](#incident-flow) tracks the deadline and pre-fills the notification from the incident timeline.

## incident flow

The guided process that starts when you open an [incident record](#incident-record): severity and reportability assessment, deadline countdowns per applicable regime ([MSB](#msb) 24-hour early warning, 72-hour notification, one-month final report; [IMY](#imy) 72 hours; DORA's report sequence), pre-filled authority forms, contact lists, and communication templates.

## incident record

The [append-only](#append-only) working surface for a security or compliance incident: timeline entries, decisions, attached artifacts, and actions, all timestamped and attributed. The record feeds authority reports during the incident and the lessons-learned review after it.

## integration

A read-only API connection between OptiTech and a system you run: Microsoft 365 and Entra ID, Google Workspace, AWS, Azure, GitHub, GitLab, Jira, Slack, Teams, Intune, Jamf, CrowdStrike, Defender, Fortnox, Visma, and others. Integrations feed [checks](#check) and populate the [asset inventory](#asset-inventory). No agents are installed on your servers.

## ISO 27001

The international standard for an information security management system (ISMS), certifiable by accredited bodies. OptiTech implements the management clauses (risk process, document control, internal audit, improvement) and verifies Annex A controls continuously. Extensions like ISO 27017, 27018, and 27701 activate on the same control set.

## member

Any user in a [workspace](#workspace): [Owner](#owner), [Admin](#admin), [contributor](#contributor), or viewer. External people get [guest access](#guest-access) instead of membership.

## MSB

Myndigheten för samhällsskydd och beredskap, the Swedish Civil Contingencies Agency. Under NIS2 (the Swedish Cybersecurity Act), reportable incidents go to MSB on a strict sequence: early warning within 24 hours, incident notification within 72 hours, final report within one month. OptiTech's [incident flow](#incident-flow) implements the sequence with countdowns and pre-filled forms.

## NIS2

The EU directive on cybersecurity for essential and important entities across 18 sectors, implemented in Sweden through the Cybersecurity Act and MSB regulations (MSBFS). It requires proportionate risk management measures, incident reporting, supply chain security, and active management oversight, with personal liability for boards. OptiTech's NIS2 catalog is built from the Swedish legal texts. See [entity classification](#entity-classification) and [MSB](#msb).

## Owner

The [workspace](#workspace) role with full control, including workspace deletion and billing. Every workspace has at least one Owner. Compare [Admin](#admin).

## plan

OptiTech's pricing tiers: **Start** (one framework, ten integrations), **Professional** (three frameworks, all integrations, supplier risk, Trust Center, AI copilot), **Enterprise** (unlimited frameworks, SSO/SCIM, API, auditor portal, DORA package), and **Partner/MSP** (multi-tenant console, white label). Prices are public. Downgrading never deletes history; see [retention](#retention).

## point-in-time view

The ability to see your compliance program exactly as it stood on a past date: control statuses, evidence, policies in force. Reads from the [evidence log](#evidence-log), and works across [workspace](#workspace) changes like region moves. Auditors use it to sample past periods; incident reviews use it to establish timelines.

## policy

A governed document (information security policy, incident response plan, acceptable use policy) with one published version, optional drafts, version history, an owner, a review cycle, and employee [acknowledgment](#acknowledgment) tracking. OptiTech ships 50+ templates adapted to your environment at generation time.

## questionnaire

A structured security or compliance questionnaire sent to or received from another company. Outbound questionnaires go to suppliers from the [supplier register](#supplier-register); the supplier answers in a free account and can reuse the answers. Inbound questionnaires can be answered by the [AI copilot](#ai-copilot) from live control data, with human review before sending.

## retention

OptiTech's data retention model: collected [evidence](#evidence), policies, risks, and incident history are kept through downgrades and pauses; only forward-looking automation stops. Full export is always available, including the [hash chain](#hash-chain). Workspace deletion is a separate, owner-only act with a grace period.

## retrieval-augmented generation (RAG)

The AI technique behind the [AI copilot](#ai-copilot): before answering, the system retrieves the relevant passages from an indexed corpus (legal texts, MSBFS, your own controls and evidence) and generates the answer grounded in those passages, with citations. This is what keeps answers verifiable instead of merely plausible.

## review cycle

The recurring schedule on which a [policy](#policy), [control](#control), risk, or supplier assessment must be re-reviewed. Deadlines generate reminders to the owner, and completed reviews are logged as [evidence](#evidence).

## risk register

The structured record of identified risks: likelihood and impact scoring, treatment plans, links to the [controls](#control) that treat each risk, and assessment history. Serves ISO 27001's risk clauses, NIS2's risk analysis measure, and DORA's ICT risk framework from one register.

## scoping wizard

The onboarding assessment (about 20 questions on industry, size, systems, customers, and supply chain position) that determines which regulations apply to you, your likely [entity classification](#entity-classification), and your starting [gap analysis](#gap-analysis). Re-run it when your situation changes materially.

## SSO

Single sign-on: logging in to OptiTech through your identity provider, so access follows your central MFA, conditional access, and offboarding rules. Available with SCIM provisioning on the Enterprise plan. [BankID](#bankid) login is available on all plans.

## supplier register

The record of your vendors and their compliance posture: [DPA](#dpa) status, certifications, [questionnaire](#questionnaire) responses, risk classification, contract data, and, for DORA, the fields the [ICT register](#ict-register) requires. Suppliers you engage through OptiTech get free accounts and can share a [compliance pass](#compliance-pass).

## Trust Center

Your public security page, hosted by OptiTech, optionally on your own domain: certifications, control summaries derived from live monitoring, subprocessor list with change notifications, and gated documents behind NDA click-through. Available on the Professional plan and above.

## workspace

The top-level container for one organization's compliance program: frameworks, controls, evidence, policies, risks, suppliers, incidents, members, and integrations. Corporate groups run one workspace per legal entity with group-level rollup; MSPs manage many client workspaces from the Partner console. Workspace data is hosted in Swedish and EU data centers.
