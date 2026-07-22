import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';

const RegulatoryMap = () => {
  const t = useTranslations('services.incidentReporting.regulatoryMap');
  const items = t.raw('items');

  return (
    <section className="regulatory-map mt-40 safe-paddings xl:mt-32 lg:mt-28 md:mt-20">
      <Container size="1152">
        <h2 className="max-w-[560px] text-[36px] leading-dense tracking-tighter text-black-new xl:text-[32px] md:text-[28px]">
          {t('title')}
        </h2>
        <div className="relative mt-14 lg:mt-10">
          <div
            className="absolute top-0 right-0 left-0 h-px bg-gray-new-90 md:hidden"
            aria-hidden
          />
          <ul className="grid grid-cols-3 gap-x-10 xl:gap-x-7 lg:gap-x-5 md:grid-cols-1 md:gap-y-10">
            {items.map(({ name, law, description }) => (
              <li className="relative pt-8 md:border-t md:border-gray-new-90 md:pt-6" key={name}>
                <span
                  className="absolute -top-[3.5px] left-0 size-[7px] rounded-full border border-green-44 bg-white md:-top-1"
                  aria-hidden
                />
                <h3 className="text-xl leading-snug font-medium tracking-tight text-black-new">
                  {name}
                </h3>
                <p className="mt-2 font-mono text-xs tracking-wider text-gray-new-50 uppercase">
                  {law}
                </p>
                <p className="mt-3 max-w-[300px] text-base leading-normal tracking-extra-tight text-gray-new-40">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default RegulatoryMap;
