import { getTranslations } from 'next-intl/server';

import Hero from 'components/pages/startups/hero';
import Info from 'components/pages/startups/info';
import CTANew from 'components/shared/cta-new';
import Faq from 'components/shared/faq';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.startups);

const logos = [
  'sequoia',
  'y',
  'menlo',
  'notable',
  'general-catalyst',
  'andreessen-horowitz',
  'khosla-ventures',
];

// ids/initialState stay in code; question/answer come from the locale catalog
const FAQ_META = [{ id: 'who-can-apply', initialState: 'open' }, {}, {}, {}, {}, {}];

const ContactSales = async () => {
  const t = await getTranslations('startups');
  const quotes = t.raw('quotes');
  const faqItems = t.raw('faq').map((item, index) => ({ ...FAQ_META[index], ...item }));

  return (
    <Layout className="overflow-hidden">
      <Hero logos={logos} quotes={quotes} />
      <Info />
      <CTANew
        className="mt-[157px] text-center"
        copyWrapperClassName="mx-auto text-center md:text-balance mt-0 max-w-[820px] [&_h2]:inline [&_p]:inline"
        title={t('cta.title')}
        description={t('cta.description')}
        buttonText={t('cta.buttonText')}
        buttonUrl="#startups-form"
      />
      <Faq className="mt-38 mb-36 lg:mb-16 md:mb-12 [&>div]:max-w-[1280px]" items={faqItems} />
    </Layout>
  );
};

export default ContactSales;
