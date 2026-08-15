import LINKS from './links';

export default {
  header: [
    {
      text: 'Product',
      sections: [
        {
          title: 'Build the program',
          items: [
            {
              title: 'Gap analysis',
              to: `${LINKS.services}/gap-analysis`,
              description: 'Know what applies to you',
            },
            {
              title: 'Framework library',
              to: `${LINKS.services}/framework-library`,
              description: 'Do it once, prove it everywhere',
            },
            {
              title: 'Evidence collection',
              to: `${LINKS.services}/evidence-collection`,
              description: 'Proof from the tools you use',
            },
            {
              title: 'Risk register',
              to: `${LINKS.services}/risk-register`,
              description: 'Risk linked to controls',
            },
          ],
        },
        {
          title: 'Run it day to day',
          items: [
            {
              title: 'Incident reporting',
              to: LINKS.serviceIncidentReporting,
              description: 'MSB and IMY deadlines, handled',
            },
            {
              title: 'Policies & documents',
              to: `${LINKS.services}/policy-management`,
              description: 'Templates, reviews, signatures',
            },
            {
              title: 'Supplier risk',
              to: `${LINKS.services}/supplier-risk`,
              description: 'Vendors, contracts, DORA register',
            },
            {
              title: 'Training & awareness',
              to: `${LINKS.services}/training`,
              description: 'Including the board',
            },
          ],
        },
        {
          title: 'Prove it',
          items: [
            {
              title: 'Trust Center',
              to: LINKS.productTrustCenter,
              description: 'Show compliance before anyone asks',
            },
            {
              title: 'Auditor mode',
              to: `${LINKS.services}/audit-mode`,
              description: 'A portal, not a shoebox',
            },
            {
              title: 'Dashboards',
              to: `${LINKS.services}/dashboards`,
              description: 'Board-ready reporting',
            },
            {
              title: 'AI copilot',
              to: `${LINKS.services}/ai-copilot`,
              description: 'Fluent in Swedish law',
            },
            {
              title: 'All services',
              to: LINKS.services,
              description: 'Browse everything',
            },
          ],
        },
      ],
    },
    {
      text: 'Solutions',
      sections: [
        {
          title: 'Use cases',
          items: [
            {
              title: 'Serverless App',
              to: `${LINKS.useCases}/serverless-apps`,
              description: 'Autoscale with traffic',
            },
            {
              title: 'Multi-TB',
              to: `${LINKS.useCases}/multi-tb`,
              description: 'Scale and restore instantly',
            },
            {
              title: 'Database per tenant',
              to: `${LINKS.useCases}/database-per-tenant`,
              description: 'Data isolation without overhead',
            },
          ],
        },
        {
          title: 'Build & operate',
          items: [
            {
              title: 'Platforms',
              to: LINKS.platforms,
              description: 'Offer Postgres for your users',
            },
            {
              title: 'Dev/Tests',
              to: `${LINKS.useCases}/dev-test`,
              description: 'Production-like environment',
            },
            {
              title: 'Agents',
              to: `${LINKS.useCases}/ai-agents`,
              description: 'Build full-stack AI agents',
            },
          ],
        },
      ],
    },
    {
      text: 'Frameworks',
      sections: [
        {
          title: 'Nordic core',
          items: [
            {
              title: 'NIS2',
              to: `${LINKS.frameworks}/nis2`,
              description: 'The Swedish Cybersecurity Act',
            },
            {
              title: 'DORA',
              to: `${LINKS.frameworks}/dora`,
              description: 'Finance and its ICT providers',
            },
            {
              title: 'GDPR',
              to: `${LINKS.frameworks}/gdpr`,
              description: 'RoPA and the IMY breach flow',
            },
            {
              title: 'ISO 27001',
              to: `${LINKS.frameworks}/iso-27001`,
              description: 'The full control catalog',
            },
            {
              title: 'EU AI Act',
              to: `${LINKS.frameworks}/eu-ai-act`,
              description: 'High-risk AI, phasing in',
            },
          ],
        },
        {
          title: 'Also covered',
          items: [
            {
              title: 'CRA',
              to: `${LINKS.frameworks}/cra`,
              description: 'Products with digital elements',
            },
            {
              title: 'SOC 2',
              to: `${LINKS.frameworks}/soc-2`,
              description: 'What US buyers ask for',
            },
            {
              title: 'ISO 27701',
              to: `${LINKS.frameworks}/iso-27701`,
              description: 'Privacy on top of ISO 27001',
            },
            {
              title: 'ISO 22301',
              to: `${LINKS.frameworks}/iso-22301`,
              description: 'Business continuity',
            },
            {
              title: 'TISAX',
              to: `${LINKS.frameworks}/tisax`,
              description: 'The automotive standard',
            },
            {
              title: 'All frameworks',
              to: LINKS.frameworks,
              description: 'Browse everything',
            },
          ],
        },
      ],
    },
    {
      text: 'Docs',
      to: LINKS.docs,
    },
    {
      text: 'Pricing',
      to: LINKS.pricing,
    },
    {
      text: 'Resources',
      sections: [
        {
          title: 'Learn',
          items: [
            {
              title: 'Blog',
              to: LINKS.blog,
              description: 'Technical posts & product updates',
            },
            {
              title: 'Case studies',
              to: LINKS.caseStudies,
              description: 'Explore customer stories',
            },
            {
              title: 'Changelog',
              to: LINKS.changelog,
              description: 'Product updates',
            },
            {
              title: 'Community',
              to: LINKS.discord,
              description: 'Connect on Discord',
            },
            {
              title: 'Startups',
              to: LINKS.startups,
              description: 'Build with OptiTech',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              title: 'About us',
              to: LINKS.aboutUs,
              description: 'The company and the mission',
            },
            {
              title: 'Careers',
              to: LINKS.liaPraktik,
              description: 'LIA & internships with us',
            },
            {
              title: 'Contact sales',
              to: LINKS.contactSales,
              description: 'Contact sales team',
            },
            {
              title: 'Security',
              to: LINKS.security,
              description: 'Compliance & privacy',
            },
            {
              title: 'Status',
              to: LINKS.status,
              description: 'Service status',
            },
          ],
        },
      ],
    },
  ],
  footer: [
    {
      heading: 'Services',
      items: [
        {
          text: 'Gap analysis',
          to: `${LINKS.services}/gap-analysis`,
        },
        {
          text: 'Framework library',
          to: `${LINKS.services}/framework-library`,
        },
        {
          text: 'Evidence collection',
          to: `${LINKS.services}/evidence-collection`,
        },
        {
          text: 'Risk register',
          to: `${LINKS.services}/risk-register`,
        },
        {
          text: 'Incident reporting',
          to: LINKS.serviceIncidentReporting,
        },
        {
          text: 'Policies & documents',
          to: `${LINKS.services}/policy-management`,
        },
        {
          text: 'Supplier risk',
          to: `${LINKS.services}/supplier-risk`,
        },
        {
          text: 'Training & awareness',
          to: `${LINKS.services}/training`,
        },
        {
          text: 'Trust Center',
          to: LINKS.productTrustCenter,
        },
        {
          text: 'Auditor mode',
          to: `${LINKS.services}/audit-mode`,
        },
        {
          text: 'Dashboards',
          to: `${LINKS.services}/dashboards`,
        },
        {
          text: 'AI copilot',
          to: `${LINKS.services}/ai-copilot`,
        },
        {
          text: 'All services',
          to: LINKS.services,
        },
      ],
    },
    {
      heading: 'Frameworks',
      items: [
        {
          text: 'NIS2',
          to: `${LINKS.frameworks}/nis2`,
        },
        {
          text: 'DORA',
          to: `${LINKS.frameworks}/dora`,
        },
        {
          text: 'GDPR',
          to: `${LINKS.frameworks}/gdpr`,
        },
        {
          text: 'ISO 27001',
          to: `${LINKS.frameworks}/iso-27001`,
        },
        {
          text: 'EU AI Act',
          to: `${LINKS.frameworks}/eu-ai-act`,
        },
        {
          text: 'CRA',
          to: `${LINKS.frameworks}/cra`,
        },
        {
          text: 'SOC 2',
          to: `${LINKS.frameworks}/soc-2`,
        },
        {
          text: 'ISO 27701',
          to: `${LINKS.frameworks}/iso-27701`,
        },
        {
          text: 'ISO 22301',
          to: `${LINKS.frameworks}/iso-22301`,
        },
        {
          text: 'TISAX',
          to: `${LINKS.frameworks}/tisax`,
        },
        {
          text: 'All frameworks',
          to: LINKS.frameworks,
        },
      ],
    },
    {
      heading: 'Company',
      items: [
        {
          text: 'About',
          to: LINKS.aboutUs,
        },
        {
          text: 'Blog',
          to: LINKS.blog,
        },
        {
          text: 'Careers',
          to: LINKS.liaPraktik,
        },
        {
          text: 'Contact Sales',
          to: LINKS.contactSales,
        },
        {
          text: 'Security',
          to: LINKS.security,
        },
      ],
    },
    {
      heading: 'Resources',
      items: [
        {
          text: 'Docs',
          to: LINKS.docs,
        },
        {
          text: 'Changelog',
          to: LINKS.changelog,
        },
        {
          text: 'Support',
          to: LINKS.support,
        },
        {
          text: 'Community Guides',
          to: LINKS.guides,
        },
        {
          text: 'FAQs',
          to: LINKS.faqs,
        },
        {
          text: 'PostgreSQL Tutorial',
          to: LINKS.postgresqltutorial,
        },
        {
          text: 'Startups',
          to: LINKS.startups,
        },
      ],
    },
    {
      heading: 'Community',
      items: [
        {
          text: 'LinkedIn',
          to: LINKS.linkedin,
          icon: 'linkedin-icon',
        },
        {
          text: 'Microsoft',
          to: LINKS.microsoftPartner,
          icon: 'microsoft-icon',
        },
        {
          text: 'Facebook',
          to: LINKS.facebook,
          icon: 'facebook-icon',
        },
      ],
    },
  ],
};
