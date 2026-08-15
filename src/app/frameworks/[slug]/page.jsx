/* eslint-disable react/prop-types */
import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';

import MarketingPage from 'components/pages/marketing';
import Layout from 'components/shared/layout';
import {
  getFramework,
  getFrameworkVisual,
  getFrameworkDetailVisual,
  FRAMEWORK_SLUGS,
} from 'constants/frameworks';
import getMetadata from 'utils/get-metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return FRAMEWORK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props) {
  const { slug } = await props.params;
  const framework = getFramework(slug);
  if (!framework) return notFound();

  const locale = await getLocale();
  const content = framework[locale] || framework.en;

  return getMetadata({
    title: content.seo.title,
    description: content.seo.description,
    pathname: `/frameworks/${slug}`,
  });
}

const FrameworkPage = async (props) => {
  const { slug } = await props.params;
  const framework = getFramework(slug);
  if (!framework) return notFound();

  const locale = await getLocale();
  const content = framework[locale] || framework.en;

  return (
    <Layout>
      <MarketingPage
        content={{
          ...content,
          visual: getFrameworkVisual(slug),
          detailVisual: getFrameworkDetailVisual(slug),
        }}
        locale={locale}
      />
    </Layout>
  );
};

export default FrameworkPage;
