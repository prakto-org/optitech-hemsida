import LINKS from './links';

export const DEFAULT_IMAGE_PATH = '/images/social-previews/index.jpg?updated=2026-05-27';

export default {
  index: {
    title: 'OptiTech — Compliance automation for the Nordics',
    description:
      'AI-driven compliance automation for NIS2, DORA, the AI Act, GDPR, and ISO 27001. Built for Nordic businesses, with MSB and IMY reporting built in.',
    pathname: '',
  },
  about: {
    title: 'About Us - OptiTech',
    description:
      'OptiTech is on a mission to make regulatory compliance a continuous, automated process for Nordic businesses, not a yearly project.',
    pathname: '',
  },
  ai: {
    title: 'AI copilot for compliance — OptiTech',
    description:
      'Ask questions about NIS2, DORA, and GDPR in plain Swedish. OptiTech AI generates policies, answers security questionnaires, and cites the legal text.',
    imagePath: '/images/social-previews/ai.jpg',
    pathname: LINKS.ai,
  },
  aboutUs: {
    title: 'About Us — OptiTech',
    description:
      'OptiTech is on a mission to make regulatory compliance a continuous, automated process for Nordic businesses, not a yearly project.',
    pathname: LINKS.aboutUs,
  },
  serviceIncidentReporting: {
    title: 'Incident reporting for NIS2, GDPR, and DORA — OptiTech',
    description:
      'Guided statutory incident reporting: early warning to CERT-SE/MSB within 24 hours, full notification in 72, final report within a month, and the parallel IMY track. OptiTech keeps track of the clock.',
    pathname: LINKS.serviceIncidentReporting,
  },
  serviceGapAnalysis: {
    title: 'Gap analysis: know where you stand before the audit — OptiTech',
    description:
      'Run an automated gap analysis against NIS2, DORA, GDPR, ISO 27001, and the EU AI Act. Turn the legal text into a prioritized action list you can start on the same day.',
    pathname: LINKS.serviceGapAnalysis,
  },
  serviceFrameworkLibrary: {
    title: 'Framework library: every regulation, cross-mapped — OptiTech',
    description:
      'One library covering NIS2, DORA, GDPR, ISO 27001, and the EU AI Act, built from Nordic legal texts. Evidence you collect once counts everywhere it applies.',
    pathname: LINKS.serviceFrameworkLibrary,
  },
  serviceEvidenceCollection: {
    title: 'Evidence collection: continuous, automated proof — OptiTech',
    description:
      'Collect compliance evidence automatically from your systems around the clock. Controls are verified hourly, and your live status is always ready for auditors and buyers.',
    pathname: LINKS.serviceEvidenceCollection,
  },
  productTrustCenter: {
    title: 'Trust Center: Show your compliance before anyone asks — OptiTech',
    description:
      'Publish a live trust center backed by your OptiTech compliance program. Share audit reports under NDA, answer security reviews with AI, and turn compliance into a sales asset.',
    pathname: LINKS.productTrustCenter,
  },
  team: {
    title: 'The team — OptiTech',
    description:
      'Meet the people behind OptiTech: a team in Stockholm and Malmö working on compliance automation for NIS2, DORA, GDPR, and ISO 27001.',
    pathname: LINKS.team,
  },
  teamYazanGhayad: {
    title: 'Yazan Ghayad, Founder & CEO — OptiTech',
    description:
      'Yazan Ghayad founded OptiTech in 2024. An economist from Lund University working at the intersection of economics, AI, and compliance automation.',
    pathname: LINKS.teamYazanGhayad,
  },
  liaPraktik: {
    title: 'LIA & internships at OptiTech',
    description:
      'Do your LIA, internship, VFU, APL, or prao placement at OptiTech. Join a small Nordic team building compliance automation for NIS2, DORA, GDPR, and ISO 27001, with real responsibility from week one.',
    pathname: LINKS.liaPraktik,
  },
  blog: {
    title: 'Our Blog — OptiTech',
    description:
      'Practical guidance on NIS2, DORA, the AI Act, GDPR, and ISO 27001 for Nordic businesses, from the team behind OptiTech.',
    imagePath: '/images/social-previews/blog.jpg',
    pathname: LINKS.blog,
  },
  guides: {
    title: 'Guides — OptiTech',
    description: 'Learn how to use OptiTech with our guides.',
    pathname: LINKS.guides,
  },
  faqs: {
    title: 'FAQs — OptiTech',
    description: 'Frequently asked questions about OptiTech.',
    pathname: LINKS.faqs,
  },
  caseStudies: {
    title: 'Case Studies — OptiTech',
    description: 'Discover how other companies are using OptiTech.',
    pathname: LINKS.caseStudies,
    imagePath: '/images/social-previews/case-studies.jpg',
  },
  cli: {
    title: 'Compliance as code, from your terminal',
    description:
      'The OptiTech CLI and API bring compliance checks into your CI/CD pipeline. Block deploys that break your controls.',
    pathname: LINKS.cli,
    imagePath: '/images/social-previews/cli.jpg',
  },
  contactSales: {
    title: 'Contact Sales — OptiTech',
    description: 'Interested in learning more about our plans and pricing? Contact our sales team.',
    pathname: LINKS.contactSales,
  },
  enterprise: {
    title: 'OptiTech for Enterprise - OptiTech',
    description:
      'Unlimited frameworks, SSO and SCIM, auditor portals, and a dedicated CSM. Compliance automation for large organizations and regulated financial institutions.',
    pathname: LINKS.enterprise,
    imagePath: '/images/social-previews/enterprise.jpg',
  },
  migration: {
    title: 'Migrate to OptiTech — OptiTech',
    description:
      'Move your compliance work out of spreadsheets, Word documents, and legacy GRC tools into OptiTech, without losing your history.',
    pathname: LINKS.migration,
    imagePath: '/images/social-previews/migration.jpg',
  },
  multiTB: {
    title: 'OptiTech for complex migrations - OptiTech',
    description: 'Migrating a large compliance program? We can help.',
    pathname: LINKS.multiTB,
    imagePath: '/images/social-previews/multi-tb.jpg',
  },
  useCases: {
    title: 'Use Cases — OptiTech',
    description:
      'Explore how teams use OptiTech for NIS2, DORA, GDPR, ISO 27001 certification, vendor risk management, and incident reporting.',
    pathname: LINKS.useCases,
  },
  serverlessApps: {
    title: 'Compliance for SaaS and tech companies — OptiTech',
    description:
      'Win enterprise deals faster with OptiTech: ISO 27001, continuous evidence collection, a public Trust Center, and automated questionnaire answers.',
    pathname: `${LINKS.useCases}/serverless-apps`,
    imagePath: '/images/social-previews/serverless-apps.jpg',
  },
  partners: {
    title: 'Accelerate your business with OptiTech partnership — OptiTech',
    description:
      'MSPs, accounting firms, and advisors: manage compliance for all your clients from one console, with volume discounts and white-label options.',
    imagePath: '/images/social-previews/partners.jpg',
    pathname: LINKS.partners,
  },
  pingThing: {
    robotsNoindex: 'noindex',
  },
  pricing: {
    title: 'Pricing — OptiTech',
    description:
      'Transparent, flat monthly pricing for compliance automation. From 2,995 kr per month, published openly, with no sales calls required.',
    imagePath: '/images/social-previews/pricing.jpg',
    pathname: LINKS.pricing,
  },
  report: {
    title: 'Impact of Postgres restores survey',
    description:
      'We asked 50 developers managing production Postgres about recovery times and their business impact.',
    pathname: LINKS.report,
    imagePath: '/images/social-previews/report.jpg',
  },
  variable: {
    title: 'Compliance that keeps up with your business — OptiTech',
    description:
      'OptiTech monitors your controls continuously and flags drift the moment it happens, so you stay compliant between audits, not just during them.',
    imagePath: '/images/social-previews/variable.jpg',
    pathname: LINKS.variable,
  },
  costFleets: {
    title: 'OptiTech for partners: Cost estimator',
    description:
      'Manage compliance for hundreds of clients for a fraction of the cost with OptiTech. Great for MSPs and advisory firms.',
    imagePath: '/images/social-previews/cost-fleets.jpg',
    pathname: LINKS.costFleets,
  },
  branching: {
    title: 'Compliance Workflows - OptiTech',
    description:
      'A new paradigm for managing compliance. Map controls once, collect evidence continuously, and prove compliance across every framework with OptiTech.',
    imagePath: '/images/social-previews/branching.jpg',
    pathname: LINKS.branching,
    type: 'article',
  },
  platforms: {
    title: 'Embedded Compliance for Platforms - OptiTech',
    description: 'Offer compliance tooling to your users',
    pathname: LINKS.platforms,
    type: 'article',
  },
  security: {
    title: 'Security — OptiTech',
    description:
      "Discover OptiTech's security & compliance standards, including ISO 27001, SOC 2, and GDPR, with EU data residency, encryption, and access controls to protect your data.",
    imagePath: '/images/social-previews/security.jpg',
    pathname: LINKS.security,
  },
  startups: {
    title: 'OptiTech for Startups',
    description:
      'Get compliant early. Discounted onboarding and credits for early-stage startups facing NIS2, DORA, or ISO 27001 requirements for the first time.',
    pathname: LINKS.startups,
  },
  autoscalingReport: {
    title: 'Compute Autoscaling Report',
    description: 'A deep-dive into the numbers behind OptiTech Autoscaling.',
    imagePath: '/images/social-previews/compute-autoscaling-report.jpg',
    pathname: LINKS.autoscalingReport,
  },
  error: {
    title: 'Page Is Broken — OptiTech',
  },
  404: {
    title: 'Page Not Found — OptiTech',
  },
};

export const getBlogCategoryDescription = (category) => {
  switch (category) {
    case 'company':
      return 'Stay updated on the latest OptiTech company news and partnership announcements. Explore our blog posts for valuable insights and stay ahead in Nordic compliance.';
    case 'engineering':
      return 'Dive into the technical depths of OptiTech compliance automation. Evidence collection, integrations, and AI. Explore our cutting-edge approach.';
    case 'community':
      return 'Join the Nordic compliance community. Engage in discussions, tutorials, and success stories. Connect with security leaders and industry experts.';
    default:
      return 'Learn about OptiTech and how it can help you automate NIS2, DORA, GDPR, and ISO 27001 compliance by reading our blog posts.';
  }
};
