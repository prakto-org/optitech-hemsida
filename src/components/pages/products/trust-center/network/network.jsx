import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import logoEricsson from 'images/pages/trust-center/logos/ericsson.svg';
import logoHubspot from 'images/pages/trust-center/logos/hubspot.svg';
import logoKivra from 'images/pages/trust-center/logos/kivra.png';
import logoMaersk from 'images/pages/trust-center/logos/maersk.svg';
import logoSalesforce from 'images/pages/trust-center/logos/salesforce.svg';
import logoSap from 'images/pages/trust-center/logos/sap.svg';
import logoSiemens from 'images/pages/trust-center/logos/siemens.svg';

// Logo cards, positioned in percent of the graph canvas (center points).
const CARDS = [
  { logo: logoSiemens, alt: 'Siemens', x: 17, y: 24, height: 18 },
  { logo: logoEricsson, alt: 'Ericsson', x: 42, y: 34, height: 26 },
  { logo: logoMaersk, alt: 'Maersk', x: 65, y: 42, height: 16 },
  { logo: logoSap, alt: 'SAP', x: 84, y: 20, height: 24 },
  { logo: logoSalesforce, alt: 'Salesforce', x: 24, y: 68, height: 28 },
  { logo: logoHubspot, alt: 'HubSpot', x: 51, y: 62, height: 20 },
  { logo: logoKivra, alt: 'Kivra', x: 80, y: 74, height: 26 },
];

// Free-floating mesh nodes.
const DOTS = [
  { x: 33, y: 16, size: 18 },
  { x: 55, y: 20, size: 15 },
  { x: 20, y: 50, size: 15 },
  { x: 47, y: 52, size: 17 },
  { x: 13, y: 80, size: 16 },
  { x: 36, y: 94, size: 16 },
  { x: 61, y: 88, size: 17 },
  { x: 72, y: 58, size: 14 },
  { x: 87, y: 54, size: 15 },
  { x: 96, y: 60, size: 14 },
];

// Cards and dots share one index space: cards 0-6, dots 7-16.
const NODES = [...CARDS, ...DOTS];

const EDGES = [
  [0, 7],
  [0, 9],
  [0, 11],
  [1, 7],
  [1, 8],
  [1, 10],
  [2, 8],
  [2, 10],
  [2, 14],
  [3, 8],
  [3, 14],
  [3, 15],
  [4, 9],
  [4, 10],
  [4, 11],
  [4, 12],
  [5, 10],
  [5, 12],
  [5, 13],
  [5, 14],
  [6, 13],
  [6, 14],
  [6, 15],
  [6, 16],
  [7, 8],
  [9, 10],
  [11, 12],
  [12, 13],
  [15, 16],
];

const Network = () => {
  const t = useTranslations('products.trustCenter.network');

  return (
    <section className="network overflow-hidden bg-[#250F44] py-28 safe-paddings lg:py-20 md:py-14">
      <Container size="1152">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-serif text-[52px] leading-[1.08] font-normal tracking-extra-tight text-white xl:text-[44px] lg:text-[38px] md:text-[32px]">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg tracking-extra-tight text-white md:text-base">
            {t('description')}
          </p>
        </div>
      </Container>

      <div className="relative mt-16 aspect-[12/5] w-full lg:mt-12 md:mt-8 md:aspect-[3/2]">
        {/* mesh lines */}
        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          {EDGES.map(([from, to]) => (
            <line
              x1={NODES[from].x}
              y1={NODES[from].y}
              x2={NODES[to].x}
              y2={NODES[to].y}
              stroke="#4B3878"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              key={`${from}-${to}`}
            />
          ))}
        </svg>

        {/* free nodes */}
        {DOTS.map(({ x, y, size }) => (
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8257DE]"
            style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
            key={`${x}-${y}`}
            aria-hidden
          />
        ))}

        {/* logo cards */}
        {CARDS.map(({ logo, alt, x, y, height }) => (
          <span
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white px-5 py-3.5 shadow-[0_16px_32px_-10px_rgba(0,0,0,0.45)] md:px-3.5 md:py-2.5"
            style={{ left: `${x}%`, top: `${y}%` }}
            key={alt}
          >
            <Image className="w-auto" src={logo} height={height} style={{ height }} alt={alt} />
          </span>
        ))}
      </div>

      <Container size="1152">
        <p className="mt-12 text-center text-sm tracking-extra-tight text-[#8B75D6] md:mt-8">
          {t('footnote')}
        </p>
      </Container>
    </section>
  );
};

export default Network;
