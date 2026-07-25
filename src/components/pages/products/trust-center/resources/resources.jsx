import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import LINKS from 'constants/links';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M3 8h10m0 0-4-4m4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Illustration = ({ variant }) => {
  if (variant === 0) {
    return (
      <div
        className="relative flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-tc-forest"
        aria-hidden
      >
        <span
          className="absolute -bottom-10 -left-8 h-32 w-48 bg-tc-green"
          style={{ borderRadius: '55% 45% 60% 40% / 60% 50% 50% 40%' }}
        />
        <span
          className="absolute -top-12 -right-6 h-28 w-40 bg-tc-green-dark opacity-70"
          style={{ borderRadius: '45% 55% 40% 60% / 50% 60% 40% 50%' }}
        />
        <span className="relative h-16 w-24 rounded-lg bg-white shadow-lg" />
      </div>
    );
  }
  if (variant === 1) {
    return (
      <div
        className="relative flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-tc-plum"
        aria-hidden
      >
        <span
          className="absolute -bottom-8 left-1/4 h-28 w-44 bg-tc-purple"
          style={{ borderRadius: '50% 50% 45% 55% / 65% 55% 45% 35%' }}
        />
        <span
          className="absolute -top-10 -left-8 h-24 w-36 bg-tc-violet-light opacity-60"
          style={{ borderRadius: '60% 40% 55% 45% / 45% 60% 40% 55%' }}
        />
        <span className="relative flex h-16 w-24 items-center justify-center rounded-lg bg-white shadow-lg">
          <span className="font-serif text-2xl text-tc-plum">98%</span>
        </span>
      </div>
    );
  }
  return (
    <div
      className="relative flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-tc-sand"
      aria-hidden
    >
      <span
        className="absolute -right-10 -bottom-12 h-32 w-48 bg-tc-sand-dark"
        style={{ borderRadius: '50% 50% 60% 40% / 55% 45% 55% 45%' }}
      />
      <span className="relative h-16 w-24 rounded-t-lg border-2 border-tc-ink bg-tc-green" />
      <span className="absolute mt-16 h-2 w-32 rounded-full bg-tc-ink" />
    </div>
  );
};

Illustration.propTypes = {
  variant: PropTypes.number.isRequired,
};

const Resources = () => {
  const t = useTranslations('products.trustCenter.resources');
  const items = t.raw('items');

  return (
    <section className="resources bg-white py-28 safe-paddings lg:py-20 md:py-14">
      <Container size="1152">
        <h2 className="mx-auto max-w-[560px] text-center font-serif text-[52px] leading-[1.08] font-normal tracking-extra-tight text-tc-ink xl:text-[44px] lg:text-[38px] md:text-[32px]">
          {t('title')}
        </h2>
        <ul className="mt-16 grid grid-cols-3 gap-x-8 lg:mt-12 lg:gap-x-6 md:mt-9 md:grid-cols-1 md:gap-y-9">
          {items.map((item, index) => (
            <li key={item.title}>
              <Illustration variant={index} />
              <span className="mt-5 block text-xs font-semibold tracking-wide text-tc-faint uppercase md:mt-4">
                {item.type}
              </span>
              <h3 className="mt-2 text-lg leading-snug font-semibold tracking-extra-tight text-tc-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-normal tracking-extra-tight text-tc-body">
                {item.description}
              </p>
              <Link
                className="mt-4 inline-flex items-center gap-x-2 text-sm font-semibold text-tc-green-deep transition-colors duration-200 hover:text-primary-2"
                to={LINKS.blog}
              >
                {t('readMore')}
                <ArrowIcon />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Resources;
