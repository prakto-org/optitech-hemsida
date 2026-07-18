import Features from 'components/pages/pricing/features';
import Hero from 'components/pages/pricing/hero';
import Plans from 'components/pages/pricing/plans';
import CTANew from 'components/shared/cta-new';
import Faq from 'components/shared/faq/faq';
import Layout from 'components/shared/layout';
import Logos from 'components/shared/logos';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.pricing);

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

const faqItems = [
  {
    question: 'How does OptiTech pricing work?',
    id: 'how-pricing-works',
    initialState: 'open',
    answer: `
      <p>OptiTech is priced as a flat monthly fee per plan, billed annually. No usage meters, no per-seat charges, and no hidden costs - the price you see on this page is the price you pay. Start is 2,995 kr per month, Professional is 7,995 kr per month, and Enterprise starts at 19,995 kr per month depending on your size and requirements.</p>
      <p>All prices are in SEK and exclude VAT.</p>
    `,
  },
  {
    question: 'What is a framework?',
    id: 'what-is-a-framework',
    answer: `
      <p>A framework is a regulation or standard you need to comply with: NIS2 (the Swedish Cybersecurity Act), DORA, GDPR, ISO 27001:2022, or the EU AI Act. Your plan determines how many frameworks you can activate.</p>
      <p>Controls are cross-mapped between frameworks, so one control can satisfy requirements in several frameworks at once. If you've already done the work for ISO 27001, most of it counts toward NIS2 too.</p>
    `,
  },
  {
    question: 'What is the MSB incident reporting flow?',
    id: 'msb-incident-flow',
    answer: `
      <p>NIS2 requires you to report significant incidents to MSB in three steps: an early warning within 24 hours, an incident report within 72 hours, and a final report within one month. OptiTech guides you through each step with pre-filled forms based on your incident data, deadline countdowns, and communication templates for customers, press, and internal teams.</p>
      <p>The same applies to personal data breaches under GDPR: OptiTech includes the corresponding 72-hour reporting flow to IMY.</p>
    `,
  },
  {
    question: 'Do you offer a free trial or gap analysis?',
    answer: `
      <p>Yes. Start with our free "Does NIS2 apply to us?" assessment: answer 20 questions about your industry, size, systems, and customers, and get a report showing which laws apply to you, which NIS2 category you fall into, and a prioritized list of gaps. <a href="${LINKS.contactSales}">Book your free gap analysis here.</a></p>
    `,
  },
  {
    question: 'Can I add frameworks or change plans later?',
    answer: `
      <p>Yes. You can upgrade your plan or add frameworks at any time, and the work you've already done carries over. Because controls are cross-mapped, a new framework often starts well on its way to complete, based on the controls you already have in place.</p>
    `,
  },
  {
    question: 'Where is my data stored?',
    id: 'data-residency',
    answer: `
      <p>All customer data is stored in Swedish and EU data centers, under EU ownership. We publish our full list of subprocessors, and no customer data is sent to US-based AI providers - our AI features run on EU-hosted models. We also use our own product internally and maintain our own ISO 27001 certification.</p>
    `,
  },
  {
    question: 'Do you have a plan for MSPs, accountants, or consultants?',
    id: 'partner-plan',
    answer: `
      <p>Yes. The Partner plan gives IT service providers, accounting firms, and advisors a multi-tenant console to manage compliance for all their clients, with volume discounts and white-label options. <a href="${LINKS.contactSales}">Contact us for partner pricing.</a></p>
    `,
  },
  {
    question: 'What add-ons are available?',
    answer: `
      <p>Beyond the plans, you can add:</p>
      <ul>
        <li><strong>Onboarding packages:</strong> guided setup with our team, from 25,000 kr depending on scope</li>
        <li><strong>NIS2 board training:</strong> fixed price 15,000 kr, covering the governance and personal liability requirements for boards and management</li>
        <li><strong>Phishing simulation:</strong> 990 kr per month</li>
        <li><strong>vCISO hours:</strong> hands-on security expertise through our partner network</li>
      </ul>
    `,
  },
  {
    question: 'Why do you publish your prices?',
    answer: `
      <p>Because hiding prices behind sales calls wastes your time. Most compliance platforms require a demo and a negotiation before you see a number. We publish our prices so you can evaluate, budget, and buy on your own schedule. If you have questions, <a href="${LINKS.contactSales}">talk to us</a> - but you don't have to.</p>
    `,
  },
];

const PricingPage = () => (
  <Layout>
    <Hero />
    <Logos className="mt-[104px] md:mt-20" logos={logos} size="sm" />
    <Plans className="mt-[200px] scroll-mt-5 px-safe xl:mt-[184px] lg:mt-40 md:mt-[120px]" />
    <Features />
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

export default PricingPage;
