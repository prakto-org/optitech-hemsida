import Image from 'next/image';

import avatarDana from 'images/authors/martin-skow.jpg';
import avatarAlex from 'images/authors/oliver-stenbom.jpg';

/* ---------------------------------------------------------------------------
 * Hero visual in the "browser window" style: the incident case rendered as a
 * clean product page at real web type sizes, framed by browser chrome.
 * ------------------------------------------------------------------------- */

const CheckIcon = () => (
  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E4F8EF]">
    <svg className="size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5 L6.5 11.5 L12.5 4.5"
        stroke="#078345"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const ClockIcon = () => (
  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FFF4E0]">
    <svg className="size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="#B36A00" strokeWidth="1.5" />
      <path d="M8 5v3.2l2.2 1.3" stroke="#B36A00" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </span>
);

const ParallelIcon = () => (
  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-dashed border-gray-new-70 bg-white">
    <svg className="size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 5h7M3 11h7M10 5l3 3-3 3"
        stroke="#61646B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const DocIcon = () => (
  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gray-new-95">
    <svg className="size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 2.5h5.5L12 5v8.5H4V2.5Z"
        stroke="#61646B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 8h4M6 10.5h4" stroke="#61646B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </span>
);

const DEADLINE_ROWS = [
  {
    icon: CheckIcon,
    title: 'Tidig varning',
    meta: 'CERT-SE/MSB · skickad av Dana Smith, signerad med BankID',
    chip: 'Klar · 02:41',
    chipClassName: 'border-green-44/40 bg-[#E4F8EF] text-[#067647]',
  },
  {
    icon: ClockIcon,
    title: 'Fullständig incidentanmälan',
    meta: 'CERT-SE/MSB · 38 fält förifyllda av AI · 64 % klar',
    chip: 'T−59:42:08',
    chipClassName: 'border-black-new bg-black-new text-white',
    isMono: true,
  },
  {
    icon: ParallelIcon,
    title: 'IMY-anmälan vid personuppgifter',
    meta: 'Parallellt spår · riskbedömning pågår',
    chip: '72 h-fönster',
    chipClassName: 'border-gray-new-85 bg-white text-gray-new-40',
  },
  {
    icon: DocIcon,
    title: 'Slutrapport',
    meta: 'Grundorsaksanalys och åtgärdsplan',
    chip: 'Inom 1 månad',
    chipClassName: 'border-gray-new-85 bg-white text-gray-new-40',
  },
];

const TABS = ['Översikt', 'Tidslinje', 'Anmälningar', 'Bevis'];

const HeroBrowser = () => (
  <div className="relative mx-auto max-w-[1000px]" aria-hidden="true">
    {/* ambient glow */}
    <div className="absolute -inset-x-24 -top-14 bottom-0 bg-[radial-gradient(55%_65%_at_50%_16%,rgba(0,229,153,0.12),transparent_72%)]" />

    <div className="relative overflow-hidden rounded-2xl border border-gray-new-90 bg-white [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] shadow-[0_48px_110px_-38px_rgba(12,13,13,0.30)]">
      {/* browser chrome */}
      <div className="flex items-center gap-x-5 border-b border-gray-new-90 bg-gray-new-98 px-5 py-3">
        <span className="flex gap-x-2">
          <span className="size-3 rounded-full bg-[#FF5F57]" />
          <span className="size-3 rounded-full bg-[#FEBC2E]" />
          <span className="size-3 rounded-full bg-[#28C840]" />
        </span>
        <span className="flex min-w-0 grow items-center justify-center">
          <span className="flex items-center gap-x-2 rounded-full border border-gray-new-90 bg-white px-4 py-1.5">
            <svg className="size-3.5 shrink-0" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect
                x="3"
                y="6"
                width="8"
                height="5.5"
                rx="1.2"
                stroke="#39A57D"
                strokeWidth="1.3"
              />
              <path d="M4.8 6V4.6a2.2 2.2 0 0 1 4.4 0V6" stroke="#39A57D" strokeWidth="1.3" />
            </svg>
            <span className="text-[13px] leading-none tracking-tight text-gray-new-30">
              app.optitech.se/incidenter/
              <span className="font-medium text-black-new">INC-2026-042</span>
            </span>
          </span>
        </span>
        <span className="w-12" />
      </div>

      {/* app header */}
      <div className="flex items-center justify-between gap-x-6 border-b border-gray-new-90 px-8 pt-5 md:px-5">
        <div className="flex items-center gap-x-8 lg:gap-x-6">
          <div className="flex items-center gap-x-3 pb-4">
            <span className="flex size-9 items-center justify-center rounded-[10px] bg-linear-to-b from-[#00E599] to-[#00B377] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
              <svg className="size-[18px]" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M9 1.8 15 4v4.5c0 3.6-2.4 6.3-6 7.7-3.6-1.4-6-4.1-6-7.7V4l6-2.2Z"
                  fill="white"
                  fillOpacity="0.22"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.2 9.1 8.2 11l3.6-3.8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="pb-0.5 text-[17px] leading-none font-semibold tracking-tight whitespace-nowrap text-black-new">
              OptiTech <span className="font-normal text-gray-new-50">· Incidenter</span>
            </span>
          </div>
          <nav className="flex items-center gap-x-6 lg:gap-x-5 sm:hidden">
            {TABS.map((tab, index) => (
              <span
                className={
                  index === 0
                    ? 'relative pb-4 text-[15px] leading-none font-medium tracking-tight text-black-new after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2.5px] after:rounded-full after:bg-green-44'
                    : 'pb-4 text-[15px] leading-none tracking-tight text-gray-new-50'
                }
                key={tab}
              >
                {tab}
              </span>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-x-3 pb-4">
          <span className="flex -space-x-2">
            <Image
              className="size-7 rounded-full border-2 border-white object-cover"
              src={avatarDana}
              width={28}
              height={28}
              alt=""
            />
            <Image
              className="size-7 rounded-full border-2 border-white object-cover"
              src={avatarAlex}
              width={28}
              height={28}
              alt=""
            />
          </span>
          <span className="inline-flex items-center gap-x-1.5 rounded-full border border-green-44/50 bg-white px-2.5 py-1.5 font-mono text-[10px] leading-none tracking-wider text-green-44 uppercase sm:hidden">
            <span className="size-1.5 animate-pulse rounded-full bg-green-45" />
            Live
          </span>
        </div>
      </div>

      {/* page content */}
      <div className="px-8 pt-7 pb-8 md:px-5">
        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2">
          <h3 className="text-[26px] leading-tight font-semibold tracking-tight text-black-new md:text-xl">
            Ransomware i produktionsmiljön
          </h3>
          <span className="rounded-md border border-[#FF9500]/50 bg-[#FFF4E0] px-2 py-1 font-mono text-[11px] leading-none tracking-wider text-[#B36A00] uppercase">
            P1 · Betydande
          </span>
        </div>
        <p className="mt-2.5 text-[15px] leading-normal tracking-tight text-gray-new-40">
          Upptäckt 02:14 av Microsoft Defender · klassad enligt Cybersäkerhetslagen
        </p>
        <div className="mt-4 inline-flex items-center gap-x-2.5 rounded-full border border-green-44/30 bg-[#EDFBF4] py-2 pr-4 pl-3">
          <span className="size-2 rounded-full bg-green-45" />
          <span className="text-[14px] leading-none font-medium tracking-tight text-[#067647]">
            Tidig varning inlämnad i tid · nästa tidsfrist om 59 timmar
          </span>
        </div>

        {/* deadlines card */}
        <div className="mt-7 overflow-hidden rounded-xl border border-gray-new-90">
          <div className="flex items-baseline justify-between border-b border-gray-new-90 bg-gray-new-98 px-5 py-3.5">
            <span className="text-[15px] leading-none font-semibold tracking-tight text-black-new">
              Lagstadgade tidsfrister
            </span>
            <span className="text-[13px] leading-none tracking-tight text-gray-new-50 sm:hidden">
              NIS2 · GDPR · uppdaterad för 2 min sedan
            </span>
          </div>
          <ul className="divide-y divide-gray-new-94">
            {DEADLINE_ROWS.map(({ icon: Icon, title, meta, chip, chipClassName, isMono }) => (
              <li className="flex items-center gap-x-4 px-5 py-4" key={title}>
                <Icon />
                <span className="min-w-0">
                  <span className="block truncate text-[15px] leading-snug font-medium tracking-tight text-black-new">
                    {title}
                  </span>
                  <span className="mt-0.5 block truncate text-[13px] leading-snug tracking-tight text-gray-new-50">
                    {meta}
                  </span>
                </span>
                <span
                  className={`ml-auto shrink-0 rounded-full border px-3 py-1.5 text-[12px] leading-none tracking-tight ${
                    isMono ? 'font-mono tabular-nums' : 'font-medium'
                  } ${chipClassName}`}
                >
                  {chip}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBrowser;
