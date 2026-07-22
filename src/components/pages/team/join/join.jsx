import { useTranslations } from 'next-intl';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import LINKS from 'constants/links';

const Join = () => {
  const t = useTranslations('team.join');

  return (
    <section className="join mt-32 safe-paddings pb-40 xl:mt-28 lg:mt-24 lg:pb-32 md:mt-20 md:pb-24">
      <Container size="1152">
        <div className="flex items-end justify-between gap-x-10 border-t border-gray-new-20 pt-10 md:flex-col md:items-start md:gap-y-6 md:pt-8">
          <div>
            <h2 className="text-[28px] leading-tight tracking-tighter text-black-new md:text-2xl">
              {t('title')}
            </h2>
            <p className="mt-3 max-w-[480px] text-base leading-normal tracking-extra-tight text-gray-new-40">
              {t('description')}
            </p>
          </div>
          <Button theme="outlined" size="new" to={LINKS.contactSales}>
            {t('cta')}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Join;
