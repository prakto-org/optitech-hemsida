import { useTranslations } from 'next-intl';

import { cn } from 'utils/cn';

const RING_RADIUS = 24;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
// Share of the 24-hour window still remaining in the mocked case.
const RING_REMAINING = 0.39;

const STATUS_STYLES = [
  'border-green-44/50 text-green-44',
  'border-gray-new-70 text-gray-new-40',
  'border-gray-new-85 text-gray-new-60',
  'border-dashed border-gray-new-70 text-gray-new-40',
];

const CaseWindow = () => {
  const t = useTranslations('services.incidentReporting.hero.mockup');
  const nav = t.raw('nav');
  const steps = t.raw('steps');

  return (
    <div
      className="overflow-hidden rounded-xl border border-gray-new-90 bg-white shadow-[0_24px_60px_-12px_rgba(12,13,13,0.12)]"
      aria-hidden="true"
    >
      {/* window bar */}
      <div className="flex items-center justify-between border-b border-gray-new-90 bg-gray-new-98 px-5 py-3">
        <div className="flex items-center gap-x-3">
          <span className="flex gap-x-1.5">
            <span className="size-2.5 rounded-full bg-gray-new-85" />
            <span className="size-2.5 rounded-full bg-gray-new-85" />
            <span className="size-2.5 rounded-full bg-gray-new-85" />
          </span>
          <span className="font-mono text-xs tracking-tight text-gray-new-40">{t('appName')}</span>
        </div>
        <span className="font-mono text-xs tracking-tight text-gray-new-50">{t('caseId')}</span>
      </div>
      <div className="flex">
        {/* sidebar */}
        <ul className="flex w-44 shrink-0 flex-col gap-y-1 border-r border-gray-new-90 p-4 lg:w-40 md:hidden">
          {nav.map((item, index) => (
            <li
              className={cn(
                'rounded-md px-3 py-2 text-sm leading-none tracking-tight',
                index === 1 ? 'bg-gray-new-94 text-black-new' : 'text-gray-new-50'
              )}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        {/* case view */}
        <div className="grow p-6 md:p-5">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h3 className="text-lg leading-snug font-medium tracking-tight text-black-new">
              {t('caseTitle')}
            </h3>
            <span className="inline-flex items-center gap-x-1.5 rounded-full border border-green-44/50 px-2.5 py-1 font-mono text-[11px] leading-none tracking-wider text-green-44 uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-green-45" />
              {t('caseStatus')}
            </span>
          </div>
          {/* countdown card */}
          <div className="mt-5 flex items-center gap-x-5 rounded-lg border border-gray-new-90 bg-gray-new-98 p-5 sm:gap-x-4 sm:p-4">
            <svg className="size-14 shrink-0 -rotate-90" viewBox="0 0 56 56" fill="none">
              <circle
                cx="28"
                cy="28"
                r={RING_RADIUS}
                className="stroke-gray-new-90"
                strokeWidth="3"
              />
              <circle
                cx="28"
                cy="28"
                r={RING_RADIUS}
                className="stroke-primary-1"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={RING_CIRCUMFERENCE.toFixed(2)}
                strokeDashoffset={(RING_CIRCUMFERENCE * (1 - RING_REMAINING)).toFixed(2)}
              />
            </svg>
            <div>
              <p className="text-sm leading-snug tracking-tight text-gray-new-40">
                {t('countdownLabel')}
              </p>
              <p className="mt-1.5 font-mono text-2xl leading-none tracking-tight text-black-new sm:text-xl">
                {t('countdown')}
              </p>
              <p className="mt-1.5 font-mono text-[11px] tracking-wider text-gray-new-50 uppercase">
                {t('countdownWindow')}
              </p>
            </div>
          </div>
          {/* statutory steps */}
          <p className="mt-6 font-mono text-[11px] tracking-wider text-gray-new-50 uppercase">
            {t('stepsHeading')}
          </p>
          <ul className="mt-3 flex flex-col">
            {steps.map(({ name, recipient, deadline, status }, index) => (
              <li
                className="grid grid-cols-[1.4fr_1fr_auto_auto] items-center gap-x-6 border-t border-gray-new-90 py-3 first:border-t-0 lg:gap-x-4 sm:grid-cols-[1fr_auto]"
                key={name}
              >
                <span className="text-sm leading-snug tracking-tight text-black-new">{name}</span>
                <span className="text-sm leading-snug tracking-tight text-gray-new-50 sm:hidden">
                  {recipient}
                </span>
                <span className="font-mono text-xs tracking-tight text-gray-new-50 sm:hidden">
                  {deadline}
                </span>
                <span
                  className={cn(
                    'inline-flex justify-self-end rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none tracking-wider uppercase',
                    STATUS_STYLES[index % STATUS_STYLES.length]
                  )}
                >
                  {status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseWindow;
