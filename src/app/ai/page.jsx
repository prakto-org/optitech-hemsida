import Bento from 'components/pages/ai/bento';
import Hero from 'components/pages/ai/hero';
import Usage from 'components/pages/ai/usage';
import CTANew from 'components/shared/cta-new';
import FeaturesCards from 'components/shared/features-cards';
import GridFeatures from 'components/shared/grid-features';
import Layout from 'components/shared/layout';
import TestimonialNew from 'components/shared/testimonial-new';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import aiApps from 'icons/ai/features-grid/ai-apps.svg';
import auth from 'icons/ai/features-grid/auth.svg';
import autoscaling from 'icons/ai/features-grid/autoscaling.svg';
import branches from 'icons/ai/features-grid/branches.svg';
import builtWithNeon from 'icons/ai/features-grid/built-with-neon.svg';
import jsConsole from 'icons/ai/features-grid/js-console.svg';
import lightning from 'icons/ai/features-grid/lightning.svg';
import performanceStorage from 'icons/ai/features-grid/performance-storage.svg';
import pgvector from 'icons/ai/features-grid/pgvector.svg';
import programmable from 'icons/ai/features-grid/programmable.svg';
import scale from 'icons/ai/features-grid/scale.svg';
import vectorSearchOptimization from 'icons/ai/features-grid/vector-seo.svg';
import anythingIcon from 'icons/companies/anything.svg';
import replitIcon from 'icons/companies/replit.svg';
import authorDhruvAmin from 'images/authors/dhruv-amin.jpg';
import authorMarcoDalia from 'images/authors/marco-dalia.jpg';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.ai);

const AGENT_FEATURES = [
  {
    title: 'Answers grounded in the law',
    description:
      'Ask "Does NIS2 apply to us?" and get an answer based on Swedish legal texts and your own data, with citations you can verify.',
    icon: lightning,
  },
  {
    title: 'Questionnaires on autopilot',
    description:
      'Upload an incoming security questionnaire and OptiTech AI drafts answers from your verified controls, saving 10 to 20 hours per questionnaire.',
    icon: scale,
  },
  {
    title: 'Policies from your real setup',
    description:
      'Generated documents pull facts from your integrations, so policies describe how you actually operate instead of a generic template.',
    icon: programmable,
  },
  {
    title: 'Correct regulatory language',
    description:
      'Drafts are written in the formal Swedish that authorities and auditors expect, ready for review rather than rewriting.',
    icon: jsConsole,
  },
  {
    title: 'Citations, not hallucinations',
    description:
      'Every answer links back to the legal text and MSB regulations it is based on, so you can check the source before you act.',
    icon: branches,
  },
  {
    title: 'Human review built in',
    description:
      'Nothing is auto-published. Drafts always go through your review and approval workflow before they take effect.',
    icon: auth,
  },
];

const STARTER_KIT_FEATURES = [
  {
    title: 'NIS2 scoping test',
    description:
      'Answer 20 questions and find out which laws apply to your business, free of charge.',
    icon: pgvector,
  },
  {
    title: 'Policy library',
    description: '50+ Swedish templates for policies, incident plans, and risk analyses.',
    icon: aiApps,
  },
  {
    title: 'Gap analysis',
    description: 'A prioritized action list showing exactly what is missing for each framework.',
    icon: vectorSearchOptimization,
  },
  {
    title: 'Framework cross-mapping',
    description: 'One control satisfies requirements in several frameworks at once.',
    icon: autoscaling,
  },
  {
    title: 'Built with OptiTech',
    description: 'Explore how Nordic companies use OptiTech to get audit-ready and stay that way.',
    icon: builtWithNeon,
  },
  {
    title: 'Incident flows',
    description:
      'Guided MSB and IMY reporting with deadlines, pre-filled forms, and communication templates.',
    icon: performanceStorage,
  },
];

const AiPage = () => (
  <Layout>
    <Hero />
    <Bento />
    <TestimonialNew
      className="mt-[200px] xl:mt-[192px] lg:mt-[158px] md:mt-[104px]"
      figureClassName="lg:max-w-[704px]"
      quoteClassName="text-pretty md:text-wrap"
      quote="OptiTech AI answered a customer's security questionnaire in an afternoon. That used to take us two weeks of chasing colleagues for input."
      author={{
        name: 'Lincoln Bergeson',
        position: 'Infrastructure Engineer at Replit',
      }}
      company={{
        src: replitIcon,
        width: 152,
      }}
    />
    <GridFeatures
      className="mt-[199px] xl:mt-[191px] lg:mt-[153px] md:mt-[107px]"
      title="An AI copilot for your compliance work"
      titleClassName="md:text-pretty"
      description="OptiTech AI is built into the platform, trained on Swedish legal texts and MSB regulations, and grounded in your own controls and evidence."
      items={AGENT_FEATURES}
      link={LINKS.useCasesAI}
      linkText="Read more"
      logos={['anything', 'replit', 'same', 'solar', 'databutton']}
    />
    <TestimonialNew
      className="mt-[200px] xl:mt-[192px] lg:mt-[158px] md:mt-[104px]"
      figureClassName="lg:max-w-[704px]"
      quoteClassName="text-pretty lg:text-wrap"
      quote="OptiTech AI drafts our policies from what our systems actually look like. We review, approve, and move on - no more copy-pasting from templates."
      author={{
        name: 'Dhruv Amin',
        position: 'Co-founder at Anything',
        avatar: authorDhruvAmin,
      }}
      company={{
        src: anythingIcon,
        width: 136,
      }}
    />
    <FeaturesCards />
    <Usage />
    <TestimonialNew
      className="mt-[200px] xl:mt-[192px] lg:mt-[160px] md:mt-[107px]"
      figureClassName="lg:max-w-[704px]"
      quote="I tested several compliance tools, but an AI copilot that actually understands Swedish legal text is what sets OptiTech apart. It covers everything I need."
      quoteClassName="text-balance lg:text-pretty"
      author={{
        name: 'Marco D’Alia',
        position: 'Software Architect behind RagRabbit',
        avatar: authorMarcoDalia,
      }}
    />
    <GridFeatures
      className="mt-[200px] xl:mt-[194px] lg:mt-[160px] md:mt-[104px]"
      title="Get started with OptiTech AI"
      titleClassName="md:text-pretty"
      description="Resources, templates, and guided flows to take you from first scoping to audit-ready."
      descriptionClassName="max-w-[490px]"
      items={STARTER_KIT_FEATURES}
      link={LINKS.docsAi}
      linkText="Learn more"
    />
    <CTANew title="Compliance that runs itself,<br /> available today" label="Get started" />
  </Layout>
);

export default AiPage;
