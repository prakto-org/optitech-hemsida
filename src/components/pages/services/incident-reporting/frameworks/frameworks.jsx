import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';

const Frameworks = () => {
  const t = useTranslations('services.incidentReporting.frameworks');
  const items = t.raw('items');

  return (
    <section className="frameworks mt-44 safe-paddings xl:mt-36 lg:mt-28 md:mt-20">
      <Container size="1152">
        <h2 className="mx-auto max-w-[560px] text-center text-[36px] leading-dense tracking-tighter text-black-new xl:text-[32px] md:text-[28px]">
          {t('title')}
        </h2>
        <div className="mt-12 flex justify-center lg:mt-10">
          <span className="rounded-full border border-gray-new-80 px-4 py-2 font-mono text-xs leading-none tracking-wider text-gray-new-30 uppercase">
            {t('root')}
          </span>
        </div>
        {/* dendrogram connectors from the shared root down to the three cards */}
        <svg
          className="mt-1 h-14 w-full text-gray-new-85 md:hidden"
          viewBox="0 0 300 56"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M150 0 V26 M50 26 H250 M50 26 V56 M150 26 V56 M250 26 V56"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <ul className="grid grid-cols-3 gap-x-10 xl:gap-x-7 lg:gap-x-5 md:mt-8 md:grid-cols-1 md:gap-y-5">
          {items.map(({ name, windows, recipient }) => (
            <li
              className="rounded-xl border border-gray-new-90 bg-white p-7 shadow-[0_10px_30px_-12px_rgba(12,13,13,0.10)] md:p-6"
              key={name}
            >
              <h3 className="text-xl leading-snug font-medium tracking-tight text-black-new">
                {name}
              </h3>
              <p className="mt-3 font-mono text-lg tracking-tight text-green-44">{windows}</p>
              <p className="mt-2 text-sm leading-normal tracking-extra-tight text-gray-new-40">
                {recipient}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Frameworks;
