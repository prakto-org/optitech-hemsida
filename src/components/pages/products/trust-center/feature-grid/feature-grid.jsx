import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';

import Container from 'components/shared/container';
import { cn } from 'utils/cn';

const VIGNETTE_TYPES = ['integrations', 'insights', 'roi', 'filters', 'subscribers', 'branding'];

const Bar = ({ className }) => (
  <span className={cn('block rounded-sm bg-white/20', className)} aria-hidden />
);

Bar.propTypes = {
  className: PropTypes.string,
};

const Vignette = ({ type }) => {
  switch (type) {
    case 'integrations':
      return (
        <div className="flex items-center gap-x-3" aria-hidden>
          <span className="flex size-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <span className="size-6 rounded-md bg-[#2FBE71]" />
          </span>
          <span className="h-px w-10 border-t border-dashed border-white/40" />
          <span className="flex size-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
            <span className="size-6 rounded-full bg-[#8B75D6]" />
          </span>
        </div>
      );
    case 'insights':
      return (
        <div className="flex h-20 items-end gap-x-2.5" aria-hidden>
          {[35, 55, 40, 75, 60, 100, 80].map((height, index) => (
            <span
              className={cn('w-4 rounded-t-sm', index === 5 ? 'bg-[#2FBE71]' : 'bg-white/20')}
              style={{ height: `${height}%` }}
              key={index}
            />
          ))}
        </div>
      );
    case 'roi':
      return (
        <div className="text-left" aria-hidden>
          <span className="font-serif text-5xl text-white">124h</span>
          <Bar className="mt-3 h-1.5 w-32" />
          <Bar className="mt-2 h-1.5 w-20" />
        </div>
      );
    case 'filters':
      return (
        <div className="flex max-w-[220px] flex-wrap justify-center gap-2" aria-hidden>
          {['w-16', 'w-20', 'w-14', 'w-24', 'w-16', 'w-12'].map((width, index) => (
            <span
              className={cn(
                'h-7 rounded-full',
                width,
                index === 1 ? 'bg-[#2FBE71]' : 'bg-white/15 ring-1 ring-white/20'
              )}
              key={index}
            />
          ))}
        </div>
      );
    case 'subscribers':
      return (
        <div className="w-44 space-y-2.5" aria-hidden>
          {[0, 1, 2].map((row) => (
            <div className="flex items-center gap-x-2.5" key={row}>
              <span
                className={cn(
                  'size-7 shrink-0 rounded-full',
                  row === 0 ? 'bg-[#2FBE71]' : 'bg-white/15'
                )}
              />
              <Bar className={cn('h-1.5', row === 1 ? 'w-24' : 'w-32')} />
            </div>
          ))}
        </div>
      );
    case 'branding':
    default:
      return (
        <div className="text-center" aria-hidden>
          <span className="flex justify-center gap-x-2.5">
            <span className="size-8 rounded-full bg-[#2FBE71]" />
            <span className="size-8 rounded-full bg-[#8B75D6]" />
            <span className="size-8 rounded-full bg-[#F6F0E6]" />
          </span>
          <Bar className="mx-auto mt-4 h-1.5 w-28" />
          <Bar className="mx-auto mt-2 h-1.5 w-16" />
        </div>
      );
  }
};

Vignette.propTypes = {
  type: PropTypes.oneOf(VIGNETTE_TYPES).isRequired,
};

const FeatureGrid = () => {
  const t = useTranslations('products.trustCenter.featureGrid');
  const items = t.raw('items');

  return (
    <section className="feature-grid bg-white py-28 safe-paddings lg:py-20 md:py-14">
      <Container size="1152">
        <h2 className="text-center font-serif text-[52px] leading-[1.08] font-normal tracking-extra-tight text-[#17112E] xl:text-[44px] lg:text-[38px] md:text-[32px]">
          {t('title')}
        </h2>
        <ul className="mt-16 grid grid-cols-3 gap-x-8 gap-y-14 lg:mt-12 lg:gap-x-6 md:mt-9 md:grid-cols-1 md:gap-y-9">
          {items.map((item, index) => (
            <li key={item.title}>
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-[#241A4D] p-8">
                <Vignette type={VIGNETTE_TYPES[index % VIGNETTE_TYPES.length]} />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-extra-tight text-[#17112E] md:mt-4">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-normal tracking-extra-tight text-[#4E4763]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default FeatureGrid;
