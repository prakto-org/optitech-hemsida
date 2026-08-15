import { useTranslations } from 'next-intl';

import ApplyModal from 'components/pages/lediga-jobb/lia-praktik/apply-modal';
import Button from 'components/shared/button';
import Container from 'components/shared/container';
import LINKS from 'constants/links';

const Cta = () => {
  const t = useTranslations('liaPraktik.cta');

  return (
    <section className="cta mt-44 mb-40 safe-paddings xl:mt-36 xl:mb-32 lg:mt-28 lg:mb-28 md:mt-20 md:mb-20">
      <Container size="1152">
        <div className="border-t border-gray-new-90 pt-16 lg:pt-12 md:pt-10">
          <h2 className="max-w-[640px] text-[44px] leading-dense tracking-tighter text-black-new xl:text-[40px] lg:text-[36px] md:text-[28px]">
            {t('title')}
          </h2>
          <p className="mt-5 max-w-[560px] text-lg leading-normal tracking-extra-tight text-gray-new-40 lg:text-base">
            {t('description')}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 lg:mt-8 sm:w-full sm:flex-col sm:items-stretch">
            <ApplyModal label={t('primaryCta')} theme="primary" size="new" />
            <Button theme="outlined" size="new" to={LINKS.team}>
              {t('secondaryCta')}
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs leading-none text-gray-new-60 uppercase">
            {t('note')}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
