---
title: HIPAA
summary: >-
  OptiTech can act as a Business Associate and sign a BAA for customers who
  process protected health information (PHI). PHI is covered by OptiTech's
  standard controls: AES-256 encryption, EU data residency, role-based access,
  and an append-only audit log. HIPAA support is available on higher-tier plans.
enableTableOfContents: true
updatedOn: '2026-08-15T13:33:31.893Z'
---

OptiTech supports customers who process protected health information (PHI) under the US Health Insurance Portability and Accountability Act (HIPAA). If you handle PHI in OptiTech, we act as your Business Associate and sign a Business Associate Agreement (BAA) that sets out how we protect that data.

HIPAA support is available on higher-tier plans. See [Plans](/docs/introduction/plans) for what each plan includes.

## What is HIPAA?

HIPAA is a federal law that sets national standards for the protection of health information. It requires businesses handling PHI to implement safeguards to ensure privacy and security.

## How OptiTech supports HIPAA

If you process PHI in OptiTech, we act as your Business Associate and sign a BAA that sets out how we protect that data. PHI is covered by the same controls that protect all customer data:

- AES-256 encryption at rest, and TLS 1.2/1.3 in transit
- Data stored and processed in EU data centers, under EU ownership
- Role-based access control, with short-lived, identity-bound sessions
- An append-only, hash-chained audit log

For the full list of technical and organizational controls, see [Security overview](/docs/security/security-overview) and [Compliance](/docs/security/compliance).

To review and sign the BAA, [contact OptiTech Support](/docs/introduction/support).

## Key HIPAA terms

- Protected Health Information (PHI): Any identifiable health-related data.
- Covered Entity: Healthcare providers, plans, or clearinghouses that handle PHI.
- Business Associate: A service provider (like OptiTech) that handles PHI on behalf of a Covered Entity.
- Breach: Unauthorized access, use, or disclosure of PHI.
- Security Rule: Safeguards to protect electronic PHI.
- Privacy Rule: Rules governing how PHI is used and disclosed.

## How OptiTech protects your data

1. Use and disclosure of PHI
   - We only use PHI to provide our agreed-upon services and to meet legal obligations.
   - PHI is disclosed only as required by law or with proper authorization.

2. Safeguards
   - Administrative: Policies and training to ensure compliance.
   - Physical: Secure access controls to data storage areas.
   - Technical: Encryption and access controls for electronic PHI.

3. Incident reporting
   - We promptly report any unauthorized use or disclosure of PHI.
   - Breach notifications are provided within 30 days as per HIPAA requirements.

4. Subcontractors and agents
   - Any third parties we work with are required to adhere to the same data protection standards.
   - We publish our full subprocessor list so you can trace exactly where PHI is processed. See [Security overview](/docs/security/security-overview#secure-data-centers).

5. Customer responsibilities
   - Store PHI only in fields intended for sensitive data. Don't put it in record names, titles, descriptions, or other metadata, or in anything that ends up in system-generated logs such as the audit trail.
   - Configure an appropriate session timeout for your organization.
   - Avoid including PHI in support tickets or metadata fields.

6. PHI access and amendments
   - Customers can request access to audit logs by [raising a Support request](https://app.optitech-sverige.se/app/projects?modal=support).
   - Any updates or corrections to PHI need to be carried out by the customer.

## Your rights and what to expect

- Transparency: You can request details about how your PHI is being used.
- Security: Our technical safeguards are designed to prevent unauthorized access.
- Data Control: You retain ownership of your data; we are custodians ensuring its protection.

## Audit logging

Every action taken in OptiTech, in the Console and through the API, is written to an append-only, hash-chained audit log. For PHI, this gives you a tamper-evident record of who did what and when, which you can export for an audit or a regulator. For how the audit log works, see [Security overview](/docs/security/security-overview#protected-records).

## Security incidents

If a breach involving PHI occurs, OptiTech will:

1. Notify you promptly after becoming aware of the incident.
2. Provide the details you need to meet your own notification obligations.
3. Take corrective action to prevent it from happening again.

To report a suspected vulnerability, see [Security reporting](/docs/security/security-reporting).

## Frequently Asked Questions

**Q: Can I request OptiTech to delete my PHI?**  
A: Yes, upon termination of services, we will securely delete or return your PHI.

**Q: How does OptiTech ensure compliance with HIPAA?**  
A: We conduct regular internal audits and provide training to our employees to ensure adherence to HIPAA requirements.

**Q: What should I do if I suspect a data breach?**  
A: Contact our security team immediately at security@optitech.com.

## Contact information

For any questions regarding our HIPAA compliance or to report an issue, please [raise a Support request](https://app.optitech-sverige.se/app/projects?modal=support).

_This guide provides a high-level overview of OptiTech's HIPAA compliance efforts. For more details, please refer to your Business Associate Agreement (BAA) or contact us directly via our [support channels](/docs/introduction/support)._
