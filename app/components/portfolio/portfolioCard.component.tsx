'use client';

import Image from 'next/image';
import Heading from '../heading.component';
import Button from '../button/button.component';
import { useEffect, useState } from 'react';

interface PortfolioCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  usedTech: string;
  liveUrl: string;
  repoUrl: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  subtitle,
  imageSrc,
  usedTech,
  liveUrl,
  repoUrl,
}) => {
  const openNewWindow = (url: string) => {
    window.open(url, '_blank')!.focus();
  };

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

  return (
    <div className="w-[350px] h-[450px] flex items-center justify-center">
      <div className="w-[330px] h-[430px] flex flex-col items-center border-[1px] border-gray-300 rounded-xl p-4 hover:bg-slate-100 dark:hover:bg-slate-900 hover:shadow-xl dark:hover:shadow-gray-700 hover:w-[350px] hover:h-[450px] transition-all">
        <div className="w-full h-[200px] relative">
          <Image
            src={imageSrc}
            alt="placeholder"
            fill={true}
          />
        </div>
        <div className="w-full h-[50%]">
          <Heading
            title={title}
            subtitle={subtitle}
            usedTech={usedTech}
          />
        </div>
        <div className="flex gap-4 w-full">
          <Button
            label="Live"
            onClick={() => openNewWindow(liveUrl)}
            small
            outline={darkMode ? true : false}
          />
          <Button
            label="Repo"
            onClick={() => openNewWindow(repoUrl)}
            small
            outline={darkMode ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
