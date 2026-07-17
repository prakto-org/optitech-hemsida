import Image from 'next/image';

import Container from 'components/shared/container/container';
import GradientBorder from 'components/shared/gradient-border/index';
import configurationTuning from 'icons/migration/cards-support/configuration-tuning.svg';
import dualWriteModel from 'icons/migration/cards-support/dual-write-model.svg';
import logicalReplication from 'icons/migration/cards-support/logical-replication.svg';
import phasedCutover from 'icons/migration/cards-support/phased-cutover.svg';
import schemaAdjustments from 'icons/migration/cards-support/schema-adjustments.svg';
import versionMigrations from 'icons/migration/cards-support/version-migrations.svg';
import { cn } from 'utils/cn';

const ITEMS = [
  {
    title: 'Switch your compliance program without disrupting the business',
    description:
      'Moving off a consultant-led or manual process can be daunting, but OptiTech’s approach keeps your team running.',
    list: [
      {
        icon: logicalReplication,
        text: 'Gap analysis',
      },
      {
        icon: dualWriteModel,
        text: 'Parallel run',
      },
      {
        icon: phasedCutover,
        text: 'Phased rollout',
      },
    ],
    className: 'bg-migration-card-left-bg',
  },
  {
    title: 'Tune your controls for audit readiness and efficiency',
    description:
      'A switch is a great moment to also address key coverage areas across NIS2, DORA, and ISO 27001.',
    list: [
      {
        icon: versionMigrations,
        text: 'Framework mapping',
      },
      {
        icon: configurationTuning,
        text: 'Control tuning',
      },
      {
        icon: schemaAdjustments,
        text: 'Policy adjustments',
      },
    ],
    className: 'bg-migration-card-right-bg',
  },
];

const CardsSupport = () => (
  <section className="cards-support pt-[137px] safe-paddings xl:pt-[113px] lg:pt-[90px] md:pt-[26px]">
    <Container className="md:px-5" size="768">
      <header className="mx-auto flex flex-col items-center text-center">
        <h2 className="max-w-md font-title text-5xl leading-none font-medium tracking-extra-tight xl:text-[44px] lg:max-w-[380px] lg:text-4xl md:max-w-[280px] md:text-[32px] md:tracking-tighter">
          Complex supply chain? Get expert support
        </h2>
        <p className="mt-3 text-lg leading-snug tracking-extra-tight text-gray-new-70 lg:text-base">
          Our team is here to guide you through even the most demanding compliance scenarios.
        </p>
      </header>
      <ul className="mt-12 grid grid-cols-2 gap-5 lg:mt-10 md:mt-8 sm:grid-cols-1 xs:gap-3">
        {ITEMS.map(({ title, description, list, className }) => (
          <li
            key={title}
            className={cn('relative rounded-xl bg-black-fog p-7 lg:p-6 md:p-5', className)}
          >
            <h3 className="mb-2.5 text-xl leading-snug font-medium tracking-tight text-balance text-white lg:text-lg md:tracking-extra-tight">
              {title}
            </h3>
            <p
              className="text-base leading-normal font-normal tracking-extra-tight text-pretty text-gray-new-60 lg:text-[15px]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div
              className="my-6 h-px w-full bg-white mix-blend-overlay lg:my-5 md:my-[18px]"
              aria-hidden
            />
            <ul className="flex flex-col gap-[18px]">
              {list.map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <Image src={icon} alt="" width={20} height={20} quality={100} />
                  <p className="text-base leading-none font-medium tracking-snug text-white lg:text-[15px]">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
            <GradientBorder withBlend />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default CardsSupport;
