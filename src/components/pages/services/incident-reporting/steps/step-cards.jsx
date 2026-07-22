import Image from 'next/image';
import PropTypes from 'prop-types';

import avatarDana from 'images/authors/martin-skow.jpg';
import optitechLogo from 'images/optitech-logo-light.png';
import badgeCcpa from 'images/pages/services/incident-reporting/badges/ccpa.svg';
import badgeGdpr from 'images/pages/services/incident-reporting/badges/gdpr.svg';
import badgeIso from 'images/pages/services/incident-reporting/badges/iso-27001.png';
import badgeSoc from 'images/pages/services/incident-reporting/badges/soc-2.png';
import logoAdobe from 'images/pages/services/incident-reporting/logos/adobe.svg';
import logoEricsson from 'images/pages/services/incident-reporting/logos/ericsson.svg';
import logoHubspot from 'images/pages/services/incident-reporting/logos/hubspot.svg';
import logoMaersk from 'images/pages/services/incident-reporting/logos/maersk.svg';
import logoSalesforce from 'images/pages/services/incident-reporting/logos/salesforce.svg';
import logoSap from 'images/pages/services/incident-reporting/logos/sap.svg';
import logoSiemens from 'images/pages/services/incident-reporting/logos/siemens.svg';
import { cn } from 'utils/cn';

/* ---------------------------------------------------------------------------
 * Four product-UI card compositions, one per 50/50 step row, in the style of
 * Vanta's feature sections: a main white card on the tinted half, with a
 * smaller overlapping detail card. Swedish product UI on purpose.
 * ------------------------------------------------------------------------- */

const CheckDot = () => (
  <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[#E4F8EF]">
    <svg className="size-2.5" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M2 5.4 4 7.4 8 2.8"
        stroke="#078345"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

/* Step 1: the AI chat, Vanta-style "Ask a question" window */
export const ChatCard = () => (
  <div className="relative w-full max-w-[430px] lg:max-w-[400px]">
    <div className="rounded-2xl border border-gray-new-90 bg-white shadow-[0_32px_70px_-24px_rgba(12,13,13,0.25)]">
      {/* chat header */}
      <div className="flex items-center justify-between border-b border-gray-new-94 px-6 py-4">
        <div className="flex items-center gap-x-3">
          <Image className="h-[16px] w-auto" src={optitechLogo} height={16} alt="OptiTech" />
          <span className="h-3.5 w-px bg-gray-new-90" />
          <p className="text-[14px] leading-none font-medium tracking-tight text-gray-new-30">
            Ställ en fråga
          </p>
        </div>
        <svg
          className="size-3.5 text-gray-new-50"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 3l8 8M11 3l-8 8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="px-6 py-5">
        {/* powered by */}
        <p className="flex items-center justify-center gap-x-1.5 text-[12px] leading-none tracking-tight text-gray-new-40">
          <svg
            className="size-3.5 text-green-44"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 1.5l1.2 3.3L11.5 6 8.2 7.2 7 10.5 5.8 7.2 2.5 6l3.3-1.2L7 1.5ZM11.5 9.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4Z"
              fill="currentColor"
            />
          </svg>
          Drivs av OptiTech AI
        </p>
        {/* suggested questions */}
        <p className="mt-4 text-right text-[11px] leading-none tracking-tight text-gray-new-50">
          Föreslagna frågor:
        </p>
        <div className="mt-2.5 flex flex-col items-end gap-y-2">
          <span className="rounded-full border border-green-44/40 bg-[#EDFBF4] px-3.5 py-2 text-[12.5px] leading-none tracking-tight text-[#067647]">
            Omfattas vi av NIS2?
          </span>
          <span className="rounded-full border border-green-44/40 bg-[#EDFBF4] px-3.5 py-2 text-[12.5px] leading-none tracking-tight text-[#067647]">
            Vad krävs för ISO 27001-certifiering?
          </span>
        </div>
        {/* user message */}
        <p className="mt-4 text-right text-[11px] leading-none font-medium tracking-tight text-gray-new-30">
          Du
        </p>
        <div className="mt-2 flex justify-end">
          <p className="max-w-[300px] rounded-lg bg-black-new px-4 py-3 text-[13px] leading-snug tracking-tight text-white">
            Vilka regelverk träffar oss som energibolag med 80 anställda?
          </p>
        </div>
        {/* AI answer */}
        <p className="mt-4 flex items-center gap-x-2 text-[12px] leading-none font-medium tracking-tight text-black-new">
          <Image
            className="size-5 rounded-full"
            src="/favicon/favicon.svg"
            width={20}
            height={20}
            alt=""
          />
          OptiTech AI
        </p>
        <div className="mt-2 max-w-[320px] rounded-lg bg-gray-new-98 px-4 py-3.5">
          <p className="text-[13px] leading-snug tracking-tight text-gray-new-20">
            Som elleverantör klassas ni som väsentlig entitet enligt NIS2, oavsett storlek. Utöver
            det gäller GDPR, och era enterprise-kunder kommer sannolikt kräva ISO 27001...
          </p>
          <p className="mt-3 text-[11px] leading-none tracking-tight text-gray-new-50">Källor:</p>
          <p className="mt-1.5 flex items-center gap-x-1.5 text-[12px] leading-none font-medium tracking-tight text-[#067647]">
            <svg className="size-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M3.5 1.5h3.8L9.5 3.7v6.8h-6V1.5Z"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinejoin="round"
              />
            </svg>
            Cybersäkerhetslagen, 2 kap. · MSBFS 2025:3
          </p>
        </div>
        {/* input */}
        <div className="mt-5 rounded-full border border-gray-new-90 bg-gray-new-98 px-4 py-3">
          <p className="text-[12.5px] leading-none tracking-tight text-gray-new-60">
            Ställ en följdfråga...
          </p>
        </div>
      </div>
    </div>

    {/* overlay: AI insights */}
    <div className="absolute -right-24 bottom-8 w-[300px] rounded-2xl border border-gray-new-90 bg-white p-5 shadow-[0_32px_64px_-16px_rgba(12,13,13,0.3)] xl:-right-10 lg:-right-2">
      <p className="text-[16px] leading-none font-semibold tracking-tight text-black-new">
        AI-insikter
      </p>
      <div className="mt-3.5 overflow-hidden rounded-lg border border-gray-new-94">
        <div className="flex items-center justify-between bg-gray-new-98 px-3.5 py-2.5">
          <span className="text-[10.5px] leading-none tracking-tight text-gray-new-50">
            Konversationer
          </span>
          <span className="text-[10.5px] leading-none tracking-tight text-gray-new-50">
            Användare
          </span>
        </div>
        {[
          { text: 'Kunden frågade om entitetsklassning enligt NIS2.', user: 'Dana Smith' },
          { text: 'Frågor kring undantag i vår senaste revision.', user: 'Alex Lopez' },
          { text: 'Oro kring var datan lagras och EU-ägande.', user: 'Zhang Kai' },
        ].map(({ text, user }) => (
          <div
            className="flex items-start justify-between gap-x-3 border-t border-gray-new-94 px-3.5 py-3"
            key={user}
          >
            <span className="text-[11.5px] leading-snug tracking-tight text-gray-new-20">
              {text}
            </span>
            <span className="shrink-0 text-[11.5px] leading-snug tracking-tight text-gray-new-40">
              {user}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* Step 1 (old): frameworks with cross-mapping overlay */
export const FrameworksCard = () => (
  <div className="relative w-full max-w-[460px]">
    <div className="rounded-xl border border-gray-new-90 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(12,13,13,0.18)]">
      <div className="flex items-baseline justify-between">
        <p className="text-[16px] leading-none font-semibold tracking-tight text-black-new">
          Ramverk
        </p>
        <span className="rounded-[4px] border border-green-44/40 bg-[#EDFBF4] px-2 py-1 font-mono text-[10px] leading-none tracking-wider text-[#067647] uppercase">
          5 aktiva
        </span>
      </div>
      <ul className="mt-5 flex flex-col gap-y-4">
        {[
          { label: 'NIS2', value: 92 },
          { label: 'GDPR', value: 88 },
          { label: 'ISO 27001', value: 86 },
          { label: 'DORA', value: 76 },
          { label: 'AI Act', value: 64 },
        ].map(({ label, value }) => (
          <li key={label}>
            <div className="flex items-baseline justify-between">
              <span className="text-[13px] leading-none font-medium tracking-tight text-black-new">
                {label}
              </span>
              <span className="font-mono text-[12px] leading-none text-gray-new-40 tabular-nums">
                {value} %
              </span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-gray-new-94">
              <span
                className="block h-full rounded-full bg-linear-to-r from-[#00CC88] to-[#00E599]"
                style={{ width: `${value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
    {/* overlay: cross-mapping */}
    <div className="absolute -right-8 -bottom-10 w-[248px] rounded-xl border border-gray-new-90 bg-white p-4 shadow-[0_24px_48px_-16px_rgba(12,13,13,0.25)] lg:-right-3">
      <p className="font-mono text-[9px] leading-none tracking-[0.14em] text-gray-new-50 uppercase">
        Cross-mapping
      </p>
      <div className="mt-2.5 flex items-center gap-x-2">
        <CheckDot />
        <span className="text-[13px] leading-none font-medium tracking-tight text-black-new">
          MFA aktiverat
        </span>
      </div>
      <p className="mt-1.5 text-[11px] leading-snug tracking-tight text-gray-new-50">
        En kontroll uppfyller krav i fyra ramverk
      </p>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {['NIS2', 'DORA', 'GDPR', 'ISO 27001'].map((framework) => (
          <span
            className="rounded-[3px] border border-gray-new-90 bg-gray-new-98 px-1.5 py-1 font-mono text-[9px] leading-none tracking-tight text-gray-new-30"
            key={framework}
          >
            {framework}
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* Step 2: Trust Center access table, Vanta-style */
const ACCESS_ROWS = [
  {
    logo: logoSiemens,
    company: 'Siemens',
    name: 'Anna Weber',
    email: 'a.weber@siemens.com',
    opened: 'Öppnad',
    nda: { logo: logoAdobe, label: 'Adobe Sign' },
    granted: '15 apr',
  },
  {
    logo: logoEricsson,
    company: 'Ericsson',
    name: 'Johan Berg',
    email: 'johan.berg@ericsson.com',
    opened: 'Öppnad',
    nda: { logo: logoSalesforce, label: 'Salesforce' },
    granted: '1 maj',
  },
  {
    logo: logoMaersk,
    company: 'Maersk',
    name: 'Eva Holm',
    email: 'e.holm@maersk.com',
    opened: 'Ej öppnad',
    nda: { logo: logoHubspot, label: 'HubSpot' },
    granted: '4 maj',
  },
  {
    logo: logoSap,
    company: 'SAP',
    name: 'Lena Krause',
    email: 'l.krause@sap.com',
    opened: 'Öppnad',
    nda: { label: 'Scrive' },
    granted: '30 mar',
  },
];

export const AccessCard = ({ isWide = false }) => (
  <div className={cn('relative w-full', isWide ? 'max-w-none' : 'max-w-[560px]')}>
    <div
      className={cn(
        'overflow-hidden border border-gray-new-90 bg-white p-7 shadow-[0_32px_70px_-24px_rgba(12,13,13,0.25)] md:p-5',
        isWide
          ? 'rounded-l-2xl rounded-r-none border-r-0 md:rounded-2xl md:border-r'
          : 'rounded-2xl'
      )}
    >
      <h4 className="text-[22px] leading-none font-semibold tracking-tight text-black-new">
        Åtkomst
      </h4>
      {/* tabs */}
      <div className="mt-5 flex gap-x-6 border-b border-gray-new-90">
        <span className="relative pb-3 text-[13.5px] leading-none font-medium tracking-tight text-black-new after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2.5px] after:rounded-full after:bg-green-44">
          Beviljad åtkomst
        </span>
        <span className="pb-3 text-[13.5px] leading-none tracking-tight text-gray-new-50">
          Åtkomstförfrågningar
          <span className="ml-1.5 rounded-full bg-gray-new-94 px-1.5 py-0.5 font-mono text-[9px] leading-none text-gray-new-40">
            3
          </span>
        </span>
      </div>
      {/* table */}
      <div className="mt-4 overflow-hidden rounded-lg border border-gray-new-94">
        <div className="grid grid-cols-[1.1fr_1.5fr_0.9fr_1.1fr_0.9fr] gap-x-4 bg-gray-new-98 px-4 py-2.5 sm:grid-cols-[1fr_1.4fr_auto]">
          {['Företag', 'Kontakt', 'Senast öppnad', 'NDA', 'Beviljad'].map((column, columnIndex) => (
            <span
              className={cn(
                'text-[11px] leading-none tracking-tight text-gray-new-50',
                columnIndex > 2 && 'sm:hidden',
                columnIndex === 2 && 'sm:text-right'
              )}
              key={column}
            >
              {column}
            </span>
          ))}
        </div>
        {ACCESS_ROWS.map(({ logo, company, name, email, opened, nda, granted }) => (
          <div
            className="grid grid-cols-[1.1fr_1.5fr_0.9fr_1.1fr_0.9fr] items-center gap-x-4 border-t border-gray-new-94 px-4 py-3.5 sm:grid-cols-[1fr_1.4fr_auto]"
            key={company}
          >
            <span className="flex min-w-0 items-center gap-x-2.5">
              <Image
                className="h-4 w-auto max-w-[74px] object-contain object-left"
                src={logo}
                height={16}
                alt={company}
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[13px] leading-tight font-medium tracking-tight text-black-new">
                {name}
              </span>
              <span className="block truncate text-[11px] leading-tight tracking-tight text-gray-new-50">
                {email}
              </span>
            </span>
            <span
              className={cn(
                'text-[12px] leading-none tracking-tight sm:text-right',
                opened === 'Öppnad' ? 'text-gray-new-30' : 'text-gray-new-50'
              )}
            >
              {opened}
            </span>
            <span className="flex items-center gap-x-2 sm:hidden">
              {nda.logo ? (
                <Image
                  className="h-3.5 w-auto max-w-[70px] object-contain object-left"
                  src={nda.logo}
                  height={14}
                  alt={nda.label}
                />
              ) : (
                <span className="rounded-[3px] border border-gray-new-90 px-1.5 py-1 font-mono text-[9px] leading-none tracking-tight text-gray-new-30">
                  {nda.label}
                </span>
              )}
            </span>
            <span className="text-[12px] leading-none tracking-tight text-gray-new-30 sm:hidden">
              {granted}
            </span>
          </div>
        ))}
      </div>
      {/* footer note */}
      <p className="mt-4 flex items-center gap-x-1.5 text-[11px] leading-none tracking-tight text-gray-new-50">
        <span className="size-1.5 rounded-full bg-green-45" />
        NDA-insamling och godkännanden sköts automatiskt av OptiTech
      </p>
    </div>
  </div>
);

AccessCard.propTypes = {
  isWide: PropTypes.bool,
};

/* Step 2 (old): the public OptiTech Trust Center, Vanta-style */
export const TrustCenterCard = ({ isWide = false }) => (
  <div className={cn('relative w-full', isWide ? 'max-w-none' : 'max-w-[560px]')}>
    <div
      className={cn(
        'overflow-hidden border border-gray-new-90 bg-white shadow-[0_32px_70px_-24px_rgba(12,13,13,0.25)]',
        isWide
          ? 'rounded-l-2xl rounded-r-none border-r-0 md:rounded-2xl md:border-r'
          : 'rounded-2xl'
      )}
    >
      {/* app bar with the real logo */}
      <div className="flex items-center justify-between border-b border-gray-new-94 px-6 py-3.5">
        <div className="flex items-center gap-x-3">
          <Image className="h-[16px] w-auto" src={optitechLogo} height={16} alt="OptiTech" />
          <span className="h-3.5 w-px bg-gray-new-90" />
          <span className="text-[13px] leading-none font-medium tracking-tight text-gray-new-30">
            Trust Center
          </span>
        </div>
        <span className="font-mono text-[11px] leading-none tracking-tight text-gray-new-50">
          trust.optitech.se
        </span>
      </div>
      {/* branded header */}
      <div className="relative overflow-hidden bg-linear-to-br from-[#0E2E21] via-[#0F4A31] to-[#00995F] px-7 py-7">
        <div
          className="absolute top-1/2 -right-16 size-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#00E599_0%,#00CC88_40%,transparent_72%)] opacity-70"
          aria-hidden
        />
        <div
          className="absolute -top-10 right-16 size-40 rounded-full border-[14px] border-[#00E599]/25"
          aria-hidden
        />
        <div className="relative max-w-[330px]">
          <h4 className="text-[24px] leading-tight font-semibold tracking-tight text-white">
            Säkerhet hos OptiTech
          </h4>
          <p className="mt-2.5 text-[13px] leading-normal tracking-tight text-white/75">
            Vi kör vår egen produkt. Kontroller, certifikat och dokument på den här sidan uppdateras
            kontinuerligt, direkt från plattformen.
          </p>
          <p className="mt-3.5 flex items-center gap-x-4 text-[12px] leading-none tracking-tight text-white/70">
            <span>✉ security@optitech.se</span>
            <span className="underline decoration-white/40">Integritetspolicy</span>
          </p>
          <span className="mt-5 inline-flex rounded-[5px] bg-primary-1 px-4 py-2.5 text-[13px] leading-none font-semibold tracking-tight text-black">
            Begär åtkomst
          </span>
        </div>
      </div>
      {/* certification badges */}
      <div className="flex items-center gap-x-4 border-b border-gray-new-94 px-7 py-4">
        {[
          { src: badgeIso, alt: 'ISO 27001' },
          { src: badgeSoc, alt: 'SOC 2' },
          { src: badgeGdpr, alt: 'GDPR' },
          { src: badgeCcpa, alt: 'CCPA' },
        ].map(({ src, alt }) => (
          <Image
            className="size-12 object-contain"
            src={src}
            width={48}
            height={48}
            alt={alt}
            key={alt}
          />
        ))}
        <span className="font-mono text-[12px] leading-none tracking-tight text-gray-new-40">
          + NIS2 · DORA
        </span>
        <span className="ml-auto inline-flex items-center gap-x-1.5 rounded-[4px] bg-[#E4F8EF] px-2 py-1.5 font-mono text-[10px] leading-none tracking-wider text-[#067647] uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-green-45" />
          Live
        </span>
      </div>
      {/* filter row */}
      <div className="flex items-center gap-x-2.5 px-7 pt-4 pb-3">
        <span className="text-[12.5px] leading-none tracking-tight text-gray-new-40">
          Filtrera:
        </span>
        <span className="rounded-[5px] bg-[#E4F8EF] px-2.5 py-2 text-[12.5px] leading-none font-medium tracking-tight text-[#067647]">
          Bransch (1) ↑
        </span>
        <span className="rounded-[5px] border border-gray-new-90 px-2.5 py-2 text-[12.5px] leading-none tracking-tight text-gray-new-30">
          Ramverk (2) ↓
        </span>
        <span className="rounded-[5px] border border-gray-new-90 px-2.5 py-2 text-[12.5px] leading-none tracking-tight text-gray-new-30">
          Region (1) ↓
        </span>
      </div>
      {/* content skeletons */}
      <div className="relative grid grid-cols-[96px_1fr] gap-4 px-7 pt-2 pb-7">
        <div className="flex flex-col gap-y-3.5 pt-1.5">
          {['Policyer', 'Rapporter', 'Certifikat', 'Allmänt'].map((rail, railIndex) => (
            <span
              className={
                railIndex === 0
                  ? 'text-[12px] leading-none font-medium tracking-tight text-black-new'
                  : 'text-[12px] leading-none tracking-tight text-gray-new-40'
              }
              key={rail}
            >
              {rail}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {['Infrastruktur', 'Produktsäkerhet', 'Datasäkerhet', 'Internt arbete'].map((card) => (
            <div className="rounded-lg border border-gray-new-94 p-3.5" key={card}>
              <p className="text-[12px] leading-none font-medium tracking-tight text-black-new">
                {card}
              </p>
              <span className="mt-2.5 block h-2 w-full rounded-full bg-gray-new-94" />
              <span className="mt-2 block h-2 w-4/5 rounded-full bg-gray-new-94" />
              <span className="mt-2 block h-2 w-3/5 rounded-full bg-gray-new-94" />
            </div>
          ))}
        </div>
        {/* open filter dropdown overlay */}
        <div className="absolute top-1 left-[104px] w-[176px] rounded-lg border border-gray-new-90 bg-white p-3 shadow-[0_24px_48px_-12px_rgba(12,13,13,0.28)]">
          {[
            { label: 'Energi', checked: true },
            { label: 'Vård' },
            { label: 'Finans' },
            { label: 'Transport' },
            { label: 'Tillverkning' },
          ].map(({ label, checked }) => (
            <span className="flex items-center gap-x-2.5 py-2" key={label}>
              <span
                className={
                  checked
                    ? 'flex size-4 items-center justify-center rounded-[3px] bg-green-45'
                    : 'size-4 rounded-[3px] border border-gray-new-80'
                }
              >
                {checked && (
                  <svg className="size-2.5" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                    <path
                      d="M1.5 4.2 3.2 6 6.5 2"
                      stroke="#0C0D0D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span
                className={
                  checked
                    ? 'text-[12.5px] leading-none font-medium tracking-tight text-black-new'
                    : 'text-[12.5px] leading-none tracking-tight text-gray-new-40'
                }
              >
                {label}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

TrustCenterCard.propTypes = {
  isWide: PropTypes.bool,
};

/* Step 4: controls overview, exactly like the reference "Controls" card */
const SolidCheck = () => (
  <span className="flex size-[18px] shrink-0 items-center justify-center rounded-full bg-[#00A868]">
    <svg className="size-2.5" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M2 5.4 4 7.4 8 2.8"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export const RealtimeCard = () => (
  <div className="relative w-full max-w-[560px]">
    <div className="rounded-2xl border border-gray-new-90 bg-white p-7 shadow-[0_32px_70px_-24px_rgba(12,13,13,0.25)] md:p-5">
      <div className="flex items-center gap-x-3.5">
        <p className="text-[24px] leading-none font-semibold tracking-tight text-black-new">
          Kontroller
        </p>
        <span className="inline-flex items-center gap-x-1.5 rounded-full bg-[#DBF7E9] px-3 py-2 text-[12px] leading-none font-medium tracking-tight text-[#067647]">
          <SolidCheck />
          Uppdaterad för 5 min sedan
        </span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-1">
        {[
          {
            group: 'Infrastruktursäkerhet',
            rows: [
              'Serverinfrastruktur underhållen',
              'Nätverkssegmentering implementerad',
              'Loggning och övervakning aktiverad',
            ],
            more: 23,
          },
          {
            group: 'Organisatorisk säkerhet',
            rows: [
              'Bärbara media krypterade',
              'Lösenordspolicy tillämpad',
              'Anti-malware aktiverat',
            ],
            more: 7,
          },
          {
            group: 'Produktsäkerhet',
            rows: [
              'Datatrafik krypterad',
              'Kryptering i vila tillämpad',
              'Sårbarhetsövervakning aktiv…',
            ],
            more: 2,
          },
          {
            group: 'Interna säkerhetsrutiner',
            rows: [
              'Konfigurationshantering tillämp…',
              'Ändringshantering efterlevs',
              'Produktionsåtkomst begränsad…',
            ],
            more: 17,
          },
        ].map(({ group, rows, more }) => (
          <div className="rounded-lg border border-gray-new-90 p-5" key={group}>
            <p className="text-[14.5px] leading-none font-semibold tracking-tight text-black-new">
              {group}
            </p>
            <ul className="mt-4 flex flex-col gap-y-3">
              {rows.map((row) => (
                <li className="flex items-center gap-x-2.5" key={row}>
                  <SolidCheck />
                  <span className="truncate text-[12.5px] leading-none tracking-tight text-gray-new-30">
                    {row}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12px] leading-none font-medium tracking-tight text-green-44">
              + {more} fler
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* Step 3: alerts with remediation actions and AI snippet overlay */
export const AlertsCard = () => (
  <div className="relative w-full max-w-[460px]">
    <div className="rounded-xl border border-gray-new-90 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(12,13,13,0.18)]">
      <div className="flex items-baseline justify-between">
        <p className="text-[16px] leading-none font-semibold tracking-tight text-black-new">
          Avvikelser
        </p>
        <span className="font-mono text-[11px] leading-none tracking-tight text-gray-new-50">
          2 öppna · 41 åtgärdade i år
        </span>
      </div>
      <ul className="mt-5 flex flex-col divide-y divide-gray-new-94">
        {[
          {
            dot: 'bg-[#DA0B51]',
            title: 'MFA avstängt',
            meta: '3 användare · Entra ID',
            action: 'Åtgärda',
            primary: true,
          },
          {
            dot: 'bg-[#FEBC2E]',
            title: 'Offboarding försenad',
            meta: '1 konto · HR-system',
            action: 'Skapa ärende',
          },
          {
            dot: 'bg-green-45',
            title: 'Backuptest genomfört',
            meta: 'Verifierat 06:00 · AWS',
            action: 'Visa bevis',
          },
        ].map(({ dot, title, meta, action, primary }) => (
          <li className="flex items-center gap-x-3 py-3.5 first:pt-0 last:pb-0" key={title}>
            <span className={`size-2 shrink-0 rounded-full ${dot}`} />
            <span className="min-w-0">
              <span className="block truncate text-[13px] leading-tight font-medium tracking-tight text-black-new">
                {title}
              </span>
              <span className="block truncate font-mono text-[10px] leading-tight tracking-tight text-gray-new-50">
                {meta}
              </span>
            </span>
            <span
              className={
                primary
                  ? 'ml-auto shrink-0 rounded-[4px] bg-black-new px-2.5 py-1.5 text-[11px] leading-none font-medium tracking-tight text-white'
                  : 'ml-auto shrink-0 rounded-[4px] border border-gray-new-85 px-2.5 py-1.5 text-[11px] leading-none font-medium tracking-tight text-gray-new-30'
              }
            >
              {action}
            </span>
          </li>
        ))}
      </ul>
    </div>
    {/* overlay: AI snippet */}
    <div className="absolute -right-8 -bottom-11 w-[252px] rounded-xl border border-gray-new-90 bg-white p-4 shadow-[0_24px_48px_-16px_rgba(12,13,13,0.25)] lg:-right-3">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[9px] leading-none tracking-[0.14em] text-gray-new-50 uppercase">
          AI-förslag
        </p>
        <span className="rounded-[3px] bg-[#E4F8EF] px-1.5 py-0.5 font-mono text-[8px] leading-none tracking-wider text-[#067647] uppercase">
          Redo
        </span>
      </div>
      <div className="mt-2.5 rounded-md bg-gray-new-98 p-2.5">
        <p className="font-mono text-[10px] leading-relaxed text-gray-new-30">
          Set-MfaPolicy -Scope All
          <br />
          -EnforceFor @(3 användare)
        </p>
      </div>
      <span className="mt-2.5 inline-flex rounded-[4px] bg-black-new px-2.5 py-1.5 text-[11px] leading-none font-medium tracking-tight text-white">
        Kör via Entra ID
      </span>
    </div>
  </div>
);

/* Step 4: the roadmap checklist with next-step overlay */
export const PlatformCard = () => (
  <div className="relative w-full max-w-[460px]">
    <div className="rounded-xl border border-gray-new-90 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(12,13,13,0.18)]">
      <div className="flex items-baseline justify-between">
        <p className="text-[16px] leading-none font-semibold tracking-tight text-black-new">
          Er färdplan mot NIS2
        </p>
        <span className="font-mono text-[12px] leading-none text-gray-new-40 tabular-nums">
          64 %
        </span>
      </div>
      <div className="mt-3 h-1.5 rounded-full bg-gray-new-94">
        <span className="block h-full w-[64%] rounded-full bg-linear-to-r from-[#00CC88] to-[#00E599]" />
      </div>
      <ul className="mt-5 flex flex-col gap-y-3.5">
        {[
          { label: 'Gap-analys', meta: '20 frågor · klar 14 aug', state: 'done' },
          { label: 'Policyer och dokument', meta: '12 av 12 signerade', state: 'done' },
          {
            label: 'Kontinuerlig bevisinsamling',
            meta: '12 integrationer anslutna',
            state: 'active',
          },
          { label: 'Utbildning av styrelse och ledning', meta: 'bokad 15 nov', state: 'todo' },
          { label: 'Intern revision', meta: 'partner: Advisense', state: 'todo' },
        ].map(({ label, meta, state }) => (
          <li className="flex items-center gap-x-3" key={label}>
            {state === 'done' && <CheckDot />}
            {state === 'active' && (
              <span className="relative flex size-4 shrink-0 items-center justify-center">
                <span className="absolute size-4 animate-ping rounded-full bg-green-45/30" />
                <span className="size-2.5 rounded-full border-2 border-green-45 bg-white" />
              </span>
            )}
            {state === 'todo' && (
              <span className="size-4 shrink-0 rounded-full border border-dashed border-gray-new-70" />
            )}
            <span className="min-w-0">
              <span
                className={`block truncate text-[13px] leading-tight font-medium tracking-tight ${
                  state === 'todo' ? 'text-gray-new-50' : 'text-black-new'
                }`}
              >
                {label}
              </span>
              <span className="block truncate font-mono text-[10px] leading-tight tracking-tight text-gray-new-50">
                {meta}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
    {/* overlay: next step */}
    <div className="absolute -right-8 -bottom-10 w-[240px] rounded-xl border border-gray-new-90 bg-white p-4 shadow-[0_24px_48px_-16px_rgba(12,13,13,0.25)] lg:-right-3">
      <p className="font-mono text-[9px] leading-none tracking-[0.14em] text-gray-new-50 uppercase">
        Nästa steg
      </p>
      <div className="mt-2.5 flex items-center gap-x-2.5">
        <Image
          className="size-7 rounded-full object-cover"
          src={avatarDana}
          width={28}
          height={28}
          alt=""
        />
        <span className="min-w-0">
          <span className="block truncate text-[12px] leading-tight font-medium tracking-tight text-black-new">
            Styrelseutbildning
          </span>
          <span className="block truncate font-mono text-[10px] leading-tight tracking-tight text-gray-new-50">
            15 nov · Dana Smith ansvarar
          </span>
        </span>
      </div>
    </div>
  </div>
);
