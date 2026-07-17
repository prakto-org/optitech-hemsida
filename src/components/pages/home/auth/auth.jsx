import Container from 'components/shared/container';
import RiveAnimation from 'components/shared/rive-animation';

import Heading from '../heading';

const Auth = () => (
  <section
    className="auth relative scroll-mt-[60px] safe-paddings pb-60 xl:pb-40 lg:scroll-mt-0 lg:pb-32 md:pb-24"
    id="auth"
  >
    <Container
      className="relative grid grid-cols-[224px_1fr] items-center gap-x-32 before:block xl:grid-cols-1 xl:px-16 xl:before:hidden lg:px-16! md:px-5!"
      size="1600"
    >
      <div className="min-w-0 border-t border-gray-new-20 pt-9 lg:pt-7">
        <Heading
          icon="auth"
          title="<strong>MSB incident reporting included.</strong> Meet every NIS2 deadline with a guided flow: early warning in 24 hours, report in 72, final within a month."
        />
        <RiveAnimation
          className="aspect-[1184/580] w-full"
          wrapperClassName="mt-16 xl:mt-12 lg:mt-10"
          src="/animations/pages/home/auth.riv?20260107"
          threshold={0.2}
          triggerOnce={false}
        />
      </div>
    </Container>
  </section>
);

export default Auth;
