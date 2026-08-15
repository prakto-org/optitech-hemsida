import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';

const Benefits = () => {
  const t = useTranslations('liaPraktik.benefits');
  const items = t.raw('items');

  return (
    <section className="benefits mt-40 safe-paddings xl:mt-32 lg:mt-28 md:mt-20">
      <Container size="1152">
        <SectionLabel theme="black">{t('label')}</SectionLabel>
        <h2 className="mt-6 max-w-[560px] text-[36px] leading-dense tracking-tighter text-black-new xl:text-[32px] md:text-[28px]">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-[600px] text-base leading-normal tracking-extra-tight text-gray-new-40">
          {t('description')}
        </p>
        <ul className="mt-12 grid grid-cols-3 gap-x-10 gap-y-10 lg:mt-10 lg:grid-cols-2 lg:gap-x-7 md:grid-cols-1">
          {items.map(({ title, description }) => (
            <li className="border-t border-gray-new-20 pt-5" key={title}>
              <h3 className="text-[19px] leading-tight font-medium tracking-tight text-black-new">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-normal tracking-extra-tight text-gray-new-40">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Benefits;
