'use client';

import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';

import { cn } from 'utils/cn';

// =============================================================================
// Evidence Collection — animated hero background
// -----------------------------------------------------------------------------
// A self-contained, code-driven ambient background that replaces the shared
// hero video. Everything here is transform/opacity based so it stays smooth,
// and every layer is disabled when the user prefers reduced motion.
//
// Layers, back to front:
//   1. Aurora blobs        — large blurred color fields that slowly drift
//   2. Conic halo          — a rotating conic-gradient ring, very faint
//   3. Dot grid            — a field of faint dots that twinkle
//   4. Source mesh          — nodes + edges, the systems evidence flows from
//   5. Signal dots          — pulses that travel along the mesh edges
//   6. Pulse rings          — concentric rings that expand and fade
//   7. Orbiting particles   — small motes circling the center
//   8. Rising motes         — particles that float upward and fade
//   9. Control pills        — status chips that gently drift
//  10. Floating badges      — framework chips that bob and drift
//  11. Sparkles             — tiny twinkling accents scattered around
//  12. Scan beam            — a soft vertical beam sweeping across
// =============================================================================

const reducedPropTypes = {
  reduced: PropTypes.bool.isRequired,
};

// -----------------------------------------------------------------------------
// Data — source mesh
// -----------------------------------------------------------------------------

// Nodes are the systems evidence flows from, positioned in percent of the canvas.
const FRAMEWORK_NODES = [
  {
    label: 'Microsoft 365',
    x: 12,
    y: 22,
    accent: 'bg-tc-purple',
    size: 9,
  },
  {
    label: 'Entra ID',
    x: 30,
    y: 12,
    accent: 'bg-tc-violet',
    size: 8,
  },
  {
    label: 'AWS',
    x: 52,
    y: 16,
    accent: 'bg-tc-green',
    size: 10,
  },
  {
    label: 'GitHub',
    x: 72,
    y: 13,
    accent: 'bg-tc-purple',
    size: 9,
  },
  {
    label: 'Google Workspace',
    x: 88,
    y: 27,
    accent: 'bg-tc-violet',
    size: 8,
  },
  {
    label: 'Okta',
    x: 91,
    y: 51,
    accent: 'bg-tc-green',
    size: 8,
  },
  {
    label: 'Fortnox',
    x: 83,
    y: 71,
    accent: 'bg-tc-purple',
    size: 9,
  },
  {
    label: 'BankID',
    x: 63,
    y: 80,
    accent: 'bg-tc-violet',
    size: 8,
  },
  {
    label: 'Slack',
    x: 44,
    y: 83,
    accent: 'bg-tc-green',
    size: 8,
  },
  {
    label: 'Jira',
    x: 24,
    y: 76,
    accent: 'bg-tc-purple',
    size: 9,
  },
  {
    label: 'Datadog',
    x: 9,
    y: 54,
    accent: 'bg-tc-violet',
    size: 8,
  },
  {
    label: 'Azure',
    x: 18,
    y: 38,
    accent: 'bg-tc-green',
    size: 9,
  },
];

// Edges connect node indices into a soft mesh.
const MESH_EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 0],
  [0, 2],
  [2, 4],
  [1, 11],
  [11, 9],
  [3, 6],
  [4, 6],
  [2, 8],
  [8, 10],
  [5, 7],
  [1, 3],
  [9, 11],
  [7, 9],
];

// Signals travel along a subset of edges; each entry is
// [fromNodeIndex, toNodeIndex, durationSeconds, delaySeconds, colorClass].
const SIGNAL_EDGES = [
  [0, 2, 3.6, 0.0, 'bg-tc-green'],
  [2, 4, 4.2, 0.6, 'bg-tc-violet'],
  [4, 6, 4.8, 1.2, 'bg-tc-purple'],
  [6, 8, 3.9, 0.3, 'bg-tc-green'],
  [8, 10, 4.4, 0.9, 'bg-tc-violet'],
  [10, 0, 5.1, 1.5, 'bg-tc-purple'],
  [1, 11, 4.0, 0.4, 'bg-tc-green'],
  [3, 6, 4.6, 1.1, 'bg-tc-violet'],
  [5, 7, 3.7, 0.8, 'bg-tc-purple'],
  [9, 11, 4.9, 0.2, 'bg-tc-green'],
];

// -----------------------------------------------------------------------------
// Data — aurora blobs
// -----------------------------------------------------------------------------

const AURORA_BLOBS = [
  {
    id: 'blob-lavender',
    className: 'bg-tc-lavender',
    size: 560,
    left: '2%',
    top: '0%',
    opacity: 0.85,
    dx: 44,
    dy: 28,
    scale: 1.08,
    duration: 19,
    delay: 0,
  },
  {
    id: 'blob-mint',
    className: 'bg-tc-mint',
    size: 500,
    left: '58%',
    top: '-8%',
    opacity: 0.72,
    dx: -48,
    dy: 38,
    scale: 1.12,
    duration: 23,
    delay: 1.2,
  },
  {
    id: 'blob-sand',
    className: 'bg-tc-sand-dark',
    size: 660,
    left: '26%',
    top: '32%',
    opacity: 0.7,
    dx: 34,
    dy: -36,
    scale: 1.06,
    duration: 27,
    delay: 0.6,
  },
  {
    id: 'blob-violet',
    className: 'bg-tc-violet-light',
    size: 380,
    left: '74%',
    top: '40%',
    opacity: 0.24,
    dx: -32,
    dy: -30,
    scale: 1.18,
    duration: 21,
    delay: 2.1,
  },
  {
    id: 'blob-sky',
    className: 'bg-tc-sky',
    size: 440,
    left: '8%',
    top: '50%',
    opacity: 0.5,
    dx: 30,
    dy: 34,
    scale: 1.1,
    duration: 25,
    delay: 1.7,
  },
  {
    id: 'blob-cream',
    className: 'bg-tc-cream',
    size: 520,
    left: '60%',
    top: '52%',
    opacity: 0.55,
    dx: -26,
    dy: -28,
    scale: 1.09,
    duration: 29,
    delay: 0.9,
  },
];

// -----------------------------------------------------------------------------
// Data — orbiting particles
// -----------------------------------------------------------------------------

const ORBIT_PARTICLES = [
  {
    radius: 120,
    size: 6,
    duration: 16,
    delay: 0.0,
    color: 'bg-tc-purple/60',
    reverse: false,
  },
  {
    radius: 120,
    size: 4,
    duration: 16,
    delay: 5.3,
    color: 'bg-tc-green/60',
    reverse: false,
  },
  {
    radius: 120,
    size: 5,
    duration: 16,
    delay: 10.6,
    color: 'bg-tc-violet/60',
    reverse: false,
  },
  {
    radius: 180,
    size: 7,
    duration: 22,
    delay: 0.0,
    color: 'bg-tc-teal/50',
    reverse: true,
  },
  {
    radius: 180,
    size: 4,
    duration: 22,
    delay: 7.3,
    color: 'bg-tc-purple/50',
    reverse: true,
  },
  {
    radius: 180,
    size: 5,
    duration: 22,
    delay: 14.6,
    color: 'bg-tc-green/50',
    reverse: true,
  },
  {
    radius: 250,
    size: 8,
    duration: 30,
    delay: 0.0,
    color: 'bg-tc-violet/40',
    reverse: false,
  },
  {
    radius: 250,
    size: 5,
    duration: 30,
    delay: 10,
    color: 'bg-tc-green/40',
    reverse: false,
  },
  {
    radius: 250,
    size: 6,
    duration: 30,
    delay: 20,
    color: 'bg-tc-purple/40',
    reverse: false,
  },
  {
    radius: 320,
    size: 5,
    duration: 38,
    delay: 0.0,
    color: 'bg-tc-teal/30',
    reverse: true,
  },
  {
    radius: 320,
    size: 7,
    duration: 38,
    delay: 12.6,
    color: 'bg-tc-violet/30',
    reverse: true,
  },
  {
    radius: 320,
    size: 4,
    duration: 38,
    delay: 25.3,
    color: 'bg-tc-green/30',
    reverse: true,
  },
];

// -----------------------------------------------------------------------------
// Data — floating framework badges
// -----------------------------------------------------------------------------

const FLOATING_BADGES = [
  {
    label: 'MFA status',
    sub: 'Entra ID · 2m',
    left: '14%',
    top: '30%',
    duration: 9,
    delay: 0.0,
    drift: 14,
    accent: 'text-tc-purple',
  },
  {
    label: 'Backup log',
    sub: 'AWS · 8m',
    left: '76%',
    top: '24%',
    duration: 11,
    delay: 0.8,
    drift: 18,
    accent: 'text-tc-violet',
  },
  {
    label: 'Access review',
    sub: 'M365 · 1m',
    left: '68%',
    top: '60%',
    duration: 10,
    delay: 1.4,
    drift: 12,
    accent: 'text-tc-green-text',
  },
  {
    label: 'Commit scan',
    sub: 'GitHub · 4m',
    left: '20%',
    top: '62%',
    duration: 12,
    delay: 0.4,
    drift: 16,
    accent: 'text-tc-purple',
  },
  {
    label: 'Invoice trail',
    sub: 'Fortnox · 6m',
    left: '46%',
    top: '38%',
    duration: 8,
    delay: 1.1,
    drift: 10,
    accent: 'text-tc-violet',
  },
];

// -----------------------------------------------------------------------------
// Data — rising motes
// -----------------------------------------------------------------------------

const RISING_MOTES = [
  { left: '6%', size: 4, duration: 14, delay: 0.0, drift: 12, color: 'bg-tc-green/50' },
  { left: '13%', size: 3, duration: 17, delay: 2.1, drift: -8, color: 'bg-tc-purple/50' },
  { left: '21%', size: 5, duration: 15, delay: 4.4, drift: 10, color: 'bg-tc-violet/50' },
  { left: '29%', size: 3, duration: 19, delay: 1.3, drift: -14, color: 'bg-tc-teal/50' },
  { left: '37%', size: 4, duration: 16, delay: 3.7, drift: 9, color: 'bg-tc-green/50' },
  { left: '45%', size: 6, duration: 13, delay: 0.9, drift: -11, color: 'bg-tc-purple/50' },
  { left: '53%', size: 3, duration: 18, delay: 5.2, drift: 13, color: 'bg-tc-violet/50' },
  { left: '61%', size: 4, duration: 15, delay: 2.6, drift: -9, color: 'bg-tc-teal/50' },
  { left: '69%', size: 5, duration: 17, delay: 4.0, drift: 7, color: 'bg-tc-green/50' },
  { left: '77%', size: 3, duration: 20, delay: 1.8, drift: -12, color: 'bg-tc-purple/50' },
  { left: '85%', size: 4, duration: 14, delay: 3.3, drift: 11, color: 'bg-tc-violet/50' },
  { left: '92%', size: 5, duration: 16, delay: 0.5, drift: -6, color: 'bg-tc-teal/50' },
  { left: '10%', size: 3, duration: 21, delay: 6.1, drift: 8, color: 'bg-tc-green/40' },
  { left: '34%', size: 4, duration: 19, delay: 7.4, drift: -10, color: 'bg-tc-purple/40' },
  { left: '58%', size: 3, duration: 22, delay: 5.9, drift: 14, color: 'bg-tc-violet/40' },
  { left: '81%', size: 5, duration: 18, delay: 6.7, drift: -7, color: 'bg-tc-teal/40' },
];

// -----------------------------------------------------------------------------
// Data — pulse rings
// -----------------------------------------------------------------------------

const PULSE_RINGS = [
  { size: 220, duration: 7, delay: 0.0, className: 'border-tc-purple/25' },
  { size: 220, duration: 7, delay: 2.3, className: 'border-tc-green/25' },
  { size: 220, duration: 7, delay: 4.6, className: 'border-tc-violet/25' },
  { size: 220, duration: 7, delay: 1.15, className: 'border-tc-teal/20' },
  { size: 220, duration: 7, delay: 3.45, className: 'border-tc-purple/20' },
];

// -----------------------------------------------------------------------------
// Data — control status pills
// -----------------------------------------------------------------------------

const CONTROL_PILLS = [
  {
    name: 'MFA enforced',
    left: '10%',
    top: '16%',
    duration: 9,
    delay: 0.0,
    drift: 10,
  },
  {
    name: 'Encryption at rest',
    left: '80%',
    top: '46%',
    duration: 11,
    delay: 1.2,
    drift: 14,
  },
  {
    name: 'Access reviews',
    left: '58%',
    top: '74%',
    duration: 10,
    delay: 0.6,
    drift: 12,
  },
  {
    name: 'Backup testing',
    left: '30%',
    top: '48%',
    duration: 12,
    delay: 1.8,
    drift: 8,
  },
];

// -----------------------------------------------------------------------------
// Data — sparkles
// -----------------------------------------------------------------------------

const SPARKLES = [
  { left: '8%', top: '18%', size: 3, duration: 3.2, delay: 0.0 },
  { left: '17%', top: '44%', size: 2, duration: 2.8, delay: 0.5 },
  { left: '23%', top: '28%', size: 4, duration: 3.6, delay: 1.1 },
  { left: '31%', top: '58%', size: 2, duration: 2.6, delay: 0.3 },
  { left: '39%', top: '22%', size: 3, duration: 3.1, delay: 1.4 },
  { left: '46%', top: '50%', size: 2, duration: 2.9, delay: 0.8 },
  { left: '53%', top: '30%', size: 4, duration: 3.5, delay: 0.2 },
  { left: '61%', top: '54%', size: 2, duration: 2.7, delay: 1.2 },
  { left: '68%', top: '20%', size: 3, duration: 3.3, delay: 0.6 },
  { left: '75%', top: '48%', size: 2, duration: 2.5, delay: 1.5 },
  { left: '82%', top: '32%', size: 4, duration: 3.4, delay: 0.4 },
  { left: '89%', top: '56%', size: 2, duration: 2.8, delay: 1.0 },
  { left: '12%', top: '66%', size: 3, duration: 3.0, delay: 0.9 },
  { left: '28%', top: '72%', size: 2, duration: 2.6, delay: 0.1 },
  { left: '44%', top: '68%', size: 3, duration: 3.2, delay: 1.3 },
  { left: '64%', top: '70%', size: 2, duration: 2.9, delay: 0.7 },
  { left: '84%', top: '68%', size: 3, duration: 3.5, delay: 0.5 },
  { left: '94%', top: '40%', size: 2, duration: 2.7, delay: 1.1 },
  { left: '4%', top: '34%', size: 3, duration: 3.1, delay: 0.8 },
  { left: '50%', top: '12%', size: 2, duration: 2.6, delay: 0.2 },
  { left: '36%', top: '40%', size: 3, duration: 3.3, delay: 1.4 },
  { left: '72%', top: '38%', size: 2, duration: 2.8, delay: 0.6 },
  { left: '20%', top: '54%', size: 3, duration: 3.0, delay: 1.0 },
  { left: '58%', top: '44%', size: 2, duration: 2.5, delay: 0.3 },
];

// -----------------------------------------------------------------------------
// Layer — aurora blobs
// -----------------------------------------------------------------------------

const AuroraLayer = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    {AURORA_BLOBS.map((blob) => (
      <m.span
        className={cn('absolute rounded-full blur-[90px]', blob.className)}
        style={{
          width: blob.size,
          height: blob.size,
          left: blob.left,
          top: blob.top,
          opacity: blob.opacity,
        }}
        animate={
          reduced
            ? undefined
            : {
                x: [0, blob.dx, 0, -blob.dx * 0.5, 0],
                y: [0, blob.dy, -blob.dy * 0.5, blob.dy * 0.25, 0],
                scale: [1, blob.scale, 1, blob.scale * 0.97, 1],
              }
        }
        transition={{
          duration: blob.duration,
          delay: blob.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        key={blob.id}
      />
    ))}
  </div>
);

AuroraLayer.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer — rotating conic halo
// -----------------------------------------------------------------------------

const ConicHalo = ({ reduced }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden>
    <m.div
      className="aspect-square w-[820px] rounded-full opacity-[0.14] blur-2xl lg:w-[620px] md:w-[440px]"
      style={{
        background:
          'conic-gradient(from 0deg, #8257DE, #2FBE71, #00E5BF, #6C4BD4, #8B75D6, #8257DE)',
      }}
      animate={reduced ? undefined : { rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

ConicHalo.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer — twinkling dot grid
// -----------------------------------------------------------------------------

const DOT_GRID_COLUMNS = 14;
const DOT_GRID_ROWS = 8;

const DotGrid = ({ reduced }) => {
  const dots = [];

  for (let row = 0; row < DOT_GRID_ROWS; row += 1) {
    for (let col = 0; col < DOT_GRID_COLUMNS; col += 1) {
      const left = ((col + 0.5) / DOT_GRID_COLUMNS) * 100;
      const top = ((row + 0.5) / DOT_GRID_ROWS) * 100;
      const delay = ((row * DOT_GRID_COLUMNS + col) % 12) * 0.35;

      dots.push(
        <m.span
          className="absolute size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tc-border-dark"
          style={{ left: `${left}%`, top: `${top}%` }}
          animate={reduced ? undefined : { opacity: [0.15, 0.5, 0.15], scale: [0.8, 1.15, 0.8] }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          key={`dot-${row}-${col}`}
        />
      );
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden opacity-70" aria-hidden>
      {dots}
    </div>
  );
};

DotGrid.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer — framework mesh (edges + nodes)
// -----------------------------------------------------------------------------

const MeshLayer = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    {/* Edges */}
    <svg
      className="absolute inset-0 size-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {MESH_EDGES.map(([from, to], index) => {
        const a = FRAMEWORK_NODES[from];
        const b = FRAMEWORK_NODES[to];

        return (
          <m.line
            className="stroke-tc-border-dark"
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            animate={reduced ? undefined : { opacity: [0.25, 0.6, 0.25] }}
            transition={{
              duration: 6,
              delay: (index % 8) * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            key={`edge-${from}-${to}`}
          />
        );
      })}
    </svg>

    {/* Nodes */}
    {FRAMEWORK_NODES.map((node, index) => (
      <m.span
        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-x-1.5 whitespace-nowrap"
        style={{ left: `${node.x}%`, top: `${node.y}%` }}
        animate={
          reduced
            ? undefined
            : {
                x: [0, index % 2 === 0 ? 6 : -6, 0],
                y: [0, index % 3 === 0 ? -5 : 5, 0],
              }
        }
        transition={{
          duration: 8 + (index % 5),
          delay: (index % 6) * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        key={node.label}
      >
        <m.span
          className={cn('rounded-full', node.accent)}
          style={{ width: node.size, height: node.size }}
          animate={reduced ? undefined : { scale: [1, 1.35, 1], opacity: [0.55, 1, 0.55] }}
          transition={{
            duration: 3 + (index % 4),
            delay: (index % 5) * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <span className="text-[11px] font-medium tracking-wide text-tc-faint md:hidden">
          {node.label}
        </span>
      </m.span>
    ))}
  </div>
);

MeshLayer.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer — signal dots traveling along edges
// -----------------------------------------------------------------------------

const SignalLayer = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    {SIGNAL_EDGES.map(([from, to, duration, delay, color], index) => {
      const a = FRAMEWORK_NODES[from];
      const b = FRAMEWORK_NODES[to];

      if (reduced) {
        return (
          <span
            className={cn('absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full', color)}
            style={{ left: `${a.x}%`, top: `${a.y}%`, opacity: 0.5 }}
            key={`signal-${from}-${to}-${index}`}
          />
        );
      }

      return (
        <m.span
          className={cn(
            'absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_8px_currentColor]',
            color
          )}
          animate={{
            left: [`${a.x}%`, `${b.x}%`],
            top: [`${a.y}%`, `${b.y}%`],
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.15, 0.85, 1],
          }}
          key={`signal-${from}-${to}-${index}`}
        />
      );
    })}
  </div>
);

SignalLayer.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer — floating framework badges
// -----------------------------------------------------------------------------

const CheckSeal = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 20 22" fill="none" aria-hidden>
    <path
      d="M10 1.5 18 4.4v5.2c0 5-3.3 8.6-8 10.4-4.7-1.8-8-5.4-8-10.4V4.4L10 1.5Z"
      fill="currentColor"
    />
    <path
      d="m6.6 10.6 2.3 2.4 4.5-5"
      stroke="#fff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

CheckSeal.propTypes = {
  className: PropTypes.string,
};

const FloatingBadges = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden md:hidden" aria-hidden>
    {FLOATING_BADGES.map((badge) => (
      <m.span
        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-x-2 rounded-full bg-white/70 px-3 py-1.5 shadow-[0_10px_30px_-12px_rgba(23,17,46,0.35)] ring-1 ring-black-pure/5 backdrop-blur-sm"
        style={{ left: badge.left, top: badge.top }}
        animate={
          reduced
            ? undefined
            : {
                y: [0, -badge.drift, 0, badge.drift * 0.5, 0],
                x: [0, badge.drift * 0.4, 0, -badge.drift * 0.3, 0],
                rotate: [0, 1.5, 0, -1.5, 0],
              }
        }
        transition={{
          duration: badge.duration,
          delay: badge.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        key={badge.label}
      >
        <CheckSeal className={badge.accent} />
        <span className="flex flex-col leading-tight">
          <span className="text-xs font-semibold tracking-extra-tight text-tc-ink">
            {badge.label}
          </span>
          <span className="text-[10px] text-tc-faint">{badge.sub}</span>
        </span>
      </m.span>
    ))}
  </div>
);

FloatingBadges.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer — orbiting particles
// -----------------------------------------------------------------------------

const OrbitLayer = ({ reduced }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden>
    {ORBIT_PARTICLES.map((particle, index) => (
      <m.div
        className="absolute"
        style={{ width: particle.radius * 2, height: particle.radius * 2 }}
        animate={reduced ? undefined : { rotate: particle.reverse ? -360 : 360 }}
        transition={{
          duration: particle.duration,
          delay: particle.delay,
          repeat: Infinity,
          ease: 'linear',
        }}
        key={`orbit-${particle.radius}-${index}`}
      >
        <m.span
          className={cn('absolute top-0 left-1/2 -translate-x-1/2 rounded-full', particle.color)}
          style={{ width: particle.size, height: particle.size }}
          animate={reduced ? undefined : { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </m.div>
    ))}
  </div>
);

OrbitLayer.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer — rising motes
// -----------------------------------------------------------------------------

const RisingMotes = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    {RISING_MOTES.map((mote, index) => (
      <m.span
        className={cn('absolute bottom-0 rounded-full', mote.color)}
        style={{ left: mote.left, width: mote.size, height: mote.size }}
        animate={
          reduced
            ? undefined
            : {
                y: [0, -420],
                x: [0, mote.drift, 0, mote.drift * -0.6, 0],
                opacity: [0, 0.8, 0.8, 0],
                scale: [0.6, 1, 1, 0.4],
              }
        }
        transition={{
          duration: mote.duration,
          delay: mote.delay,
          repeat: Infinity,
          ease: 'easeOut',
          times: [0, 0.2, 0.8, 1],
        }}
        key={`mote-${mote.left}-${index}`}
      />
    ))}
  </div>
);

RisingMotes.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer — pulse rings
// -----------------------------------------------------------------------------

const PulseRings = ({ reduced }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden>
    {PULSE_RINGS.map((ring, index) => (
      <m.span
        className={cn('absolute rounded-full border', ring.className)}
        style={{ width: ring.size, height: ring.size }}
        animate={reduced ? undefined : { scale: [0.4, 2.4], opacity: [0.5, 0] }}
        transition={{
          duration: ring.duration,
          delay: ring.delay,
          repeat: Infinity,
          ease: 'easeOut',
        }}
        key={`ring-${index}`}
      />
    ))}
  </div>
);

PulseRings.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer — control status pills
// -----------------------------------------------------------------------------

const ControlPills = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden md:hidden" aria-hidden>
    {CONTROL_PILLS.map((pill) => (
      <m.span
        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-x-2 rounded-lg bg-white/60 px-2.5 py-1 text-[11px] font-medium text-tc-ink-light shadow-[0_8px_24px_-14px_rgba(23,17,46,0.4)] ring-1 ring-black-pure/5 backdrop-blur-sm"
        style={{ left: pill.left, top: pill.top }}
        animate={
          reduced
            ? undefined
            : {
                y: [0, -pill.drift, 0, pill.drift * 0.5, 0],
                x: [0, pill.drift * 0.3, 0, -pill.drift * 0.2, 0],
              }
        }
        transition={{
          duration: pill.duration,
          delay: pill.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        key={pill.name}
      >
        <m.span
          className="size-2 rounded-full bg-tc-green"
          animate={reduced ? undefined : { opacity: [1, 0.35, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {pill.name}
      </m.span>
    ))}
  </div>
);

ControlPills.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer — scan beam
// -----------------------------------------------------------------------------

const ScanBeam = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    <m.div
      className="absolute -top-1/4 h-[150%] w-40 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-2xl"
      animate={reduced ? undefined : { left: ['-20%', '120%'] }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatDelay: 3,
      }}
    />
  </div>
);

ScanBeam.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer — sparkles
// -----------------------------------------------------------------------------

const Sparkles = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    {SPARKLES.map((sparkle, index) => (
      <m.span
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-tc-ink/30"
        style={{ left: sparkle.left, top: sparkle.top, width: sparkle.size, height: sparkle.size }}
        animate={reduced ? undefined : { opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
        transition={{
          duration: sparkle.duration,
          delay: sparkle.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        key={`sparkle-${index}`}
      />
    ))}
  </div>
);

Sparkles.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Root component
// -----------------------------------------------------------------------------

const AnimatedBackground = () => {
  const shouldReduceMotion = useReducedMotion();
  const reduced = Boolean(shouldReduceMotion);

  return (
    <LazyMotion features={domAnimation}>
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <AuroraLayer reduced={reduced} />
        <ConicHalo reduced={reduced} />
        <DotGrid reduced={reduced} />
        <MeshLayer reduced={reduced} />
        <SignalLayer reduced={reduced} />
        <PulseRings reduced={reduced} />
        <OrbitLayer reduced={reduced} />
        <RisingMotes reduced={reduced} />
        <ControlPills reduced={reduced} />
        <FloatingBadges reduced={reduced} />
        <Sparkles reduced={reduced} />
        <ScanBeam reduced={reduced} />

        {/* Soft top-to-bottom wash keeps the hero text legible over the motion. */}
        <div className="absolute inset-0 bg-gradient-to-b from-tc-sand/30 via-transparent to-tc-sand/50" />
      </div>
    </LazyMotion>
  );
};

export default AnimatedBackground;
