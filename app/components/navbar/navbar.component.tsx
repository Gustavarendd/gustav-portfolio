'use client';

import Image from 'next/image';
import Menu from './menu.component';

const Navbar = () => {
  return (
    <nav className="fixed z-20 w-full flex items-center justify-center bg-blue-100 dark:bg-neutral-700">
      <div className="w-[1000px] flex items-center justify-between">
        <div
          className="font-semibold p-4 flex gap-3 items-center cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        >
          <Image
            src="/images/gLogo.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <h1 className="flex">
            Gustav&nbsp;<span className="hidden sm:block">Rasmussen</span>
            &nbsp;| Frontend Developer
          </h1>
        </div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
