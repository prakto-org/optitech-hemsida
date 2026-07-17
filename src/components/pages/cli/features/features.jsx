import CardItemsList from 'components/shared/card-items-list';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import LINKS from 'constants/links';
import contributeIcon from 'icons/cli/contribute.svg';
import scriptIcon from 'icons/cli/script.svg';
import workflowIcon from 'icons/cli/workflow.svg';

const items = [
  {
    icon: workflowIcon.src,
    title: 'Your full compliance workflow',
    description: 'Manage frameworks, controls, evidence, integrations, and&nbsp;more.',
    linkText: 'View all OptiTech CLI commands',
    url: LINKS.cliReference,
  },
  {
    icon: scriptIcon.src,
    title: 'Script and automate',
    description: 'Use the OptiTech CLI to script almost any&nbsp;compliance action.',
    linkText: 'Learn about automating evidence with the CLI',
    url: '/docs/guides/branching-neon-cli',
  },
  {
    icon: contributeIcon.src,
    title: 'Contribute',
    description: 'OptiTech CLI is open source. Contribute&nbsp;to our GitHub&nbsp;repo.',
    linkText: 'Contribute to OptiTech CLI',
    url: 'https://github.com/neondatabase/neon-pkgs/tree/main/packages/cli',
  },
];

const Features = () => (
  <section className="features my-20 safe-paddings md:my-16 sm:my-10">
    <Container size="960">
      <Heading
        className="mx-auto max-w-3xl text-center text-[52px] leading-none font-medium tracking-extra-tight xl:max-w-[640px] xl:text-[44px] lg:max-w-xl lg:text-4xl md:max-w-md md:text-[32px]"
        tag="h2"
      >
        Cut out the clicks. Command your compliance program from the terminal
      </Heading>
      <CardItemsList
        className="mt-14 gap-x-[18px] xl:mt-10 xl:gap-x-6 lg:gap-x-4 md:mt-8 md:gap-y-4"
        items={items}
        size="lg"
      />
    </Container>
  </section>
);

export default Features;
