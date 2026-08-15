---
description: How OptiTech is delivered — managed SaaS or on-premises
---

# Deployment and plans

OptiTech is a hosted compliance platform. Plan tiers and what each includes are listed on the [pricing page](https://optitech-sverige.se/pricing); this page covers the two ways OptiTech can run.

## Where OptiTech runs

OptiTech is available on two deployment models, with an identical feature set:

- **SaaS** — OptiTech hosts and operates a managed instance for you. No infrastructure to run, automatic upgrades, backups handled. The right model when you'd rather focus on the GRC program than on running the platform yourself.
- **On-premises** — you host the platform on your own infrastructure (Linux VM, or Kubernetes via the [Helm chart](../installation/helm-chart.md); see the deployment methods documented under [Installation](../installation/README.md)). Your data stays in your network. The right model when sovereignty, air-gapping, or strict residency requirements rule out a managed service.

You can move between the two models — there's no architectural difference, and the data formats (domain exports, library YAML, audit exports) are stable across deployments.

## Related

- [Pricing](https://optitech-sverige.se/pricing) — current plan tiers and what each includes.
- [Installation](../installation/README.md) — deployment methods for on-premises.
