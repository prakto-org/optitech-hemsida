import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';

const Quote = () => {
  const t = useTranslations('services.incidentReporting.quote');

  return (
    <section className="quote mt-44 safe-paddings xl:mt-36 lg:mt-28 md:mt-20">
      <Container size="960">
        <figure>
          <blockquote>
            <p className="text-[32px] leading-snug tracking-tighter text-black-new xl:text-[28px] md:text-2xl">
              &ldquo;{t('text')}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-baseline gap-x-3 md:mt-5">
            <span className="text-base font-medium tracking-tight text-black-new">{t('name')}</span>
            <span className="text-base tracking-extra-tight text-gray-new-50">{t('position')}</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
};

export default Quote;
