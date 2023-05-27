'use client';

import SkillCard from './skillCard.component';
import { IoLogoNpm } from 'react-icons/io';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
} from 'react-icons/si';

const logos = [
  {
    title: 'Html',
    logo: <SiHtml5 size={40} />,
  },
  {
    title: 'CSS',
    logo: <SiCss3 size={40} />,
  },
  {
    title: 'JavaScript',
    logo: <SiJavascript size={40} />,
  },
  {
    title: 'React',
    logo: <SiReact size={40} />,
  },
  {
    title: 'TypeScript',
    logo: <SiTypescript size={40} />,
  },
  {
    title: 'NPM',
    logo: <IoLogoNpm size={40} />,
  },
  {
    title: 'Styled-components',
    logo: <SiStyledcomponents size={40} />,
  },
  {
    title: 'Tailwind',
    logo: <SiTailwindcss size={40} />,
  },
];
const Skills = () => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8">
      {logos.map(logo => {
        return (
          <SkillCard
            key={logo.title}
            logo={logo.logo}
            title={logo.title}
          />
        );
      })}
    </div>
  );
};

export default Skills;
