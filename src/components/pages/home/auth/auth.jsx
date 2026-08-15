import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Container from 'components/shared/container';
import dash from 'images/pages/home/auth/dash.png';

import Heading from '../heading';

const Auth = () => {
  const t = useTranslations('home.auth');

  return (
    <section
      className="auth relative scroll-mt-[60px] safe-paddings pb-60 xl:pb-40 lg:scroll-mt-0 lg:pb-32 md:pb-24"
      id="auth"
    >
      <Container
        className="relative grid grid-cols-[224px_1fr] items-center gap-x-32 before:block xl:grid-cols-1 xl:px-16 xl:before:hidden lg:px-16! md:px-5!"
        size="1600"
      >
        <div className="min-w-0 border-t border-gray-new-20 pt-9 lg:pt-7">
          <Heading icon="auth" title={t.raw('heading')} />
          <Image
            className="mt-16 h-auto w-full rounded-2xl xl:mt-12 lg:mt-10"
            src={dash}
            alt="OptiTech compliance overview dashboard showing passing controls, frameworks, and control status"
            sizes="(max-width: 1600px) 100vw, 1184px"
            priority
          />
        </div>
      </Container>
    </section>
  );
};

export default Auth;
