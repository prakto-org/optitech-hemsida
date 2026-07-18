import CardsSupport from 'components/pages/migration/cards-support';
import Hero from 'components/pages/migration/hero';
import Task from 'components/pages/migration/task';
import TaskSteps from 'components/pages/migration/tasks-steps';
import CTANew from 'components/shared/cta-new';
import GridFeatures from 'components/shared/grid-features';
import Layout from 'components/shared/layout';
import TestimonialNew from 'components/shared/testimonial-new';
import SEO_DATA from 'constants/seo-data';
import costEffective from 'icons/migration/grid-features/cost-effective.svg';
import developerFriendly from 'icons/migration/grid-features/developer-friendly.svg';
import easy from 'icons/migration/grid-features/easy.svg';
import fullyManaged from 'icons/migration/grid-features/fully-managed.svg';
import reliability from 'icons/migration/grid-features/reliability.svg';
import serverlessAutoscaling from 'icons/migration/grid-features/serverless-autoscaling.svg';
import authorTejasSiripurapu from 'images/authors/tejas-siripurapu.jpg';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.migration);

const FEATURES = [
  {
    title: 'Easy',
    description: 'Simplify the life of developers with a serverless consumption model.',
    icon: easy,
  },
  {
    title: 'Reliability',
    description: 'S3 durability, multi-AZ redundancy, and point-in-time recovery.',
    icon: reliability,
  },
  {
    title: 'Cost-effective',
    description: 'With pay-as-you-go pricing that ties costs directly to usage.',
    icon: costEffective,
  },
  {
    title: 'Fully managed',
    description: 'OptiTech handles all database tasks — backups, updates, failovers.  ',
    icon: fullyManaged,
  },
  {
    title: 'Serverless & Autoscaling',
    description: 'Handles spiky workloads without intervention or overprovisioning.',
    icon: serverlessAutoscaling,
  },
  {
    title: 'Developer-friendly',
    description: 'Features like branching allows teams to automate tasks via CI/CD.',
    icon: developerFriendly,
  },
];

const MigrationPage = () => (
  <Layout>
    <Hero />
    <Task />
    <TaskSteps />
    <CardsSupport />
    <TestimonialNew
      className="pt-[185px] xl:pt-[161px] lg:pt-[136px] md:pt-[97px]"
      quote="Moving years of compliance work out of spreadsheets felt daunting, but the OptiTech team made it a smooth process. Their support helped us map our old controls and get everything verified fast."
      quoteClassName="max-w-[670px] lg:max-w-[620px] md:max-w-[570px] sm:max-w-[300px] sm:mx-auto"
      author={{
        name: 'Tejas Siripurapu',
        position: 'Founding Engineer at Vapi.ai',
        avatar: authorTejasSiripurapu,
      }}
    />
    <GridFeatures
      className="mt-[185px] xl:mt-[162px] lg:mt-[136px] md:mt-[96px]"
      title="Why teams migrate to OptiTech"
      titleClassName="md:text-balance"
      headerClassName="max-w-[640px] lg:max-w-[560px] md:max-w-[500px]"
      ulClassName="xl:max-w-208 xl:grid-cols-3 lg:mx-16"
      containerSize="960"
      description="OptiTech replaces spreadsheets, static documents, and legacy GRC tools with continuous, automated compliance."
      items={FEATURES}
    />
    <CTANew
      label="ASK AI"
      title="Still have questions? Ask our AI. <br class='xs:hidden' />"
      description="It knows OptiTech inside and out."
      buttonText="Get Answers"
      buttonType="aiHelper"
    />
  </Layout>
);

export default MigrationPage;
