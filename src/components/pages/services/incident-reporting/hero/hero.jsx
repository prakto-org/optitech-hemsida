import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';
import LINKS from 'constants/links';
import heroBg from 'images/pages/services/incident-reporting/hero-bg.png';

import HeroReport from './hero-report';

const Hero = () => {
  const t = useTranslations('services.incidentReporting.hero');

  return (
    <section className="hero relative overflow-hidden pt-[152px] safe-paddings xl:pt-[136px] lg:pt-28 md:pt-24">
      {/* Ribbed glass gradient backdrop, fading into white before the report widget */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] xl:h-[580px] lg:h-[500px] md:h-[440px]"
        aria-hidden
      >
        <Image
          className="object-cover opacity-90"
          src={heroBg}
          alt=""
          sizes="100vw"
          quality={85}
          fill
          priority
        />
        {/* soft light center so the heading stays readable */}
        <span className="absolute inset-0 bg-[radial-gradient(64%_78%_at_50%_34%,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.72)_52%,rgba(255,255,255,0.18)_100%)]" />
        {/* fade to page white ahead of the widget */}
        <span className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-white/0 via-white/70 to-white md:h-40" />
      </div>

      <Container className="relative flex flex-col items-center text-center" size="1152">
        <SectionLabel theme="black">{t('label')}</SectionLabel>
        <h1 className="mt-6 max-w-[860px] font-title text-[56px] leading-[1.02] font-medium tracking-extra-tight text-black-new xl:text-[48px] lg:max-w-[700px] lg:text-[40px] md:mt-5 md:text-[32px]">
          {t('title')}
        </h1>
        <p className="mt-6 max-w-[640px] text-lg leading-normal tracking-extra-tight text-gray-new-40 lg:mt-5 lg:text-base">
          {t('description')}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4 lg:mt-8 sm:w-full sm:flex-col">
          <Button theme="primary" size="new" to={LINKS.contactSales}>
            {t('primaryCta')}
          </Button>
          <Button theme="outlined" size="new" to="#report-flow">
            {t('secondaryCta')}
          </Button>
        </div>
      </Container>
      <Container className="relative mt-20 lg:mt-14 md:mt-10" size="1152">
        <HeroReport />
      </Container>
    </section>
  );
};

export default Hero;
