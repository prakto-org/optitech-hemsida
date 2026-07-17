import Image from 'next/image';

import Container from 'components/shared/container';
import loadTesting from 'icons/multi-tb/test-reliably/tag-cloud/load-testing.svg';
import optimize from 'icons/multi-tb/test-reliably/tag-cloud/optimize.svg';
import reproduceBugs from 'icons/multi-tb/test-reliably/tag-cloud/reproduce-bugs.svg';
import testUpgrades from 'icons/multi-tb/test-reliably/tag-cloud/test-upgrades.svg';

import TagCloud from '../../use-case/tag-cloud';

import database from './images/database.png';

const TAGS = [
  {
    title: 'Reliable gap analysis',
    icon: loadTesting,
  },
  {
    title: 'Optimize policies, controls, evidence',
    icon: optimize,
  },
  {
    title: 'Test new frameworks',
    icon: testUpgrades,
  },
  {
    title: 'Track remediation',
    icon: reproduceBugs,
  },
];

const TestReliably = () => (
  <section className="test-reliably mt-[188px] xl:mt-[168px] lg:mt-[100px] md:mt-[61px]">
    <Container className="lg:mx-0 md:mx-auto md:max-w-[640px]" size="960">
      <div className="flex items-start gap-16 lg:justify-start lg:gap-16 sm:flex-col sm:gap-8">
        <div className="flex-1 xl:mt-1.5 lg:mt-0 sm:w-full">
          <p className="mb-3 text-base font-medium tracking-wide text-gray-new-50 uppercase xl:mb-3 lg:mb-4 lg:text-sm md:mb-[9px] md:text-[12px]">
            Prepare with confidence
          </p>
          <h2 className="text-5xl leading-tight font-medium tracking-[-0.03em] text-gray-new-60 xl:max-w-[860px] xl:text-[44px] lg:text-[36px] md:text-[24px] md:leading-snug md:tracking-tighter">
            Most audit failures come from untested assumptions.{' '}
            <span className="text-white">
              Map your{' '}
              <span className="relative mx-0.5 -mb-2.5 inline-block xl:mx-0 lg:mx-1 md:-mt-0.5">
                <Image
                  className="relative z-10 lg:size-11 md:-top-[3px] md:size-8"
                  src={database}
                  alt=""
                  width={52}
                  height={52}
                  quality={100}
                />
                <span
                  className="absolute top-1/2 left-1/2 size-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6AFFE6] opacity-15 blur-xl"
                  aria-hidden
                />
              </span>{' '}
              program and test it on real evidence.
            </span>
          </h2>
          <TagCloud
            items={TAGS}
            className="gap-3 lg:mt-[18px] lg:gap-3.5 md:gap-3"
            titleClassName="text-[15px] md:text-sm"
          />
        </div>
      </div>
    </Container>
  </section>
);

export default TestReliably;
