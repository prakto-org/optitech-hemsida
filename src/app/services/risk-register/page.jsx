import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';

import MarketingPage from 'components/pages/marketing';
import Hero from 'components/pages/services/risk-register/hero';
import Layout from 'components/shared/layout';
import { getService, getServiceVisual, getServiceDetailVisual } from 'constants/services';
import getMetadata from 'utils/get-metadata';

const SLUG = 'risk-register';

export async function generateMetadata() {
  const service = getService(SLUG);
  const locale = await getLocale();
  const content = service[locale] || service.en;

  return getMetadata({
    title: content.seo.title,
    description: content.seo.description,
    pathname: `/services/${SLUG}`,
  });
}

const RiskRegisterPage = async () => {
  const service = getService(SLUG);
  if (!service) return notFound();

  const locale = await getLocale();
  const content = service[locale] || service.en;

  return (
    <Layout>
      <Hero hero={content.hero} />
      <MarketingPage
        content={{
          ...content,
          visual: getServiceVisual(SLUG),
          detailVisual: getServiceDetailVisual(SLUG),
        }}
        locale={locale}
        hideHero
      />
    </Layout>
  );
};

export default RiskRegisterPage;
