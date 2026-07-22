import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';

const Facts = () => {
  const t = useTranslations('services.incidentReporting.facts');
  const items = t.raw('items');

  return (
    <section className="facts mt-40 safe-paddings xl:mt-32 lg:mt-28 md:mt-20">
      <Container size="1152">
        <h2 className="max-w-[560px] text-[36px] leading-dense tracking-tighter text-black-new xl:text-[32px] md:text-[28px]">
          {t('title')}
        </h2>
        <ul className="mt-12 grid grid-cols-4 gap-x-10 xl:gap-x-7 lg:mt-10 lg:grid-cols-2 lg:gap-y-10 md:grid-cols-1">
          {items.map(({ value, description }) => (
            <li className="border-t border-gray-new-20 pt-5" key={value}>
              <p className="font-mono text-[28px] leading-tight tracking-tight text-black-new xl:text-2xl">
                {value}
              </p>
              <p className="mt-3 max-w-[240px] text-sm leading-normal tracking-extra-tight text-gray-new-40">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Facts;
