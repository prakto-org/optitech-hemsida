import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';

import Container from 'components/shared/container';
import { cn } from 'utils/cn';

const STATUS_THEMES = [
  'border-gray-new-70 text-gray-new-40',
  'border-green-44/50 text-green-44',
  'border-gray-new-70 bg-gray-new-94 text-gray-new-20',
];

const StatusTag = ({ children, className = null }) => (
  <span
    className={cn(
      'inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none tracking-wider uppercase',
      className
    )}
  >
    {children}
  </span>
);

StatusTag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Timeline = () => {
  const t = useTranslations('services.incidentReporting.timeline');
  const steps = t.raw('steps');
  const parallel = t.raw('parallel');
  const dora = t.raw('dora');

  return (
    <section
      className="timeline mt-40 scroll-mt-24 safe-paddings xl:mt-32 lg:mt-28 md:mt-20"
      id="report-flow"
    >
      <Container size="1152">
        <h2 className="max-w-[560px] text-[36px] leading-dense tracking-tighter text-black-new xl:text-[32px] md:text-[28px]">
          {t('title')}
        </h2>
        <div className="mt-14 grid grid-cols-12 gap-x-10 xl:gap-x-7 lg:mt-10 lg:gap-x-5">
          <div className="col-span-8 lg:col-span-12">
            <ol className="relative flex flex-col gap-y-12 before:absolute before:top-2 before:bottom-2 before:left-[5px] before:w-px before:bg-gray-new-90 lg:gap-y-10">
              {steps.map(({ window, title, description, status }, index) => (
                <li className="relative pl-10 md:pl-8" key={window}>
                  <span
                    className="absolute top-[5px] left-0 size-[11px] rounded-full border border-gray-new-60 bg-white"
                    aria-hidden
                  />
                  <div className="flex items-center gap-x-4 md:flex-wrap md:gap-y-2">
                    <span className="font-mono text-sm tracking-wider text-green-44 uppercase">
                      {window}
                    </span>
                    <StatusTag className={STATUS_THEMES[index % STATUS_THEMES.length]}>
                      {status}
                    </StatusTag>
                  </div>
                  <h3 className="mt-3 text-xl leading-snug font-medium tracking-tight text-black-new">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-[480px] text-base leading-normal tracking-extra-tight text-gray-new-40">
                    {description}
                  </p>
                </li>
              ))}
              <li className="relative ml-10 border-l border-dashed border-gray-new-80 pl-6 md:ml-8 md:pl-5">
                <div className="flex items-center gap-x-4 md:flex-wrap md:gap-y-2">
                  <span className="font-mono text-sm tracking-wider text-gray-new-40 uppercase">
                    {parallel.window}
                  </span>
                  <StatusTag className="border-gray-new-70 text-gray-new-40">
                    {parallel.tag}
                  </StatusTag>
                </div>
                <h3 className="mt-3 text-xl leading-snug font-medium tracking-tight text-black-new">
                  {parallel.title}
                </h3>
                <p className="mt-2 max-w-[480px] text-base leading-normal tracking-extra-tight text-gray-new-40">
                  {parallel.description}
                </p>
              </li>
            </ol>
          </div>
          <aside className="col-span-4 lg:col-span-12 lg:mt-12 md:mt-10">
            <div className="rounded-xl border border-gray-new-90 bg-gray-new-98 p-7 lg:max-w-[560px] md:p-6">
              <StatusTag className="border-gray-new-70 text-gray-new-40">{dora.tag}</StatusTag>
              <h3 className="mt-4 text-xl leading-snug font-medium tracking-tight text-black-new">
                {dora.title}
              </h3>
              <p className="mt-2 text-base leading-normal tracking-extra-tight text-gray-new-40">
                {dora.description}
              </p>
              <p className="mt-5 font-mono text-sm tracking-wider text-gray-new-40 uppercase">
                4h / 72h / 30d
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
