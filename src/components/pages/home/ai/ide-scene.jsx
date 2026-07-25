'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import optitechLogo from 'images/optitech-logo-dark.png';
import { cn } from 'utils/cn';

import './ide-scene.css';

export const CheckIcon = () => (
  <svg
    className="size-3.5 shrink-0 text-green-44"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.5 7.5 5.5 10.5 11.5 3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>
);

export const DocumentIcon = () => (
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

const TERMINAL_STEPS = [
  { text: 'Step 1/3: Connecting OptiTech MCP Server ...', delay: '1.9s' },
  { text: 'Step 2/3: Mapping frameworks: NIS2, GDPR ...', delay: '2.4s' },
  { text: 'Step 3/3: Creating optitech.md ...', delay: '2.9s' },
];

export const CHAT_RESULTS = [
  { text: 'Kartlagt omfattning: NIS2, väsentlig entitet', delay: '5.3s' },
  { text: 'Utkast klart: incidenthanteringsrutin', delay: '5.7s' },
  { text: '12 kontroller tillagda i ert program', delay: '6.1s' },
  { text: 'Skapat optitech.md med er kontext', delay: '6.5s' },
];

// Hand-built replacement for the old Rive IDE animation: your code editor
// with the OptiTech copilot answering a plain-language Swedish question.
// Plays once when scrolled into view; the finished frame persists.
const IdeScene = ({ className }) => {
  const [wrapperRef, isInView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div
      className={cn(
        'ide-scene absolute flex items-center justify-center',
        isInView && 'is-active',
        className
      )}
      ref={wrapperRef}
      aria-hidden="true"
    >
      <div
        className="is-fade flex h-[86%] w-[91%] flex-col overflow-hidden border border-white/10 bg-[#0B0D0E] shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
        style={{ '--d': '0s' }}
      >
        {/* Title bar */}
        <div className="relative flex shrink-0 items-center border-b border-white/10 px-4 py-2.5">
          <span className="flex items-center gap-x-1.5">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </span>
          <span className="absolute left-1/2 -translate-x-1/2 text-[11px] tracking-extra-tight text-gray-new-60">
            Your Code Editor
          </span>
        </div>

        <div className="flex min-h-0 flex-1">
          {/* Editor + terminal column */}
          <div className="flex min-w-0 flex-[54] flex-col border-r border-white/10">
            <div className="flex shrink-0 items-center border-b border-white/10">
              <span className="flex items-center gap-x-1.5 border-r border-white/10 bg-white/3 px-3.5 py-2 font-mono text-[11px] text-gray-new-90">
                <DocumentIcon />
                optitech.config.ts
                <span className="ml-1 text-gray-new-50">×</span>
              </span>
              <span
                className="is-in flex items-center gap-x-1.5 border-r border-white/10 px-3.5 py-2 font-mono text-[11px] text-gray-new-60"
                style={{ '--d': '3.9s' }}
              >
                <DocumentIcon />
                optitech.md
              </span>
            </div>
            <div className="min-h-0 flex-1 overflow-hidden py-3 pl-3.5 font-mono text-[11.5px] leading-relaxed whitespace-nowrap">
              {[
                <span key="1">
                  <span className="text-[#B98AF4]">import</span>
                  <span className="text-gray-new-80"> {'{ defineConfig }'} </span>
                  <span className="text-[#B98AF4]">from</span>
                  <span className="text-[#6FBE89]"> &apos;@optitech/cli&apos;</span>
                  <span className="text-gray-new-80">;</span>
                </span>,
                <span key="2" />,
                <span key="3">
                  <span className="text-[#B98AF4]">export default</span>
                  <span className="text-[#7CB1F2]"> defineConfig</span>
                  <span className="text-gray-new-80">({'{'}</span>
                </span>,
                <span key="4">
                  <span className="text-gray-new-80"> org: </span>
                  <span className="text-[#6FBE89]">&apos;acme-ab&apos;</span>
                  <span className="text-gray-new-80">,</span>
                </span>,
                <span key="5">
                  <span className="text-gray-new-80"> frameworks: [</span>
                  <span className="text-[#6FBE89]">&apos;nis2&apos;</span>
                  <span className="text-gray-new-80">, </span>
                  <span className="text-[#6FBE89]">&apos;gdpr&apos;</span>
                  <span className="text-gray-new-80">],</span>
                </span>,
                <span key="6">
                  <span className="text-gray-new-80"> evidence: {'{'} source: </span>
                  <span className="text-[#6FBE89]">&apos;auto&apos;</span>
                  <span className="text-gray-new-80"> {'}'},</span>
                </span>,
                <span key="7">
                  <span className="text-gray-new-80">{'}'});</span>
                </span>,
              ].map((line, index) => (
                <span className="flex gap-x-3.5" key={index}>
                  <span className="w-4 shrink-0 text-right text-gray-new-40 select-none">
                    {index + 1}
                  </span>
                  <span className="min-w-0">{line}</span>
                </span>
              ))}
            </div>
            {/* Terminal */}
            <div className="flex shrink-0 flex-col border-t border-white/10">
              <div className="flex shrink-0 items-center gap-x-4 border-b border-white/10 px-3.5 py-2 text-[10px] tracking-extra-tight whitespace-nowrap text-gray-new-50">
                <span>Problems</span>
                <span>Output</span>
                <span className="border-b border-white pb-px text-gray-new-94">Terminal</span>
                <span>Ports</span>
              </div>
              <div className="overflow-hidden py-2.5 pl-3.5 font-mono text-[11px] leading-relaxed whitespace-nowrap">
                <span className="flex text-gray-new-90">
                  <span className="text-gray-new-50">$&nbsp;</span>
                  <span className="is-type" style={{ '--d': '0.4s' }}>
                    npx optitech init
                  </span>
                </span>
                <span className="is-in block text-gray-new-70" style={{ '--d': '1.5s' }}>
                  OptiTech Project Initialization
                </span>
                {TERMINAL_STEPS.map(({ text, delay }) => (
                  <span
                    className="is-in flex items-center gap-x-1.5 text-gray-new-70"
                    key={text}
                    style={{ '--d': delay }}
                  >
                    <span className="size-1.5 border border-green-44/70" />
                    {text}
                  </span>
                ))}
                <span
                  className="is-in flex items-center gap-x-1.5 text-green-44"
                  style={{ '--d': '3.5s' }}
                >
                  <span className="size-1.5 bg-green-44" />
                  Success! OptiTech project initialized.
                </span>
              </div>
            </div>
          </div>

          {/* Copilot chat column */}
          <div className="flex min-w-0 flex-[46] flex-col">
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-3.5 py-2.5">
              <span className="flex items-center gap-x-2">
                <Image
                  className="h-3 w-auto"
                  src={optitechLogo}
                  height={12}
                  alt=""
                  aria-hidden="true"
                />
                <span className="text-[11px] font-medium tracking-extra-tight text-gray-new-90">
                  AI
                </span>
              </span>
              <span className="text-[11px] leading-none text-gray-new-50">···</span>
            </div>
            <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden px-3.5 pt-3.5">
              {/* User question */}
              <span
                className="is-in ml-auto max-w-[85%] rounded-[4px] bg-white/8 px-3 py-2 text-[12px] leading-snug tracking-extra-tight text-gray-new-90"
                style={{ '--d': '0.9s' }}
              >
                Omfattas vi av NIS2, och vad behöver vi göra?
              </span>
              {/* Working indicator */}
              <span
                className="is-in-out is-dots mt-3 flex items-center gap-x-1"
                style={{ '--d': '1.4s', '--do': '4.4s' }}
              >
                <span className="size-1 rounded-full bg-gray-new-60" />
                <span className="size-1 rounded-full bg-gray-new-60" />
                <span className="size-1 rounded-full bg-gray-new-60" />
              </span>
              <span
                className="is-scan absolute top-13 left-3.5 h-px w-[calc(100%-28px)] bg-linear-to-r from-green-44/80 to-green-44/10"
                style={{ '--d': '1.5s', '--do': '4.4s' }}
              />
              {/* Answer */}
              <span className="is-in -mt-1 block" style={{ '--d': '4.8s' }}>
                <span className="block text-[12px] leading-snug tracking-extra-tight text-gray-new-80">
                  Ja, ni klassas som väsentlig entitet. Jag har gjort grundarbetet:
                </span>
                <span className="mt-2.5 block space-y-1.5">
                  {CHAT_RESULTS.map(({ text, delay }) => (
                    <span
                      className="is-in flex items-center gap-x-2 text-[11.5px] tracking-extra-tight whitespace-nowrap text-gray-new-90"
                      key={text}
                      style={{ '--d': delay }}
                    >
                      <CheckIcon />
                      {text}
                    </span>
                  ))}
                </span>
                <span
                  className="is-in mt-2.5 flex items-center justify-between rounded-[4px] border border-white/10 bg-white/3 px-2.5 py-1.5 lg:hidden"
                  style={{ '--d': '6.9s' }}
                >
                  <span className="flex items-center gap-x-1.5 font-mono text-[10.5px] text-gray-new-90">
                    <DocumentIcon />
                    incident-rutin.md
                  </span>
                  <span className="text-[10px] tracking-extra-tight text-gray-new-50">utkast</span>
                </span>
              </span>
            </div>
            {/* Prompt input */}
            <div className="m-3.5 mt-0 shrink-0 rounded-[4px] border border-white/10 bg-white/3 px-3 pt-2.5 pb-2">
              <span className="flex items-center text-[11.5px] tracking-extra-tight text-gray-new-50">
                Fråga OptiTech AI
                <span className="is-caret ml-0.5 inline-block h-3 w-px bg-gray-new-60" />
              </span>
              <span className="mt-2.5 flex items-center justify-between">
                <span className="flex items-center gap-x-1 rounded-[4px] border border-white/10 px-1.5 py-0.5 text-[9.5px] tracking-extra-tight text-gray-new-70">
                  <span className="is-dot size-1 rounded-full bg-green-44" />
                  Agent
                </span>
                <span className="flex size-4.5 items-center justify-center rounded-[4px] bg-white/10 text-[10px] leading-none text-gray-new-90">
                  ↑
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

IdeScene.propTypes = {
  className: PropTypes.string,
};

export default IdeScene;
