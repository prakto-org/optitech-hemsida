import Testimonial from 'components/pages/use-case/testimonial';
import Admonition from 'components/shared/admonition';
import LINKS from 'constants/links';

const Hero = () => (
  <section className="hero relative overflow-hidden safe-paddings">
    <h1 className="text-[56px] leading-dense font-semibold tracking-tighter xl:text-5xl lg:text-4xl md:text-[28px] md:leading-tight">
      Scale With Your Business
    </h1>
    <p className="my-4 text-2xl leading-snug tracking-extra-tight text-gray-new-80 xl:text-xl md:my-3 md:text-lg">
      OptiTech scales your compliance program automatically as your business grows
    </p>
    <div className="prose-doc">
      <Admonition type="note" title="TL;DR">
        <p>If your compliance scope keeps growing, here&apos;s how OptiTech saves you time and effort:</p>
        <ul>
          <li>
            Your compliance program scales automatically. As you add frameworks, vendors, and
            systems, OptiTech extends coverage automatically. When a framework like NIS2 or DORA
            comes into scope, evidence collection expands to cover it, with no manual setup.
          </li>
          <li>You stay audit ready at all times. No gaps, no manual work.</li>
        </ul>
        <p>
          Start your compliance program - <a href={LINKS.signup}>Get started here</a>
        </p>
      </Admonition>
    </div>
    <Testimonial
      text="Our compliance scope grows every quarter as we add new vendors and frameworks. Building on a platform that expands coverage automatically lets us stay audit ready without adding manual work."
      author={{
        name: 'Lex Nasser',
        company: 'Founding Engineer at 222',
      }}
      url="/blog/how-222-uses-neon-to-handle-their-frequent-spikes-in-demand"
    />
  </section>
);

export default Hero;
