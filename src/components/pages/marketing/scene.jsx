/* Product art for the /services and /frameworks pages.
 *
 * Five distinct light-theme scenes so pages don't all look alike. Each page
 * picks one with the `visual` key in constants/services|frameworks and feeds it
 * its own rows and metrics. Drawn in JSX/SVG like the incident-reporting
 * dashboard, with entrance animations from scenes.css.
 */

import PropTypes from 'prop-types';

import { cn } from 'utils/cn';

import OrbitScene from './orbit-scene';

import './scenes.css';

const CHROME_TITLE = 'OptiTech Console';

const Window = ({ label, children, className = null }) => (
  <div
    className={cn(
      'scene overflow-hidden rounded-xl border border-gray-new-90 bg-white shadow-[0_24px_60px_rgba(15,23,32,0.12)]',
      className
    )}
    aria-hidden
  >
    <div className="flex items-center gap-x-2 border-b border-gray-new-90 px-4 py-2.5">
      <span className="flex gap-x-1.5">
        <span className="size-2 rounded-full bg-gray-new-90" />
        <span className="size-2 rounded-full bg-gray-new-90" />
        <span className="size-2 rounded-full bg-gray-new-90" />
      </span>
      <p className="ml-2 font-mono text-[10px] tracking-[0.14em] text-gray-new-50 uppercase">
        {CHROME_TITLE}
      </p>
      {label && (
        <span className="ml-auto rounded-[4px] bg-green-45/12 px-2 py-1 font-mono text-[10px] leading-none text-[#0F8A5F]">
          {label}
        </span>
      )}
    </div>
    {children}
  </div>
);

Window.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Caption = ({ children }) => (
  <p className="font-mono text-[10px] leading-none tracking-[0.14em] text-gray-new-50 uppercase">
    {children}
  </p>
);

Caption.propTypes = { children: PropTypes.node.isRequired };

/* ---------------------------------------------------------------- console */

const TREND = [38, 44, 41, 49, 47, 55, 58, 54, 63, 68, 66, 74, 79, 86];

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

const STATUS = {
  pass: { dot: 'bg-green-45', text: 'text-[#0F8A5F]', label: 'OK' },
  progress: { dot: 'bg-[#E08A00]', text: 'text-[#B36B00]', label: 'Pågår' },
  gap: { dot: 'bg-gray-new-70', text: 'text-gray-new-50', label: 'Gap' },
};
const STATUS_CYCLE = ['pass', 'pass', 'progress', 'pass', 'gap', 'pass'];

const ConsoleScene = ({ label, rows, metrics }) => {
  const circumference = 2 * Math.PI * 34;
  return (
    <Window label={label}>
      <div className="p-4">
        <div className="flex items-center gap-x-5">
          <div className="relative shrink-0">
            <svg className="size-[92px] -rotate-90" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="34" className="stroke-gray-new-94" strokeWidth="6" />
              <circle
                cx="40"
                cy="40"
                r="34"
                className="scene-ring stroke-green-45"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={circumference}
                style={{ '--dash': circumference, '--offset': circumference * 0.14 }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-title text-xl font-medium text-black-new">
              86%
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <Caption>Efterlevnadspoäng</Caption>
            <svg
              className="mt-2 h-10 w-full"
              viewBox="0 0 220 40"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="scene-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00CC88" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#00CC88" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={`${sparkPath(TREND, 220, 40)} L218 40 L2 40 Z`} fill="url(#scene-fill)" />
              <path
                className="scene-draw"
                d={sparkPath(TREND, 220, 40)}
                pathLength="1"
                stroke="#00CC88"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-gray-new-90 p-4">
          <div className="flex items-baseline justify-between">
            <Caption>Kontroller</Caption>
            <span className="font-mono text-[10px] text-gray-new-50">{rows.length} i omfång</span>
          </div>
          <ul className="mt-3 flex flex-col gap-y-2.5">
            {rows.slice(0, 5).map((row, index) => {
              const status = STATUS[STATUS_CYCLE[index % STATUS_CYCLE.length]];
              return (
                <li
                  className="scene-in flex items-center gap-x-2.5"
                  key={row}
                  style={{ '--d': `${0.2 + index * 0.1}s` }}
                >
                  <span className={cn('size-1.5 shrink-0 rounded-full', status.dot)} />
                  <span className="min-w-0 flex-1 truncate text-[11px] leading-none tracking-extra-tight text-gray-new-20">
                    {row}
                  </span>
                  <span className={cn('shrink-0 font-mono text-[10px]', status.text)}>
                    {status.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {metrics.length > 0 && (
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-1">
            {metrics.slice(0, 2).map(({ value, label: metricLabel }) => (
              <div className="rounded-lg border border-gray-new-90 p-4" key={metricLabel}>
                <Caption>{metricLabel}</Caption>
                <p className="mt-2 font-title text-2xl leading-none font-medium tracking-extra-tight text-black-new">
                  {value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Window>
  );
};

/* --------------------------------------------------------------- evidence */

const EvidenceScene = ({ label, rows, metrics }) => (
  <Window label={label}>
    <div className="p-4">
      <div className="flex items-center justify-between">
        <Caption>Bevisinsamling</Caption>
        <span className="flex items-center gap-x-1.5">
          <span className="scene-pulse size-1.5 rounded-full bg-green-45" />
          <span className="font-mono text-[10px] text-[#0F8A5F]">live</span>
        </span>
      </div>
      <ul className="mt-3 flex flex-col gap-y-px overflow-hidden rounded-lg border border-gray-new-90">
        {rows.slice(0, 6).map((row, index) => (
          <li
            className="scene-in flex items-center gap-x-3 border-b border-gray-new-94 bg-white px-3 py-2.5 last:border-0"
            key={row}
            style={{ '--d': `${0.15 + index * 0.12}s` }}
          >
            <span className="font-mono text-[10px] text-gray-new-60">
              0{index + 1}:{String(12 + index * 7).padStart(2, '0')}
            </span>
            <span className="min-w-0 flex-1 truncate text-[11px] leading-none tracking-extra-tight text-gray-new-20">
              {row}
            </span>
            <span className="shrink-0 rounded-[3px] bg-green-45/12 px-1.5 py-0.5 font-mono text-[9px] text-[#0F8A5F]">
              samlat
            </span>
          </li>
        ))}
      </ul>
      {metrics.length > 0 && (
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-1">
          {metrics.slice(0, 2).map(({ value, label: metricLabel }) => (
            <div className="rounded-lg border border-gray-new-90 p-3" key={metricLabel}>
              <Caption>{metricLabel}</Caption>
              <p className="mt-1.5 font-title text-xl leading-none font-medium text-black-new">
                {value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  </Window>
);

/* --------------------------------------------------------------- timeline */

const TIMELINE_STEPS = [
  { time: '24h', pct: 100 },
  { time: '72h', pct: 62 },
  { time: '1 mån', pct: 18 },
];

const TimelineScene = ({ label, rows, metrics }) => (
  <Window label={label}>
    <div className="p-4">
      <Caption>Tidsfrister</Caption>
      <ul className="mt-3 flex flex-col gap-y-3">
        {TIMELINE_STEPS.map(({ time, pct }, index) => (
          <li className="scene-in" key={time} style={{ '--d': `${0.2 + index * 0.15}s` }}>
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] leading-none tracking-extra-tight text-gray-new-20">
                {rows[index] || `Steg ${index + 1}`}
              </span>
              <span className="font-mono text-[10px] text-gray-new-50">{time}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-new-94">
              <span
                className="scene-bar block h-full rounded-full bg-green-45"
                style={{ '--w': `${pct}%`, '--d': `${0.3 + index * 0.15}s` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-lg border border-gray-new-90 p-3">
        <Caption>{metrics[0]?.label || 'Till deadline'}</Caption>
        <p className="mt-1.5 font-title text-2xl leading-none font-medium text-black-new">
          {metrics[0]?.value || '24h'}
        </p>
      </div>
    </div>
  </Window>
);

/* ---------------------------------------------------------------- mapping */

const MAP_GRID = [
  [1, 1, 0, 1, 1, 0],
  [1, 0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0],
];

const MappingScene = ({ label, rows, metrics }) => (
  <Window label={label}>
    <div className="p-4">
      <Caption>Korsmappning</Caption>
      <div className="mt-3 overflow-hidden rounded-lg border border-gray-new-90">
        {MAP_GRID.map((line, rowIndex) => (
          <div
            className="scene-in flex items-center gap-x-3 border-b border-gray-new-94 px-3 py-2.5 last:border-0"
            key={rows[rowIndex] || rowIndex}
            style={{ '--d': `${0.15 + rowIndex * 0.12}s` }}
          >
            <span className="w-24 shrink-0 truncate text-[11px] leading-none tracking-extra-tight text-gray-new-20">
              {rows[rowIndex] || `Krav ${rowIndex + 1}`}
            </span>
            <span className="flex flex-1 gap-x-1.5">
              {line.map((on, cellIndex) => (
                <span
                  className={cn(
                    'h-4 flex-1 rounded-[3px]',
                    on ? 'bg-green-45/70' : 'bg-gray-new-94'
                  )}
                  key={cellIndex}
                />
              ))}
            </span>
          </div>
        ))}
      </div>
      {metrics.length > 0 && (
        <div className="mt-3 flex items-center justify-between rounded-lg border border-gray-new-90 px-3 py-2.5">
          <Caption>{metrics[0].label}</Caption>
          <p className="font-title text-xl leading-none font-medium text-black-new">
            {metrics[0].value}
          </p>
        </div>
      )}
    </div>
  </Window>
);

/* --------------------------------------------------------------- register */

const RegisterScene = ({ label, rows, metrics }) => (
  <Window label={label}>
    <div className="p-4">
      <div className="flex items-baseline justify-between">
        <Caption>Register</Caption>
        <span className="font-mono text-[10px] text-gray-new-50">{rows.length} poster</span>
      </div>
      <table className="mt-3 w-full border-collapse">
        <tbody>
          {rows.slice(0, 5).map((row, index) => (
            <tr
              className="scene-in border-b border-gray-new-94 last:border-0"
              key={row}
              style={{ '--d': `${0.15 + index * 0.1}s` }}
            >
              <td className="py-2.5 pr-3 font-mono text-[10px] text-gray-new-60">
                #{String(index + 1).padStart(3, '0')}
              </td>
              <td className="w-full truncate py-2.5 pr-3 text-[11px] leading-none tracking-extra-tight text-gray-new-20">
                {row}
              </td>
              <td className="py-2.5 text-right">
                <span
                  className={cn(
                    'rounded-[3px] px-1.5 py-0.5 font-mono text-[9px]',
                    index % 3 === 2
                      ? 'bg-gray-new-94 text-gray-new-50'
                      : 'bg-green-45/12 text-[#0F8A5F]'
                  )}
                >
                  {index % 3 === 2 ? 'granskas' : 'klar'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {metrics.length > 0 && (
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-1">
          {metrics.slice(0, 2).map(({ value, label: metricLabel }) => (
            <div className="rounded-lg border border-gray-new-90 p-3" key={metricLabel}>
              <Caption>{metricLabel}</Caption>
              <p className="mt-1.5 font-title text-xl leading-none font-medium text-black-new">
                {value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  </Window>
);

/* ------------------------------------------------------------------- chat */

const CHAT_RESULTS = [
  'Gap-analys mot MSBFS klar',
  '12 kontroller kopplade',
  'Incidentrutin utkastad',
];

const CHAT_SOURCES = ['NIS2 art. 21', 'MSBFS 2025:2', 'Er kontrollstatus'];

const ChatScene = ({ label }) => (
  <Window label={label}>
    <div className="flex flex-col p-4">
      <span
        className="scene-in ml-auto max-w-[88%] rounded-lg bg-[#F3F2EC] px-3 py-2 text-[13px] leading-snug tracking-extra-tight text-gray-new-20"
        style={{ '--d': '0.2s' }}
      >
        Omfattas vi av NIS2, och vad behöver vi göra?
      </span>

      <span className="scene-in mt-4 block" style={{ '--d': '0.6s' }}>
        <span className="flex items-center gap-x-2">
          <span className="scene-pulse size-1.5 rounded-full bg-green-45" />
          <Caption>OptiTech AI</Caption>
        </span>
        <span className="mt-2.5 block text-[13px] leading-snug tracking-extra-tight text-gray-new-20">
          Ja, ni klassas som väsentlig entitet. Jag har gjort grundarbetet:
        </span>
      </span>

      <span className="mt-3 block space-y-2">
        {CHAT_RESULTS.map((text, index) => (
          <span
            className="scene-in flex items-center gap-x-2 text-xs tracking-extra-tight text-gray-new-20"
            key={text}
            style={{ '--d': `${1 + index * 0.25}s` }}
          >
            <svg className="size-3.5 shrink-0" viewBox="0 0 14 14" fill="none" aria-hidden>
              <circle cx="7" cy="7" r="7" fill="#00CC88" fillOpacity="0.16" />
              <path
                d="M4 7.2 6.1 9.3 10 5.4"
                stroke="#0F8A5F"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {text}
          </span>
        ))}
      </span>

      <span className="scene-in mt-4 block" style={{ '--d': '1.9s' }}>
        <Caption>Källor</Caption>
        <span className="mt-2 flex flex-wrap gap-1.5">
          {CHAT_SOURCES.map((source) => (
            <span
              className="rounded-[4px] border border-gray-new-90 px-2 py-1 font-mono text-[10px] leading-none text-gray-new-40"
              key={source}
            >
              {source}
            </span>
          ))}
        </span>
      </span>

      <span
        className="scene-in mt-4 flex items-center justify-between rounded-lg border border-gray-new-90 px-3 py-2.5"
        style={{ '--d': '2.2s' }}
      >
        <span className="flex items-center gap-x-2 font-mono text-xs text-gray-new-20">
          <svg className="size-3.5 shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M3 1.5h4L9.5 4v6a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1Z"
              stroke="#7E8389"
              strokeWidth="1"
            />
            <path d="M7 1.5V4h2.5" stroke="#7E8389" strokeWidth="1" />
          </svg>
          incident-rutin.md
        </span>
        <span className="text-[11px] tracking-extra-tight text-gray-new-50">utkast</span>
      </span>

      <span className="mt-4 flex items-center justify-between rounded-lg border border-gray-new-90 bg-[#FAFAF8] px-3 py-2.5">
        <span className="flex items-center text-xs tracking-extra-tight text-gray-new-50">
          Fråga OptiTech AI
          <span className="scene-caret ml-0.5 inline-block h-3 w-px bg-gray-new-50" />
        </span>
        <span className="flex size-5 items-center justify-center rounded-[4px] bg-green-45/15 text-[11px] leading-none text-[#0F8A5F]">
          ↑
        </span>
      </span>
    </div>
  </Window>
);

const sceneProps = {
  label: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.string),
  metrics: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
};

ConsoleScene.propTypes = sceneProps;
EvidenceScene.propTypes = sceneProps;
TimelineScene.propTypes = sceneProps;
MappingScene.propTypes = sceneProps;
RegisterScene.propTypes = sceneProps;
ChatScene.propTypes = sceneProps;

const SCENES = {
  console: ConsoleScene,
  evidence: EvidenceScene,
  timeline: TimelineScene,
  mapping: MappingScene,
  register: RegisterScene,
  orbit: OrbitScene,
  chat: ChatScene,
};

export const SCENE_NAMES = Object.keys(SCENES);

const Scene = ({ variant = 'console', label = null, rows = [], metrics = [] }) => {
  const Component = SCENES[variant] || ConsoleScene;
  return <Component label={label} rows={rows} metrics={metrics} />;
};

Scene.propTypes = {
  variant: PropTypes.oneOf(SCENE_NAMES),
  ...sceneProps,
};

export default Scene;
