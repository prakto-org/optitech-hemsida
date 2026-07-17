import Bento from 'components/pages/enterprise/bento';
import CaseStudies from 'components/pages/enterprise/case-studies';
import Features from 'components/pages/enterprise/features';
import Hero from 'components/pages/enterprise/hero';
import HowNeonHelps from 'components/pages/enterprise/how-neon-helps';
import Usage from 'components/pages/enterprise/usage';
import CTANew from 'components/shared/cta-new';
import Faq from 'components/shared/faq/faq';
import Layout from 'components/shared/layout';
import Logos from 'components/shared/logos';
import TestimonialNew from 'components/shared/testimonial-new';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import dispatchLogo from 'icons/enterprise/case-studies/dispatch.svg';
import invencoLogo from 'icons/enterprise/case-studies/invenco.svg';
import mindvalleyLogo from 'icons/enterprise/case-studies/mindvalley.svg';
import neoTaxLogo from 'icons/enterprise/case-studies/neo-tax.svg';
import retoolLogo from 'icons/enterprise/case-studies/retool.svg';
import wordwareLogo from 'icons/enterprise/case-studies/wordware.svg';
import connectionIcon from 'icons/enterprise/connection.svg';
import durabilityIcon from 'icons/enterprise/durability.svg';
import expertiseIcon from 'icons/enterprise/expertise.svg';
import multiIcon from 'icons/enterprise/multi.svg';
import recoveryIcon from 'icons/enterprise/recovery.svg';
import scalabilityIcon from 'icons/enterprise/scalability.svg';
import authorAlexCo from 'images/authors/alex-co.jpg';
import authorCodyJenkins from 'images/authors/cody-jenkins.jpg';
import authorRobertChandler from 'images/authors/robert-chandler.jpg';
import apiMd from 'images/pages/enterprise/bento/api-md.jpg';
import api from 'images/pages/enterprise/bento/api.jpg';
import costEfficiencyMd from 'images/pages/enterprise/bento/cost-efficiency-md.jpg';
import costEfficiency from 'images/pages/enterprise/bento/cost-efficiency.jpg';
import instantDbMd from 'images/pages/enterprise/bento/instant-db-md.jpg';
import instantDb from 'images/pages/enterprise/bento/instant-db.jpg';
import integrationMd from 'images/pages/enterprise/bento/integration-md.jpg';
import integration from 'images/pages/enterprise/bento/integration.jpg';
import provenSuccessMd from 'images/pages/enterprise/bento/proven-success-md.jpg';
import provenSuccess from 'images/pages/enterprise/bento/proven-success.jpg';
import serverlessScalabilityMd from 'images/pages/enterprise/bento/serverless-scalability-md.jpg';
import serverlessScalability from 'images/pages/enterprise/bento/serverless-scalability.jpg';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.enterprise);

const logos = [
  'eqt',
  'openai',
  'outfront',
  'adobe',
  'genomics',
  'replit',
  'retool',
  'albertsons',
  'akqa',
  'vercel',
  'bcg',
  'wordware',
  'commure',
  'bitso',
  'framer',
];

const features = [
  {
    icon: scalabilityIcon,
    title: 'Framework coverage',
    description:
      'OptiTech maps and maintains NIS2, DORA, the EU AI Act, GDPR, and ISO 27001 for you, so you never read the raw regulations yourself.',
    url: '/docs/introduction/autoscaling',
  },
  {
    icon: multiIcon,
    title: 'Supply-chain compliance',
    description:
      'Manage subsidiaries and vendors in isolated projects, send assessments to your suppliers, and keep the whole supply chain compliant.',
    url: '/use-cases/database-per-tenant',
  },
  {
    icon: connectionIcon,
    title: 'Swedish integrations',
    description:
      'Connect Fortnox, Visma, BankID, Kivra, and the systems you already use to pull evidence automatically, with no manual busywork.',
    url: '/docs/connect/connection-pooling',
  },
  {
    icon: recoveryIcon,
    title: 'Authority reporting',
    description:
      'Report incidents to Swedish authorities like MSB and IMY, with the 24-hour, 72-hour, and one-month steps handled for you.',
    url: '/blog/recover-large-postgres-databases',
  },
  {
    icon: durabilityIcon,
    title: 'Continuous evidence',
    description:
      'OptiTech collects and stores evidence continuously across every framework, so you stay audit-ready every day, not once a year.',
    url: '/blog/our-approach-to-high-availability',
  },
  {
    icon: expertiseIcon,
    title: 'Nordic compliance expertise',
    description:
      'Built on Swedish law by compliance specialists, OptiTech helps with scoping, documentation, and preparing for audits.',
    url: '/blog/top-3-features-in-postgres-17#contributions-by-neon-engineers-in-postgres-17',
  },
];

const caseStudies = [
  {
    title: '5 frameworks',
    description: 'managed by 1 person.',
    logo: {
      src: retoolLogo,
      width: 95,
      height: 24,
    },
    link: `${LINKS.blog}/how-retool-uses-retool-and-the-neon-api-to-manage-300k-postgres-databases`,
  },
  {
    title: '5x faster',
    description: 'audit preparation.',
    logo: {
      src: mindvalleyLogo,
      width: 118,
      height: 24,
    },
    link: `${LINKS.blog}/how-mindvalley-minimizes-time-to-launch-with-neon-branches`,
  },
  {
    title: 'From weeks to minutes',
    description: 'to produce documentation.',
    logo: {
      src: neoTaxLogo,
      width: 91,
      height: 24,
    },
    link: `${LINKS.blog}/from-days-to-minutes-how-neo-tax-accelerated-their-development-lifecycle`,
  },
  {
    title: '95% less manual work',
    description: 'thanks to automated evidence.',
    logo: {
      src: wordwareLogo,
      width: 121,
      height: 24,
    },
    link: `${LINKS.blog}/building-ai-agents-just-got-faster-with-wordware-and-neon`,
  },
  {
    title: '80% savings',
    description: 'vs&nbsp;consultant-led audits.',
    logo: {
      src: invencoLogo,
      width: 97,
      height: 24,
    },
    link: `${LINKS.blog}/why-invenco-migrated-from-aurora-serverless-v2-to-neon`,
  },
  {
    title: 'Under 1 week',
    description: 'from signup to audit-ready.',
    logo: {
      src: dispatchLogo,
      width: 104,
      height: 24,
    },
    link: `${LINKS.blog}/how-dispatch-speeds-up-development-with-neon-while-keeping-workloads-on-aurora`,
  },
];

const howNeonHelpsTabs = [
  {
    title: 'Automated evidence collection',
    challenge:
      'Gathering evidence for every control by hand is slow, error-prone, and out of date the moment you finish.',
    description:
      'OptiTech pulls evidence automatically from your connected systems, so your controls stay verified continuously without manual work.',
  },
  {
    title: 'Always-current documentation',
    challenge: 'Policies and risk assessments drift out of date and rarely reflect how you actually operate.',
    description:
      'OptiTech generates and updates your documentation from your real setup, keeping policies aligned with your systems and the latest rules.',
  },
  {
    title: 'One source of truth',
    challenge: 'Compliance data scattered across spreadsheets and tools makes it hard to see where you stand.',
    description:
      'OptiTech brings every framework, control, and piece of evidence into one place, so you always know your real compliance posture.',
  },
  {
    title: 'Hands-off compliance',
    challenge:
      'Managing compliance manually slows teams down, introduces mistakes, and turns audits into fire drills.',
    description:
      'Evidence is collected and monitored automatically, and incidents route to the right authorities, so compliance runs in the background.',
  },
];

const bentoCards = [
  {
    title: 'Audit-ready in under a week.',
    description:
      'OptiTech gets you from signup to audit-ready faster than any consultant, so you can start building trust right away.',
    image: instantDb,
    imageMd: instantDbMd,
    className: 'col-span-3 lg:col-span-4 sm:col-span-1',
  },
  {
    title: 'Built for the Nordics.',
    description: 'Grounded in Swedish law, with Swedish integrations and MSB and IMY reporting built in.',
    image: provenSuccess,
    imageMd: provenSuccessMd,
    className: 'col-span-2 lg:col-span-3 sm:col-span-1',
  },
  {
    title: 'SMB pricing.',
    description: 'Enterprise-grade compliance at a price a 30-person company can afford.',
    image: costEfficiency,
    imageLg: costEfficiencyMd,
    imageMd: costEfficiencyMd,
    className: 'col-span-2 lg:col-span-3 lg:-mr-[18%] sm:mx-0 sm:col-span-1',
  },
  {
    title: 'AI documentation.',
    description: 'Let the OptiTech AI copilot draft your policies and risk assessments from your real setup.',
    image: api,
    imageLg: apiMd,
    imageMd: apiMd,
    className: 'col-span-2 lg:col-span-3 lg:col-start-5 lg:-ml-[18%] sm:mx-0 sm:col-span-1',
  },
  {
    title: 'Swedish integrations.',
    description: 'Connect Fortnox, Visma, BankID, and Kivra to collect evidence automatically.',
    image: integration,
    imageMd: integrationMd,
    className: 'col-span-2 lg:col-span-3 sm:col-span-1',
  },
  {
    title: 'Continuous evidence.',
    description:
      'OptiTech monitors your controls and collects evidence around the clock, so you stay ready for every audit.',
    image: serverlessScalability,
    imageMd: serverlessScalabilityMd,
    className: 'col-span-3 lg:col-span-4 sm:col-span-1',
  },
];

const faqItems = [
  {
    question: 'Which companies are using OptiTech?',
    answer: `OptiTech serves Nordic small and mid-sized businesses and their supply chains, from fast-growing startups to established companies that need to meet NIS2, DORA, the EU AI Act, GDPR, and ISO 27001. Visit our <a href="/case-studies">case studies page</a> to explore customer stories.`,
    initialState: 'open',
  },
  {
    question: 'Is OptiTech compliant?',
    answer: `Yes. OptiTech adheres to SOC 2, ISO 27001, ISO 27701 standards and complies with GDPR, CCPA, and HIPAA. <a href="/docs/security/compliance">Read more.</a>`,
  },
  {
    question: 'How secure is OptiTech’s platform?',
    answer: `OptiTech offers enterprise-grade security with SSL/TLS encryption, IP allowlisting, and AES-256 encryption for data at rest, with all data kept in the EU. <a href="/docs/security/security-overview">Read more.</a>`,
  },
  {
    question: 'What level of uptime can I expect with OptiTech?',
    answer: `OptiTech offers a 99.95% uptime SLA for enterprise customers, ensuring consistent availability for your compliance program. <a href="/neon-business-sla">Read more.</a>`,
  },
  {
    question: 'What kind of support does OptiTech provide?',
    answer: `Enterprise customers benefit from priority support, giving you access to compliance experts for any guidance you need. <a href="/docs/introduction/support">Read more.</a>`,
  },
  {
    question: 'Where is my data stored?',
    answer: `OptiTech keeps your data in the EU and Sweden. If you have specific data residency requirements, <a href="/docs/introduction/regions#request-a-region">tell us here.</a>`,
  },
  {
    question: 'Does OptiTech offer annual contracts?',
    answer: `Yes, we provide annual contracts for Enterprise clients accounting for higher limits and dedicated requirements. If you’re interested, <a href="/contact-sales">contact us.</a>`,
  },
  {
    question: 'What can I expect during the sales process?',
    answer: `Our sales process is designed to be smooth and flexible: <ol><li><b>Reach Out:</b> Fill out our contact form.</li><li><b>Information Gathering:</b> We’ll email you to learn more about your business and which frameworks apply.</li><li><b>Call with Solutions Team:</b> Discuss timelines, integrations, and request a demo.</li><li><b>Pricing Proposal:</b> Based on your inputs, we’ll provide a pricing proposal, often with an onboarding plan.</li><li><b>Additional Details (if needed):</b> For complex setups, we may request more information about your current systems and vendors.</li><li><b>Stakeholder Support:</b> We assist with security reviews, documentation, and answering any stakeholder questions.</li></ol> We’re always happy to adjust the process to fit your unique needs. <a href="/contact-sales">Reach out to us</a> and tell us about your use case: we're here to help.`,
  },
];

const EnterprisePage = () => (
  <Layout headerClassName="absolute! bg-transparent!">
    <Hero />
    <Logos className="mt-[102px] xl:mt-[86px] lg:mt-[76px] md:mt-[68px]" logos={logos} />
    <TestimonialNew
      className="mt-[118px] xl:mt-[80px] lg:mt-[76px]"
      quote="OptiTech got us audit-ready in days, not months. It collects the evidence for us and keeps our documentation current, so compliance no longer pulls the whole team off their work."
      author={{
        name: 'Cody Jenkins',
        position: 'Head of Engineering at Invenco',
        avatar: authorCodyJenkins,
      }}
      isPriority
    />
    <Features title="Hundreds of Nordic companies are switching to OptiTech. Here’s why" items={features} />
    <Usage />
    <CaseStudies items={caseStudies} />
    <HowNeonHelps tabs={howNeonHelpsTabs} />
    <TestimonialNew
      className="mt-[126px] xl:mt-[106px] lg:mt-[70px] md:mt-[58px]"
      quote="Time to launch is crucial for us: when we tried OptiTech and saw how fast it pulled together the evidence for a full framework, we were blown away."
      author={{
        name: 'Alex Co',
        position: 'Head of Platform Engineering at Mindvalley',
        avatar: authorAlexCo,
      }}
    />
    <Bento cards={bentoCards} />
    <TestimonialNew
      className="mt-[130px] xl:mt-[106px] lg:mt-[48px] md:mt-[62px]"
      quote="With OptiTech's continuous monitoring, we catch compliance gaps early and close them before they turn into a problem at audit time."
      author={{
        name: 'Robert Chandler',
        position: 'CTO at Wordware.ai',
        avatar: authorRobertChandler,
      }}
    />
    <Faq items={faqItems} />
    <CTANew
      label="ASK AI"
      title="Still have questions? Ask our AI. <br class='xs:hidden' />"
      description="It knows OptiTech inside and out."
      buttonText="Get Answers"
      buttonType="aiHelper"
    />
  </Layout>
);

export default EnterprisePage;
