---
title: Security overview
summary: >-
  OptiTech enforces TLS encryption on every connection, BankID and SSO login,
  role-based access control, AES-256 data-at-rest encryption, and an
  append-only, hash-chained audit log. All data stays in Swedish and EU data
  centers under EU ownership. The page also covers GitHub secret scanning for
  API keys, vulnerability management, and the bug bounty program.
enableTableOfContents: true
redirectFrom:
  - /docs/security/security
  - /docs/security
updatedOn: '2026-07-18T10:05:35.398Z'
---

At OptiTech, security is our highest priority. We are committed to implementing best practices and earning the trust of our users. A key aspect of earning this trust is by ensuring that every touchpoint in our system, from login, to evidence storage, to our internal processes, adheres to the highest security standards. We also run our own compliance program on OptiTech and hold our own ISO 27001 certification.

## Secure access

OptiTech supports a variety of protections related to platform access:

- **TLS encryption**: OptiTech requires that all connections use TLS encryption to ensure that data sent over the Internet cannot be viewed or manipulated by third parties. This applies to the Console, the API, and every integration worker that collects evidence from your systems.

- **BankID and SSO login**: Your team signs in with BankID, or with SSO through your identity provider on the Enterprise plan. There are no shared passwords to leak, and offboarded employees lose access the moment your identity provider says so.

- **Role-based access control**: Admins, contributors, and viewers see and change only what their role allows. Auditor access is a separate, read-only scope, so an external reviewer can never modify what they review.

- **Session protection**: Sessions are short-lived and bound to the authenticated identity. Sensitive actions, like confirming an authority submission, require fresh authentication.

- **API key scoping**: API keys for [compliance as code](/docs/data-api/overview) are scoped and revocable, and every API action lands in the same audit log as Console actions.

## Single sign-on support

OptiTech's SSO support ensures that platform access follows your central identity policy, preventing unauthorized access and helping maintain overall data security. You can enforce your own MFA, conditional access, and offboarding rules through your identity provider. SSO and SCIM provisioning are available on the [Enterprise plan](/docs/introduction/plans#enterprise-features).

## Protected records

Evidence and audit records are protected by design, which implements a series of protections:

- Evidence entries cannot be deleted.
- Evidence entries cannot be edited after they are written.
- The audit log is append-only, with each entry hash-chained to the previous one.
- Approved document versions are immutable; changes create new versions.
- Authority submissions are recorded with who confirmed them and when.
- Auditor portal access is read-only and separately logged.
- Historical states can be reconstructed exactly, for any point in time.

These protections apply on every OptiTech plan. Typically, this matters most for the records an auditor or supervisory authority reviews. For how the append-only log works, refer to our [architecture overview](/docs/introduction/architecture-overview).

## EU data residency

All customer data is stored and processed in Swedish and EU data centers, under EU ownership, bypassing US-based processing entirely. This applies to every OptiTech plan, including the AI features, which run on EU-hosted models. No customer data is sent to US-based AI providers.

## Data-at-rest encryption

Data-at-rest encryption is a method of storing inactive data that converts plaintext data into a coded form or cipher text, making it unreadable without an encryption key. OptiTech encrypts all stored data, including evidence, documents, and configuration, using an `AES-256` block cipher, with encryption keys managed in a dedicated key management service with rotation policies in place.

## Secure data centers

OptiTech's infrastructure is hosted and managed within secure European data centers, operated by providers such as Elastx, Safespring, and AWS's Stockholm region with an EU data boundary, depending on your configuration.

These providers continually manage risk and undergo recurring assessments to ensure compliance with industry standards. Physical security, redundancy, and environmental controls are audited by independent third parties, and we publish our full subprocessor list so you can trace exactly where your data lives.

## Compliance-relevant security measures

At OptiTech, we implement robust technical controls to secure customer and sensitive data in alignment with ISO 27001 and SOC 2 standards and GDPR regulations. We are our own first customer: OptiTech's compliance program runs on OptiTech. To learn more about these standards, see [Compliance](/docs/security/compliance).

All systems are hosted in EU data centers, where we have implemented specific security measures to protect data. Below is a detailed breakdown of these compliance-relevant security measures for access control, encryption, network security, event logging, vulnerability management, backups, data deletion and retention:

- **Customer and Sensitive Data Encryption**

  All customer and sensitive data is encrypted using AES-256 encryption at rest. For data in transit, encryption is enforced using TLS 1.2/1.3 protocols across all services. Encryption keys are managed in a dedicated key management service with key rotation policies in place. Only services and users with specific roles can access the decryption keys, and all access is logged for auditing and compliance purposes.

- **Fine-Grained Access Control**

  Access to customer and sensitive data is controlled through least-privilege role policies. Broad access is limited to the infrastructure and security teams, while other roles operate under least-privilege principles. When additional access is needed, access requests to production systems are recorded, and all sessions are logged. Only managers and on-call personnel are permitted to access production or approve production access requests.

  Additionally, all infrastructure is managed through infrastructure as code, ensuring that any changes to access controls or resources are fully auditable and version-controlled. Regular access reviews and audits are conducted to verify that access rights remain aligned with security best practices.

- **Data Segmentation and Isolation**

  In our environments, workloads are segmented using virtual private networks to separate sensitive data environments from other systems. We control network access between services by restricting access to only the necessary traffic. This ensures a clear separation of environments, minimizing the risk of unauthorized access or lateral movement between services. Customer organizations are isolated from each other at every layer.

- **Event-Based Anomaly Detection**

  Customer data access attempts and other anomalies are continuously monitored. All alerts are ingested into our SIEM for centralized logging, analysis, and correlation with other security data. This allows our security operations to quickly detect, investigate, and respond to potential security threats.

- **Data Access Logging and Auditing**

  All data access actions, including those involving sensitive operations, are logged and forwarded to centralized logging and analysis. This provides full traceability of who accessed which resources, when, and from where. Logs are secured and retained for audit purposes, while any anomalies or suspicious activity trigger real-time alerts for immediate investigation and response.

- **Backup, Retention, and Deletion Policies**

  Customer data backups are stored encrypted with versioning enabled, allowing recovery from accidental deletions or modifications. Data deletion procedures ensure compliance with ISO 27001 and GDPR requirements, including data subject requests. Evidence retention follows the periods your active frameworks require.

- **Vulnerability Management**

  Our vulnerability management program continuously scans all environments for security issues, including misconfigurations, unpatched software, and exposed credentials. We use classification to enable focused monitoring based on the sensitivity of the data. Automated alerts allow us to address vulnerabilities before they pose a risk to sensitive information. The vulnerabilities are remediated according to the defined SLAs to reduce the risk.

- **Annual Audits and Continuous Penetration Testing**

  We undergo annual audits for ISO 27001 by an independent firm to verify the integrity and security of our systems. In addition, quarterly penetration tests are performed, with results feeding into our vulnerability management program. The vulnerabilities are remediated according to the defined SLAs to reduce the risk.

To learn more about how we protect your data and uphold the highest standards of security and privacy, please visit our own [Trust Center](/docs/ai-gateway/overview), built with the same module our customers use.

## GitHub secret scanning

OptiTech is a [GitHub Secret Scanning Partner](https://docs.github.com/en/code-security/secret-scanning/secret-scanning-partner-program). If an OptiTech API key is detected in a GitHub repository, GitHub alerts OptiTech through an automated system. This system validates the credential and notifies our security team.

By integrating with GitHub Secret Scanning, OptiTech helps users quickly identify and mitigate exposed credentials, reducing the risk of unauthorized access.

To avoid leaking secrets, follow these security best practices:

- Use environment variables instead of hardcoding credentials.
- Store sensitive information in secret management tools.
- Regularly rotate API keys.

If you have questions about this integration or need help securing your credentials, contact us at `contact@optitech.com`.

## Rotate credentials

Rotate your API keys regularly, and immediately if one is exposed. An OptiTech API key grants the access of the role that created it, so treat it like a login. You revoke and reissue keys in the Console under **Settings**, then **API keys**.

After you revoke a key, it stops working on the next request. Create the replacement key and roll it out everywhere the old one was stored, including CI/CD secrets, secret managers, and local `.env` files, before your automation runs again.

### Rotate after a leak or breach

If a credential is exposed, for example through a leaked `.env` file, a compromised pipeline, or a stolen device, rotate every affected credential rather than just one:

1. Revoke every API key the exposed environment could reach, and create new ones.
2. Roll the new keys out to every secret store, then watch your pipeline logs for authentication errors, which flag a location you missed.
3. Force re-authentication for affected users; BankID and SSO sessions are invalidated centrally through your identity provider.
4. Review the audit log for actions taken with the exposed credential.
5. Audit your team roster and remove any account you do not recognize.

If the exposure could constitute a personal data breach, open the [IMY incident flow](/docs/compute/functions/overview) at the same time; the 72-hour clock runs regardless of your rotation work.

### Rotate without downtime

Revoking a key cuts over all consumers at once. To rotate gradually, create a parallel key with the same scope and migrate consumers one pipeline at a time, since both keys keep working during the migration. Revoke the old key at the end to close the exposure.

## Abuse of resources

Users must not engage in activities that result in unintended or non-permitted use of OptiTech resources, or that disrupt or degrade the service for other users. Prohibited activities include, but are not limited to, intentional or unintentional denial-of-service attacks, exceeding rate limits, scraping other organizations' data, or other usage that falls outside the intended resource usage and limits of the applicable [OptiTech plan](/docs/introduction/plans).

## Unauthorized modifications

Tampering with OptiTech's infrastructure, configurations, or any restricted settings is prohibited. Doing so will be considered a violation of our terms. This includes attempts to alter the evidence log, audit records, or platform-managed settings without proper authorization.

## Security reporting

OptiTech adheres to the [securitytxt.org](https://securitytxt.org/) standard for transparent and efficient security reporting. For details on how to report potential vulnerabilities, please visit our [Security reporting](/docs/security/security-reporting) page or refer to our [security.txt](/security.txt) file.

OptiTech also runs a public bug bounty program; see [Security reporting](/docs/security/security-reporting#bug-bounty-program-with-hackerone).

## Questions about our security measures?

If you have any questions about our security protocols or would like a deeper dive into any aspect, our team is here to help. You can reach us at [contact@optitech.com](mailto:contact@optitech.com).
