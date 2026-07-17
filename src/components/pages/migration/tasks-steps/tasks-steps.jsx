import Container from 'components/shared/container/container';
import LINKS from 'constants/links';
import stepOne from 'images/pages/migration/step-one.jpg';
import stepThree from 'images/pages/migration/step-three.jpg';
import stepTwo from 'images/pages/migration/step-two.jpg';

import StepsSlider from './steps-slider';

const ITEMS = [
  {
    title: 'Scope obligations',
    description:
      'The onboarding wizard maps your obligations across NIS2, DORA, the EU AI Act, GDPR, and ISO 27001, and flags what applies to you.',
    image: {
      src: stepOne,
      alt: 'Scope obligations',
      width: 832,
      height: 390,
    },
  },
  {
    title: 'Connect systems',
    description:
      'Then, the wizard connects your Swedish systems like Fortnox, Visma, BankID, and Kivra, and imports your existing policies and evidence.',
    image: {
      src: stepTwo,
      alt: 'Connect systems',
      width: 832,
      height: 390,
    },
  },
  {
    title: 'Collect evidence',
    description:
      'The last step turns on continuous, automated evidence collection so you stay audit-ready and can export a report on demand.',
    image: {
      src: stepThree,
      alt: 'Collect evidence',
      width: 832,
      height: 390,
    },
    link: {
      text: 'See the docs',
      url: LINKS.docsMigration,
    },
  },
];

const TasksSteps = () => (
  <section className="tasks-steps relative pt-[180px] safe-paddings xl:pt-[157px] lg:pt-[131px] md:pt-[90px]">
    <Container className="relative lg:mx-8 md:mx-1" size="768">
      <header className="max-w-[616px]">
        <p className="mb-4 text-base leading-normal font-medium tracking-wide text-gray-new-50 uppercase lg:text-sm md:mb-3 md:text-[13px]">
          Compliance onboarding, automated
        </p>
        <h2 className="font-title text-5xl leading-none font-medium tracking-tighter xl:text-[44px] xl:text-balance lg:text-[40px] md:text-[32px] md:text-pretty">
          No manual steps, no onboarding stress
        </h2>
      </header>
    </Container>
    <Container className="relative" size="960">
      <StepsSlider items={ITEMS} />
    </Container>
  </section>
);

export default TasksSteps;
