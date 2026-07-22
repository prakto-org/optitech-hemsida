import Image from 'next/image';
import PropTypes from 'prop-types';

import avatarDana from 'images/authors/martin-skow.jpg';
import avatarAlex from 'images/authors/oliver-stenbom.jpg';
import optitechLogo from 'images/optitech-logo-light.png';

/* ---------------------------------------------------------------------------
 * Hero visual: the OptiTech compliance report, chart-dense like Vanta's
 * report view but in the browser-window style. All SVG paths are computed at
 * build time. Product UI is Swedish on purpose.
 * ------------------------------------------------------------------------- */

/* Catmull-Rom -> cubic bezier for smooth series lines. */
const smoothPath = (points) => {
  if (points.length < 2) return '';
  let d = `M${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
};

/* ---- Chart 1: framework progress, multi-series lines ---- */
const FW_PLOT = { x0: 34, x1: 432, y0: 12, y1: 148 };
const fwPoint = (index, value, count) => [
  FW_PLOT.x0 + (index * (FW_PLOT.x1 - FW_PLOT.x0)) / (count - 1),
  FW_PLOT.y1 - (value / 100) * (FW_PLOT.y1 - FW_PLOT.y0),
];
const FW_SERIES = [
  { label: 'NIS2', color: '#00CC88', values: [46, 52, 55, 61, 60, 66, 71, 74, 78, 83, 88, 92] },
  {
    label: 'ISO 27001',
    color: '#259DF4',
    values: [58, 60, 63, 62, 67, 70, 72, 75, 79, 81, 84, 86],
  },
  { label: 'GDPR', color: '#AA99FF', values: [70, 72, 71, 75, 78, 77, 80, 83, 85, 88, 88, 90] },
  {
    label: 'DORA',
    color: '#FFA64C',
    values: [30, 34, 40, 45, 52, 55, 60, 63, 68, 70, 73, 76],
    dashed: true,
  },
].map((series) => ({
  ...series,
  path: smoothPath(
    series.values.map((value, index) => fwPoint(index, value, series.values.length))
  ),
  end: fwPoint(
    series.values.length - 1,
    series.values[series.values.length - 1],
    series.values.length
  ),
}));
const FW_MONTHS = ['aug', 'okt', 'dec', 'feb', 'apr', 'jun'];

/* ---- Chart 2: time-to-report percentiles vs the 24h statutory limit ---- */
const TT_PLOT = { x0: 34, x1: 432, y0: 12, y1: 148 };
const ttPoint = (index, value, count) => [
  TT_PLOT.x0 + (index * (TT_PLOT.x1 - TT_PLOT.x0)) / (count - 1),
  TT_PLOT.y1 - (value / 48) * (TT_PLOT.y1 - TT_PLOT.y0),
];
const TT_SERIES = [
  { label: 'p90', color: '#494B50', values: [46, 40, 34, 30, 26, 22, 18, 14, 11, 9, 7, 6] },
  { label: 'p50', color: '#00CC88', values: [20, 17, 14, 12, 10, 8, 7, 6, 5, 4, 3.5, 3] },
].map((series) => ({
  ...series,
  path: smoothPath(
    series.values.map((value, index) => ttPoint(index, value, series.values.length))
  ),
}));
const TT_LIMIT_Y = ttPoint(0, 24, 12)[1];

/* ---- Chart 3: control owners, stacked horizontal bars ---- */
const OWNER_ROWS = [
  { label: 'IT-drift', done: 62, doing: 25, late: 13, total: 312 },
  { label: 'Säkerhet', done: 70, doing: 20, late: 10, total: 264 },
  { label: 'Utveckling', done: 55, doing: 30, late: 15, total: 198 },
  { label: 'HR', done: 48, doing: 34, late: 18, total: 121 },
  { label: 'Ekonomi', done: 40, doing: 38, late: 22, total: 86 },
];

/* ---- Chart 4: upcoming reviews, gantt ---- */
const GANTT_ROWS = [
  { label: 'ISO 27001 intern revision', start: 0, span: 2, color: '#259DF4' },
  { label: 'NIS2 tillsynsförfrågan', start: 1, span: 1.4, color: '#00CC88' },
  { label: 'DORA IKT-register', start: 2.2, span: 2.2, color: '#259DF4' },
  { label: 'Pentest Q4', start: 3.4, span: 1.6, color: '#AA99FF' },
];
const GANTT_MONTHS = ['aug', 'sep', 'okt', 'nov', 'dec', 'jan'];

/* ---- Floating card: notification completion ---- */
const COMPLETION_ROWS = [
  { label: 'Verksamhetspåverkan', value: 100 },
  { label: 'Tekniska detaljer', value: 80 },
  { label: 'Vidtagna åtgärder', value: 45 },
  { label: 'Bilagor & bevis', value: 20 },
];

const SIDEBAR_SECTIONS = [
  {
    heading: 'Allmänt',
    items: [{ label: 'Översikt' }, { label: 'Uppgifter', badge: '4' }],
  },
  {
    heading: 'Efterlevnad',
    items: [
      { label: 'Incidenter', badge: '1' },
      { label: 'Ramverk' },
      { label: 'Kontroller' },
      { label: 'Bevis' },
    ],
  },
  {
    heading: 'Organisation',
    items: [{ label: 'Leverantörer' }, { label: 'Personal' }, { label: 'Rapporter', active: true }],
  },
];

const PanelTitle = ({ children }) => (
  <p className="text-[13px] leading-none font-semibold tracking-tight text-black-new">{children}</p>
);

PanelTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

const HeroReport = () => (
  <div className="relative mx-auto max-w-[1120px]" aria-hidden="true">
    {/* soft tinted panel behind the window, Vanta-style */}
    <div className="rounded-[32px] bg-[#E9F1EC] p-9 xl:p-7 lg:p-5 md:rounded-2xl md:p-3">
      <div className="relative overflow-hidden rounded-2xl border border-gray-new-90 bg-white shadow-[0_28px_60px_-28px_rgba(12,13,13,0.28)]">
        <div className="flex">
          {/* sidebar */}
          <div className="flex w-52 shrink-0 flex-col border-r border-gray-new-90 bg-white lg:w-44 md:hidden">
            {/* logo header */}
            <div className="flex h-11 shrink-0 items-center border-b border-gray-new-94 px-4">
              <Image className="h-[15px] w-auto" src={optitechLogo} height={15} alt="" />
            </div>
            <div className="flex grow flex-col p-3">
              {SIDEBAR_SECTIONS.map(({ heading, items }, sectionIndex) => (
                <div
                  className={
                    sectionIndex === 0 ? undefined : 'mt-4 border-t border-gray-new-94 pt-4'
                  }
                  key={heading}
                >
                  <p className="px-2.5 font-mono text-[9px] leading-none tracking-[0.14em] text-gray-new-60 uppercase">
                    {heading}
                  </p>
                  <ul className="mt-1.5 flex flex-col gap-y-px">
                    {items.map(({ label, active, badge }) => (
                      <li
                        className={
                          active
                            ? 'relative flex items-center justify-between rounded-[4px] bg-gray-new-94 py-2 pr-2.5 pl-4 text-[13px] leading-none font-medium tracking-tight text-black-new before:absolute before:top-1/2 before:left-1.5 before:h-3.5 before:w-[2px] before:-translate-y-1/2 before:rounded-full before:bg-green-45'
                            : 'flex items-center justify-between rounded-[4px] py-2 pr-2.5 pl-4 text-[13px] leading-none tracking-tight text-gray-new-40'
                        }
                        key={label}
                      >
                        {label}
                        {badge && (
                          <span className="rounded-[3px] bg-[#DA0B51] px-1.5 py-0.5 font-mono text-[9px] leading-none text-white">
                            {badge}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="mt-auto flex flex-col gap-y-3 border-t border-gray-new-94 pt-4">
                <p className="flex items-center gap-x-1.5 px-2.5 font-mono text-[9px] tracking-wider text-gray-new-50 uppercase">
                  <span className="size-1.5 rounded-full bg-green-45" />
                  MSB-API ansluten
                </p>
                <div className="flex items-center gap-x-2.5 rounded-[6px] border border-gray-new-90 p-2.5">
                  <span className="relative shrink-0">
                    <Image
                      className="size-8 rounded-full object-cover"
                      src={avatarDana}
                      width={32}
                      height={32}
                      alt=""
                    />
                    <span className="absolute -right-0.5 -bottom-0.5 size-2 rounded-full border border-white bg-green-45" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[12px] leading-tight font-medium tracking-tight text-black-new">
                      Dana Smith
                    </span>
                    <span className="block truncate text-[10px] leading-tight tracking-tight text-gray-new-50">
                      Nordisk Energi AB
                    </span>
                  </span>
                  <svg
                    className="ml-auto size-3.5 shrink-0 text-gray-new-60"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 3.5 8.5 7 5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* main column */}
          <div className="min-w-0 grow">
            {/* toolbar */}
            <div className="flex h-11 items-center justify-between border-b border-gray-new-94 px-7 md:px-5">
              <span className="flex items-center gap-x-2 text-[13px] leading-none tracking-tight">
                <span className="text-gray-new-50">Rapporter</span>
                <svg
                  className="size-3 text-gray-new-70"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4.5 2.5 8 6l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-medium text-black-new">Efterlevnad</span>
              </span>
              <span className="flex items-center gap-x-3">
                <span className="flex -space-x-2">
                  <Image
                    className="size-6 rounded-full border-2 border-white object-cover"
                    src={avatarDana}
                    width={24}
                    height={24}
                    alt=""
                  />
                  <Image
                    className="size-6 rounded-full border-2 border-white object-cover"
                    src={avatarAlex}
                    width={24}
                    height={24}
                    alt=""
                  />
                </span>
                <span className="inline-flex items-center gap-x-1.5 rounded-[4px] border border-green-44/40 bg-[#EDFBF4] px-2 py-1 font-mono text-[9px] leading-none tracking-wider text-[#067647] uppercase">
                  <span className="size-1.5 animate-pulse rounded-full bg-green-45" />
                  Live
                </span>
              </span>
            </div>
            {/* report header */}
            <div className="flex items-center justify-between px-7 pt-6 md:px-5">
              <div>
                <h3 className="text-[22px] leading-tight font-semibold tracking-tight text-black-new">
                  Efterlevnadsrapport
                </h3>
                <div className="mt-3 flex items-center gap-x-2">
                  <span className="rounded-[4px] border border-gray-new-85 bg-white px-3 py-1.5 text-[12px] leading-none font-medium tracking-tight text-gray-new-30">
                    Senaste 12 månaderna
                  </span>
                  <span className="rounded-[4px] border border-gray-new-85 bg-white px-3 py-1.5 text-[12px] leading-none font-medium tracking-tight text-gray-new-30">
                    Ramverk (4)
                  </span>
                  <span className="inline-flex items-center gap-x-1.5 rounded-[4px] border border-green-44/40 bg-[#EDFBF4] px-3 py-1.5 text-[12px] leading-none font-medium tracking-tight text-[#067647] sm:hidden">
                    <span className="size-1.5 animate-pulse rounded-full bg-green-45" />
                    Alla kontroller körs
                  </span>
                </div>
              </div>
              <span className="rounded-[4px] border border-gray-new-85 bg-white px-3.5 py-2 text-[12px] leading-none font-medium tracking-tight text-black-new md:hidden">
                Exportera PDF
              </span>
            </div>

            {/* chart grid */}
            <div className="grid grid-cols-2 gap-4 px-7 pt-5 pb-7 md:grid-cols-1 md:px-5">
              {/* framework progress */}
              <div className="rounded-xl border border-gray-new-90 p-4">
                <div className="flex items-baseline justify-between">
                  <PanelTitle>Ramverksstatus</PanelTitle>
                  <span className="flex items-center gap-x-3">
                    {FW_SERIES.map(({ label, color }) => (
                      <span className="flex items-center gap-x-1.5" key={label}>
                        <span
                          className="size-1.5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[10px] leading-none tracking-tight text-gray-new-40">
                          {label}
                        </span>
                      </span>
                    ))}
                  </span>
                </div>
                <svg className="mt-3 h-auto w-full" viewBox="0 0 440 172" fill="none">
                  {[0, 25, 50, 75, 100].map((tick) => {
                    const y = FW_PLOT.y1 - (tick / 100) * (FW_PLOT.y1 - FW_PLOT.y0);
                    return (
                      <g key={tick}>
                        <line
                          x1={FW_PLOT.x0}
                          y1={y}
                          x2={FW_PLOT.x1}
                          y2={y}
                          stroke="#EFEFF0"
                          strokeWidth="1"
                        />
                        <text
                          x={FW_PLOT.x0 - 6}
                          y={y + 3}
                          textAnchor="end"
                          className="fill-gray-new-60 font-mono text-[9px]"
                        >
                          {tick}
                        </text>
                      </g>
                    );
                  })}
                  {FW_MONTHS.map((month, index) => (
                    <text
                      key={month}
                      x={FW_PLOT.x0 + (index * (FW_PLOT.x1 - FW_PLOT.x0)) / (FW_MONTHS.length - 1)}
                      y="164"
                      textAnchor="middle"
                      className="fill-gray-new-60 font-mono text-[9px]"
                    >
                      {month}
                    </text>
                  ))}
                  {FW_SERIES.map(({ label, color, path, dashed, end }) => (
                    <g key={label}>
                      <path
                        d={path}
                        stroke={color}
                        strokeWidth="1.8"
                        strokeDasharray={dashed ? '5 4' : undefined}
                        strokeLinecap="round"
                      />
                      <circle
                        cx={end[0]}
                        cy={end[1]}
                        r="2.6"
                        fill="#fff"
                        stroke={color}
                        strokeWidth="1.6"
                      />
                    </g>
                  ))}
                </svg>
              </div>

              {/* upcoming reviews gantt */}
              <div className="rounded-xl border border-gray-new-90 p-4">
                <div className="flex items-baseline justify-between">
                  <PanelTitle>Kommande granskningar</PanelTitle>
                  <span className="text-[10px] leading-none tracking-tight text-gray-new-50">
                    nästa 6 mån
                  </span>
                </div>
                <svg className="mt-3 h-auto w-full" viewBox="0 0 440 172" fill="none">
                  {GANTT_MONTHS.map((month, index) => {
                    const x = 132 + (index * 296) / (GANTT_MONTHS.length - 1);
                    return (
                      <g key={month}>
                        <line x1={x} y1="10" x2={x} y2="146" stroke="#EFEFF0" strokeWidth="1" />
                        <text
                          x={x}
                          y="164"
                          textAnchor="middle"
                          className="fill-gray-new-60 font-mono text-[9px]"
                        >
                          {month}
                        </text>
                      </g>
                    );
                  })}
                  {GANTT_ROWS.map(({ label, start, span, color }, index) => {
                    const y = 22 + index * 32;
                    const x = 132 + (start * 296) / (GANTT_MONTHS.length - 1);
                    const width = (span * 296) / (GANTT_MONTHS.length - 1);
                    return (
                      <g key={label}>
                        <text
                          x="0"
                          y={y + 10}
                          className="fill-gray-new-30 text-[10px] font-medium tracking-tight"
                        >
                          {label.length > 22 ? `${label.slice(0, 21)}…` : label}
                        </text>
                        <rect
                          x={x}
                          y={y}
                          width={width}
                          height="14"
                          rx="4"
                          fill={color}
                          opacity="0.85"
                        />
                        <rect
                          x={x}
                          y={y}
                          width={Math.min(width, 34)}
                          height="14"
                          rx="4"
                          fill={color}
                        />
                      </g>
                    );
                  })}
                  <line x1="152" y1="10" x2="152" y2="146" stroke="#0C0D0D" strokeWidth="1.2" />
                  <rect x="134" y="0" width="36" height="13" rx="3" className="fill-black-new" />
                  <text
                    x="152"
                    y="9"
                    textAnchor="middle"
                    className="fill-white font-mono text-[8px] tracking-wider"
                  >
                    IDAG
                  </text>
                </svg>
              </div>

              {/* control owners stacked bars */}
              <div className="rounded-xl border border-gray-new-90 p-4">
                <div className="flex items-baseline justify-between">
                  <PanelTitle>Kontrollägare</PanelTitle>
                  <span className="flex items-center gap-x-3">
                    {[
                      { label: 'Klart', color: '#00CC88' },
                      { label: 'Pågår', color: '#FEBC2E' },
                      { label: 'Försenat', color: '#FF5F57' },
                    ].map(({ label, color }) => (
                      <span className="flex items-center gap-x-1.5" key={label}>
                        <span
                          className="size-1.5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[10px] leading-none tracking-tight text-gray-new-40">
                          {label}
                        </span>
                      </span>
                    ))}
                  </span>
                </div>
                <ul className="mt-4 flex flex-col gap-y-3">
                  {OWNER_ROWS.map(({ label, done, doing, late, total }) => (
                    <li className="flex items-center gap-x-3" key={label}>
                      <span className="w-20 shrink-0 text-[11px] leading-none tracking-tight text-gray-new-30">
                        {label}
                      </span>
                      <span className="flex h-3.5 grow gap-x-px overflow-hidden rounded-sm">
                        <span style={{ width: `${done}%`, backgroundColor: '#00CC88' }} />
                        <span style={{ width: `${doing}%`, backgroundColor: '#FEBC2E' }} />
                        <span style={{ width: `${late}%`, backgroundColor: '#FF5F57' }} />
                      </span>
                      <span className="w-9 shrink-0 text-right font-mono text-[10px] text-gray-new-50 tabular-nums">
                        {total}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-gray-new-94 pt-3 font-mono text-[9px] tracking-wider text-gray-new-50 uppercase">
                  981 kontroller · 5 team · uppdaterad 14:32
                </p>
              </div>

              {/* time to report percentiles */}
              <div className="rounded-xl border border-gray-new-90 p-4">
                <div className="flex items-baseline justify-between">
                  <PanelTitle>Tid till myndighetsanmälan</PanelTitle>
                  <span className="flex items-center gap-x-3">
                    {TT_SERIES.map(({ label, color }) => (
                      <span className="flex items-center gap-x-1.5" key={label}>
                        <span
                          className="size-1.5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[10px] leading-none tracking-tight text-gray-new-40">
                          {label}
                        </span>
                      </span>
                    ))}
                    <span className="flex items-center gap-x-1.5">
                      <span className="h-px w-3 border-t border-dashed border-[#DA0B51]" />
                      <span className="text-[10px] leading-none tracking-tight text-gray-new-40">
                        24h-krav
                      </span>
                    </span>
                  </span>
                </div>
                <svg className="mt-3 h-auto w-full" viewBox="0 0 440 172" fill="none">
                  {[0, 12, 24, 36, 48].map((tick) => {
                    const y = TT_PLOT.y1 - (tick / 48) * (TT_PLOT.y1 - TT_PLOT.y0);
                    return (
                      <g key={tick}>
                        <line
                          x1={TT_PLOT.x0}
                          y1={y}
                          x2={TT_PLOT.x1}
                          y2={y}
                          stroke="#EFEFF0"
                          strokeWidth="1"
                        />
                        <text
                          x={TT_PLOT.x0 - 6}
                          y={y + 3}
                          textAnchor="end"
                          className="fill-gray-new-60 font-mono text-[9px]"
                        >
                          {tick}h
                        </text>
                      </g>
                    );
                  })}
                  <line
                    x1={TT_PLOT.x0}
                    y1={TT_LIMIT_Y}
                    x2={TT_PLOT.x1}
                    y2={TT_LIMIT_Y}
                    stroke="#DA0B51"
                    strokeWidth="1.2"
                    strokeDasharray="5 4"
                  />
                  {TT_SERIES.map(({ label, color, path }) => (
                    <path
                      key={label}
                      d={path}
                      stroke={color}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  ))}
                  {FW_MONTHS.map((month, index) => (
                    <text
                      key={month}
                      x={TT_PLOT.x0 + (index * (TT_PLOT.x1 - TT_PLOT.x0)) / (FW_MONTHS.length - 1)}
                      y="164"
                      textAnchor="middle"
                      className="fill-gray-new-60 font-mono text-[9px]"
                    >
                      {month}
                    </text>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* bottom status bar */}
        <div className="flex h-11 items-center justify-between border-t border-gray-new-90 bg-gray-new-98 px-5">
          <span className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1.5 font-mono text-[10px] leading-none tracking-wider text-gray-new-40 uppercase">
              <span className="size-1.5 rounded-full bg-green-45" />
              Alla system anslutna · 12 integrationer
            </span>
            <span className="h-3 w-px bg-gray-new-90 sm:hidden" />
            <span className="font-mono text-[10px] leading-none tracking-wider text-gray-new-50 uppercase sm:hidden">
              Nästa kontrollkörning 15:00
            </span>
          </span>
          <span className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1.5 font-mono text-[10px] leading-none tracking-wider text-gray-new-50 uppercase md:hidden">
              <svg className="size-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M6 1l4 1.6v2.9c0 2.4-1.6 4.2-4 5.1-2.4-.9-4-2.7-4-5.1V2.6L6 1Z"
                  stroke="#39A57D"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
              </svg>
              Data lagras i Sverige · eu-north-1
            </span>
            <span className="font-mono text-[10px] leading-none tracking-wider text-gray-new-50 uppercase">
              Synkad 14:32
            </span>
          </span>
        </div>
      </div>
    </div>

    {/* floating card: notification completion, Vanta-style overlay */}
    <div className="absolute top-[92px] -right-9 w-[264px] rounded-xl border border-gray-new-90 bg-white p-4 shadow-[0_32px_64px_-16px_rgba(12,13,13,0.35)] xl:right-0 md:hidden">
      <div className="flex items-baseline justify-between">
        <p className="text-[12px] leading-none font-semibold tracking-tight text-black-new">
          Incidentanmälan · INC-2026-042
        </p>
      </div>
      <div className="mt-3 flex items-baseline gap-x-2">
        <span className="font-mono text-[24px] leading-none font-medium tracking-tight text-black-new tabular-nums">
          64 %
        </span>
        <span className="font-mono text-[11px] leading-none tracking-tight text-gray-new-50 tabular-nums">
          T−59:42:08
        </span>
      </div>
      <ul className="mt-3.5 flex flex-col gap-y-2.5">
        {COMPLETION_ROWS.map(({ label, value }) => (
          <li key={label}>
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] leading-none tracking-tight text-gray-new-40">
                {label}
              </span>
              <span className="font-mono text-[10px] leading-none text-gray-new-50 tabular-nums">
                {value} %
              </span>
            </div>
            <div className="mt-1.5 h-1 rounded-full bg-gray-new-94">
              <span
                className="block h-full rounded-full"
                style={{
                  width: `${value}%`,
                  backgroundColor: value === 100 ? '#00CC88' : value >= 50 ? '#47D18C' : '#FEBC2E',
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3.5 flex items-center gap-x-1.5 border-t border-gray-new-94 pt-3 text-[10px] leading-none tracking-tight text-gray-new-50">
        <svg className="size-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M6 1l4 1.6v2.9c0 2.4-1.6 4.2-4 5.1-2.4-.9-4-2.7-4-5.1V2.6L6 1Z"
            stroke="#39A57D"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
        38 fält förifyllda av OptiTech AI
      </p>
    </div>
  </div>
);

export default HeroReport;
