'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import optitechLogo from 'images/optitech-logo-dark.png';
import { cn } from 'utils/cn';

import './hero-animations.css';

// Total length of one animation cycle. When a card is active and not hovered,
// the carousel advances to the next card after this delay (mirrors the old
// video "ended" behavior). While hovered, the scene restarts instead.
export const HERO_ANIMATION_DURATION_MS = 6000;

const DocumentIcon = () => (
  <svg
    className="size-3 shrink-0 text-gray-new-60"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 1.5h4L9.5 4v6a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1Z"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path d="M7 1.5V4h2.5" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Gap analysis: framework coverage chart cropped edge to edge, dotted load
// area with stepped line and a rising score line, legend row at the bottom.
const GapAnalysisScene = () => (
  <span className="flex h-full w-full flex-col">
    <span className="relative block flex-1 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 220 150"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="ha-gap-dots" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.13)" />
          </pattern>
        </defs>
        <path
          className="ha-fade"
          d="M0 44H30V70H58V62H92V96H124V88H156V112H188V104H220V150H0Z"
          fill="url(#ha-gap-dots)"
          style={{ '--d': '1s' }}
        />
        <path
          className="ha-draw"
          d="M0 44H30V70H58V62H92V96H124V88H156V112H188V104H220"
          pathLength="1"
          stroke="rgba(255,255,255,0.72)"
          strokeWidth="1.25"
          style={{ '--d': '0.2s' }}
        />
        <path
          className="ha-draw"
          d="M0 122C40 120 70 100 105 86S180 48 220 40"
          pathLength="1"
          stroke="#39A57D"
          strokeWidth="1.25"
          style={{ '--d': '0.9s' }}
        />
      </svg>
    </span>
    <span className="flex items-center gap-x-4 border-t border-white/10 px-4 py-3.5">
      <span
        className="ha-in flex items-center gap-x-1.5 text-[10px] tracking-extra-tight text-gray-new-80"
        style={{ '--d': '1.8s' }}
      >
        <span className="size-2 bg-green-44/80" />
        Compliance score
      </span>
      <span
        className="ha-in flex items-center gap-x-1.5 text-[10px] tracking-extra-tight text-gray-new-80"
        style={{ '--d': '2s' }}
      >
        <span className="size-2 border border-white/25 bg-[radial-gradient(rgba(255,255,255,0.35)_0.5px,transparent_0.5px)] bg-size-[2.5px_2.5px]" />
        Open gaps
      </span>
    </span>
  </span>
);

// AI documentation: a policy editor window cropped at the bottom edge, with
// real form fields where the policy name types itself in (echoes the original
// sign-up form card).
const AiDocumentationScene = () => (
  <span className="flex h-full w-full justify-center overflow-hidden px-6 pt-4">
    <span className="block h-full w-full border border-white/10 bg-[#0B0D0E] shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
      <span className="flex items-center border-b border-white/10 px-3.5 py-2">
        <Image className="h-3 w-auto" src={optitechLogo} height={12} alt="" aria-hidden="true" />
      </span>
      <span className="block px-3.5 pt-3">
        <span className="block text-[14px] leading-tight font-medium tracking-extra-tight text-white">
          New policy
        </span>
        <span
          className="ha-in mt-2.5 block text-[9px] leading-none text-gray-new-50"
          style={{ '--d': '0.4s' }}
        >
          Name
        </span>
        <span
          className="ha-in mt-1 block border border-white/10 bg-white/3 px-2.5 py-1.5"
          style={{ '--d': '0.6s' }}
        >
          <span
            className="ha-type block max-w-full overflow-hidden text-[10px] leading-none whitespace-nowrap text-gray-new-80"
            style={{ '--d': '1.1s' }}
          >
            Informationssäkerhetspolicy
          </span>
        </span>
        <span
          className="ha-in mt-2.5 block text-[9px] leading-none text-gray-new-50"
          style={{ '--d': '2.2s' }}
        >
          Framework
        </span>
        <span
          className="ha-in mt-1 flex items-center justify-between border border-white/10 bg-white/3 px-2.5 py-1.5"
          style={{ '--d': '2.4s' }}
        >
          <span className="text-[10px] leading-none text-gray-new-80">NIS2</span>
          <span className="text-[8px] leading-none text-gray-new-50">▾</span>
        </span>
      </span>
    </span>
  </span>
);

// Evidence collection: control checks streaming in a terminal. Older lines
// sit out of focus, the newest line is sharp and highlighted (echoes the
// original batch log with its depth of field).
const EvidenceCollectionScene = () => (
  <span className="flex h-full w-full flex-col justify-center overflow-hidden pl-6 font-mono">
    <span className="flex items-center gap-x-2">
      <span className="ha-dot size-2 rounded-full bg-green-44" />
      <span className="text-[12px] tracking-extra-tight text-gray-new-90">Running</span>
    </span>
    <span className="mt-3 block space-y-1.5 text-[13px] tracking-extra-tight whitespace-nowrap">
      <span
        className="ha-in block text-gray-new-50 opacity-70 blur-[2.5px]"
        style={{ '--d': '0.5s' }}
      >
        <span className="text-gray-new-60">12:34:01</span> collect_evidence(mfa, backups)
      </span>
      <span className="ha-in block text-gray-new-50 blur-[1px]" style={{ '--d': '1.2s' }}>
        <span className="text-gray-new-60">12:34:02</span> checks.run(offboarding)
      </span>
      <span
        className="ha-in block border-l-2 border-white bg-white/5 py-0.5 pl-2 text-white"
        style={{ '--d': '2s' }}
      >
        12:34:09 controls 48 / 48
      </span>
    </span>
  </span>
);

// Incident reporting: the report trail as a vertical timeline. The line runs
// off the bottom edge and each artifact gets a node on the line (echoes the
// original branch graph with file chips).
const IncidentReportingScene = () => (
  <span className="relative flex h-full w-full flex-col items-center overflow-hidden py-7">
    <span
      className="ha-grow absolute top-12 bottom-0 left-1/2 w-px -translate-x-1/2 bg-white/20"
      style={{ '--d': '0.4s' }}
    />
    <span
      className="ha-in relative z-10 rounded-full bg-white px-3.5 py-1 font-mono text-[11px] leading-tight font-medium text-black-pure"
      style={{ '--d': '0s' }}
    >
      incident
    </span>
    <span
      className="ha-in absolute top-[38%] left-1/2 z-10 -translate-x-1/2"
      style={{ '--d': '1.2s' }}
    >
      <span className="flex items-center gap-x-1.5 border border-white/10 bg-[#16181A] px-2.5 py-1.5 font-mono text-[10px] text-gray-new-80">
        <DocumentIcon />
        /early-warning.pdf
      </span>
      <span className="absolute -bottom-4 left-1/2 size-1.5 -translate-x-1/2 rounded-full border border-white/40 bg-[#111315]" />
    </span>
    <span
      className="ha-in absolute top-[64%] left-1/2 z-10 -translate-x-1/2"
      style={{ '--d': '2.2s' }}
    >
      <span className="flex items-center gap-x-1.5 border border-white/10 bg-[#16181A] px-2.5 py-1.5 font-mono text-[10px] text-gray-new-80">
        <DocumentIcon />
        /msb-report.pdf
      </span>
      <span className="absolute -bottom-4 left-1/2 size-1.5 -translate-x-1/2 rounded-full border border-white/40 bg-[#111315]" />
    </span>
  </span>
);

// Vendor management: a cropped vendor register table bleeding off the right
// edge, where risk classifications land one by one.
const VendorManagementScene = () => (
  <span className="relative block h-full w-full overflow-hidden">
    <span className="absolute top-1/2 left-6 block w-[130%] -translate-y-1/2 border border-white/10 bg-[#0C0E0F] whitespace-nowrap">
      <span className="ha-in flex items-center gap-x-2.5 px-4 py-3" style={{ '--d': '0.2s' }}>
        <span className="flex size-5 shrink-0 items-center justify-center bg-white/10 text-[8px] font-semibold text-gray-new-80">
          AC
        </span>
        <span className="text-[12px] tracking-extra-tight text-gray-new-90">Acme Cloud AB</span>
        <span
          className="ha-in ml-3 bg-green-44/15 px-1.5 py-0.5 font-mono text-[8px] tracking-wider text-green-44 uppercase"
          style={{ '--d': '1s' }}
        >
          Low risk
        </span>
      </span>
      <span
        className="ha-in flex items-center gap-x-2.5 border-t border-white/10 px-4 py-3"
        style={{ '--d': '0.5s' }}
      >
        <span className="flex size-5 shrink-0 items-center justify-center bg-white/10 text-[8px] font-semibold text-gray-new-80">
          NF
        </span>
        <span className="text-[12px] tracking-extra-tight text-gray-new-90">Nordic Freight AB</span>
        <span
          className="ha-in ml-3 bg-brown-70/15 px-1.5 py-0.5 font-mono text-[8px] tracking-wider text-brown-70 uppercase"
          style={{ '--d': '2s' }}
        >
          High risk
        </span>
      </span>
    </span>
  </span>
);

const SCENES = {
  gapAnalysis: GapAnalysisScene,
  aiDocumentation: AiDocumentationScene,
  evidenceCollection: EvidenceCollectionScene,
  incidentReporting: IncidentReportingScene,
  vendorManagement: VendorManagementScene,
};

const HeroServiceAnimation = ({ animation, isActive, onEnded, shouldLoop }) => {
  const [cycle, setCycle] = useState(0);
  const shouldLoopRef = useRef(shouldLoop);
  const onEndedRef = useRef(onEnded);

  useEffect(() => {
    shouldLoopRef.current = shouldLoop;
  }, [shouldLoop]);

  useEffect(() => {
    onEndedRef.current = onEnded;
  }, [onEnded]);

  useEffect(() => {
    if (!isActive) {
      setCycle(0);
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      if (shouldLoopRef.current) {
        setCycle((currentCycle) => currentCycle + 1);
        return;
      }

      onEndedRef.current();
    }, HERO_ANIMATION_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [isActive, cycle]);

  const Scene = SCENES[animation];

  return (
    <span
      className={cn('hero-anim', isActive && 'is-active')}
      key={`${animation}-${isActive}-${cycle}`}
      aria-hidden="true"
    >
      <Scene />
    </span>
  );
};

HeroServiceAnimation.propTypes = {
  animation: PropTypes.oneOf(Object.keys(SCENES)).isRequired,
  isActive: PropTypes.bool.isRequired,
  onEnded: PropTypes.func.isRequired,
  shouldLoop: PropTypes.bool.isRequired,
};

export default HeroServiceAnimation;
