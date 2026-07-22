import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';

import Tabs from './tabs';

const Scenarios = () => {
  const t = useTranslations('services.incidentReporting.scenarios');

  return (
    <section className="scenarios mt-40 safe-paddings xl:mt-32 lg:mt-28 md:mt-20">
      <Container size="1152">
        <h2 className="max-w-[560px] text-[36px] leading-dense tracking-tighter text-black-new xl:text-[32px] md:text-[28px]">
          {t('title')}
        </h2>
        <Tabs tabs={t.raw('items')} pathLabel={t('pathLabel')} />
      </Container>
    </section>
  );
};

export default Scenarios;
