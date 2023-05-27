'use client';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  const openLinkedInInNewTab = (): any => {
    window
      .open(
        'https://www.linkedin.com/in/gustav-rasmussen-390442262/',
        '_blank',
      )!
      .focus();
  };
  const openGithubInNewTab = (): any => {
    window.open('https://github.com/Gustavarendd', '_blank')!.focus();
  };

  return (
    <footer className="w-full flex items-center justify-between bg-neutral-300 dark:bg-neutral-700">
      <div className="font-semibold p-4">&copy;2023 Gustav Rasmussen</div>
      <div className="flex gap-4 p-4">
        <AiOutlineGithub
          size={50}
          className="cursor-pointer"
          onClick={() => openGithubInNewTab()}
        />
        <AiFillLinkedin
          size={50}
          className="cursor-pointer"
          onClick={() => openLinkedInInNewTab()}
        />
      </div>
    </footer>
  );
};

export default Footer;
