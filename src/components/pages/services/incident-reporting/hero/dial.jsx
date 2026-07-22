const POLAR = (cx, cy, r, angleDeg) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
};

const arcPath = (cx, cy, r, startAngle, endAngle) => {
  const [x1, y1] = POLAR(cx, cy, r, startAngle);
  const [x2, y2] = POLAR(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
};

const gearPath = (cx, cy, rOuter, rInner, teeth) => {
  const step = 360 / teeth;
  const half = step / 2;
  let d = '';
  for (let i = 0; i < teeth; i += 1) {
    const a = i * step;
    const [ox1, oy1] = POLAR(cx, cy, rOuter, a);
    const [ox2, oy2] = POLAR(cx, cy, rOuter, a + half * 0.7);
    const [ix1, iy1] = POLAR(cx, cy, rInner, a + half * 0.85);
    const [ix2, iy2] = POLAR(cx, cy, rInner, a + step * 0.85);
    d += `${i === 0 ? 'M' : 'L'} ${ox1.toFixed(2)} ${oy1.toFixed(2)} `;
    d += `L ${ox2.toFixed(2)} ${oy2.toFixed(2)} L ${ix1.toFixed(2)} ${iy1.toFixed(2)} L ${ix2.toFixed(2)} ${iy2.toFixed(2)} `;
  }
  return `${d}Z`;
};

const CX = 240;
const CY = 240;

// The three statutory sectors on a 360° dial: 24h (active, accent),
// 72h, and the one-month final-report window.
const SECTORS = [
  { start: 0, end: 90, r: 186, label: '0–24H', labelAngle: 45, active: true },
  { start: 96, end: 210, r: 186, label: '24–72H', labelAngle: 153, active: false },
  { start: 216, end: 354, r: 186, label: '→ 1 MO', labelAngle: 285, active: false },
];

const TICKS = Array.from({ length: 72 }, (_, i) => i * 5);

const Dial = () => (
  <svg
    className="h-auto w-full max-w-[480px]"
    viewBox="0 0 480 480"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    {/* outer frame */}
    <circle cx={CX} cy={CY} r={214} className="stroke-gray-new-15" strokeWidth="1" />
    <circle cx={CX} cy={CY} r={162} className="stroke-gray-new-15" strokeWidth="1" />

    {/* minute ticks */}
    {TICKS.map((angle) => {
      const major = angle % 30 === 0;
      const [x1, y1] = POLAR(CX, CY, major ? 200 : 205, angle);
      const [x2, y2] = POLAR(CX, CY, 210, angle);
      return (
        <line
          key={angle}
          x1={x1.toFixed(2)}
          y1={y1.toFixed(2)}
          x2={x2.toFixed(2)}
          y2={y2.toFixed(2)}
          className={major ? 'stroke-gray-new-40' : 'stroke-gray-new-20'}
          strokeWidth="1"
        />
      );
    })}

    {/* statutory sectors */}
    {SECTORS.map(({ start, end, r, label, labelAngle, active }) => {
      const [lx, ly] = POLAR(CX, CY, r - 22, labelAngle);
      return (
        <g key={label}>
          <path
            d={arcPath(CX, CY, r, start, end)}
            className={active ? 'stroke-primary-1' : 'stroke-gray-new-40'}
            strokeWidth={active ? 2.5 : 1.5}
            strokeLinecap="round"
          />
          <text
            x={lx.toFixed(2)}
            y={ly.toFixed(2)}
            className={`font-mono text-[13px] tracking-wider ${active ? 'fill-primary-1' : 'fill-gray-new-50'}`}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {label}
          </text>
        </g>
      );
    })}

    {/* sector endpoints */}
    {SECTORS.map(({ start, r, active }) => {
      const [px, py] = POLAR(CX, CY, r, start);
      return (
        <circle
          key={start}
          cx={px.toFixed(2)}
          cy={py.toFixed(2)}
          r="3"
          className={active ? 'fill-primary-1' : 'fill-gray-new-40'}
        />
      );
    })}

    {/* clockwork gears, line drawing */}
    <path d={gearPath(CX, CY, 92, 78, 16)} className="stroke-gray-new-30" strokeWidth="1" />
    <circle cx={CX} cy={CY} r={58} className="stroke-gray-new-30" strokeWidth="1" />
    <path
      d={gearPath(CX + 118, CY - 96, 34, 27, 10)}
      className="stroke-gray-new-25"
      strokeWidth="1"
    />
    <circle cx={CX + 118} cy={CY - 96} r={12} className="stroke-gray-new-25" strokeWidth="1" />

    {/* center hub */}
    <circle cx={CX} cy={CY} r={4} className="fill-gray-new-60" />
    <line
      x1={CX}
      y1={CY}
      x2={POLAR(CX, CY, 150, 62)[0].toFixed(2)}
      y2={POLAR(CX, CY, 150, 62)[1].toFixed(2)}
      className="stroke-primary-1"
      strokeWidth="1.5"
    />
    <text
      x={CX}
      y={CY + 34}
      className="fill-gray-new-60 font-mono text-[12px] tracking-widest"
      textAnchor="middle"
    >
      T+14:32:08
    </text>
  </svg>
);

export default Dial;
