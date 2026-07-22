import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';

// Fictional Nordic customer wordmarks, styled as logos.
const wordmarkStyles = [
  'font-title text-xl tracking-tight',
  'font-serif text-xl italic',
  'text-lg font-bold tracking-widest uppercase',
  'font-mono text-lg tracking-tight lowercase',
  'font-serif text-xl',
  'text-lg font-extrabold tracking-tight',
  'text-lg font-medium tracking-[0.3em] uppercase',
];

const Proof = () => {
  const t = useTranslations('products.trustCenter.proof');
  const logos = t.raw('logos');

  return (
    <section className="proof bg-[#1C4634] py-24 safe-paddings lg:py-16 md:py-12">
      <Container size="1152">
        <p className="text-center text-sm font-medium tracking-wide text-[#A9D6BC] uppercase">
          {t('logosHeading')}
        </p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 lg:gap-x-10 md:mt-7 md:gap-x-7">
          {logos.map((name, index) => (
            <li
              className={`${wordmarkStyles[index % wordmarkStyles.length]} text-[#BFE3CE]`}
              key={name}
            >
              {name}
            </li>
          ))}
        </ul>

        <div className="mt-28 grid grid-cols-12 items-end gap-x-8 border-t border-white/10 pt-20 lg:mt-20 lg:pt-14 md:mt-14 md:grid-cols-1 md:gap-y-8 md:pt-10">
          <h2 className="col-span-7 font-serif text-[64px] leading-[1.05] font-normal tracking-extra-tight text-white xl:text-[52px] lg:text-[44px] md:col-span-full md:text-[36px]">
            {t('statTitle')}
          </h2>
          <div className="col-span-4 col-start-9 md:col-span-full md:col-start-auto">
            <p className="text-base leading-normal tracking-extra-tight text-[#BFE3CE]">
              {t('statDescription')}
            </p>
            <p className="mt-6 text-xs leading-normal tracking-extra-tight text-[#7FAE93]">
              {t('statSource')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Proof;
