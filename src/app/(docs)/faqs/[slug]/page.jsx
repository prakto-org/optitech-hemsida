/* eslint-disable react/prop-types */
import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';

import Post from 'components/pages/doc/post';
import ProgrammaticCTA from 'components/pages/faqs/programmatic-cta';
import VERCEL_URL from 'constants/base';
import { FAQS_DIR_PATH } from 'constants/content';
import { FAQS_BASE_PATH } from 'constants/faqs';
import LINKS from 'constants/links';
import { getPostBySlug } from 'utils/api-content';
import { getAllFaqSlugs, getLocalizedFaqDir } from 'utils/api-faqs';
import getMetadata from 'utils/get-metadata';
import getTableOfContents from 'utils/get-table-of-contents';

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllFaqSlugs();
  if (!slugs) return notFound();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  const locale = await getLocale();
  const post = getPostBySlug(slug, getLocalizedFaqDir(locale, slug));

  if (!post) return notFound();

  const {
    data: { title, subtitle },
  } = post;

  const encodedTitle = Buffer.from(title).toString('base64');

  return getMetadata({
    title: `${title} - OptiTech FAQs`,
    description: subtitle,
    imagePath: `${VERCEL_URL}/api/og?title=${encodedTitle}`,
    pathname: `${LINKS.faqs}/${slug}`,
    rssPathname: null,
    type: 'article',
    category: 'FAQs',
  });
}

const FaqPost = async (props) => {
  const params = await props.params;
  const { slug } = params;
  const locale = await getLocale();
  const gitHubPath = `${FAQS_DIR_PATH}/${slug}.md`;
  const postBySlug = getPostBySlug(slug, getLocalizedFaqDir(locale, slug));
  if (!postBySlug) return notFound();
  const { data, content } = postBySlug;
  const navigationLinks = {
    previousLink: data.previousLink,
    nextLink: data.nextLink,
  };
  const tableOfContents = getTableOfContents(content);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    author: {
      '@type': 'Organization',
      name: 'OptiTech',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Post
        content={content}
        data={data}
        breadcrumbs={[
          {
            title: 'Community',
            slug: 'community/community-intro',
          },
          {
            title: 'FAQs',
            slug: 'faqs',
          },
        ]}
        navigationLinks={navigationLinks}
        navigationLinksBasePath={FAQS_BASE_PATH}
        currentSlug={slug}
        gitHubPath={gitHubPath}
        tableOfContents={tableOfContents}
        aboveContent={<ProgrammaticCTA />}
        isFaq
      />
    </>
  );
};

export default FaqPost;
