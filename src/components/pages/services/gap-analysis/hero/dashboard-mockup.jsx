// Light, premium gap-analysis product screenshot for the hero. Static sample
// data only, styled as a real OptiTech app view on a white surface.

import Image from 'next/image';
import PropTypes from 'prop-types';

import optitechLogo from 'images/optitech-logo-light.png';

const FRAMEWORKS = [
  { label: 'NIS2', active: false },
  { label: 'ISO 27001', active: true },
  { label: 'GDPR', active: false },
  { label: 'DORA', active: false },
];

const STATS = [
  { label: 'Met', value: 28, dot: 'bg-tc-green', valueClass: 'text-tc-green-text' },
  { label: 'Partial', value: 9, dot: 'bg-tc-amber', valueClass: 'text-tc-amber-text' },
  { label: 'Gaps', value: 5, dot: 'bg-[#E4572E]', valueClass: 'text-[#B23A2E]' },
];

const GAPS = [
  {
    control: 'Backup restoration testing',
    meta: 'ISO 27001 · A.8.13',
    status: 'Gap',
    impact: 'High',
    owner: 'AL',
  },
  {
    control: 'Logging and monitoring',
    meta: 'ISO 27001 · A.8.15',
    status: 'Gap',
    impact: 'High',
    owner: 'DS',
  },
  {
    control: 'Access review cadence',
    meta: 'ISO 27001 · A.5.18',
    status: 'Partial',
    impact: 'Medium',
    owner: 'MK',
  },
  {
    control: 'Supplier security clauses',
    meta: 'NIS2 · Art. 21',
    status: 'Partial',
    impact: 'Medium',
    owner: 'JR',
  },
];

const READINESS = 68;

const STATUS_STYLES = {
  Gap: 'bg-[#FDECEC] text-[#B23A2E]',
  Partial: 'bg-tc-cream text-tc-amber-text',
  Met: 'bg-tc-mint text-tc-green-text',
};

// Soft colored glows behind the panel for depth on the white section.
const Backdrop = () => (
  <>
    <span
      className="absolute -top-14 -left-16 size-72 rounded-full opacity-40 blur-[90px]"
      style={{ background: 'radial-gradient(circle, #8257DE 0%, transparent 70%)' }}
      aria-hidden
    />
    <span
      className="absolute -right-10 -bottom-20 size-80 rounded-full opacity-35 blur-[100px]"
      style={{ background: 'radial-gradient(circle, #00E5BF 0%, transparent 70%)' }}
      aria-hidden
    />
  </>
);

const ReadinessDial = ({ value }) => {
  const radius = 15.915;

  return (
    <div className="relative shrink-0">
      <svg width="132" height="132" viewBox="0 0 36 36" aria-hidden>
        <defs>
          <linearGradient id="dial-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8257DE" />
            <stop offset="60%" stopColor="#5C7BF0" />
            <stop offset="100%" stopColor="#00C4A7" />
          </linearGradient>
        </defs>
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          className="stroke-tc-border"
          strokeWidth="2.6"
        />
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          stroke="url(#dial-gradient)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeDasharray={`${value} 100`}
          transform="rotate(-90 18 18)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-title text-[30px] leading-none font-semibold text-tc-ink">
          {value}%
        </span>
        <span className="mt-1 text-[10px] tracking-[0.18em] text-tc-faint uppercase">Ready</span>
      </div>
    </div>
  );
};

ReadinessDial.propTypes = {
  value: PropTypes.number.isRequired,
};

const TrendArrow = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M8 13V3m0 0-4 4m4-4 4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DashboardMockup = () => (
  <div className="relative">
    <Backdrop />

    <div className="relative overflow-hidden rounded-[20px] bg-white p-6 ring-1 ring-tc-border drop-shadow-[0_40px_90px_rgba(23,17,46,0.28)] md:p-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-x-4 border-b border-tc-divide pb-4">
        <Image
          className="h-6 w-auto object-contain object-left"
          src={optitechLogo}
          alt="OptiTech"
        />
        <span className="flex items-center gap-x-1.5 rounded-full bg-tc-mint px-2.5 py-1 text-[11px] font-medium text-tc-green-text">
          <span className="size-1.5 animate-pulse rounded-full bg-tc-green" />
          Live
        </span>
      </div>

      {/* Title */}
      <div className="mt-4 flex items-start justify-between gap-x-4">
        <div>
          <p className="text-[11px] tracking-[0.16em] text-tc-faint uppercase">Gap analysis</p>
          <h3 className="mt-0.5 font-title text-lg font-semibold tracking-tight text-tc-ink">
            ISO 27001 readiness
          </h3>
        </div>
        <div className="inline-flex rounded-full bg-tc-cloud-light p-1 ring-1 ring-tc-border md:hidden">
          {FRAMEWORKS.map((framework) => (
            <span
              className={`rounded-full px-3 py-1 text-[12px] font-medium ${
                framework.active ? 'bg-tc-ink text-white' : 'text-tc-muted'
              }`}
              key={framework.label}
            >
              {framework.label}
            </span>
          ))}
        </div>
      </div>

      {/* Metric row */}
      <div className="mt-5 flex items-center gap-x-7 md:gap-x-5 sm:flex-col sm:items-start sm:gap-y-5">
        <ReadinessDial value={READINESS} />

        <div className="flex-1">
          <div className="flex items-center gap-x-2">
            <span className="text-[13px] text-tc-muted">42 controls assessed</span>
            <span className="flex items-center gap-x-1 text-[12px] font-medium text-tc-green-text">
              <TrendArrow />
              +12 pts
            </span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {STATS.map((stat) => (
              <div
                className="rounded-2xl border border-tc-border bg-tc-cloud-light px-3.5 py-3"
                key={stat.label}
              >
                <div className="flex items-center gap-x-1.5">
                  <span className={`size-1.5 rounded-full ${stat.dot}`} />
                  <span className="text-[11px] text-tc-muted">{stat.label}</span>
                </div>
                <p className={`mt-1.5 font-title text-2xl font-semibold ${stat.valueClass}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gaps list */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-semibold text-tc-ink">Top gaps to close</span>
          <span className="text-[11px] text-tc-faint">Ranked by impact × effort</span>
        </div>
        <ul className="mt-3 space-y-1.5">
          {GAPS.map((gap) => (
            <li
              className="flex items-center gap-x-3 rounded-2xl border border-tc-border bg-tc-cloud-light px-3.5 py-3"
              key={gap.control}
            >
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${STATUS_STYLES[gap.status]}`}
              >
                {gap.status}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-medium text-tc-ink-light">{gap.control}</p>
                <p className="text-[11px] text-tc-faint">{gap.meta}</p>
              </div>
              <span
                className={`text-[12px] font-medium sm:hidden ${
                  gap.impact === 'High' ? 'text-[#B23A2E]' : 'text-tc-amber-text'
                }`}
              >
                {gap.impact}
              </span>
              <span className="flex size-6 items-center justify-center rounded-full bg-tc-sand text-[10px] font-semibold text-tc-ink">
                {gap.owner}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default DashboardMockup;
