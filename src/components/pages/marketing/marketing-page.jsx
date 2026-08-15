import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import CTANew from 'components/shared/cta-new';
import Item from 'components/shared/faq/item';
import { cn } from 'utils/cn';

import Scene from './scene';

const SECTION = 'mt-32 safe-paddings xl:mt-28 lg:mt-24 md:mt-16';

const H2 =
  'text-[44px] leading-dense tracking-tighter text-balance text-black-new xl:text-[40px] lg:text-[36px] md:text-[28px]';
const LEAD = 'mt-5 text-lg leading-normal tracking-extra-tight text-gray-new-40 lg:text-base';

const Eyebrow = ({ children }) => (
  <span className="font-mono text-[11px] leading-none tracking-[0.14em] text-gray-new-50 uppercase">
    {children}
  </span>
);

Eyebrow.propTypes = { children: PropTypes.node.isRequired };

/* Numbered cards, used for the "how it works" step list. */
const Steps = ({ title, intro, items }) => (
  <section className={SECTION}>
    <Container size="1152">
      <div className="max-w-[720px]">
        <h2 className={H2}>{title}</h2>
        {intro && <p className={LEAD}>{intro}</p>}
      </div>
      <ol className="mt-12 grid grid-cols-4 gap-6 lg:mt-10 lg:grid-cols-2 md:mt-8 md:grid-cols-1">
        {items.map((item, index) => (
          <li className="flex flex-col border-t border-gray-new-20 pt-5" key={item.title}>
            <span className="font-mono text-[11px] leading-none text-gray-new-50">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-lg leading-snug font-medium tracking-tighter text-black-new">
              {item.title}
            </h3>
            <p className="mt-2 text-[15px] leading-normal tracking-extra-tight text-gray-new-40">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

/* Two-column band: copy on one side, product scene on the other. */
const Showcase = ({ title, intro, items, scene, flip }) => (
  <section className={SECTION}>
    <Container size="1280">
      <div
        className={cn(
          'grid grid-cols-2 items-center gap-x-16 xl:gap-x-12 lg:grid-cols-1 lg:gap-y-10',
          flip && 'lg:[&>*:first-child]:order-1'
        )}
      >
        <div className={cn('max-w-[520px] lg:max-w-none', flip && 'order-2 lg:order-none')}>
          <h2 className={H2}>{title}</h2>
          {intro && <p className={LEAD}>{intro}</p>}
          <ul className="mt-8 flex flex-col gap-y-5">
            {items.slice(0, 4).map((item) => (
              <li className="border-t border-gray-new-90 pt-4" key={item.title}>
                <h3 className="text-base leading-snug font-medium tracking-tighter text-black-new">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-normal tracking-extra-tight text-gray-new-40">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className={cn(flip && 'order-1 lg:order-none')}>{scene}</div>
      </div>
    </Container>
  </section>
);

/* Plain three-column grid for capability lists. */
const Grid = ({ title, intro, items }) => (
  <section className={SECTION}>
    <Container size="1152">
      <div className="max-w-[720px]">
        <h2 className={H2}>{title}</h2>
        {intro && <p className={LEAD}>{intro}</p>}
      </div>
      <ul className="mt-12 grid grid-cols-3 gap-x-8 gap-y-10 lg:mt-10 lg:grid-cols-2 md:mt-8 md:grid-cols-1 md:gap-y-6">
        {items.map((item) => (
          <li key={item.title}>
            <h3 className="text-lg leading-snug font-medium tracking-tighter text-black-new">
              {item.title}
            </h3>
            <p className="mt-2 text-[15px] leading-normal tracking-extra-tight text-gray-new-40">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

const sectionShape = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, description: PropTypes.string })
  ).isRequired,
};

Steps.propTypes = sectionShape;
Grid.propTypes = sectionShape;
Showcase.propTypes = { ...sectionShape, scene: PropTypes.node, flip: PropTypes.bool };

const MarketingPage = ({ content, locale = 'en', hideHero = false }) => {
  const {
    hero,
    painPoints,
    steps,
    features,
    stats,
    related,
    quote,
    faq,
    cta,
    visual,
    detailVisual,
  } = content;
  const readMore = locale === 'sv' ? 'Läs mer' : 'Read more';
  const sceneRows = (features?.items || painPoints?.items || []).map((item) => item.title);
  const sceneMetrics = (stats || []).map(({ value, label }) => ({ value, label }));

  return (
    <>
      {!hideHero && (
        <section className="hero relative overflow-hidden bg-[#F7F5EF] pt-[152px] safe-paddings pb-24 xl:pt-[136px] lg:pt-28 md:pt-24">
          <Container size="1280">
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] items-center gap-x-16 xl:gap-x-10 lg:grid-cols-1 lg:gap-y-12">
              <div className="max-w-[600px] lg:max-w-none">
                {hero.eyebrow && <Eyebrow>{hero.eyebrow}</Eyebrow>}
                <h1 className="mt-5 font-serif text-[60px] leading-[1.04] font-normal tracking-extra-tight text-black-new xl:text-[52px] lg:text-[44px] md:text-[34px]">
                  {hero.title}
                </h1>
                <p className="mt-6 max-w-[540px] text-lg leading-normal tracking-extra-tight text-gray-new-40 lg:mt-5 lg:max-w-none lg:text-base">
                  {hero.description}
                </p>
                <div className="mt-9 flex flex-wrap gap-4 md:mt-7 sm:w-full sm:flex-col">
                  <Button theme="secondary" size="new" to={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                  </Button>
                  {hero.secondaryCta && (
                    <Button theme="outlined-new" size="new" to={hero.secondaryCta.href}>
                      {hero.secondaryCta.label}
                    </Button>
                  )}
                </div>
              </div>
              <Scene
                variant={visual}
                label={hero.eyebrow}
                rows={sceneRows}
                metrics={sceneMetrics}
              />
            </div>
          </Container>
        </section>
      )}

      {stats?.length > 0 && (
        <section className="facts mt-24 safe-paddings xl:mt-20 lg:mt-16 md:mt-12">
          <Container size="1152">
            <ul className="grid grid-cols-4 gap-x-10 xl:gap-x-7 lg:grid-cols-2 lg:gap-y-10 md:grid-cols-1">
              {stats.map(({ value, label }) => (
                <li className="border-t border-gray-new-20 pt-5" key={label}>
                  <p className="font-serif text-[40px] leading-none font-normal tracking-extra-tight text-black-new xl:text-[34px]">
                    {value}
                  </p>
                  <p className="mt-3 max-w-[240px] text-sm leading-normal tracking-extra-tight text-gray-new-40">
                    {label}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {painPoints && <Grid {...painPoints} />}

      {steps && <Steps {...steps} />}

      {features && (
        <Showcase
          {...features}
          flip={visual === 'console' || visual === 'register'}
          scene={
            <Scene
              variant={detailVisual}
              label={hero.eyebrow}
              rows={(steps?.items || []).map((item) => item.title)}
              metrics={sceneMetrics.slice(1)}
            />
          }
        />
      )}

      {quote && (
        <section className={SECTION}>
          <Container size="1152">
            <figure className="max-w-[900px]">
              <blockquote className="font-serif text-[36px] leading-snug font-normal tracking-extra-tight text-balance text-black-new xl:text-[32px] lg:text-[28px] md:text-[24px]">
                {quote.text}
              </blockquote>
              <figcaption className="mt-6 text-base leading-normal tracking-extra-tight text-gray-new-40">
                {quote.author}
                {quote.author && quote.role ? ', ' : ''}
                {quote.role}
              </figcaption>
            </figure>
          </Container>
        </section>
      )}

      {related && (
        <section className={SECTION}>
          <Container size="1152">
            <div className="max-w-[720px]">
              <h2 className={H2}>{related.title}</h2>
              {related.intro && <p className={LEAD}>{related.intro}</p>}
            </div>
            <ul className="mt-12 grid grid-cols-3 gap-6 lg:mt-10 lg:grid-cols-2 md:mt-8 md:grid-cols-1">
              {related.items.map((item) => (
                <li key={item.href}>
                  <a
                    className="group flex h-full flex-col border border-gray-new-90 p-6 transition-colors duration-200 hover:border-black-new"
                    href={item.href}
                  >
                    <h3 className="text-lg leading-snug font-medium tracking-tighter text-black-new">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-normal tracking-extra-tight text-gray-new-40">
                      {item.description}
                    </p>
                    <span className="mt-6 text-sm leading-none tracking-extra-tight text-gray-new-40 transition-colors duration-200 group-hover:text-black-new">
                      {readMore}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {faq && (
        <section className={`faq ${SECTION}`} id="faq">
          <Container
            className="flex gap-x-16 xl:gap-x-8 lg:flex-col lg:gap-y-10 md:gap-y-5"
            size="1152"
          >
            <h2 className="w-80 shrink-0 text-[36px] leading-dense tracking-tighter text-balance text-black-new xl:w-[288px] xl:text-[32px] lg:w-full md:text-[28px]">
              {faq.title}
            </h2>
            <ul className="flex w-full flex-col">
              {faq.items.map((item, index) => (
                <Item
                  {...item}
                  initialState={index === 0 ? 'open' : 'closed'}
                  key={item.question}
                  index={index}
                />
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CTANew
        className="mt-44 xl:mt-36 lg:mt-28 md:mt-20"
        label={hero.eyebrow}
        title={cta.title}
        description={cta.description}
        buttonText={cta.button.label}
        buttonUrl={cta.button.href}
      />
    </>
  );
};

MarketingPage.propTypes = {
  content: PropTypes.shape({
    hero: PropTypes.object.isRequired,
    painPoints: PropTypes.object,
    steps: PropTypes.object,
    features: PropTypes.object,
    stats: PropTypes.array,
    related: PropTypes.object,
    quote: PropTypes.object,
    faq: PropTypes.object,
    cta: PropTypes.object.isRequired,
    visual: PropTypes.string,
    detailVisual: PropTypes.string,
  }).isRequired,
  locale: PropTypes.string,
  hideHero: PropTypes.bool,
};

export default MarketingPage;
