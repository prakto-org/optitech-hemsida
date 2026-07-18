import LINKS from 'constants/links';

export default [
  {
    planId: 'start',
    type: 'Start',
    title: '2,995 kr/mo',
    subtitle: 'For companies with 5–30 employees getting compliant for the first time.',
    price: 2995,
    features: {
      compliance: {
        title: 'Compliance',
        features: [
          {
            title: '1 framework',
            info: '<p>Choose NIS2, DORA, GDPR,<br/> ISO 27001, or the AI Act.</p>',
            moreLink: { text: 'Read more', href: '#what-is-a-framework' },
          },
          {
            title: 'Automated gap analysis',
            info: '<p>20 questions map which laws apply<br/> and which controls you need.</p>',
          },
          {
            title: '50+ Swedish policy templates',
          },
          {
            title: 'MSB and IMY incident reporting',
            moreLink: { text: 'Read more', href: '#msb-incident-flow' },
          },
          {
            title: 'Risk register',
          },
        ],
      },
      platform: {
        title: 'Platform',
        features: [
          {
            title: '10 integrations',
            info: '<p>Microsoft 365, Entra ID, Google Workspace,<br/> AWS, Azure, GitHub, and more.</p>',
          },
          { title: 'BankID login' },
          { title: 'EU data residency' },
        ],
      },
    },
    button: {
      url: LINKS.signup,
      text: 'Get started',
      event: 'Hero Start Panel',
    },
  },
  {
    planId: 'professional',
    type: 'Professional',
    title: '7,995 kr/mo',
    subtitle: 'For companies with 30–150 employees managing several frameworks at once.',
    price: 7995,
    highlighted: true,
    features: {
      compliance: {
        title: 'Compliance',
        features: [
          {
            title: '3 frameworks',
            info: '<p>Controls are cross-mapped:<br/> do once, prove everywhere.</p>',
            moreLink: { text: 'Read more', href: '#what-is-a-framework' },
          },
          { title: 'Everything in Start' },
          {
            title: 'Vendor risk management',
            info: '<p>Supplier register, questionnaires,<br/> and risk classification.</p>',
          },
          { title: 'Trust Center' },
          { title: 'Security awareness training' },
        ],
      },
      platform: {
        title: 'Platform',
        features: [
          {
            title: 'All integrations',
            info: '<p>Including Fortnox, Visma,<br/> Kivra, and Swedish payroll systems.</p>',
          },
          { title: 'AI copilot' },
          {
            title: 'Auto-remediation',
            info: '<p>Fix failing controls directly via API,<br/> or send a ready-made ticket.</p>',
          },
        ],
      },
    },
    button: {
      url: LINKS.signup,
      text: 'Get started',
      theme: 'primary',
      event: 'Hero Professional Panel',
    },
  },
  {
    planId: 'enterprise',
    type: 'Enterprise',
    title: 'From 19,995 kr/mo',
    subtitle: 'For companies with 150+ employees and regulated financial institutions.',
    price: 19995,
    features: {
      compliance: {
        title: 'Compliance',
        features: [
          {
            title: 'Unlimited frameworks',
            moreLink: { text: 'Read more', href: '#what-is-a-framework' },
          },
          { title: 'Everything in Professional' },
          {
            title: 'DORA package',
            info: '<p>ICT contract register and reporting<br/> ready for supervisory review.</p>',
          },
          {
            title: 'Auditor portal',
            info: 'Read-only access for auditors and supervisory authorities',
          },
          { title: 'Dedicated customer success manager' },
        ],
      },
      platform: {
        title: 'Platform',
        features: [
          { title: 'SSO and SCIM' },
          {
            title: 'API and CLI access',
            info: '<p>Run compliance checks<br/> in your CI/CD pipeline.</p>',
          },
          { title: 'Custom onboarding' },
        ],
      },
    },
    button: {
      url: LINKS.contactSales,
      text: 'Contact sales',
      event: 'Hero Enterprise Panel',
    },
  },
];
