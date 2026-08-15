/* eslint-disable react/prop-types */
import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';

import MarketingPage from 'components/pages/marketing';
import Layout from 'components/shared/layout';
import {
  getService,
  getServiceVisual,
  getServiceDetailVisual,
  SERVICE_SLUGS,
} from 'constants/services';
import getMetadata from 'utils/get-metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return notFound();

  const locale = await getLocale();
  const content = service[locale] || service.en;

  return getMetadata({
    title: content.seo.title,
    description: content.seo.description,
    pathname: `/services/${slug}`,
  });
}

const ServicePage = async (props) => {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return notFound();

  const locale = await getLocale();
  const content = service[locale] || service.en;

  return (
    <Layout>
      <MarketingPage
        content={{
          ...content,
          visual: getServiceVisual(slug),
          detailVisual: getServiceDetailVisual(slug),
        }}
        locale={locale}
      />
    </Layout>
  );
};

export default ServicePage;
