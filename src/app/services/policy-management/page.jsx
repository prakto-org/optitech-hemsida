import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';

import MarketingPage from 'components/pages/marketing';
import Hero from 'components/pages/services/policy-management/hero';
import Layout from 'components/shared/layout';
import { getService, getServiceVisual, getServiceDetailVisual } from 'constants/services';
import getMetadata from 'utils/get-metadata';

const SLUG = 'policy-management';

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

const PolicyManagementPage = async () => {
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

export default PolicyManagementPage;
