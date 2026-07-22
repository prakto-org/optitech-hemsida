/* ---------------------------------------------------------------------------
 * Four unique line-art vectors, one per scroll step. Stroke-based, light
 * palette with the green accent. Decorative only (rendered aria-hidden by
 * the parent).
 * ------------------------------------------------------------------------- */

const FRAME = 'h-auto w-full max-w-[440px]';

/* Step 1: cross-mapping — one control satisfies several frameworks */
export const FrameworksVector = () => (
  <svg className={FRAME} viewBox="0 0 440 380" fill="none">
    {/* connection curves */}
    <path d="M220 190 C 160 190 140 96 96 84" stroke="#C9CBCF" strokeWidth="1.4" />
    <path d="M220 190 C 300 190 316 96 348 84" stroke="#C9CBCF" strokeWidth="1.4" />
    <path d="M220 190 C 130 200 96 236 72 252" stroke="#C9CBCF" strokeWidth="1.4" />
    <path d="M220 190 C 310 200 340 236 366 252" stroke="#C9CBCF" strokeWidth="1.4" />
    <path d="M220 190 C 220 250 220 288 220 306" stroke="#00CC88" strokeWidth="1.6" />

    {/* check marks on the connections */}
    {[
      [150, 128],
      [298, 128],
      [128, 226],
      [318, 226],
    ].map(([x, y]) => (
      <g key={`${x}-${y}`}>
        <circle cx={x} cy={y} r="10" fill="#FFFFFF" stroke="#C9CBCF" strokeWidth="1.2" />
        <path
          d={`M${x - 4} ${y} l3 3 5.5-6`}
          stroke="#39A57D"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    ))}
    <g>
      <circle cx="220" cy="252" r="10" fill="#FFFFFF" stroke="#00CC88" strokeWidth="1.4" />
      <path
        d="M216 252 l3 3 5.5-6"
        stroke="#078345"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* central control node */}
    <rect
      x="142"
      y="160"
      width="156"
      height="60"
      rx="12"
      fill="#EDFBF4"
      stroke="#00CC88"
      strokeWidth="1.6"
    />
    <rect
      x="158"
      y="176"
      width="28"
      height="28"
      rx="7"
      fill="#FFFFFF"
      stroke="#39A57D"
      strokeWidth="1.4"
    />
    <path
      d="M166 190 l4 4 8-9"
      stroke="#078345"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="198" y="187" className="fill-black-new text-[13px] font-medium tracking-tight">
      En kontroll
    </text>
    <text x="198" y="205" className="fill-gray-new-50 font-mono text-[10px] tracking-tight">
      MFA aktiverat
    </text>

    {/* framework pills */}
    {[
      { x: 40, y: 62, w: 112, label: 'NIS2', accent: true },
      { x: 292, y: 62, w: 112, label: 'DORA' },
      { x: 16, y: 230, w: 112, label: 'GDPR' },
      { x: 310, y: 230, w: 118, label: 'ISO 27001' },
      { x: 164, y: 306, w: 112, label: 'AI Act' },
    ].map(({ x, y, w, label, accent }) => (
      <g key={label}>
        <rect
          x={x}
          y={y}
          width={w}
          height="44"
          rx="10"
          fill="#FFFFFF"
          stroke={accent ? '#00CC88' : '#D7D8DB'}
          strokeWidth="1.4"
        />
        <circle cx={x + 22} cy={y + 22} r="5" fill={accent ? '#00E599' : '#E4E5E7'} />
        <text
          x={x + 36}
          y={y + 27}
          className="fill-black-new text-[13px] font-medium tracking-tight"
        >
          {label}
        </text>
      </g>
    ))}
  </svg>
);

/* Step 2: from point-in-time to real time — radar sweep over status dots */
export const RealtimeVector = () => (
  <svg className={FRAME} viewBox="0 0 440 380" fill="none">
    {/* concentric radar rings */}
    {[64, 104, 144].map((r) => (
      <circle key={r} cx="220" cy="168" r={r} stroke="#E4E5E7" strokeWidth="1.2" />
    ))}
    <circle cx="220" cy="168" r="24" stroke="#C9CBCF" strokeWidth="1.2" />
    <line x1="76" y1="168" x2="364" y2="168" stroke="#EFEFF0" strokeWidth="1" />
    <line x1="220" y1="24" x2="220" y2="312" stroke="#EFEFF0" strokeWidth="1" />

    {/* rotating sweep */}
    <g>
      <path d="M220 168 L220 26 A142 142 0 0 1 320 66 Z" fill="url(#rt-sweep)" opacity="0.5" />
      <line
        x1="220"
        y1="168"
        x2="220"
        y2="26"
        stroke="#00CC88"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 220 168"
        to="360 220 168"
        dur="9s"
        repeatCount="indefinite"
      />
    </g>
    <defs>
      <linearGradient
        id="rt-sweep"
        x1="220"
        y1="26"
        x2="320"
        y2="120"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00E599" stopOpacity="0.28" />
        <stop offset="1" stopColor="#00E599" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* status dots on the rings */}
    {[
      { x: 168, y: 96, ok: true },
      { x: 300, y: 122, ok: true },
      { x: 130, y: 210, ok: true },
      { x: 284, y: 232, ok: false },
      { x: 222, y: 64, ok: true },
    ].map(({ x, y, ok }) => (
      <g key={`${x}-${y}`}>
        <circle cx={x} cy={y} r="7" fill={ok ? '#00E599' : '#FEBC2E'}>
          <animate attributeName="opacity" values="1;0.45;1" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle
          cx={x}
          cy={y}
          r="12"
          stroke={ok ? '#00E599' : '#FEBC2E'}
          strokeWidth="1"
          opacity="0.35"
        />
      </g>
    ))}

    {/* from -> to strip */}
    <rect
      x="60"
      y="330"
      width="130"
      height="34"
      rx="8"
      fill="#FFFFFF"
      stroke="#D7D8DB"
      strokeWidth="1.3"
      strokeDasharray="5 4"
    />
    <text
      x="125"
      y="351"
      textAnchor="middle"
      className="fill-gray-new-50 font-mono text-[10px] tracking-tight"
    >
      Årlig kontroll
    </text>
    <path
      d="M200 347 h34 m0 0 -6 -5 m6 5 -6 5"
      stroke="#61646B"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="248"
      y="330"
      width="132"
      height="34"
      rx="8"
      fill="#EDFBF4"
      stroke="#00CC88"
      strokeWidth="1.4"
    />
    <text
      x="314"
      y="351"
      textAnchor="middle"
      className="fill-[#067647] font-mono text-[10px] tracking-tight"
    >
      Varje timme
    </text>
  </svg>
);

/* Step 3: alert -> remediation flow */
export const RemediationVector = () => (
  <svg className={FRAME} viewBox="0 0 440 380" fill="none">
    {/* alert card */}
    <rect
      x="52"
      y="34"
      width="252"
      height="72"
      rx="12"
      fill="#FFFFFF"
      stroke="#D7D8DB"
      strokeWidth="1.4"
    />
    <circle cx="88" cy="70" r="14" fill="#FDECEC" />
    <path d="M88 62v10m0 5v.5" stroke="#DA0B51" strokeWidth="1.8" strokeLinecap="round" />
    <text x="114" y="66" className="fill-black-new text-[13px] font-medium tracking-tight">
      MFA avstängt
    </text>
    <text x="114" y="84" className="fill-gray-new-50 font-mono text-[10px] tracking-tight">
      3 användare · Entra ID
    </text>
    <rect x="232" y="56" width="56" height="26" rx="6" fill="#FDECEC" />
    <text
      x="260"
      y="73"
      textAnchor="middle"
      className="fill-[#DA0B51] font-mono text-[10px] tracking-wider"
    >
      LARM
    </text>

    {/* branch curves */}
    <path d="M178 106 C 178 140 120 140 120 170" stroke="#C9CBCF" strokeWidth="1.4" />
    <path d="M178 106 C 178 140 296 140 296 170" stroke="#00CC88" strokeWidth="1.6" />

    {/* option A: ticket */}
    <rect
      x="40"
      y="170"
      width="160"
      height="66"
      rx="12"
      fill="#FFFFFF"
      stroke="#D7D8DB"
      strokeWidth="1.4"
    />
    <rect
      x="56"
      y="186"
      width="24"
      height="24"
      rx="6"
      fill="#EFF4FE"
      stroke="#259DF4"
      strokeWidth="1.2"
    />
    <path
      d="M62 198h12M62 193h12M62 203h7"
      stroke="#206CDF"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <text x="90" y="197" className="fill-black-new text-[12px] font-medium tracking-tight">
      Färdigt ärende
    </text>
    <text x="90" y="214" className="fill-gray-new-50 font-mono text-[10px] tracking-tight">
      Jira · rätt ägare
    </text>

    {/* option B: auto-fix via API */}
    <rect
      x="240"
      y="170"
      width="160"
      height="66"
      rx="12"
      fill="#EDFBF4"
      stroke="#00CC88"
      strokeWidth="1.6"
    />
    <circle cx="270" cy="203" r="13" fill="#FFFFFF" stroke="#39A57D" strokeWidth="1.4" />
    <path
      d="M265 197l7 6-7 6"
      stroke="#078345"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="292" y="197" className="fill-black-new text-[12px] font-medium tracking-tight">
      Åtgärda via API
    </text>
    <text x="292" y="214" className="fill-[#067647] font-mono text-[10px] tracking-tight">
      1 klick · Entra ID
    </text>

    {/* AI snippet card */}
    <rect
      x="104"
      y="266"
      width="232"
      height="76"
      rx="12"
      fill="#FFFFFF"
      stroke="#D7D8DB"
      strokeWidth="1.4"
    />
    <rect x="120" y="282" width="52" height="18" rx="4" fill="#F2F2F3" />
    <text
      x="146"
      y="295"
      textAnchor="middle"
      className="fill-gray-new-40 font-mono text-[9px] tracking-wider"
    >
      AI-FÖRSLAG
    </text>
    <text x="120" y="318" className="fill-gray-new-30 font-mono text-[10px]">
      Set-MfaPolicy -Scope All
    </text>
    <text x="120" y="332" className="fill-gray-new-50 font-mono text-[10px]">
      -EnforceFor 3 användare
    </text>
    <path
      d="M320 316 l5 5 9-10"
      stroke="#00CC88"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path d="M220 236 v30" stroke="#00CC88" strokeWidth="1.6" />
  </svg>
);

/* Step 4: the roadmap from gap analysis to audit */
export const RoadmapVector = () => (
  <svg className={FRAME} viewBox="0 0 440 380" fill="none">
    {/* winding path */}
    <path
      d="M56 320 C 150 320 170 250 220 250 C 290 250 300 180 236 156 C 180 136 190 84 260 72 C 316 62 348 84 372 60"
      stroke="#C9CBCF"
      strokeWidth="1.6"
      strokeDasharray="6 5"
    />
    {/* completed segment overlay */}
    <path
      d="M56 320 C 150 320 170 250 220 250"
      stroke="#00CC88"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* milestones */}
    {[
      {
        x: 56,
        y: 320,
        label: 'Gap-analys',
        sub: '20 frågor',
        done: true,
        anchor: 'start',
        tx: 40,
        ty: 352,
      },
      {
        x: 220,
        y: 250,
        label: 'Policies',
        sub: '50+ mallar',
        done: true,
        anchor: 'middle',
        tx: 220,
        ty: 292,
      },
      {
        x: 236,
        y: 156,
        label: 'Bevis',
        sub: 'automatiskt',
        done: false,
        anchor: 'start',
        tx: 258,
        ty: 152,
      },
      {
        x: 260,
        y: 72,
        label: 'Utbildning',
        sub: 'styrelse & ledning',
        done: false,
        anchor: 'start',
        tx: 160,
        ty: 60,
      },
    ].map(({ x, y, label, sub, done, anchor, tx, ty }) => (
      <g key={label}>
        <circle
          cx={x}
          cy={y}
          r="13"
          fill={done ? '#EDFBF4' : '#FFFFFF'}
          stroke={done ? '#00CC88' : '#C9CBCF'}
          strokeWidth="1.6"
        />
        {done ? (
          <path
            d={`M${x - 5} ${y} l3.5 3.5 6.5-7`}
            stroke="#078345"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <circle cx={x} cy={y} r="4" fill="#C9CBCF" />
        )}
        <text
          x={tx}
          y={ty}
          textAnchor={anchor}
          className="fill-black-new text-[13px] font-medium tracking-tight"
        >
          {label}
        </text>
        <text
          x={tx}
          y={ty + 16}
          textAnchor={anchor}
          className="fill-gray-new-50 font-mono text-[10px] tracking-tight"
        >
          {sub}
        </text>
      </g>
    ))}

    {/* audit flag at the end */}
    <line
      x1="372"
      y1="60"
      x2="372"
      y2="16"
      stroke="#0C0D0D"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M372 18 h44 l-10 11 10 11 h-44 Z" fill="#00E599" stroke="#00CC88" strokeWidth="1" />
    <text
      x="380"
      y="98"
      textAnchor="middle"
      className="fill-black-new text-[13px] font-medium tracking-tight"
    >
      Revision
    </text>
    <text
      x="380"
      y="114"
      textAnchor="middle"
      className="fill-gray-new-50 font-mono text-[10px] tracking-tight"
    >
      godkänd
    </text>

    {/* current position marker */}
    <circle cx="220" cy="250" r="20" stroke="#00CC88" strokeWidth="1.2" opacity="0.5">
      <animate attributeName="r" values="16;24;16" dur="2.8s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2.8s" repeatCount="indefinite" />
    </circle>
    <text
      x="56"
      y="290"
      textAnchor="middle"
      className="fill-[#067647] font-mono text-[10px] tracking-wider"
    >
      START
    </text>
  </svg>
);
