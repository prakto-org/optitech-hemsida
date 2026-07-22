import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';

const Hero = () => {
  const t = useTranslations('team.hero');

  return (
    <section className="hero pt-[168px] safe-paddings xl:pt-[152px] lg:pt-32 md:pt-28">
      <Container size="1152">
        <SectionLabel theme="black">{t('label')}</SectionLabel>
        <h1 className="mt-6 max-w-[720px] font-title text-[56px] leading-[1.02] font-medium tracking-extra-tight text-black-new xl:text-[48px] lg:text-[40px] md:mt-5 md:text-[32px]">
          {t('title')}
        </h1>
        <p className="mt-6 max-w-[560px] text-lg leading-normal tracking-extra-tight text-gray-new-40 lg:mt-5 lg:text-base">
          {t('description')}
        </p>
      </Container>
    </section>
  );
};

export default Hero;
