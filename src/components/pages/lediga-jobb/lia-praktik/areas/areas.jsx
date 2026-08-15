import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';

const Areas = () => {
  const t = useTranslations('liaPraktik.areas');
  const items = t.raw('items');

  return (
    <section className="areas mt-32 safe-paddings xl:mt-28 lg:mt-24 md:mt-20">
      <Container size="1152">
        <SectionLabel theme="black">{t('label')}</SectionLabel>
        <h2 className="mt-6 max-w-[560px] text-[36px] leading-dense tracking-tighter text-black-new xl:text-[32px] md:text-[28px]">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-[600px] text-base leading-normal tracking-extra-tight text-gray-new-40">
          {t('description')}
        </p>
        <ul className="mt-12 grid grid-cols-3 gap-x-10 gap-y-10 lg:mt-10 lg:grid-cols-2 lg:gap-x-7 md:grid-cols-1">
          {items.map(({ title, description }, index) => (
            <li className="border-t border-gray-new-20 pt-5" key={title}>
              <div className="flex items-baseline justify-between gap-x-2">
                <h3 className="text-[19px] leading-tight font-medium tracking-tight text-black-new">
                  {title}
                </h3>
                <span className="font-mono text-xs leading-none text-gray-new-60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
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

export default Areas;
