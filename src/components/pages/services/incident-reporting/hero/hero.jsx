import { useTranslations } from 'next-intl';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import PauseableVideo from 'components/shared/pauseable-video';
import LINKS from 'constants/links';

import HeroReport from './hero-report';

const Hero = () => {
  const t = useTranslations('services.incidentReporting.hero');

  return (
    <section className="hero relative overflow-hidden bg-[#F7F5EF] pt-[152px] pb-24 safe-paddings xl:pt-[136px] lg:pt-28 md:pt-24">
      <Container className="relative" size="1280">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] items-center gap-x-8 lg:grid-cols-1 lg:gap-y-8">
          {/* Left: editorial headline and actions */}
          <div className="relative z-10 max-w-[640px] pl-8 xl:pl-4 lg:max-w-none lg:pl-0">
            <h1 className="font-serif text-[64px] leading-[1.04] font-normal tracking-extra-tight text-black-new xl:text-[54px] lg:text-[44px] md:text-[34px]">
              {t('title')}
            </h1>
            <p className="mt-6 max-w-[540px] text-lg leading-normal tracking-extra-tight text-gray-new-40 lg:mt-5 lg:text-base">
              {t('description')}
            </p>
            <div className="mt-9 flex flex-wrap gap-4 md:mt-7 sm:w-full sm:flex-col">
              <Button theme="secondary" size="new" to={LINKS.contactSales}>
                {t('primaryCta')}
              </Button>
            </div>
          </div>

          {/* Right: abstract knot animation, bleeding off the right edge */}
          <div className="relative lg:mx-auto lg:max-w-[520px]" aria-hidden>
            <div className="relative -mr-[26%] translate-x-[6%] xl:-mr-[14%] lg:mr-0 lg:translate-x-0">
              <PauseableVideo
                className="w-full"
                videoClassName="w-full object-contain"
                width={1000}
                height={1000}
                loop
              >
                <source
                  src="/videos/pages/services/incident-reporting/fin-knot-2.webm"
                  type="video/webm"
                />
              </PauseableVideo>
            </div>
          </div>
        </div>
      </Container>

      <Container className="relative mt-20 lg:mt-14 md:mt-10" size="1152">
        <HeroReport />
      </Container>
    </section>
  );
};

export default Hero;
