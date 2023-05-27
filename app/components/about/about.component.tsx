'use client';

import Heading from '../heading.component';

const About = () => {
  return (
    <section className="mt-10 mb-10 text-center flex items-center justify-center">
      <Heading
        title="About me"
        subtitle="I come from Denmark and I am now living in Prague, Czech Republic.
        From 2013 to 2022 I have been working onboard sailing ships around the
        world. Most recently I worked onboard a Danish school-ship, teaching
        the basic education for trainees who want to start working onboard
        ships worldwide."
        center
      />
    </section>
  );
};

export default About;
