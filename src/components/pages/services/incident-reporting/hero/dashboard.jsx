import Image from 'next/image';
import PropTypes from 'prop-types';

import avatarDana from 'images/authors/martin-skow.jpg';
import avatarAlex from 'images/authors/oliver-stenbom.jpg';
import optitechLogo from 'images/optitech-logo-light.png';
import { cn } from 'utils/cn';

/* ---------------------------------------------------------------------------
 * OptiTech incident operations dashboard, rendered as product art.
 * The product UI is deliberately Swedish: the platform itself is
 * Swedish-language, which is part of the positioning.
 * ------------------------------------------------------------------------- */

const RING_SERIES = [
  {
    label: 'NIS2',
    value: 92,
    delta: '+1,4',
    r: 46,
    className: 'stroke-green-45',
    dot: 'bg-green-45',
  },
  {
    label: 'GDPR',
    value: 88,
    delta: '+0,8',
    r: 36,
    className: 'stroke-secondary-7',
    dot: 'bg-secondary-7',
  },
  {
    label: 'DORA',
    value: 76,
    delta: '−0,3',
    r: 26,
    className: 'stroke-secondary-5',
    dot: 'bg-secondary-5',
  },
];

const SPARK_CONTROLS = [42, 44, 41, 47, 52, 49, 55, 58, 54, 61, 66, 63, 69, 74];
const SPARK_EVIDENCE = [12, 9, 14, 11, 18, 15, 13, 19, 22, 17, 24, 21, 26, 31];

// 12 weeks x 7 days of control runs; weekends run lighter on purpose.
const HEATMAP = [
  [2, 3, 3, 2, 3, 1, 0],
  [3, 2, 4, 3, 2, 0, 1],
  [2, 3, 2, 4, 3, 1, 0],
  [3, 4, 3, 3, 2, 0, 0],
  [4, 3, 4, 2, 3, 1, 1],
  [3, 2, 3, 4, 4, 0, 0],
  [2, 4, 4, 3, 2, 1, 0],
  [3, 3, 2, 4, 3, 0, 1],
  [4, 2, 3, 3, 4, 1, 0],
  [3, 4, 4, 2, 3, 0, 0],
  [4, 3, 2, 4, 4, 1, 1],
  [4, 4, 3, 4, 2, 1, 0],
];

const HEATMAP_SCALE = ['#EFEFF0', '#D8F5E7', '#9BE8C5', '#47D18C', '#00CC88'];

const LOG_ROWS = [
  {
    time: '02:14:07',
    severity: 'bg-[#DA0B51]',
    text: 'Defender: krypteringsaktivitet upptäckt',
    actor: 'AUTO',
  },
  {
    time: '02:14:09',
    severity: 'bg-[#FF9500]',
    text: 'Ärende INC-2026-042 öppnat, klassning föreslagen',
    actor: 'AUTO',
  },
  {
    time: '02:19:32',
    severity: 'bg-green-45',
    text: 'Jourkontakt bekräftade via BankID',
    actor: 'DS',
    avatar: avatarDana,
  },
  {
    time: '02:41:15',
    severity: 'bg-green-45',
    text: 'Tidig varning skickad till CERT-SE/MSB',
    actor: 'DS',
    avatar: avatarDana,
  },
  {
    time: '09:02:44',
    severity: 'bg-gray-new-70',
    text: 'AI förifyllde 38 fält ur ärendedata',
    actor: 'AI',
  },
  {
    time: '14:31:58',
    severity: 'bg-gray-new-70',
    text: 'Riskbedömning för IMY uppdaterad',
    actor: 'AL',
    avatar: avatarAlex,
  },
];

const NAV_ITEMS = [
  { label: 'Översikt' },
  { label: 'Incidenter', active: true, badge: '1' },
  { label: 'Ramverk' },
  { label: 'Bevis' },
  { label: 'Leverantörer' },
  { label: 'Rapporter' },
];

const sparkPath = (values, width, height, pad = 2) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const stepX = (width - pad * 2) / (values.length - 1);
  const scaleY = (height - pad * 2) / (max - min || 1);
  return values
    .map((value, index) => {
      const x = (pad + index * stepX).toFixed(1);
      const y = (height - pad - (value - min) * scaleY).toFixed(1);
      return `${index === 0 ? 'M' : 'L'}${x} ${y}`;
    })
    .join(' ');
};

const Sparkline = ({ values, strokeClassName, fillId, fillFrom }) => {
  const line = sparkPath(values, 112, 36);
  return (
    <svg className="h-9 w-28 shrink-0" viewBox="0 0 112 36" fill="none">
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fillFrom} stopOpacity="0.25" />
          <stop offset="100%" stopColor={fillFrom} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L110 36 L2 36 Z`} fill={`url(#${fillId})`} />
      <path d={line} className={strokeClassName} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
};

Sparkline.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  strokeClassName: PropTypes.string.isRequired,
  fillId: PropTypes.string.isRequired,
  fillFrom: PropTypes.string.isRequired,
};

const Panel = ({ title, meta = null, className = null, children }) => (
  <div className={cn('rounded-xl border border-gray-new-90 bg-white p-5', className)}>
    <div className="flex items-baseline justify-between gap-x-3">
      <p className="font-mono text-[11px] leading-none tracking-[0.14em] text-gray-new-50 uppercase">
        {title}
      </p>
      {meta && (
        <p className="font-mono text-[11px] leading-none tracking-tight text-gray-new-60">{meta}</p>
      )}
    </div>
    {children}
  </div>
);

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/* Deadline gantt with a segmented, broken time axis: 0-24h | 24-72h | 72h-30d */
const DeadlineChart = () => (
  <svg className="mt-3 h-auto w-full" viewBox="0 0 640 196" fill="none">
    <defs>
      <pattern
        id="ir-hatch"
        width="6"
        height="6"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="6" stroke="#C9CBCF" strokeWidth="1.2" />
      </pattern>
    </defs>

    {/* gates */}
    {[
      { x: 200, label: '24H · TIDIG VARNING', anchor: 'middle' },
      { x: 390, label: '72H · INCIDENTANMÄLAN', anchor: 'middle' },
      { x: 610, label: '30D · SLUTRAPPORT', anchor: 'end' },
    ].map(({ x, label, anchor }) => (
      <g key={label}>
        <line
          x1={x}
          y1="26"
          x2={x}
          y2="164"
          stroke="#E4E5E7"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <text
          x={anchor === 'end' ? 624 : x}
          y="16"
          textAnchor={anchor}
          className="fill-gray-new-50 font-mono text-[10px] tracking-wider"
        >
          {label}
        </text>
      </g>
    ))}

    {/* axis */}
    <line x1="16" y1="168" x2="624" y2="168" stroke="#C9CBCF" strokeWidth="1" />
    {/* axis break marks between segments */}
    {[205, 395].map((x) => (
      <g key={x} stroke="#94979E" strokeWidth="1">
        <line x1={x - 3} y1="164" x2={x + 1} y2="172" />
        <line x1={x + 1} y1="164" x2={x + 5} y2="172" />
      </g>
    ))}
    {[
      { x: 16, label: '02:14' },
      { x: 200, label: '24h' },
      { x: 390, label: '72h' },
      { x: 610, label: '30 dagar' },
    ].map(({ x, label }) => (
      <text
        key={label}
        x={x}
        y="184"
        textAnchor="middle"
        className="fill-gray-new-60 font-mono text-[10px]"
      >
        {label}
      </text>
    ))}

    {/* lane: early warning, completed 02:41 */}
    <text x="16" y="40" className="fill-gray-new-40 text-[11px] font-medium tracking-tight">
      Tidig varning
    </text>
    <rect x="16" y="46" width="24" height="12" rx="2" className="fill-green-45" />
    <text x="48" y="56" className="fill-green-44 font-mono text-[10px]">
      ✓ 02:41 · 27 min efter upptäckt
    </text>

    {/* lane: incident notification, in progress */}
    <text x="16" y="78" className="fill-gray-new-40 text-[11px] font-medium tracking-tight">
      Incidentanmälan · CERT-SE/MSB
    </text>
    <rect x="16" y="84" width="374" height="12" rx="2" fill="url(#ir-hatch)" opacity="0.5" />
    <rect
      x="16"
      y="84"
      width="86"
      height="12"
      rx="2"
      className="fill-green-45/25"
      stroke="#39A57D"
      strokeWidth="1"
    />
    <text x="110" y="94" className="fill-gray-new-40 font-mono text-[10px]">
      64 % ifylld · AI-förifylld
    </text>

    {/* lane: IMY parallel track */}
    <text x="16" y="116" className="fill-gray-new-40 text-[11px] font-medium tracking-tight">
      IMY-anmälan · parallellt spår
    </text>
    <rect
      x="16"
      y="122"
      width="374"
      height="12"
      rx="2"
      fill="none"
      stroke="#94979E"
      strokeWidth="1"
      strokeDasharray="4 3"
    />
    <text x="398" y="132" className="fill-gray-new-50 font-mono text-[10px]">
      riskbedömning pågår
    </text>

    {/* lane: final report */}
    <text x="16" y="150" className="fill-gray-new-40 text-[11px] font-medium tracking-tight">
      Slutrapport
    </text>
    <rect
      x="16"
      y="154"
      width="594"
      height="8"
      rx="2"
      fill="none"
      stroke="#E4E5E7"
      strokeWidth="1"
    />

    {/* NOW marker at 12h 18m elapsed */}
    <line x1="102" y1="26" x2="102" y2="168" stroke="#0C0D0D" strokeWidth="1.2" />
    <circle cx="102" cy="26" r="3.5" className="fill-green-45">
      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <rect x="74" y="0" width="56" height="15" rx="3" className="fill-black-new" />
    <text
      x="102"
      y="11"
      textAnchor="middle"
      className="fill-white font-mono text-[10px] tracking-wider"
    >
      NU 14:32
    </text>
  </svg>
);

/* Concentric framework readiness rings */
const FrameworkRings = () => (
  <div className="mt-4 flex items-center gap-x-5">
    <svg className="size-[132px] shrink-0 -rotate-90" viewBox="0 0 120 120" fill="none">
      {RING_SERIES.map(({ label, value, r, className }) => {
        const circumference = 2 * Math.PI * r;
        return (
          <g key={label}>
            <circle cx="60" cy="60" r={r} className="stroke-gray-new-94" strokeWidth="7" />
            <circle
              cx="60"
              cy="60"
              r={r}
              className={className}
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={circumference.toFixed(1)}
              strokeDashoffset={(circumference * (1 - value / 100)).toFixed(1)}
            />
          </g>
        );
      })}
      <g className="rotate-90" style={{ transformOrigin: '60px 60px' }}>
        <text
          x="60"
          y="57"
          textAnchor="middle"
          className="fill-black-new font-mono text-[17px] font-medium tracking-tight"
        >
          86%
        </text>
        <text
          x="60"
          y="70"
          textAnchor="middle"
          className="fill-gray-new-50 font-mono text-[8px] tracking-[0.14em]"
        >
          TOTALT
        </text>
      </g>
    </svg>
    <ul className="flex w-full flex-col gap-y-2.5">
      {RING_SERIES.map(({ label, value, delta, dot }) => (
        <li className="flex items-center justify-between gap-x-2" key={label}>
          <span className="flex items-center gap-x-2">
            <span className={cn('size-2 shrink-0 rounded-full', dot)} />
            <span className="text-[13px] font-medium tracking-tight text-black-new">{label}</span>
          </span>
          <span className="flex items-baseline gap-x-1.5">
            <span className="font-mono text-[13px] whitespace-nowrap text-black-new tabular-nums">
              {value}%
            </span>
            <span
              className={cn(
                'font-mono text-[11px] whitespace-nowrap tabular-nums',
                delta.startsWith('−') ? 'text-[#DA0B51]' : 'text-green-44'
              )}
            >
              {delta}
            </span>
          </span>
        </li>
      ))}
      <li className="mt-1 border-t border-gray-new-94 pt-2 font-mono text-[10px] tracking-wider text-gray-new-50 uppercase">
        p.p. senaste 7 dagarna
      </li>
    </ul>
  </div>
);

/* Escalation mini-graph: incident -> CERT-SE -> sector authority, IMY in parallel */
const EscalationGraph = () => (
  <svg className="mt-3 h-auto w-full" viewBox="0 0 300 132" fill="none">
    <defs>
      <marker id="ir-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 Z" fill="#94979E" />
      </marker>
    </defs>
    <path
      d="M74 40 C 92 40 96 28 112 28"
      stroke="#39A57D"
      strokeWidth="1.2"
      markerEnd="url(#ir-arrow)"
    />
    <path
      d="M74 48 C 94 48 98 96 112 96"
      stroke="#94979E"
      strokeWidth="1.2"
      strokeDasharray="4 3"
      markerEnd="url(#ir-arrow)"
    />
    <path
      d="M196 28 C 210 28 212 28 224 28"
      stroke="#94979E"
      strokeWidth="1.2"
      markerEnd="url(#ir-arrow)"
    />

    <g>
      <rect x="10" y="30" width="64" height="26" rx="6" className="fill-black-new" />
      <text
        x="42"
        y="46"
        textAnchor="middle"
        className="fill-white font-mono text-[9px] tracking-wider"
      >
        INC-042
      </text>
    </g>
    <g>
      <rect
        x="114"
        y="14"
        width="82"
        height="28"
        rx="6"
        fill="#EBFAF3"
        stroke="#39A57D"
        strokeWidth="1"
      />
      <text x="155" y="26" textAnchor="middle" className="fill-black-new font-mono text-[9px]">
        CERT-SE/MSB
      </text>
      <text x="155" y="37" textAnchor="middle" className="fill-green-44 font-mono text-[8px]">
        ✓ 02:41
      </text>
    </g>
    <g>
      <rect
        x="114"
        y="82"
        width="82"
        height="28"
        rx="6"
        fill="#FFFFFF"
        stroke="#94979E"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <text x="155" y="94" textAnchor="middle" className="fill-black-new font-mono text-[9px]">
        IMY
      </text>
      <text x="155" y="105" textAnchor="middle" className="fill-[#FF9500] font-mono text-[8px]">
        BEDÖMNING PÅGÅR
      </text>
    </g>
    <g>
      <rect
        x="226"
        y="14"
        width="66"
        height="28"
        rx="6"
        fill="#FFFFFF"
        stroke="#C9CBCF"
        strokeWidth="1"
      />
      <text x="259" y="26" textAnchor="middle" className="fill-black-new font-mono text-[9px]">
        Ei · tillsyn
      </text>
      <text x="259" y="37" textAnchor="middle" className="fill-gray-new-50 font-mono text-[8px]">
        VID 72H
      </text>
    </g>
    <text x="10" y="126" className="fill-gray-new-50 font-mono text-[8px] tracking-[0.12em]">
      MOTTAGARE AVGÖRS AV ENTITETSTYP + SEKTOR
    </text>
  </svg>
);

const Dashboard = () => (
  <div
    className="pointer-events-none overflow-hidden rounded-2xl border border-gray-new-90 bg-white text-left select-none"
    aria-hidden="true"
  >
    {/* top bar */}
    <div className="flex h-14 items-center justify-between border-b border-gray-new-90 bg-white px-5">
      <div className="flex items-center gap-x-3.5">
        <Image className="h-[22px] w-auto" src={optitechLogo} height={22} alt="" />
        <span className="h-5 w-px bg-gray-new-90" />
        <span className="font-mono text-[13px] tracking-tight text-gray-new-50">
          Incidenter / <span className="text-black-new">INC-2026-042</span>
        </span>
      </div>
      <div className="flex items-center gap-x-3.5">
        <span className="flex items-center gap-x-2 rounded-md border border-gray-new-90 px-2.5 py-1.5 font-mono text-xs leading-none text-gray-new-50">
          Sök
          <span className="rounded border border-gray-new-90 px-1 py-0.5 text-[10px] leading-none">
            ⌘K
          </span>
        </span>
        <span className="relative flex size-8 items-center justify-center rounded-md border border-gray-new-90">
          <svg className="size-4 text-gray-new-40" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 2a4 4 0 0 0-4 4v2.6L2.8 11h10.4L12 8.6V6a4 4 0 0 0-4-4Zm-1.5 10a1.5 1.5 0 0 0 3 0"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute -top-1 -right-1 flex size-3.5 items-center justify-center rounded-full border border-white bg-[#DA0B51] font-mono text-[8px] leading-none text-white">
            2
          </span>
        </span>
        <Image
          className="size-8 rounded-full object-cover"
          src={avatarDana}
          width={32}
          height={32}
          alt=""
        />
      </div>
    </div>

    <div className="flex">
      {/* sidebar */}
      <div className="flex w-56 shrink-0 flex-col border-r border-gray-new-90 bg-white p-4 lg:w-48 md:hidden">
        <div className="flex items-center justify-between rounded-lg border border-gray-new-90 px-3 py-2.5">
          <span className="text-[13px] font-medium tracking-tight text-black-new">
            Nordisk Energi AB
          </span>
          <span className="font-mono text-[9px] tracking-wider text-gray-new-50">PROD</span>
        </div>
        <ul className="mt-4 flex flex-col gap-y-0.5">
          {NAV_ITEMS.map(({ label, active, badge }) => (
            <li
              className={cn(
                'flex items-center justify-between rounded-md px-3 py-2 text-[13px] leading-none tracking-tight',
                active ? 'bg-gray-new-94 font-medium text-black-new' : 'text-gray-new-50'
              )}
              key={label}
            >
              {label}
              {badge && (
                <span className="rounded-full bg-[#DA0B51] px-1.5 py-0.5 font-mono text-[9px] leading-none text-white">
                  {badge}
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-y-3 border-t border-gray-new-94 pt-4">
          <div className="flex items-center gap-x-2.5">
            <span className="relative">
              <Image
                className="size-8 rounded-full object-cover"
                src={avatarDana}
                width={32}
                height={32}
                alt=""
              />
              <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border border-white bg-green-45" />
            </span>
            <span>
              <span className="block text-[13px] leading-tight font-medium tracking-tight text-black-new">
                Dana Smith
              </span>
              <span className="block font-mono text-[9px] tracking-wider text-gray-new-50 uppercase">
                Jour · v. 30
              </span>
            </span>
          </div>
          <p className="flex items-center gap-x-1.5 font-mono text-[10px] tracking-wider text-gray-new-50 uppercase">
            <span className="size-1.5 rounded-full bg-green-45" />
            MSB-API ansluten
          </p>
        </div>
      </div>

      {/* workspace */}
      <div className="flex grow flex-col gap-4 bg-gray-new-98 p-5">
        {/* case header */}
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-3">
            <h3 className="text-lg leading-snug font-semibold tracking-tight text-black-new">
              Ransomware i produktionsmiljön
            </h3>
            <span className="rounded border border-[#FF9500]/50 bg-[#FF9500]/10 px-2 py-1 font-mono text-[10px] leading-none tracking-wider text-[#B36A00] uppercase">
              P1 · Betydande
            </span>
            <span className="inline-flex items-center gap-x-1.5 rounded-full border border-green-44/50 px-2 py-1 font-mono text-[10px] leading-none tracking-wider text-green-44 uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-green-45" />
              Pågående
            </span>
          </div>
          <div className="flex items-center gap-x-2.5">
            <span className="flex -space-x-1.5">
              <Image
                className="size-7 rounded-full border-2 border-gray-new-98 object-cover"
                src={avatarDana}
                width={28}
                height={28}
                alt=""
              />
              <Image
                className="size-7 rounded-full border-2 border-gray-new-98 object-cover"
                src={avatarAlex}
                width={28}
                height={28}
                alt=""
              />
            </span>
            <span className="rounded-lg border border-gray-new-85 bg-white px-3.5 py-2 text-[13px] leading-none font-medium tracking-tight text-black-new">
              Exportera underlag
            </span>
            <span className="rounded-lg bg-primary-1 px-3.5 py-2 text-[13px] leading-none font-medium tracking-tight text-black-pure">
              Skicka anmälan
            </span>
          </div>
        </div>
        {/* KPI strip */}
        <div className="grid grid-cols-4 gap-4 lg:grid-cols-2 sm:grid-cols-1">
          <Panel title="Nästa tidsfrist">
            <p className="mt-3 font-mono text-[26px] leading-none font-medium tracking-tight text-black-new tabular-nums">
              T−59:42:08
            </p>
            <p className="mt-2.5 flex items-center gap-x-1.5 text-xs leading-snug tracking-tight text-gray-new-40">
              <Image
                className="size-4 rounded-full object-cover"
                src={avatarDana}
                width={16}
                height={16}
                alt=""
              />
              Incidentanmälan · CERT-SE/MSB
            </p>
            <div className="relative mt-3 h-1 rounded-full bg-gray-new-94">
              <span className="absolute inset-y-0 left-0 w-[17%] rounded-full bg-green-45" />
              <span className="absolute top-1/2 left-[33%] h-2 w-px -translate-y-1/2 bg-gray-new-80" />
              <span className="absolute top-1/2 left-[66%] h-2 w-px -translate-y-1/2 bg-gray-new-80" />
            </div>
          </Panel>
          <Panel title="Kontroller verifierade">
            <div className="mt-3 flex items-end justify-between gap-x-2">
              <p className="font-mono text-[26px] leading-none font-medium tracking-tight whitespace-nowrap text-black-new tabular-nums xl:text-xl">
                1&nbsp;243<span className="text-base text-gray-new-60">/1&nbsp;310</span>
              </p>
              <Sparkline
                values={SPARK_CONTROLS}
                strokeClassName="stroke-green-45"
                fillId="ir-spark-controls"
                fillFrom="#00E599"
              />
            </div>
            <p className="mt-2.5 text-xs leading-snug tracking-tight text-gray-new-40">
              94,9 % · alla integrationer friska
            </p>
          </Panel>
          <Panel title="Bevis insamlade idag">
            <div className="mt-3 flex items-end justify-between gap-x-2">
              <p className="font-mono text-[26px] leading-none font-medium tracking-tight text-black-new tabular-nums">
                87
              </p>
              <Sparkline
                values={SPARK_EVIDENCE}
                strokeClassName="stroke-secondary-7"
                fillId="ir-spark-evidence"
                fillFrom="#259DF4"
              />
            </div>
            <p className="mt-2.5 text-xs leading-snug tracking-tight text-gray-new-40">
              +12 % mot 7-dagarssnittet
            </p>
          </Panel>
          <Panel title="Anmälan ifylld">
            <div className="mt-3 flex items-center gap-x-3.5">
              <svg className="size-[52px] shrink-0 -rotate-90" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="18" className="stroke-gray-new-94" strokeWidth="5" />
                <circle
                  cx="22"
                  cy="22"
                  r="18"
                  className="stroke-green-45"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="113.1"
                  strokeDashoffset="40.7"
                />
              </svg>
              <div>
                <p className="font-mono text-[26px] leading-none font-medium tracking-tight text-black-new tabular-nums">
                  64 %
                </p>
                <p className="mt-2 inline-flex rounded border border-gray-new-90 px-1.5 py-1 font-mono text-[9px] leading-none tracking-wider text-gray-new-40 uppercase">
                  38 fält AI-förifyllda
                </p>
              </div>
            </div>
          </Panel>
        </div>

        {/* main row */}
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
          <Panel
            className="col-span-2 lg:col-span-1"
            title="Rapporteringsfönster · NIS2 & GDPR"
            meta="INC-2026-042 · upptäckt 02:14"
          >
            <DeadlineChart />
          </Panel>
          <Panel title="Ramverksstatus" meta="realtid">
            <FrameworkRings />
          </Panel>
        </div>

        {/* bottom row */}
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
          <Panel title="Kontrollkörningar" meta="12 veckor">
            <div className="mt-4 flex gap-x-[5px]">
              {HEATMAP.map((week, weekIndex) => (
                <div className="flex flex-col gap-y-[5px]" key={weekIndex}>
                  {week.map((level, dayIndex) => (
                    <span
                      key={dayIndex}
                      className="size-3 rounded-[3px]"
                      style={{ backgroundColor: HEATMAP_SCALE[level] }}
                    />
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-4 flex items-center gap-x-1.5 font-mono text-[10px] tracking-wider text-gray-new-50 uppercase">
              Färre
              {HEATMAP_SCALE.map((color) => (
                <span
                  className="size-3 rounded-[3px]"
                  style={{ backgroundColor: color }}
                  key={color}
                />
              ))}
              Fler
            </p>
          </Panel>
          <Panel title="Eskaleringsväg" meta="auto">
            <EscalationGraph />
          </Panel>
          <Panel title="Händelselogg" meta="6 av 214">
            <ul className="mt-4 flex flex-col gap-y-2.5">
              {LOG_ROWS.map(({ time, severity, text, actor, avatar }) => (
                <li className="flex items-center gap-x-2.5" key={time}>
                  <span className="font-mono text-[11px] tracking-tight text-gray-new-50 tabular-nums">
                    {time}
                  </span>
                  <span className={cn('size-1.5 shrink-0 rounded-full', severity)} />
                  <span className="truncate text-xs leading-none tracking-tight text-gray-new-30">
                    {text}
                  </span>
                  {avatar ? (
                    <Image
                      className="ml-auto size-5 shrink-0 rounded-full object-cover"
                      src={avatar}
                      width={20}
                      height={20}
                      alt=""
                    />
                  ) : (
                    <span className="ml-auto shrink-0 rounded border border-gray-new-90 px-1.5 py-1 font-mono text-[8px] leading-none tracking-wider text-gray-new-50">
                      {actor}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
