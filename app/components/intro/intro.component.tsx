'use client';

import Image from 'next/image';
import Heading from '../heading.component';
import { useEffect, useMemo, useState } from 'react';
import Skills from '../skills/skills.component';

const Intro = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleDarkModeChange = (e: any) => {
      setDarkMode(e.matches);
    };

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', handleDarkModeChange);
    setDarkMode(darkModeQuery.matches);

    return () => {
      darkModeQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  const imageSrc = useMemo(() => {
    if (darkMode) {
      return '/images/code-typing-dark.svg';
    } else {
      return '/images/code-typing.svg';
    }
  }, [darkMode]);

  return (
    <section className="flex flex-col gap-4">
      <div className="text-center flex flex-col md:flex-row items-center justify-center">
        <Heading
          title="Hello, I'm Gustav"
          subtitle="I am a determined self-taught frontend developer with knowledge in
      HTML, CSS, JavaScript and React."
        />
        <Image
          src={imageSrc}
          alt="Coding"
          width={400}
          height={400}
        />
      </div>
      <div className="h-fit">
        <Skills />
      </div>
    </section>
  );
};

export default Intro;
