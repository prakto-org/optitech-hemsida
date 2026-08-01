import PropTypes from 'prop-types';

import Container from 'components/shared/container';
import CTANew from 'components/shared/cta-new';
import Link from 'components/shared/link';

// Index page for /services and /frameworks, on the light marketing theme.
const MarketingListing = ({ eyebrow = null, title, description, items, cta, locale = 'en' }) => {
  const readMore = locale === 'sv' ? 'Läs mer' : 'Read more';

  return (
    <>
      <section className="hero relative overflow-hidden bg-[#F7F5EF] pt-[152px] safe-paddings pb-24 xl:pt-[136px] lg:pt-28 md:pt-24">
        <Container size="1280">
          <div className="max-w-[820px]">
            {eyebrow && (
              <span className="font-mono text-[11px] leading-none tracking-[0.14em] text-gray-new-50 uppercase">
                {eyebrow}
              </span>
            )}
            <h1 className="mt-5 font-serif text-[60px] leading-[1.04] font-normal tracking-extra-tight text-black-new xl:text-[52px] lg:text-[44px] md:text-[34px]">
              {title}
            </h1>
            <p className="mt-6 max-w-[620px] text-lg leading-normal tracking-extra-tight text-gray-new-40 lg:mt-5 lg:text-base">
              {description}
            </p>
          </div>
        </Container>
      </section>

      <section className="listing mt-20 safe-paddings lg:mt-16 md:mt-12">
        <Container size="1152">
          <ul className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  className="group flex h-full flex-col border border-gray-new-90 p-6 transition-colors duration-200 hover:border-black-new"
                  to={item.href}
                >
                  <h2 className="text-xl leading-snug font-medium tracking-tighter text-black-new">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-[15px] leading-normal tracking-extra-tight text-gray-new-40">
                    {item.tagline}
                  </p>
                  <span className="mt-6 text-sm leading-none tracking-extra-tight text-gray-new-40 transition-colors duration-200 group-hover:text-black-new">
                    {readMore}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTANew
        className="mt-44 xl:mt-36 lg:mt-28 md:mt-20"
        label={eyebrow}
        title={cta.title}
        description={cta.description}
        buttonText={cta.button.label}
        buttonUrl={cta.button.href}
      />
    </>
  );
};

MarketingListing.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
    })
  ).isRequired,
  cta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    button: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  locale: PropTypes.string,
};

export default MarketingListing;
