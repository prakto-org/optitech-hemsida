'use client';

import { useState } from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

const SwedenFlagIcon = () => (
  <svg
    className="h-3 w-4 shrink-0"
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <g clipPath="url(#login-se-flag)">
      <rect width="16" height="12" fill="#006AA7" />
      <rect x="4.5" width="2.5" height="12" fill="#FECC02" />
      <rect y="4.75" width="16" height="2.5" fill="#FECC02" />
    </g>
    <defs>
      <clipPath id="login-se-flag">
        <rect width="16" height="12" rx="2" />
      </clipPath>
    </defs>
  </svg>
);

const EuFlagIcon = () => (
  <svg
    className="h-3 w-4 shrink-0"
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <g clipPath="url(#login-eu-flag)">
      <rect width="16" height="12" fill="#003399" />
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index / 12) * Math.PI * 2;
        return (
          <circle
            key={index}
            cx={8 + Math.sin(angle) * 3.4}
            cy={6 - Math.cos(angle) * 3.4}
            r="0.55"
            fill="#FFCC00"
          />
        );
      })}
    </g>
    <defs>
      <clipPath id="login-eu-flag">
        <rect width="16" height="12" rx="2" />
      </clipPath>
    </defs>
  </svg>
);

const UsFlagIcon = () => (
  <svg
    className="h-3 w-4 shrink-0"
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <g clipPath="url(#login-us-flag)">
      <rect width="16" height="12" fill="#FFFFFF" />
      {[0, 2, 4, 6, 8, 10].map((y) => (
        <rect key={y} y={y * 0.923} width="16" height="0.923" fill="#B22234" />
      ))}
      <rect width="7" height="5.54" fill="#3C3B6E" />
      {[1.2, 2.8, 4.4].map((y) =>
        [1.2, 2.8, 4.4, 5.8].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.4" fill="#FFFFFF" />
        ))
      )}
    </g>
    <defs>
      <clipPath id="login-us-flag">
        <rect width="16" height="12" rx="2" />
      </clipPath>
    </defs>
  </svg>
);

const REGIONS = [
  { id: 'se', code: 'SE', label: 'Sverige', location: 'Stockholm', Flag: SwedenFlagIcon },
  { id: 'eu', code: 'EU', label: 'EU', location: 'Frankfurt', Flag: EuFlagIcon },
  { id: 'us', code: 'US', label: 'USA', location: 'N. Virginia', Flag: UsFlagIcon },
];

const ChevronDownIcon = () => (
  <svg
    className="ml-0.5 shrink-0 text-[#6f6b8a]"
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M1 1l3 3 3-3"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SignInCard = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [regionId, setRegionId] = useState('se');
  const [isRegionOpen, setIsRegionOpen] = useState(false);

  const region = REGIONS.find(({ id }) => id === regionId);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(true);
  };

  return (
    <section className="flex min-h-[545px] w-full max-w-[440px] flex-col justify-center bg-white px-16 py-14 shadow-[0px_2px_10px_rgba(33,27,78,0.07)] xs:px-8">
      <h1 className="font-serif text-[28px] leading-tight font-semibold tracking-[-0.01em] text-[#211b4e]">
        Welcome back!
      </h1>
      <div className="mt-7 flex items-center justify-between gap-3">
        <h2 className="text-[15px] leading-none font-semibold text-[#211b4e]">
          Sign in to OptiTech
        </h2>
        <div className="relative">
          <button
            className="flex h-[26px] items-center gap-1.5 rounded-[4px] border border-[#d9d9e3] bg-white px-2 text-[11px] leading-none font-medium text-[#211b4e] transition-colors hover:border-[#b9b9c9]"
            type="button"
            aria-label={`Region: ${region.label}`}
            aria-expanded={isRegionOpen}
            onClick={() => setIsRegionOpen((isOpen) => !isOpen)}
          >
            <region.Flag />
            {region.code}
            <ChevronDownIcon />
          </button>
          {isRegionOpen && (
            <div className="absolute top-full right-0 z-10 mt-1.5 w-[228px] rounded-[4px] border border-[#d9d9e3] bg-white py-1.5 shadow-[0px_4px_16px_rgba(33,27,78,0.10)]">
              <p className="px-3 pt-1 pb-1.5 text-[10px] leading-none font-medium tracking-wide text-[#6f6b8a] uppercase">
                Region där dina data hanteras
              </p>
              {REGIONS.map(({ id, code, label, location, Flag }) => (
                <button
                  className="flex w-full items-center gap-2 px-3 py-2 text-left text-[12px] leading-none text-[#211b4e] transition-colors hover:bg-[#f4f4f8]"
                  type="button"
                  key={id}
                  onClick={() => {
                    setRegionId(id);
                    setIsRegionOpen(false);
                  }}
                >
                  <Flag />
                  <span className="font-medium">{label}</span>
                  <span className="text-[#9c9cad]">{location}</span>
                  {id === regionId && (
                    <span className="ml-auto text-[10px] font-medium text-[#4d42e1]">{code}</span>
                  )}
                </button>
              ))}
              <p className="border-t border-[#ededf3] px-3 pt-2 pb-1 text-[10px] leading-snug text-[#9c9cad]">
                All lagring och behandling sker inom vald region.
              </p>
            </div>
          )}
        </div>
      </div>
      <form className="mt-4" onSubmit={handleSubmit}>
        <label
          className="block text-[11px] leading-none font-bold text-[#211b4e]"
          htmlFor="login-email"
        >
          Enter your email address
        </label>
        <input
          className="mt-2 h-9 w-full rounded-[4px] border border-[#cfcfdb] bg-white px-3 text-[13px] leading-none text-[#211b4e] transition-colors outline-none placeholder:text-[#9c9cad] focus:border-[#4d42e1]"
          id="login-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError(false);
          }}
        />
        <button
          className="mt-3 h-9 w-full rounded-[4px] bg-[#211b4e] text-[13px] leading-none font-medium text-white transition-colors hover:bg-[#2f2769] disabled:cursor-default disabled:bg-[#ededf3] disabled:text-[#a1a1b3]"
          type="submit"
          disabled={!email.trim()}
        >
          Continue with email
        </button>
        {error && (
          <p className="mt-3 text-xs leading-snug text-[#d92d20]" role="alert">
            You don&apos;t have an active account with us. Please contact us for more information.
          </p>
        )}
      </form>
      <p className="mt-6 text-xs leading-none text-[#211b4e]">
        Don&apos;t have an account?{' '}
        <Link
          className="text-xs font-normal text-[#4d42e1] underline decoration-from-font underline-offset-2"
          to={LINKS.contactSales}
        >
          Contact us.
        </Link>
      </p>
    </section>
  );
};

export default SignInCard;
