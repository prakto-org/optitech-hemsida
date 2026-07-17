import Image from 'next/image';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import MegaLink from 'components/shared/mega-link';
import autoScaling from 'icons/multi-tb/sub-hero/tag-cloud/autoscaling.svg';
import highAvailability from 'icons/multi-tb/sub-hero/tag-cloud/high-availability.svg';
import instantRecovery from 'icons/multi-tb/sub-hero/tag-cloud/instant-recovery.svg';

import TagCloud from '../../use-case/tag-cloud';

import clockCoins from './images/clock-coins.png';

const TAGS = [
  {
    title: 'Instant audit-ready evidence',
    icon: instantRecovery,
  },
  {
    title: 'Built-in EU data residency',
    icon: highAvailability,
  },
  {
    title: 'Automated evidence across frameworks and suppliers',
    icon: autoScaling,
  },
];

const Hero = () => (
  <section className="sub-hero relative pt-[120px] safe-paddings xl:pt-[112px] lg:pt-24 md:pt-16">
    <Container className="lg:mx-24 md:mx-auto md:max-w-[640px]" size="576">
      <div className="relative mb-4 size-[46px] lg:mb-4 lg:size-10 lg:rounded-[10px] md:mb-0 md:size-14">
        <Image
          className="relative z-10 lg:size-10"
          src={clockCoins}
          alt=""
          width={46}
          height={46}
          quality={100}
          priority
        />
        <span
          className="absolute top-1/2 left-1/2 size-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6AFFE6] opacity-15 blur-xl"
          aria-hidden
        />
      </div>
      <p className="text-[28px] leading-snug font-medium tracking-tighter text-white lg:text-[24px] md:text-[20px]">
        Every hour your team spends manually collecting compliance evidence is time and money lost,
        and the cost of a failed audit or security incident can run anywhere
        {` `}
        <br className="hidden md:block" />
        <Link
          className="text-green-45 underline decoration-primary-1 decoration-1 underline-offset-[8px] transition-colors duration-200 hover:text-white hover:decoration-gray-new-60"
          to="https://www.atlassian.com/incident-management/kpis/cost-of-downtime#:~:text=In%20March%202015%2C%20a%2012,also%20the%20financial%20grim%20reaper"
          target="_blank"
          rel="noopener noreferrer"
        >
          from $427 to $9,000
        </Link>
        .
      </p>
      <h2 className="mt-[136px] font-title text-[60px] leading-none font-medium tracking-extra-tight xl:mt-[128px] xl:text-[52px] lg:mt-[112px] lg:text-[44px] md:mt-[74px] md:text-[36px]">
        Break the spreadsheet cycle.
      </h2>
      <div className="mt-10 mb-7 flex flex-col gap-[18px] text-xl leading-normal font-normal tracking-extra-tight text-gray-new-60 lg:mt-7 lg:mb-6 lg:text-[18px] md:mt-6 md:mb-[22px] md:text-base">
        <p>
          <span className="text-white">With manual compliance</span>, evidence collection takes
          weeks, documentation drifts out of date, and staying ready for the next audit feels like a
          constant gamble.
        </p>
        <p>
          <span className="text-white">OptiTech eliminates the guesswork</span> with automated
          evidence collection, always-current documentation, and continuous monitoring across every
          framework. With OptiTech, you get:
        </p>
      </div>

      <TagCloud items={TAGS} className="gap-4 lg:mt-4" titleClassName="text-[16px]" />
      <MegaLink
        className="my-16! xl:my-14! lg:my-12! md:my-10!"
        title="The real cost of manual compliance for businesses: lost time, lost deals, and lost trust."
        date={new Date('2025-04-11')}
        url="/blog/the-true-cost-of-slow-postgres-restores"
      />
    </Container>
  </section>
);

export default Hero;
