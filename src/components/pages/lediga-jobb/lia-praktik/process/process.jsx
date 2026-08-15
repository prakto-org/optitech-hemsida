import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';

const Process = () => {
  const t = useTranslations('liaPraktik.process');
  const steps = t.raw('steps');

  return (
    <section className="process mt-40 safe-paddings xl:mt-32 lg:mt-28 md:mt-20">
      <Container size="1152">
        <SectionLabel theme="black">{t('label')}</SectionLabel>
        <h2 className="mt-6 max-w-[560px] text-[36px] leading-dense tracking-tighter text-black-new xl:text-[32px] md:text-[28px]">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-[600px] text-base leading-normal tracking-extra-tight text-gray-new-40">
          {t('description')}
        </p>
        <ol className="mt-12 grid grid-cols-4 gap-x-10 lg:mt-10 lg:grid-cols-2 lg:gap-y-10 md:grid-cols-1">
          {steps.map(({ title, description }, index) => (
            <li className="border-t border-gray-new-20 pt-5" key={title}>
              <span className="font-mono text-[28px] leading-tight tracking-tight text-black-new xl:text-2xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-[17px] leading-tight font-medium tracking-tight text-black-new">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-normal tracking-extra-tight text-gray-new-40">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default Process;
