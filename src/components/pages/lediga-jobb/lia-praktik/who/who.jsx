import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';

const Who = () => {
  const t = useTranslations('liaPraktik.who');
  const programs = t.raw('programs');

  return (
    <section className="who mt-40 safe-paddings xl:mt-32 lg:mt-28 md:mt-20">
      <Container size="1152">
        <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-x-16 border-t border-gray-new-20 pt-12 lg:grid-cols-1 lg:gap-y-10 md:pt-10">
          <div>
            <SectionLabel theme="black">{t('label')}</SectionLabel>
            <h2 className="mt-6 max-w-[420px] text-[36px] leading-dense tracking-tighter text-black-new xl:text-[32px] md:text-[28px]">
              {t('title')}
            </h2>
            <p className="mt-4 max-w-[440px] text-base leading-normal tracking-extra-tight text-gray-new-40">
              {t('description')}
            </p>
          </div>
          <div>
            <h3 className="font-mono text-xs leading-none font-medium text-gray-new-60 uppercase">
              {t('programsTitle')}
            </h3>
            <dl className="mt-6 border-t border-gray-new-90">
              {programs.map(({ term, definition }) => (
                <div
                  className="flex gap-x-8 border-b border-gray-new-90 py-4 md:flex-col md:gap-x-0 md:gap-y-1"
                  key={term}
                >
                  <dt className="w-32 shrink-0 text-[17px] leading-tight font-medium tracking-tight text-black-new">
                    {term}
                  </dt>
                  <dd className="text-sm leading-normal tracking-extra-tight text-gray-new-40">
                    {definition}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Who;
