import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';

import StepsScroller from './steps-scroller';

const Steps = () => {
  const t = useTranslations('services.incidentReporting.steps');

  return (
    <section className="steps relative mt-28 xl:mt-24 lg:mt-20 md:mt-14">
      {/* full-bleed tinted right half behind the sticky card panel */}
      <div className="absolute inset-y-0 right-0 left-1/2 bg-[#EDF3EF] md:hidden" aria-hidden />
      <Container className="relative" size="1152">
        <StepsScroller items={t.raw('items')} cta={t('cta')} />
      </Container>
    </section>
  );
};

export default Steps;
