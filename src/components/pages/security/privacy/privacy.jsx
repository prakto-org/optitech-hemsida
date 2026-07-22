import { useTranslations } from 'next-intl';

import Container from 'components/shared/container/container';
import CCPALogo from 'images/pages/security/ccpa-logo.png';
import GDPRLogo from 'images/pages/security/gdpr-logo.png';
import HIPAALogo from 'images/pages/security/hipaa-logo.png';

import Cards from '../cards';

const CARD_META = [
  {
    key: 'ccpa',
    logo: {
      src: CCPALogo,
      width: 98,
      height: 108,
      className: 'mt-px -ml-[5px]',
    },
    borderClassName:
      'border-image-[radial-gradient(35%_50%_at_0_0,rgba(56,118,103,0.6),transparent),linear-gradient(0deg,#242628,#242628)]',
    highlightClassName: 'bg-[#4CECB7]/20',
  },
  {
    key: 'gdpr',
    logo: {
      src: GDPRLogo,
      width: 108,
      height: 108,
    },
    borderClassName:
      'border-image-[radial-gradient(35%_50%_at_0_0,rgba(65,82,139,0.8),transparent),linear-gradient(0deg,#242628,#242628)]',
    highlightClassName: 'bg-[#4C72EC]/40',
  },
  {
    key: 'hipaa',
    banner: {
      src: HIPAALogo,
      width: 399,
      height: 267,
    },
    borderClassName: '',
    highlightClassName: 'hidden',
  },
];

const Privacy = () => {
  const t = useTranslations('security.privacy');
  const CARDS = CARD_META.map(({ key, ...meta }) => ({
    ...meta,
    title: t(`${key}.title`),
    description: t(`${key}.description`),
  }));

  return (
    <section className="compliance relative pt-40 safe-paddings xl:pt-[136px] lg:pt-[120px] md:pt-[104px]">
      <Container className="relative z-10" size="960">
        <h2 className="text-center font-title text-[44px] leading-[0.9] font-medium tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
          {t('heading')}
        </h2>
        <Cards data={CARDS} />
      </Container>
    </section>
  );
};

export default Privacy;
