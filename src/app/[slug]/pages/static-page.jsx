/* eslint-disable react/prop-types */
import { notFound } from 'next/navigation';

import Container from 'components/shared/container';
import Content from 'components/shared/content';
import Layout from 'components/shared/layout';
import TableOfContents from 'components/shared/table-of-contents';
import { TEMPLATE_PAGES_DIR_PATH } from 'constants/content';
import { getPostBySlug } from 'utils/api-content';
import getMetadata from 'utils/get-metadata';
import getTableOfContents from 'utils/get-table-of-contents';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug, TEMPLATE_PAGES_DIR_PATH);
  if (!post) return null;

  const { data } = post;
  const seo = data.seo || {};

  return getMetadata({
    title: seo.opengraphTitle || seo.title || data.title,
    description: seo.opengraphDescription || seo.metaDesc,
    keywords: seo.metaKeywords,
    robotsNoindex: seo.metaRobotsNoindex,
    pathname: `/${slug}`,
    imagePath: seo.twitterImage || undefined,
  });
}

const StaticPage = ({ params }) => {
  const { slug } = params;
  const post = getPostBySlug(slug, TEMPLATE_PAGES_DIR_PATH);
  if (!post) return notFound();

  const { data, content } = post;
  const tableOfContents = getTableOfContents(content);

  return (
    <Layout>
      <article className="bg-white pt-36 safe-paddings pb-32 text-black-new 2xl:pt-32 xl:pt-28 lg:pt-16 lg:pb-24 md:pt-10 md:pb-20">
        <Container className="flex justify-center gap-x-16 xl:gap-x-10 lg:block" size="1152">
          <div className="max-w-[704px] min-w-0 grow">
            <span className="flex items-center gap-x-2.5 text-sm font-medium tracking-wide text-green-44 uppercase">
              <span className="size-1.5 rounded-full bg-green-44" aria-hidden />
              Legal
            </span>
            <h1 className="t-5xl mt-4 font-title leading-dense font-semibold tracking-extra-tight text-black-new">
              {data.title}
            </h1>
            {data.lastUpdated && (
              <p className="mt-4 text-sm tracking-extra-tight text-gray-new-50">
                Last updated: {data.lastUpdated}
              </p>
            )}
            <hr className="mt-10 border-gray-new-90 lg:mt-8" />
            <Content
              className="prose-static mt-10 text-gray-new-20 2xl:mt-8 [&_h2]:mt-14 [&_h2]:scroll-mt-28 [&_h2]:text-[28px] [&_h2]:leading-tight [&_h2]:tracking-extra-tight md:[&_h2]:text-2xl"
              content={content}
            />
          </div>
          {tableOfContents.length > 0 && (
            <aside className="w-64 shrink-0 xl:hidden" aria-label="Table of contents">
              <div className="sticky top-28 flex max-h-[calc(100vh-112px)] w-full flex-col pb-5">
                <TableOfContents items={tableOfContents} />
              </div>
            </aside>
          )}
        </Container>
      </article>
    </Layout>
  );
};

export default StaticPage;
