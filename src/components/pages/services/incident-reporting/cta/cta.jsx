import { useTranslations } from 'next-intl';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import LINKS from 'constants/links';

const Cta = () => {
  const t = useTranslations('services.incidentReporting.cta');

  return (
    <section className="cta mt-44 mb-40 safe-paddings xl:mt-36 xl:mb-32 lg:mt-28 lg:mb-28 md:mt-20 md:mb-20">
      <Container size="1152">
        <div className="border-t border-gray-new-90 pt-16 lg:pt-12 md:pt-10">
          <h2 className="max-w-[640px] text-[44px] leading-dense tracking-tighter text-black-new xl:text-[40px] lg:text-[36px] md:text-[28px]">
            {t('title')}
          </h2>
          <Button className="mt-10 lg:mt-8" theme="primary" size="new" to={LINKS.contactSales}>
            {t('button')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
