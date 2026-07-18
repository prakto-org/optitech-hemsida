import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';

import Container from 'components/shared/container/container';
import SelfFundedIcon from 'icons/startups/self-funded.inline.svg';
import VentureBackedIcon from 'icons/startups/venture-backed.inline.svg';
import { cn } from 'utils/cn';

const CARD_ICONS = {
  selfFunded: SelfFundedIcon,
  ventureBacked: VentureBackedIcon,
};

const BulletList = ({ label, items }) => (
  <div className="flex flex-col gap-6">
    <span className="font-mono text-[15px] leading-none font-medium tracking-wide text-gray-new-70 uppercase">
      {label}
    </span>
    <ul className="flex flex-col gap-4.5">
      {items.map((item, index) => (
        <li className="flex items-start gap-3" key={index}>
          <span className="mt-[8px] ml-[2px] size-2 shrink-0 bg-green-52" aria-hidden />
          <span className="text-lg leading-snug tracking-extra-tight md:text-base">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

BulletList.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Info = () => {
  const t = useTranslations('startups.info');
  const CARDS = Object.entries(CARD_ICONS).map(([key, icon]) => ({
    icon,
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    apply: t.raw(`${key}.apply`),
    perks: t.raw(`${key}.perks`),
  }));

  return (
    <section className="info mt-53 xl:mt-[184px] lg:mt-36 md:mt-24">
      <Container className="flex flex-col gap-12 lg:gap-10 md:gap-8" size="1280">
        <h2 className="text-5xl leading-dense tracking-tighter text-white xl:text-[44px] lg:text-[40px] md:text-[32px]">
          {t('heading')}
        </h2>
        <div className="grid grid-cols-2 grid-rows-[auto_1fr] border border-gray-new-20 sm:flex sm:flex-col">
          {CARDS.map(({ icon: Icon, title, description, apply, perks }, index) => (
            <div
              className={cn(
                'row-span-2 grid grid-rows-subgrid sm:flex sm:flex-col',
                index > 0 && 'border-l border-gray-new-20 sm:border-t sm:border-l-0'
              )}
              key={index}
            >
              <div className="flex flex-col gap-7 bg-gray-new-8 px-9 pt-8 pb-9 lg:px-7 lg:pt-7 lg:pb-8 md:px-6 md:pt-6 md:pb-7">
                <Icon className="size-14 shrink-0 text-white md:size-12" aria-hidden />
                <div className="flex flex-col gap-4">
                  <h3 className="text-[32px] leading-tight tracking-tighter xl:text-[28px] md:text-xl">
                    {title}
                  </h3>
                  <p className="text-lg leading-snug tracking-extra-tight text-gray-new-70 md:text-base">
                    {description}
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-y-13 border-t border-gray-new-20 px-9 pt-9 pb-10 lg:gap-10 lg:px-7 lg:pt-7 lg:pb-8 md:px-6 md:pt-6 md:pb-7">
                <BulletList label={t('applyLabel')} items={apply} />
                <BulletList label={t('perksLabel')} items={perks} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Info;
