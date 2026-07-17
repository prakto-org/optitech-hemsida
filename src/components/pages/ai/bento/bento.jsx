import Image from 'next/image';

import Container from 'components/shared/container';
import GradientBorder from 'components/shared/gradient-border/index';
import Link from 'components/shared/link';
import LINKS from 'constants/links';

import aiAgentsMobile from './images/ai-agents-mobile.jpg';
import aiAgents from './images/ai-agents.jpg';
import aiAssistedMobile from './images/ai-assisted-mobile.jpg';
import aiAssisted from './images/ai-assisted.jpg';
import instantlyAccessibleMobile from './images/instantly-accessible-mobile.jpg';
import instantlyAccessible from './images/instantly-accessible.jpg';
import vectorStoreMobile from './images/vector-store-mobile.jpg';
import vectorStore from './images/vector-store.jpg';

const ITEMS = [
  {
    title: 'AI compliance copilot.',
    description:
      'The copilot reads Swedish legal text, maps your systems to controls, and answers compliance questions in plain language.',
    image: aiAgents,
    imageMobile: aiAgentsMobile,
  },
  {
    title: 'Policy and risk drafting.',
    description: (
      <>
        With <Link href={LINKS.docsPgvector}>continuous evidence collection</Link>, OptiTech keeps
        your documentation current.
      </>
    ),
    image: vectorStore,
    imageMobile: vectorStoreMobile,
  },
  {
    title: 'Built on Swedish integrations.',
    description: 'OptiTech connects with Fortnox, Visma, BankID, and Kivra to collect evidence automatically.',
    image: aiAssisted,
    imageMobile: aiAssistedMobile,
  },
  {
    title: 'Onboarding under a week.',
    description: [
      <>
        OptiTech fits Nordic SMBs, with EU data residency and clear pricing. Get set up on the{' '}
        <Link href={LINKS.pricing}>Free Plan</Link> in days.
      </>,
    ],
    image: instantlyAccessible,
    imageMobile: instantlyAccessibleMobile,
  },
];

const Bento = () => (
  <section className="bento mt-[200px] safe-paddings xl:mt-[192px] lg:mt-40 md:mt-[105px]">
    <Container className="lg:max-w-3xl! md:px-5" size="960">
      <div className="mx-auto flex max-w-208 flex-col text-pretty lg:max-w-xl">
        <h2 className="max-w-2xl font-title text-5xl leading-none font-medium tracking-extra-tight xl:max-w-xl xl:text-[44px] lg:mr-10 lg:text-4xl md:mr-0 md:text-[32px]">
          Everything you need to automate compliance, all in one place.
        </h2>
        <p className="mt-4 max-w-[740px] text-lg leading-snug tracking-extra-tight text-gray-new-70 xl:text-balance lg:text-base lg:text-pretty md:mt-3">
          OptiTech automates regulatory compliance for Nordic SMBs: gap analysis, AI-generated
          documentation, continuous evidence collection, incident reporting, and audit export. The AI
          copilot does the heavy lifting so your team does not have to.
        </p>
      </div>
      <ul className="mt-14 flex flex-wrap gap-5 lg:mt-12 lg:gap-4 md:mt-8 md:flex-col md:items-center">
        {ITEMS.map(({ title, description, image, imageMobile }, index) => (
          <li
            className="relative h-[384px] rounded-[14px] bg-[#0A0A0A] lg:h-[308px] md:h-[324px] md:w-80"
            key={title}
          >
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 pr-8 text-lg leading-snug tracking-extra-tight lg:p-5 lg:text-base">
              <h3 className="inline font-medium text-white">{title}</h3>{' '}
              <p className="inline text-with-links font-light text-gray-new-60">{description}</p>
            </div>
            <div className="relative h-full shrink-0 overflow-hidden rounded-[inherit]">
              <Image
                className="relative h-full w-auto lg:hidden md:block md:h-auto md:w-full"
                src={image}
                alt=""
                width={[0, 3].includes(index) ? 544 : 396}
                height={384}
                quality={100}
                priority
              />
              <Image
                className="relative hidden h-full w-auto lg:block md:hidden md:h-auto md:w-full"
                src={imageMobile}
                alt=""
                width={[0, 3].includes(index) ? 414 : 274}
                height={384}
                quality={100}
                priority
              />
              <GradientBorder withBlend />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Bento;
