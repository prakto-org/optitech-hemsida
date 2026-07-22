import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import LINKS from 'constants/links';

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M3 7.5 6 10.5 11 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M3 8h10m0 0-4-4m4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CARD_LINKS = [LINKS.pricing, LINKS.contactSales];

const Plans = () => {
  const t = useTranslations('products.trustCenter.plans');
  const cards = t.raw('cards');

  return (
    <section className="plans bg-[#241A4D] py-28 safe-paddings lg:py-20 md:py-14">
      <Container size="1152">
        <div className="grid grid-cols-12 gap-x-8 lg:gap-x-6 md:block">
          <div className="col-span-4 md:mb-9">
            <h2 className="font-serif text-[52px] leading-[1.08] font-normal tracking-extra-tight text-white xl:text-[44px] lg:text-[38px] md:text-[32px]">
              {t('title')}
            </h2>
            <p className="mt-5 text-base leading-normal tracking-extra-tight text-[#B9AEE3]">
              {t('description')}
            </p>
          </div>
          <div className="col-span-7 col-start-6 grid grid-cols-2 gap-x-6 md:col-span-full md:col-start-auto md:grid-cols-1 md:gap-y-6">
            {cards.map((card, index) => (
              <div className="flex flex-col rounded-2xl bg-[#F1EEFA] p-8 lg:p-6" key={card.name}>
                <span className="text-sm font-medium tracking-wide text-[#6C4BD4] uppercase">
                  {card.plan}
                </span>
                <h3 className="mt-3 font-serif text-[28px] leading-tight font-normal tracking-extra-tight text-[#17112E] lg:text-2xl">
                  {card.name}
                </h3>
                <p className="mt-3 text-sm leading-normal tracking-extra-tight text-[#4E4763]">
                  {card.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {card.features.map((feature) => (
                    <li
                      className="flex items-start gap-x-2.5 text-sm tracking-extra-tight text-[#2A2344]"
                      key={feature}
                    >
                      <span className="mt-0.5 text-[#6C4BD4]">
                        <CheckIcon />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  className="mt-8 inline-flex items-center gap-x-2 pt-2 text-sm font-semibold text-[#00E599] transition-colors duration-200 hover:text-[#00cc88]"
                  to={CARD_LINKS[index]}
                >
                  {card.cta}
                  <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Plans;
