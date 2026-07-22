import { useTranslations } from 'next-intl';

import Container from 'components/shared/container/container';
import LINKS from 'constants/links';
import ISOLogo from 'images/pages/security/iso-logo.png';
import SOC2Logo from 'images/pages/security/soc2-logo.png';

import Cards from '../cards';

const CARD_META = [
  {
    key: 'soc2',
    logo: {
      src: SOC2Logo,
      width: 108,
      height: 108,
      className: 'mt-1',
    },
    borderClassName:
      'border-image-[radial-gradient(35%_50%_at_0_0,rgba(65,82,139,0.8),transparent),linear-gradient(0deg,#242628,#242628)]',
    highlightClassName: 'bg-[#4C72EC]/40',
  },
  {
    key: 'iso',
    logo: {
      src: ISOLogo,
      width: 96,
      height: 107,
      className: 'mt-1 -ml-1',
    },
    borderClassName:
      'border-image-[radial-gradient(35%_50%_at_0_0,rgba(56,118,103,0.8),transparent),linear-gradient(0deg,#242628,#242628)]',
    highlightClassName: 'bg-[#00E599]/20',
  },
];

const Compliance = () => {
  const t = useTranslations('security.compliance');
  const CARDS = CARD_META.map(({ key, ...meta }) => ({
    ...meta,
    title: t(`${key}.title`),
    description: t
      .raw(`${key}.description`)
      .replace('<a>', `<a href=${LINKS.trust} target="_blank">`),
  }));

  return (
    <section className="compliance relative pt-28 safe-paddings xl:pt-[104px] lg:pt-20 md:pt-16">
      <Container className="relative z-10" size="960">
        <h2 className="text-center font-title text-[44px] leading-[0.9] font-medium tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
          {t('heading')}
        </h2>
        <Cards data={CARDS} isPriority />
      </Container>
    </section>
  );
};

export default Compliance;
