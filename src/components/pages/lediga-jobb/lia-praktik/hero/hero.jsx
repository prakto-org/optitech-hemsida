import { useTranslations } from 'next-intl';

import ApplyModal from 'components/pages/lediga-jobb/lia-praktik/apply-modal';
import Button from 'components/shared/button';
import Container from 'components/shared/container';
import PauseableVideo from 'components/shared/pauseable-video';
import SectionLabel from 'components/shared/section-label';
import LINKS from 'constants/links';

const Hero = () => {
  const t = useTranslations('liaPraktik.hero');

  return (
    <section className="hero overflow-hidden pt-[168px] safe-paddings xl:pt-[152px] lg:pt-32 md:pt-28">
      <Container size="1152">
        <div className="grid grid-cols-[minmax(0,1.45fr)_minmax(0,0.55fr)] items-center gap-x-12 lg:grid-cols-1 lg:gap-y-10">
          <div>
            <SectionLabel theme="black">{t('label')}</SectionLabel>
            <h1 className="mt-6 max-w-[680px] font-title text-[56px] leading-[1.02] font-medium tracking-extra-tight text-black-new xl:text-[48px] lg:max-w-none lg:text-[40px] md:mt-5 md:text-[32px]">
              {t('title')}
            </h1>
            <p className="mt-6 max-w-[620px] text-lg leading-normal tracking-extra-tight text-gray-new-40 lg:mt-5 lg:max-w-[600px] lg:text-base">
              {t('description')}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4 md:mt-7 sm:w-full sm:flex-col sm:items-stretch">
              <ApplyModal label={t('primaryCta')} theme="primary" size="new" />
              <Button theme="outlined" size="new" to={LINKS.team}>
                {t('secondaryCta')}
              </Button>
            </div>
            <p className="mt-6 text-sm leading-normal tracking-extra-tight text-gray-new-50">
              {t('placements')}
            </p>
          </div>
          <div className="relative lg:mx-auto lg:max-w-[480px]" aria-hidden>
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
      </Container>
    </section>
  );
};

export default Hero;
