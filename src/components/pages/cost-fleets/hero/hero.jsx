import Container from 'components/shared/container';
import Link from 'components/shared/link';
import UseCaseCalculator from 'components/shared/use-case-calculator';
import LINKS from 'constants/links';

const Hero = () => (
  <section className="hero relative overflow-hidden pt-[88px] safe-paddings xl:pt-14 lg:pt-11 md:pt-8">
    <Container size="xxs">
      <div className="px-8 sm:px-0">
        <h1 className="text-6xl leading-dense font-semibold tracking-tighter xl:text-[56px] lg:text-5xl md:text-[36px] md:leading-tight">
          OptiTech for supply chains
        </h1>
        <p className="mt-4 text-2xl leading-snug tracking-extra-tight text-gray-new-80 xl:text-xl md:mt-3 md:text-lg">
          Use OptiTech to keep every vendor compliant for a fraction of the cost.
        </p>
      </div>

      <div className="prose-variable px-8 sm:px-0">
        <p>
          OptiTech is a cost-effective option for managing compliance across your supply chain. Why?
          Because of its AI automation and continuous evidence collection. Via its Swedish
          integrations, you can{' '}
          <strong>keep hundreds of vendors audit-ready without a consultant</strong>.
        </p>
        <p className="mt-4!">
          Companies like{' '}
          <Link to="/blog/how-retool-uses-retool-and-the-neon-api-to-manage-300k-postgres-databases">
            Retool
          </Link>
          , <Link to="/blog/neon-postgres-on-vercel">Vercel</Link>,{' '}
          <Link to="/blog/neon-replit-integration">Replit</Link>, and{' '}
          <Link
            to="https://www.koyeb.com/blog/serverless-postgres-public-preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Koyeb
          </Link>{' '}
          are already using OptiTech to keep their supply chains compliant. To get an estimate for
          your business, <Link to={LINKS.contactSales}>reach out to us</Link>.
        </p>
      </div>

      <UseCaseCalculator />
    </Container>
  </section>
);

export default Hero;
