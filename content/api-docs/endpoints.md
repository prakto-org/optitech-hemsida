In OptiTech, an integration is a connection to a system you already run, such as Microsoft 365, AWS, or GitHub, that collects evidence for your controls. Each integration runs scheduled checks and normalizes findings into your evidence log.

Each connected source has one active integration and can feed multiple controls. Integrations run on a schedule and re-authenticate as needed. When a control drifts, the integration flags it and can trigger auto-remediation.

Use these endpoints to create, configure, restart, or delete integrations. Common uses include connecting a new source, adjusting check frequency, and re-authenticating a connection.

See [Integrations](/docs/manage/integrations) and [Continuous evidence collection](/docs/postgres/overview) for configuration details.
