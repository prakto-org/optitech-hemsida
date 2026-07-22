import Image from 'next/image';

import ArtPanel from 'components/pages/login/art-panel';
import SignInCard from 'components/pages/login/sign-in-card';
import Link from 'components/shared/link';
import logo from 'images/optitech-logo-light.png';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata({
  title: 'Sign in — OptiTech',
  description: 'Sign in to the OptiTech Console.',
  pathname: '/login',
  robotsNoindex: 'noindex',
});

const LoginPage = () => (
  <main className="flex min-h-screen flex-col bg-[#f6f6f8]">
    <header className="px-7 py-6">
      <Link className="inline-flex" to="/">
        <Image className="h-[22px] w-auto" src={logo} alt="OptiTech" priority />
      </Link>
    </header>
    <div className="flex flex-1 items-center justify-center px-5 pt-4 pb-16">
      <div className="flex w-full max-w-[856px] items-stretch justify-center">
        <SignInCard />
        <ArtPanel />
      </div>
    </div>
  </main>
);

export default LoginPage;
