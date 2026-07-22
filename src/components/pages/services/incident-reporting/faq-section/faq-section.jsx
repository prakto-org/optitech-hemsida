import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import Item from 'components/shared/faq/item';

const FaqSection = () => {
  const t = useTranslations('services.incidentReporting.faq');
  const items = t.raw('items');

  return (
    <section className="faq mt-44 safe-paddings xl:mt-36 lg:mt-28 md:mt-20" id="faq">
      <Container
        className="flex gap-x-16 xl:gap-x-8 lg:flex-col lg:gap-y-10 md:gap-y-5"
        size="1152"
      >
        <h2 className="w-80 shrink-0 text-[36px] leading-dense tracking-tighter text-balance text-black-new xl:w-[288px] xl:text-[32px] lg:w-full md:text-[28px]">
          {t('title')}
        </h2>
        <ul className="flex w-full flex-col">
          {items.map((item, index) => (
            <Item
              {...item}
              initialState={index === 0 ? 'open' : 'closed'}
              key={item.question}
              index={index}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default FaqSection;
