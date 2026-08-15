'use client';

import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';

// =============================================================================
// Gap Analysis — "Galaxy Waves" animated hero background
// -----------------------------------------------------------------------------
// A one-of-a-kind cosmic backdrop built entirely in code: procedurally seeded
// star fields, drifting nebulae, a rotating spiral galaxy, flowing wave bands,
// orbiting bodies, comets, meteor showers, constellations, aurora ribbons and
// cosmic dust. Every position is generated from a deterministic pseudo-random
// generator so the server and client render byte-for-byte identical markup
// (no hydration mismatch), while still producing a dense, hard-to-replicate
// composition. All motion is transform/opacity based and every layer freezes
// when the visitor prefers reduced motion.
//
// Layer order, back to front:
//    1. Deep-space wash          static base gradient
//    2. Nebula clouds            large blurred color fields, slow drift
//    3. Shimmer veil             a very faint rotating conic sheen
//    4. Far star field           tiny dim stars, slow parallax
//    5. Mid star field           medium stars, twinkle + parallax
//    6. Near star field          bright stars, strong twinkle
//    7. Cosmic dust              drifting motes on long diagonals
//    8. Aurora ribbons           translucent wave ribbons that flow sideways
//    9. Wave bands               stacked sine bands flowing at the base
//   10. Spiral galaxy            rotating logarithmic-spiral particle arms
//   11. Galaxy core              pulsing radial core + expanding rings
//   12. Orbiting bodies          planets circling the core on tilted rings
//   13. Constellations           faint linked stars with framework labels
//   14. Comets                   slow streaks crossing the field
//   15. Meteor shower            fast diagonal streaks in bursts
//   16. Legibility wash          soft vignette so hero text stays readable
// =============================================================================

const reducedPropTypes = {
  reduced: PropTypes.bool.isRequired,
};

// -----------------------------------------------------------------------------
// Deterministic pseudo-random generator (Park–Miller LCG, no bitwise ops).
// The same seed always yields the same sequence, so generated layouts are
// stable across server and client renders.
// -----------------------------------------------------------------------------

const createRng = (seed) => {
  let state = seed % 2147483647;

  if (state <= 0) {
    state += 2147483646;
  }

  return () => {
    state = (state * 16807) % 2147483647;

    return (state - 1) / 2147483646;
  };
};

// Round to keep generated markup compact and deterministic.
const round = (value, places = 3) => {
  const factor = 10 ** places;

  return Math.round(value * factor) / factor;
};

// Linear interpolation between two numbers.
const lerp = (from, to, amount) => from + (to - from) * amount;

// Pick a value from a list using a 0..1 sample.
const pick = (list, sample) => list[Math.floor(sample * list.length) % list.length];

// -----------------------------------------------------------------------------
// Cosmic palette — inline hex so the galaxy keeps its own identity, separate
// from the compliance `tc-*` tokens used elsewhere on the page.
// -----------------------------------------------------------------------------

const COSMIC = {
  void: '#060213',
  deep: '#0B0620',
  indigo: '#1B1150',
  violet: '#6C4BD4',
  violetSoft: '#8257DE',
  purple: '#4B2E8F',
  magenta: '#B14BD8',
  pink: '#E06AC7',
  teal: '#00E5BF',
  aqua: '#38D6F0',
  blue: '#2E5FA3',
  gold: '#F5C36B',
  white: '#F5F3FF',
  ice: '#DCE7FF',
};

const STAR_TINTS = [
  COSMIC.white,
  COSMIC.ice,
  COSMIC.aqua,
  COSMIC.violetSoft,
  COSMIC.gold,
  COSMIC.pink,
];

// -----------------------------------------------------------------------------
// Generators
// -----------------------------------------------------------------------------

// Build a star field spread across the whole canvas (positions in percent).
const buildStars = (seed, count, options) => {
  const rng = createRng(seed);
  const stars = [];

  for (let index = 0; index < count; index += 1) {
    const twinkle = rng();

    stars.push({
      id: `${seed}-${index}`,
      left: round(rng() * 100),
      top: round(rng() * 100),
      size: round(lerp(options.sizeMin, options.sizeMax, rng()), 2),
      base: round(lerp(options.baseMin, options.baseMax, rng()), 2),
      duration: round(lerp(options.durMin, options.durMax, twinkle), 2),
      delay: round(rng() * options.delaySpread, 2),
      tint: pick(STAR_TINTS, rng()),
    });
  }

  return stars;
};

// Build a logarithmic-spiral galaxy from several arms of particles.
// Coordinates are pixel offsets inside a square container of `field` px.
const buildSpiral = (seed, options) => {
  const rng = createRng(seed);
  const center = options.field / 2;
  const points = [];

  for (let arm = 0; arm < options.arms; arm += 1) {
    const armPhase = (arm / options.arms) * Math.PI * 2;

    for (let step = 0; step < options.perArm; step += 1) {
      const t = step / options.perArm;
      const radius = lerp(options.radiusInner, options.radiusOuter, t);
      const swirl = armPhase + t * options.turns * Math.PI * 2;
      const jitter = (rng() - 0.5) * options.jitter;
      const wobble = (rng() - 0.5) * options.spread * radius * 0.02;
      const angle = swirl + jitter;
      const distance = radius + wobble;

      points.push({
        id: `${seed}-${arm}-${step}`,
        left: round(center + Math.cos(angle) * distance, 2),
        top: round(center + Math.sin(angle) * distance * options.flatten, 2),
        size: round(lerp(options.sizeOuter, options.sizeInner, t), 2),
        opacity: round(lerp(options.opacityOuter, options.opacityInner, t), 3),
        tint: pick(STAR_TINTS, rng()),
        twinkleDuration: round(lerp(2.4, 5.6, rng()), 2),
        twinkleDelay: round(rng() * 4, 2),
      });
    }
  }

  return { points, center };
};

// Build a field of drifting cosmic dust motes.
const buildDust = (seed, count, options) => {
  const rng = createRng(seed);
  const motes = [];

  for (let index = 0; index < count; index += 1) {
    const angle = rng() * Math.PI * 2;
    const travel = lerp(options.travelMin, options.travelMax, rng());

    motes.push({
      id: `${seed}-${index}`,
      left: round(rng() * 100),
      top: round(rng() * 100),
      size: round(lerp(options.sizeMin, options.sizeMax, rng()), 2),
      dx: round(Math.cos(angle) * travel, 2),
      dy: round(Math.sin(angle) * travel, 2),
      duration: round(lerp(options.durMin, options.durMax, rng()), 2),
      delay: round(rng() * options.delaySpread, 2),
      opacity: round(lerp(0.2, 0.7, rng()), 3),
      tint: pick(STAR_TINTS, rng()),
    });
  }

  return motes;
};

// Build a seamless sine wave area path across a 0..200 canvas.
// Even `cycles` guarantee the pattern tiles cleanly for an infinite scroll.
const buildWavePath = (cycles, amplitude, baseline) => {
  const width = 200;
  const steps = cycles * 28;
  let path = `M0 ${round(baseline, 2)}`;

  for (let step = 1; step <= steps; step += 1) {
    const x = (step / steps) * width;
    const y = baseline + Math.sin((step / steps) * cycles * Math.PI * 2) * amplitude;

    path += ` L${round(x, 2)} ${round(y, 2)}`;
  }

  path += ' L200 100 L0 100 Z';

  return path;
};

// Build a seamless sine stroke path (open) for aurora ribbons.
const buildRibbonPath = (cycles, amplitude, baseline) => {
  const width = 200;
  const steps = cycles * 28;
  let path = `M0 ${round(baseline, 2)}`;

  for (let step = 1; step <= steps; step += 1) {
    const x = (step / steps) * width;
    const y = baseline + Math.sin((step / steps) * cycles * Math.PI * 2) * amplitude;

    path += ` L${round(x, 2)} ${round(y, 2)}`;
  }

  return path;
};

// -----------------------------------------------------------------------------
// Generated datasets (module scope → computed once, deterministic)
// -----------------------------------------------------------------------------

const STARS_FAR = buildStars(10007, 120, {
  sizeMin: 0.6,
  sizeMax: 1.4,
  baseMin: 0.25,
  baseMax: 0.55,
  durMin: 4.5,
  durMax: 9,
  delaySpread: 8,
});

const STARS_MID = buildStars(20011, 80, {
  sizeMin: 1,
  sizeMax: 2.2,
  baseMin: 0.4,
  baseMax: 0.8,
  durMin: 3,
  durMax: 6.5,
  delaySpread: 6,
});

const STARS_NEAR = buildStars(30013, 44, {
  sizeMin: 1.8,
  sizeMax: 3.4,
  baseMin: 0.6,
  baseMax: 1,
  durMin: 2,
  durMax: 4.5,
  delaySpread: 4,
});

const SPIRAL_FIELD = 760;

const SPIRAL = buildSpiral(40507, {
  field: SPIRAL_FIELD,
  arms: 4,
  perArm: 90,
  turns: 1.15,
  radiusInner: 26,
  radiusOuter: 360,
  jitter: 0.22,
  spread: 6,
  flatten: 0.62,
  sizeInner: 3.4,
  sizeOuter: 1.1,
  opacityInner: 0.95,
  opacityOuter: 0.18,
});

const COSMIC_DUST = buildDust(50021, 60, {
  sizeMin: 1,
  sizeMax: 2.6,
  travelMin: 40,
  travelMax: 130,
  durMin: 16,
  durMax: 34,
  delaySpread: 10,
});

// -----------------------------------------------------------------------------
// Hardcoded configs
// -----------------------------------------------------------------------------

// Nebula clouds — big blurred radial fields drifting behind the stars.
const NEBULAE = [
  {
    id: 'neb-violet',
    color: COSMIC.violet,
    size: 640,
    left: '6%',
    top: '-6%',
    opacity: 0.42,
    blur: 120,
    dx: 46,
    dy: 30,
    scale: 1.12,
    duration: 26,
    delay: 0,
  },
  {
    id: 'neb-magenta',
    color: COSMIC.magenta,
    size: 520,
    left: '58%',
    top: '-10%',
    opacity: 0.3,
    blur: 130,
    dx: -52,
    dy: 40,
    scale: 1.16,
    duration: 30,
    delay: 1.6,
  },
  {
    id: 'neb-teal',
    color: COSMIC.teal,
    size: 560,
    left: '70%',
    top: '38%',
    opacity: 0.22,
    blur: 140,
    dx: -38,
    dy: -34,
    scale: 1.2,
    duration: 34,
    delay: 0.8,
  },
  {
    id: 'neb-blue',
    color: COSMIC.blue,
    size: 600,
    left: '18%',
    top: '44%',
    opacity: 0.34,
    blur: 130,
    dx: 40,
    dy: -30,
    scale: 1.1,
    duration: 32,
    delay: 2.4,
  },
  {
    id: 'neb-pink',
    color: COSMIC.pink,
    size: 420,
    left: '40%',
    top: '20%',
    opacity: 0.2,
    blur: 120,
    dx: 30,
    dy: 36,
    scale: 1.24,
    duration: 28,
    delay: 1.1,
  },
  {
    id: 'neb-indigo',
    color: COSMIC.indigo,
    size: 720,
    left: '30%',
    top: '10%',
    opacity: 0.5,
    blur: 150,
    dx: -26,
    dy: 24,
    scale: 1.08,
    duration: 38,
    delay: 0.4,
  },
];

// Wave bands — stacked flowing sine areas at the base of the hero.
const WAVE_BANDS = [
  {
    id: 'wave-1',
    cycles: 2,
    amplitude: 7,
    baseline: 64,
    height: '46%',
    color: 'rgba(108,75,212,0.28)',
    duration: 26,
    direction: 1,
    sway: 6,
    swayDuration: 12,
  },
  {
    id: 'wave-2',
    cycles: 4,
    amplitude: 5,
    baseline: 70,
    height: '40%',
    color: 'rgba(56,214,240,0.16)',
    duration: 20,
    direction: -1,
    sway: 5,
    swayDuration: 10,
  },
  {
    id: 'wave-3',
    cycles: 2,
    amplitude: 9,
    baseline: 76,
    height: '34%',
    color: 'rgba(177,75,216,0.2)',
    duration: 30,
    direction: 1,
    sway: 7,
    swayDuration: 14,
  },
  {
    id: 'wave-4',
    cycles: 6,
    amplitude: 4,
    baseline: 82,
    height: '28%',
    color: 'rgba(0,229,191,0.14)',
    duration: 16,
    direction: -1,
    sway: 4,
    swayDuration: 9,
  },
  {
    id: 'wave-5',
    cycles: 4,
    amplitude: 6,
    baseline: 88,
    height: '22%',
    color: 'rgba(46,95,163,0.26)',
    duration: 22,
    direction: 1,
    sway: 5,
    swayDuration: 11,
  },
  {
    id: 'wave-6',
    cycles: 2,
    amplitude: 5,
    baseline: 93,
    height: '16%',
    color: 'rgba(27,17,80,0.5)',
    duration: 34,
    direction: -1,
    sway: 3,
    swayDuration: 13,
  },
];

// Aurora ribbons — translucent stroked waves that slide sideways.
const AURORA_RIBBONS = [
  {
    id: 'ribbon-1',
    cycles: 2,
    amplitude: 10,
    baseline: 30,
    color: COSMIC.teal,
    width: 2.4,
    opacity: 0.22,
    duration: 30,
    direction: 1,
    bob: 8,
    bobDuration: 12,
  },
  {
    id: 'ribbon-2',
    cycles: 4,
    amplitude: 7,
    baseline: 42,
    color: COSMIC.violetSoft,
    width: 2,
    opacity: 0.18,
    duration: 24,
    direction: -1,
    bob: 6,
    bobDuration: 10,
  },
  {
    id: 'ribbon-3',
    cycles: 2,
    amplitude: 12,
    baseline: 52,
    color: COSMIC.pink,
    width: 1.6,
    opacity: 0.14,
    duration: 36,
    direction: 1,
    bob: 10,
    bobDuration: 15,
  },
  {
    id: 'ribbon-4',
    cycles: 6,
    amplitude: 5,
    baseline: 24,
    color: COSMIC.aqua,
    width: 1.4,
    opacity: 0.16,
    duration: 20,
    direction: -1,
    bob: 5,
    bobDuration: 9,
  },
];

// Orbiting bodies — planets circling the core on tilted rings.
const ORBIT_BODIES = [
  {
    id: 'orbit-1',
    radius: 150,
    tilt: 18,
    size: 12,
    color: COSMIC.teal,
    glow: 'rgba(0,229,191,0.6)',
    duration: 26,
    delay: 0,
    reverse: false,
    hasRing: false,
  },
  {
    id: 'orbit-2',
    radius: 210,
    tilt: -12,
    size: 9,
    color: COSMIC.pink,
    glow: 'rgba(224,106,199,0.6)',
    duration: 34,
    delay: 4,
    reverse: true,
    hasRing: true,
  },
  {
    id: 'orbit-3',
    radius: 270,
    tilt: 24,
    size: 14,
    color: COSMIC.gold,
    glow: 'rgba(245,195,107,0.55)',
    duration: 44,
    delay: 2,
    reverse: false,
    hasRing: true,
  },
  {
    id: 'orbit-4',
    radius: 330,
    tilt: -20,
    size: 7,
    color: COSMIC.aqua,
    glow: 'rgba(56,214,240,0.6)',
    duration: 52,
    delay: 6,
    reverse: true,
    hasRing: false,
  },
  {
    id: 'orbit-5',
    radius: 390,
    tilt: 8,
    size: 10,
    color: COSMIC.violetSoft,
    glow: 'rgba(130,87,222,0.6)',
    duration: 62,
    delay: 1,
    reverse: false,
    hasRing: false,
  },
];

// Expanding rings pulsing out from the galaxy core.
const CORE_RINGS = [
  { id: 'core-ring-1', color: 'rgba(0,229,191,0.4)', size: 120, duration: 8, delay: 0 },
  { id: 'core-ring-2', color: 'rgba(130,87,222,0.4)', size: 120, duration: 8, delay: 2 },
  { id: 'core-ring-3', color: 'rgba(224,106,199,0.35)', size: 120, duration: 8, delay: 4 },
  { id: 'core-ring-4', color: 'rgba(56,214,240,0.3)', size: 120, duration: 8, delay: 6 },
];

// Constellations — a few framework "star signs" drawn faintly over the field.
// Points are in percent of the canvas; edges link point indices.
const CONSTELLATIONS = [
  {
    id: 'con-nis2',
    label: 'NIS2',
    labelAt: 1,
    points: [
      { x: 8, y: 20 },
      { x: 14, y: 14 },
      { x: 20, y: 22 },
      { x: 17, y: 30 },
      { x: 11, y: 28 },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
    ],
  },
  {
    id: 'con-iso',
    label: 'ISO 27001',
    labelAt: 2,
    points: [
      { x: 78, y: 16 },
      { x: 84, y: 22 },
      { x: 90, y: 18 },
      { x: 86, y: 28 },
      { x: 80, y: 26 },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 4],
      [4, 0],
    ],
  },
  {
    id: 'con-gdpr',
    label: 'GDPR',
    labelAt: 0,
    points: [
      { x: 70, y: 66 },
      { x: 76, y: 72 },
      { x: 82, y: 68 },
      { x: 79, y: 78 },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [1, 3],
    ],
  },
  {
    id: 'con-dora',
    label: 'DORA',
    labelAt: 3,
    points: [
      { x: 16, y: 66 },
      { x: 22, y: 62 },
      { x: 26, y: 70 },
      { x: 20, y: 76 },
      { x: 13, y: 72 },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
      [0, 2],
    ],
  },
];

// Comets — slow luminous streaks crossing the whole field.
const COMETS = [
  {
    id: 'comet-1',
    fromX: '-12%',
    fromY: '10%',
    toX: '116%',
    toY: '52%',
    angle: 24,
    length: 200,
    color: COSMIC.aqua,
    duration: 9,
    delay: 1.5,
    repeatDelay: 11,
  },
  {
    id: 'comet-2',
    fromX: '116%',
    fromY: '24%',
    toX: '-14%',
    toY: '70%',
    angle: -20,
    length: 240,
    color: COSMIC.pink,
    duration: 11,
    delay: 6,
    repeatDelay: 15,
  },
  {
    id: 'comet-3',
    fromX: '-10%',
    fromY: '64%',
    toX: '118%',
    toY: '18%',
    angle: -28,
    length: 180,
    color: COSMIC.gold,
    duration: 8,
    delay: 3.5,
    repeatDelay: 13,
  },
];

// Meteor shower — short fast streaks that fall in staggered bursts.
const METEORS = [
  { id: 'met-1', left: '12%', duration: 1.6, delay: 0.0, repeatDelay: 7, length: 90 },
  { id: 'met-2', left: '24%', duration: 1.3, delay: 2.1, repeatDelay: 9, length: 70 },
  { id: 'met-3', left: '38%', duration: 1.8, delay: 4.4, repeatDelay: 8, length: 110 },
  { id: 'met-4', left: '52%', duration: 1.4, delay: 1.2, repeatDelay: 10, length: 80 },
  { id: 'met-5', left: '66%', duration: 1.7, delay: 3.6, repeatDelay: 7.5, length: 100 },
  { id: 'met-6', left: '78%', duration: 1.2, delay: 5.0, repeatDelay: 11, length: 68 },
  { id: 'met-7', left: '88%', duration: 1.9, delay: 2.7, repeatDelay: 9.5, length: 120 },
];

// -----------------------------------------------------------------------------
// Layer 1 — deep-space wash
// -----------------------------------------------------------------------------

const DeepSpaceWash = () => (
  <div
    className="absolute inset-0"
    style={{
      background: `radial-gradient(130% 90% at 50% 8%, ${COSMIC.indigo} 0%, ${COSMIC.deep} 42%, ${COSMIC.void} 100%)`,
    }}
    aria-hidden
  />
);

// -----------------------------------------------------------------------------
// Layer 2 — nebula clouds
// -----------------------------------------------------------------------------

const NebulaLayer = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    {NEBULAE.map((nebula) => (
      <m.span
        className="absolute rounded-full"
        style={{
          width: nebula.size,
          height: nebula.size,
          left: nebula.left,
          top: nebula.top,
          opacity: nebula.opacity,
          background: `radial-gradient(circle, ${nebula.color} 0%, transparent 68%)`,
          filter: `blur(${nebula.blur}px)`,
        }}
        animate={
          reduced
            ? undefined
            : {
                x: [0, nebula.dx, 0, -nebula.dx * 0.5, 0],
                y: [0, nebula.dy, -nebula.dy * 0.5, nebula.dy * 0.3, 0],
                scale: [1, nebula.scale, 1.02, nebula.scale * 0.96, 1],
              }
        }
        transition={{
          duration: nebula.duration,
          delay: nebula.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        key={nebula.id}
      />
    ))}
  </div>
);

NebulaLayer.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer 3 — shimmer veil
// -----------------------------------------------------------------------------

const ShimmerVeil = ({ reduced }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden>
    <m.div
      className="aspect-square w-[1200px] rounded-full opacity-[0.08] blur-3xl lg:w-[900px] md:w-[640px]"
      style={{
        background: `conic-gradient(from 0deg, ${COSMIC.violet}, ${COSMIC.teal}, ${COSMIC.pink}, ${COSMIC.blue}, ${COSMIC.violet})`,
      }}
      animate={reduced ? undefined : { rotate: 360 }}
      transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

ShimmerVeil.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Star field — shared renderer for the three depth layers
// -----------------------------------------------------------------------------

const StarField = ({ reduced, stars, driftX, driftY, driftDuration }) => (
  <m.div
    className="absolute inset-0 overflow-hidden"
    animate={reduced ? undefined : { x: [0, driftX, 0], y: [0, driftY, 0] }}
    transition={{ duration: driftDuration, repeat: Infinity, ease: 'easeInOut' }}
    aria-hidden
  >
    {stars.map((star) => (
      <m.span
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${star.left}%`,
          top: `${star.top}%`,
          width: star.size,
          height: star.size,
          backgroundColor: star.tint,
          boxShadow: `0 0 ${star.size * 2}px ${star.tint}`,
          opacity: star.base,
        }}
        animate={
          reduced
            ? undefined
            : {
                opacity: [
                  star.base * 0.3,
                  star.base,
                  star.base * 0.45,
                  star.base * 0.9,
                  star.base * 0.3,
                ],
                scale: [0.8, 1.2, 0.9, 1.1, 0.8],
              }
        }
        transition={{
          duration: star.duration,
          delay: star.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        key={star.id}
      />
    ))}
  </m.div>
);

StarField.propTypes = {
  reduced: PropTypes.bool.isRequired,
  stars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      left: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
      base: PropTypes.number.isRequired,
      duration: PropTypes.number.isRequired,
      delay: PropTypes.number.isRequired,
      tint: PropTypes.string.isRequired,
    })
  ).isRequired,
  driftX: PropTypes.number.isRequired,
  driftY: PropTypes.number.isRequired,
  driftDuration: PropTypes.number.isRequired,
};

// -----------------------------------------------------------------------------
// Layer 7 — cosmic dust
// -----------------------------------------------------------------------------

const CosmicDust = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    {COSMIC_DUST.map((mote) => (
      <m.span
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${mote.left}%`,
          top: `${mote.top}%`,
          width: mote.size,
          height: mote.size,
          backgroundColor: mote.tint,
          opacity: mote.opacity,
        }}
        animate={
          reduced
            ? undefined
            : {
                x: [0, mote.dx, mote.dx * 0.4, -mote.dx * 0.3, 0],
                y: [0, mote.dy, mote.dy * 0.5, -mote.dy * 0.2, 0],
                opacity: [0, mote.opacity, mote.opacity * 0.6, mote.opacity, 0],
              }
        }
        transition={{
          duration: mote.duration,
          delay: mote.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        key={mote.id}
      />
    ))}
  </div>
);

CosmicDust.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer 8 — aurora ribbons
// -----------------------------------------------------------------------------

const AuroraRibbons = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    {AURORA_RIBBONS.map((ribbon) => {
      const path = buildRibbonPath(ribbon.cycles, ribbon.amplitude, ribbon.baseline);
      const shift = ribbon.direction > 0 ? ['0%', '-50%'] : ['-50%', '0%'];

      return (
        <m.div
          className="absolute top-0 left-0 h-full w-[200%]"
          style={{ opacity: ribbon.opacity }}
          animate={reduced ? undefined : { x: shift, y: [0, ribbon.bob, 0, -ribbon.bob, 0] }}
          transition={{
            x: { duration: ribbon.duration, repeat: Infinity, ease: 'linear' },
            y: { duration: ribbon.bobDuration, repeat: Infinity, ease: 'easeInOut' },
          }}
          key={ribbon.id}
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d={path}
              fill="none"
              stroke={ribbon.color}
              strokeWidth={ribbon.width}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </m.div>
      );
    })}
  </div>
);

AuroraRibbons.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer 9 — wave bands
// -----------------------------------------------------------------------------

const WaveBands = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden>
    {WAVE_BANDS.map((band) => {
      const path = buildWavePath(band.cycles, band.amplitude, band.baseline);
      const shift = band.direction > 0 ? ['0%', '-50%'] : ['-50%', '0%'];

      return (
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ height: band.height }}
          key={band.id}
        >
          <m.div
            className="absolute bottom-0 left-0 h-full w-[200%]"
            animate={reduced ? undefined : { x: shift, y: [0, band.sway, 0, -band.sway, 0] }}
            transition={{
              x: { duration: band.duration, repeat: Infinity, ease: 'linear' },
              y: { duration: band.swayDuration, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 200 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path d={path} fill={band.color} />
            </svg>
          </m.div>
        </div>
      );
    })}
  </div>
);

WaveBands.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer 10 — spiral galaxy
// -----------------------------------------------------------------------------

const SpiralGalaxy = ({ reduced }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden>
    <m.div
      className="relative shrink-0"
      style={{ width: SPIRAL_FIELD, height: SPIRAL_FIELD }}
      animate={reduced ? undefined : { rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
    >
      {SPIRAL.points.map((point) => (
        <m.span
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: point.left,
            top: point.top,
            width: point.size,
            height: point.size,
            backgroundColor: point.tint,
            opacity: point.opacity,
            boxShadow: `0 0 ${point.size * 1.6}px ${point.tint}`,
          }}
          animate={
            reduced
              ? undefined
              : { opacity: [point.opacity * 0.5, point.opacity, point.opacity * 0.5] }
          }
          transition={{
            duration: point.twinkleDuration,
            delay: point.twinkleDelay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          key={point.id}
        />
      ))}
    </m.div>
  </div>
);

SpiralGalaxy.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer 11 — galaxy core
// -----------------------------------------------------------------------------

const GalaxyCore = ({ reduced }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden>
    {/* Expanding rings */}
    {CORE_RINGS.map((ring) => (
      <m.span
        className="absolute rounded-full border"
        style={{ width: ring.size, height: ring.size, borderColor: ring.color }}
        animate={reduced ? undefined : { scale: [0.4, 3.4], opacity: [0.6, 0] }}
        transition={{
          duration: ring.duration,
          delay: ring.delay,
          repeat: Infinity,
          ease: 'easeOut',
        }}
        key={ring.id}
      />
    ))}

    {/* Core glow */}
    <m.span
      className="absolute rounded-full"
      style={{
        width: 200,
        height: 200,
        background: `radial-gradient(circle, ${COSMIC.white} 0%, ${COSMIC.violetSoft} 26%, ${COSMIC.violet} 44%, transparent 72%)`,
        filter: 'blur(6px)',
      }}
      animate={reduced ? undefined : { scale: [1, 1.16, 1], opacity: [0.75, 1, 0.75] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Bright center */}
    <m.span
      className="absolute rounded-full"
      style={{
        width: 60,
        height: 60,
        background: `radial-gradient(circle, ${COSMIC.white} 0%, ${COSMIC.ice} 40%, transparent 70%)`,
      }}
      animate={reduced ? undefined : { scale: [1, 1.3, 1], opacity: [0.9, 1, 0.9] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

GalaxyCore.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer 12 — orbiting bodies
// -----------------------------------------------------------------------------

const OrbitingBodies = ({ reduced }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden>
    {ORBIT_BODIES.map((body) => (
      <div className="absolute" style={{ transform: `rotate(${body.tilt}deg)` }} key={body.id}>
        <m.div
          className="relative"
          style={{ width: body.radius * 2, height: body.radius * 2 }}
          animate={reduced ? undefined : { rotate: body.reverse ? -360 : 360 }}
          transition={{
            duration: body.duration,
            delay: body.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <m.span
            className="absolute top-0 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full"
            style={{
              width: body.size,
              height: body.size,
              backgroundColor: body.color,
              boxShadow: `0 0 ${body.size * 1.6}px ${body.glow}`,
            }}
            animate={reduced ? undefined : { scale: [1, 1.25, 1], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {body.hasRing && (
              <span
                className="absolute rounded-full border"
                style={{
                  width: body.size * 2.4,
                  height: body.size * 0.9,
                  borderColor: body.glow,
                  transform: 'rotate(-24deg)',
                }}
              />
            )}
          </m.span>
        </m.div>
      </div>
    ))}
  </div>
);

OrbitingBodies.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer 13 — constellations
// -----------------------------------------------------------------------------

const Constellations = ({ reduced }) => (
  <div className="absolute inset-0 overflow-hidden md:hidden" aria-hidden>
    <svg
      className="absolute inset-0 size-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {CONSTELLATIONS.map((constellation) =>
        constellation.edges.map(([from, to]) => {
          const a = constellation.points[from];
          const b = constellation.points[to];

          return (
            <m.line
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={COSMIC.ice}
              strokeWidth="0.6"
              strokeOpacity="0.3"
              vectorEffect="non-scaling-stroke"
              animate={reduced ? undefined : { strokeOpacity: [0.12, 0.4, 0.12] }}
              transition={{
                duration: 6,
                delay: from * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              key={`${constellation.id}-${from}-${to}`}
            />
          );
        })
      )}
    </svg>

    {CONSTELLATIONS.map((constellation) => (
      <div key={constellation.id}>
        {constellation.points.map((point, index) => (
          <m.span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: index === constellation.labelAt ? 5 : 3,
              height: index === constellation.labelAt ? 5 : 3,
              backgroundColor: COSMIC.white,
              boxShadow: `0 0 8px ${COSMIC.ice}`,
            }}
            animate={reduced ? undefined : { opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 4 + index,
              delay: index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            key={`${constellation.id}-pt-${index}`}
          />
        ))}
        <span
          className="absolute -translate-y-1/2 text-[10px] font-medium tracking-[0.2em] uppercase"
          style={{
            left: `${constellation.points[constellation.labelAt].x + 3}%`,
            top: `${constellation.points[constellation.labelAt].y}%`,
            color: 'rgba(220,231,255,0.5)',
          }}
        >
          {constellation.label}
        </span>
      </div>
    ))}
  </div>
);

Constellations.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer 14 — comets
// -----------------------------------------------------------------------------

const Comets = ({ reduced }) => {
  if (reduced) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {COMETS.map((comet) => (
        <m.div
          className="absolute top-0 left-0"
          initial={{ x: comet.fromX, y: comet.fromY, opacity: 0 }}
          animate={{
            x: [comet.fromX, comet.toX],
            y: [comet.fromY, comet.toY],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: comet.duration,
            delay: comet.delay,
            repeat: Infinity,
            repeatDelay: comet.repeatDelay,
            ease: 'easeIn',
            times: [0, 0.1, 0.85, 1],
          }}
          key={comet.id}
        >
          <span
            className="block rounded-full"
            style={{
              width: comet.length,
              height: 2,
              transform: `rotate(${comet.angle}deg)`,
              background: `linear-gradient(90deg, transparent, ${comet.color})`,
              boxShadow: `0 0 10px ${comet.color}`,
            }}
          />
        </m.div>
      ))}
    </div>
  );
};

Comets.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer 15 — meteor shower
// -----------------------------------------------------------------------------

const MeteorShower = ({ reduced }) => {
  if (reduced) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {METEORS.map((meteor) => (
        <m.span
          className="absolute top-0 rounded-full"
          style={{
            left: meteor.left,
            width: 2,
            height: meteor.length,
            transform: 'rotate(35deg)',
            transformOrigin: 'top',
            background: `linear-gradient(180deg, ${COSMIC.white}, transparent)`,
            boxShadow: `0 0 8px ${COSMIC.ice}`,
          }}
          initial={{ x: '-10%', y: '-30%', opacity: 0 }}
          animate={{ x: '60%', y: '160%', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Infinity,
            repeatDelay: meteor.repeatDelay,
            ease: 'easeIn',
            times: [0, 0.15, 0.8, 1],
          }}
          key={meteor.id}
        />
      ))}
    </div>
  );
};

MeteorShower.propTypes = reducedPropTypes;

// -----------------------------------------------------------------------------
// Layer 16 — legibility wash
// -----------------------------------------------------------------------------

const LegibilityWash = () => (
  <>
    {/* Radial darkening toward the edges keeps the center readable. */}
    <div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(120% 80% at 50% 42%, transparent 40%, rgba(6,2,19,0.55) 100%)',
      }}
      aria-hidden
    />
    {/* Gentle vertical wash under the headline. */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(180deg, rgba(6,2,19,0.35) 0%, transparent 30%, transparent 68%, rgba(6,2,19,0.45) 100%)',
      }}
      aria-hidden
    />
  </>
);

// -----------------------------------------------------------------------------
// Root component
// -----------------------------------------------------------------------------

const AnimatedBackground = () => {
  const shouldReduceMotion = useReducedMotion();
  const reduced = Boolean(shouldReduceMotion);

  return (
    <LazyMotion features={domAnimation}>
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <DeepSpaceWash />
        <NebulaLayer reduced={reduced} />
        <ShimmerVeil reduced={reduced} />
        <StarField reduced={reduced} stars={STARS_FAR} driftX={12} driftY={8} driftDuration={40} />
        <StarField
          reduced={reduced}
          stars={STARS_MID}
          driftX={-18}
          driftY={12}
          driftDuration={32}
        />
        <StarField
          reduced={reduced}
          stars={STARS_NEAR}
          driftX={24}
          driftY={-14}
          driftDuration={26}
        />
        <CosmicDust reduced={reduced} />
        <AuroraRibbons reduced={reduced} />
        <WaveBands reduced={reduced} />
        <SpiralGalaxy reduced={reduced} />
        <GalaxyCore reduced={reduced} />
        <OrbitingBodies reduced={reduced} />
        <Constellations reduced={reduced} />
        <Comets reduced={reduced} />
        <MeteorShower reduced={reduced} />
        <LegibilityWash />
      </div>
    </LazyMotion>
  );
};

export default AnimatedBackground;
