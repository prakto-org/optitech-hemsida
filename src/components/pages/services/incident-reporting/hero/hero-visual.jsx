import Image from 'next/image';

import avatarDana from 'images/authors/martin-skow.jpg';
import avatarAlex from 'images/authors/oliver-stenbom.jpg';
import optitechLogo from 'images/optitech-logo-light.png';

/* ---------------------------------------------------------------------------
 * Cinematic hero visual: a perspective-tilted incident window that fades out,
 * with two floating detail cards breaking the plane. Product UI is Swedish
 * on purpose: the platform language is part of the positioning.
 * ------------------------------------------------------------------------- */

/* Deadline gantt, drawn large. viewBox 880x250. */
const GanttChart = () => (
  <svg className="mt-4 h-auto w-full" viewBox="0 0 880 250" fill="none">
    <defs>
      <pattern
        id="hv-hatch"
        width="7"
        height="7"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="7" stroke="#D7D8DB" strokeWidth="1.4" />
      </pattern>
      <linearGradient id="hv-done" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#00E599" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#00E599" stopOpacity="0.18" />
      </linearGradient>
    </defs>

    {/* vertical statutory gates */}
    {[
      { x: 300, label: '24H', anchor: 'start', labelX: 308 },
      { x: 560, label: '72H', anchor: 'middle', labelX: 560 },
      { x: 856, label: '30 DAGAR', anchor: 'end', labelX: 872 },
    ].map(({ x, label, anchor, labelX }) => (
      <g key={label}>
        <line
          x1={x}
          y1="30"
          x2={x}
          y2="212"
          stroke="#E4E5E7"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text
          x={labelX}
          y="20"
          textAnchor={anchor}
          className="fill-gray-new-45 font-mono text-[11px] tracking-[0.14em]"
        >
          {label}
        </text>
      </g>
    ))}

    {/* lane: early warning, done */}
    <text x="24" y="66" className="fill-gray-new-30 text-[13px] font-medium tracking-tight">
      Tidig varning
    </text>
    <rect
      x="220"
      y="54"
      width="46"
      height="16"
      rx="3"
      fill="url(#hv-done)"
      stroke="#39A57D"
      strokeWidth="1"
    />
    <path
      d="M231 62 l3.5 3.5 L241 59"
      stroke="#078345"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <text x="276" y="66" className="fill-green-44 font-mono text-[11px]">
      02:41 · 27 min efter upptäckt
    </text>

    {/* lane: incident notification, running */}
    <text x="24" y="112" className="fill-gray-new-30 text-[13px] font-medium tracking-tight">
      Incidentanmälan
    </text>
    <rect x="220" y="100" width="340" height="16" rx="3" fill="url(#hv-hatch)" opacity="0.45" />
    <rect
      x="220"
      y="100"
      width="118"
      height="16"
      rx="3"
      fill="url(#hv-done)"
      stroke="#39A57D"
      strokeWidth="1"
    />
    <text x="348" y="112" className="fill-gray-new-40 font-mono text-[11px]">
      64 % · AI-förifylld
    </text>

    {/* lane: IMY parallel */}
    <text x="24" y="158" className="fill-gray-new-30 text-[13px] font-medium tracking-tight">
      IMY-anmälan
    </text>
    <rect
      x="220"
      y="146"
      width="340"
      height="16"
      rx="3"
      fill="none"
      stroke="#94979E"
      strokeWidth="1"
      strokeDasharray="5 4"
    />
    <text x="572" y="158" className="fill-gray-new-50 font-mono text-[11px]">
      riskbedömning pågår
    </text>

    {/* lane: final report */}
    <text x="24" y="204" className="fill-gray-new-30 text-[13px] font-medium tracking-tight">
      Slutrapport
    </text>
    <rect
      x="220"
      y="194"
      width="636"
      height="12"
      rx="3"
      fill="none"
      stroke="#E4E5E7"
      strokeWidth="1"
    />

    {/* time axis with segment breaks */}
    <line x1="220" y1="224" x2="856" y2="224" stroke="#C9CBCF" strokeWidth="1" />
    {[306, 566].map((x) => (
      <g key={x} stroke="#94979E" strokeWidth="1.2">
        <line x1={x - 4} y1="219" x2={x + 2} y2="229" />
        <line x1={x + 2} y1="219" x2={x + 8} y2="229" />
      </g>
    ))}
    {[
      { x: 220, label: '02:14' },
      { x: 300, label: '24h' },
      { x: 560, label: '72h' },
      { x: 856, label: '30 d' },
    ].map(({ x, label }) => (
      <text
        key={label}
        x={x}
        y="244"
        textAnchor="middle"
        className="fill-gray-new-50 font-mono text-[10px]"
      >
        {label}
      </text>
    ))}

    {/* NOW marker */}
    <line x1="268" y1="30" x2="268" y2="224" stroke="#0C0D0D" strokeWidth="1.4" />
    <rect x="240" y="2" width="56" height="18" rx="4" className="fill-black-new" />
    <text
      x="268"
      y="14"
      textAnchor="middle"
      className="fill-white font-mono text-[10px] tracking-wider"
    >
      NU 14:32
    </text>
    <circle cx="268" cy="30" r="3.5" className="fill-green-45">
      <animate attributeName="opacity" values="1;0.25;1" dur="2.2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const HeroVisual = () => (
  <div className="relative" aria-hidden="true">
    {/* ambient glow behind the composition */}
    <div className="absolute -inset-x-24 -top-16 bottom-0 bg-[radial-gradient(55%_65%_at_50%_18%,rgba(0,229,153,0.12),transparent_72%)]" />

    {/* main window: tilted, cropped, fading out */}
    <div className="relative [perspective:1800px] md:[perspective:none]">
      <div className="relative [transform-origin:top_center] [transform:rotateX(5deg)] overflow-hidden rounded-2xl border border-gray-new-90 bg-white [mask-image:linear-gradient(to_bottom,black_74%,transparent_99%)] shadow-[0_48px_120px_-40px_rgba(12,13,13,0.35)] md:[transform:none]">
        {/* window bar */}
        <div className="flex h-12 items-center justify-between border-b border-gray-new-94 px-5">
          <div className="flex items-center gap-x-3.5">
            <Image className="h-5 w-auto" src={optitechLogo} height={20} alt="" />
            <span className="h-4 w-px bg-gray-new-90" />
            <span className="font-mono text-xs tracking-tight text-gray-new-50">
              Incidenter / <span className="text-black-new">INC-2026-042</span>
            </span>
            <span className="rounded border border-[#FF9500]/50 bg-[#FF9500]/10 px-2 py-1 font-mono text-[10px] leading-none tracking-wider text-[#B36A00] uppercase sm:hidden">
              P1 · Betydande
            </span>
          </div>
          <div className="flex items-center gap-x-3">
            <span className="flex -space-x-2">
              <Image
                className="size-7 rounded-full border-2 border-white object-cover"
                src={avatarDana}
                width={28}
                height={28}
                alt=""
              />
              <Image
                className="size-7 rounded-full border-2 border-white object-cover"
                src={avatarAlex}
                width={28}
                height={28}
                alt=""
              />
              <span className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-gray-new-94 text-[10px] font-medium text-gray-new-40">
                +3
              </span>
            </span>
            <span className="inline-flex items-center gap-x-1.5 rounded-full border border-green-44/50 px-2.5 py-1.5 font-mono text-[10px] leading-none tracking-wider text-green-44 uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-green-45" />
              Live
            </span>
          </div>
        </div>

        {/* chart area */}
        <div className="px-8 pt-6 pb-2 md:px-5">
          <div className="flex items-baseline justify-between">
            <p className="font-mono text-[11px] leading-none tracking-[0.16em] text-gray-new-45 uppercase">
              Rapporteringsfönster · NIS2 & GDPR
            </p>
            <p className="font-mono text-[11px] leading-none tracking-tight text-gray-new-50 sm:hidden">
              upptäckt 02:14 · CERT-SE/MSB ansluten
            </p>
          </div>
          <GanttChart />
        </div>
      </div>
    </div>

    {/* floating card: confirmation toast, left */}
    <div className="absolute top-[72%] -left-9 w-[296px] -rotate-[1.5deg] rounded-xl border border-gray-new-90 bg-white p-4 shadow-[0_32px_64px_-16px_rgba(12,13,13,0.35)] lg:left-0 md:hidden">
      <div className="flex items-start gap-x-3">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-green-45/15">
          <svg className="size-3.5" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7.5 L5.5 10.5 L11.5 3.5"
              stroke="#078345"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div>
          <p className="text-[13px] leading-snug font-medium tracking-tight text-black-new">
            Tidig varning skickad
          </p>
          <p className="mt-0.5 font-mono text-[11px] leading-snug tracking-tight text-gray-new-50">
            CERT-SE/MSB · 02:41
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-x-2 border-t border-gray-new-94 pt-3">
        <Image
          className="size-4.5 rounded-full object-cover"
          src={avatarDana}
          width={18}
          height={18}
          alt=""
        />
        <p className="text-[11px] leading-none tracking-tight text-gray-new-40">
          Dana Smith · signerad med BankID
        </p>
      </div>
    </div>

    {/* floating card: countdown, right */}
    <div className="absolute top-[24%] -right-7 w-[248px] rotate-[1.5deg] rounded-xl border border-gray-new-90 bg-white p-4 shadow-[0_32px_64px_-16px_rgba(12,13,13,0.35)] lg:right-0 md:hidden">
      <p className="font-mono text-[10px] leading-none tracking-[0.16em] text-gray-new-45 uppercase">
        Nästa tidsfrist
      </p>
      <p className="mt-2.5 font-mono text-[26px] leading-none font-medium tracking-tight text-black-new tabular-nums">
        T−59:42:08
      </p>
      <p className="mt-1.5 text-[11px] leading-snug tracking-tight text-gray-new-40">
        Incidentanmälan · CERT-SE/MSB
      </p>
      <div className="relative mt-3 h-1.5 rounded-full bg-gray-new-94">
        <span className="absolute inset-y-0 left-0 w-[17%] rounded-full bg-green-45" />
        <span className="absolute top-1/2 left-[33%] h-2.5 w-px -translate-y-1/2 bg-gray-new-80" />
        <span className="absolute top-1/2 left-[66%] h-2.5 w-px -translate-y-1/2 bg-gray-new-80" />
      </div>
      <div className="mt-1.5 flex justify-between font-mono text-[9px] tracking-wider text-gray-new-50">
        <span>24H</span>
        <span>72H</span>
        <span>30D</span>
      </div>
    </div>
  </div>
);

export default HeroVisual;
