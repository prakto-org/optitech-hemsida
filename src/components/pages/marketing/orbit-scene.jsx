import PropTypes from 'prop-types';

import { cn } from 'utils/cn';

import './orbit-scene.css';

/* The copilot loop, drawn as an orbit with the OptiTech mark at the centre.
 * Product wording is Swedish, like the other product art on the site. */
const STAGES = [
  { key: 'ask', label: 'FRÅGA', position: 'top' },
  { key: 'retrieve', label: 'SÖKER', position: 'right' },
  { key: 'draft', label: 'UTKAST', position: 'bottom' },
  { key: 'cite', label: 'KÄLLOR', position: 'left' },
];

// Pill anchors sit on the middle ring (r=178 in the 480 viewBox).
const POSITION_STYLE = {
  top: { left: '50%', top: '12.9%' },
  right: { left: '87.1%', top: '50%' },
  bottom: { left: '50%', top: '87.1%' },
  left: { left: '12.9%', top: '50%' },
};

const RING_R = 178;
const RING_C = 2 * Math.PI * RING_R;

const OrbitScene = ({ className = null }) => (
  <div className={cn('orbit relative mx-auto w-full max-w-[480px]', className)} aria-hidden>
    <svg className="block w-full" viewBox="0 0 480 480" fill="none">
      {/* outer dashed boundary */}
      <circle
        className="orbit-dashed"
        cx="240"
        cy="240"
        r="228"
        stroke="#C9CBCE"
        strokeWidth="1"
        strokeDasharray="4 7"
      />
      {/* ring the stages sit on */}
      <circle cx="240" cy="240" r={RING_R} stroke="#B9BCC0" strokeWidth="1.25" />
      {/* inner ring */}
      <circle cx="240" cy="240" r="118" stroke="#D2D4D7" strokeWidth="1.25" />

      {/* travelling progress arc */}
      <g className="orbit-arc" style={{ transformOrigin: '240px 240px' }}>
        <circle
          cx="240"
          cy="240"
          r={RING_R}
          stroke="#00CC88"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${RING_C * 0.24} ${RING_C}`}
          transform="rotate(-90 240 240)"
        />
      </g>

      {/* OptiTech mark, inlined from the favicon so it can take the brand tone */}
      <g transform="translate(240 240) scale(0.62) translate(-90 -95)" fill="#0F8A5F">
        <path
          className="orbit-mark"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90 128c27.614 0 50-22.386 50-50S117.614 28 90 28 40 50.386 40 78s22.386 50 50 50Zm0-26c13.255 0 24-10.745 24-24S103.255 54 90 54 66 64.745 66 78s10.745 24 24 24Z"
        />
        <circle className="orbit-mark" cx="90" cy="158" r="12" />
      </g>
    </svg>

    {STAGES.map((stage, index) => (
      <span
        className="orbit-pill absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-new-90 bg-[#F3F2EC] px-3.5 py-1.5 font-mono text-[11px] leading-none tracking-[0.1em] text-gray-new-20"
        key={stage.key}
        style={{ ...POSITION_STYLE[stage.position], '--i': index }}
      >
        {stage.label}
      </span>
    ))}
  </div>
);

OrbitScene.propTypes = {
  className: PropTypes.string,
};

export default OrbitScene;
