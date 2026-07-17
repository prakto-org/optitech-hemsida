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
      'The OptiTech team consists of PostgreSQL contributors and technologists on a mission to build the backend for apps and agents, for every developer.',
    pathname: '',
  },
  ai: {
    title: 'Postgres and backend platform for AI — OptiTech',
    description:
      'Build AI agents faster with OptiTech: serverless Postgres, Auth, Functions, Storage, and an AI Gateway, built for operation by agents.',
    imagePath: '/images/social-previews/ai.jpg',
    pathname: LINKS.ai,
  },
  aboutUs: {
    title: 'About Us — OptiTech',
    description:
      'The OptiTech team consists of PostgreSQL contributors and technologists on a mission to build the backend for apps and agents, for every developer.',
    pathname: LINKS.aboutUs,
  },
  blog: {
    title: 'Our Blog — OptiTech',
    description:
      'Learn about OptiTech and how it can help you build better backends for apps and agents by reading our blog posts.',
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
    title: 'Your OptiTech workflow lives in the terminal',
    description: 'The OptiTech CLI brings the OptiTech backend platform to your terminal.',
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
      'Switch to OptiTech for improved scalability, reliability, and engineering efficiency. For developers and AI Agents.',
    pathname: LINKS.enterprise,
    imagePath: '/images/social-previews/enterprise.jpg',
  },
  migration: {
    title: 'Postgres Migration — OptiTech',
    description: 'Learn how to migrate your Postgres database to OptiTech.',
    pathname: LINKS.migration,
    imagePath: '/images/social-previews/migration.jpg',
  },
  multiTB: {
    title: 'OptiTech for Multi-TB Migrations - OptiTech',
    description: 'Migrating a multi-TB workload? We can help.',
    pathname: LINKS.multiTB,
    imagePath: '/images/social-previews/multi-tb.jpg',
  },
  useCases: {
    title: 'Use Cases — OptiTech',
    description:
      'Explore how teams use OptiTech to support branching databases, CI pipelines, preview environments, and production workloads.',
    pathname: LINKS.useCases,
  },
  serverlessApps: {
    title: 'Postgres and backend platform for serverless apps — OptiTech',
    description:
      'Scale your app effortlessly on OptiTech’s serverless backend: Postgres, Auth, Functions, Storage, and an AI Gateway, with automatic scaling and usage-based pricing.',
    pathname: `${LINKS.useCases}/serverless-apps`,
    imagePath: '/images/social-previews/serverless-apps.jpg',
  },
  partners: {
    title: 'Accelerate your business with OptiTech partnership — OptiTech',
    description: 'Bring familiar, reliable and scalable Postgres experience to your customers.',
    imagePath: '/images/social-previews/partners.jpg',
    pathname: LINKS.partners,
  },
  pingThing: {
    robotsNoindex: 'noindex',
  },
  pricing: {
    title: 'Pricing — OptiTech',
    description:
      'OptiTech brings serverless architecture to Postgres, which allows us to offer you flexible usage and volume-based plans.',
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
    title: 'Dynamically scale your Postgres database — OptiTech',
    description:
      'Discover how OptiTech dynamically scales Postgres compute resources for optimal performance during peak traffic without overpaying.',
    imagePath: '/images/social-previews/variable.jpg',
    pathname: LINKS.variable,
  },
  costFleets: {
    title: 'OptiTech for platforms: Cost estimator',
    description:
      'Run thousands of Postgres databases for a fraction of the cost with OptiTech. Great for building your free tier.',
    imagePath: '/images/social-previews/cost-fleets.jpg',
    pathname: LINKS.costFleets,
  },
  branching: {
    title: 'Database Branching Workflows - OptiTech',
    description:
      'A new paradigm for managing Postgres. Instantly create, test, preview, and roll back environments with OptiTech’s powerful database branching.',
    imagePath: '/images/social-previews/branching.jpg',
    pathname: LINKS.branching,
    type: 'article',
  },
  platforms: {
    title: 'Embedded Postgres for Platforms - OptiTech',
    description: 'Offer Postgres to your users',
    pathname: LINKS.platforms,
    type: 'article',
  },
  security: {
    title: 'Security — OptiTech',
    description:
      "Discover OptiTech's security & compliance standards, including SOC 2, GDPR, and HIPAA, with encryption and access controls to protect your data.",
    imagePath: '/images/social-previews/security.jpg',
    pathname: LINKS.security,
  },
  startups: {
    title: 'OptiTech Credits for Startups',
    description:
      'Apply to the Databricks Startup Program and get up to $200K in OptiTech and Databricks credits. For venture-backed companies and startup accelerator programs.',
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
      return 'Stay updated on the latest OptiTech company new and partnership announcements. Explore our blog posts for valuable insights and stay ahead in the world of serverless Postgres.';
    case 'engineering':
      return 'Dive into the technical depths of OptiTech serverless Postgres. Optimize performance, scalability, and reliability. Explore our cutting-edge approach.';
    case 'community':
      return 'Join the vibrant serverless Postgres community. Engage in discussions, tutorials, and success stories. Connect with developers and industry experts.';
    default:
      return 'Learn about OptiTech and how it can help you build better with Serverless Postgres by reading our blog posts.';
  }
};
