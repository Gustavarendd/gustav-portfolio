'use client';

import { useCallback, useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)!;
    section!.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
    });
  };

  return (
    <div className="relative">
      <div
        className="p-4 md:hidden flex flex-row items-center gap-3 cursor-pointer transition"
        onClick={toggleOpen}
      >
        <div
          className={`h-[30px] flex flex-col justify-around transition-all duration-700`}
        >
          <div
            className={`w-[30px] h-[1px] bg-black dark:bg-slate-300 transition-all duration-500 ${
              isOpen ? '-rotate-[135deg]' : 'rotate-0'
            } ${isOpen ? 'absolute' : 'block'} `}
          />
          <div
            className={`w-[20px] h-[1px] bg-black dark:bg-slate-300 self-end ${
              isOpen ? 'hidden' : 'block'
            }`}
          />
          <div
            className={`w-[30px] h-[1px] bg-black dark:bg-slate-300 transition-all duration-500 ${
              isOpen ? 'rotate-[135deg]' : 'rotate-0'
            } `}
          />
        </div>
      </div>
      {/* {isOpen && ( */}
      <div
        className={`absolute z-10 flex flex-col gap-2 rounded-bl-md p-4 pt-0 bg-blue-100 dark:bg-neutral-700 overflow-hidden text-md top-16 transition-all ease duration-500 ${
          isOpen ? 'right-0' : '-right-52'
        }`}
      >
        <div
          className="hover:font-bold cursor-pointer transition"
          onClick={() => scrollToSection('about')}
        >
          About
        </div>

        <div
          className="hover:font-bold cursor-pointer w-16 transition"
          onClick={() => scrollToSection('portfolio')}
        >
          Portfolio
        </div>

        <div
          className="hover:font-bold cursor-pointer transition"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </div>
      </div>
      {/* )} */}
      <div className="md:flex hidden items-center justify-between w-[300px] p-4">
        <div
          className="hover:font-bold cursor-pointer px-1 rounded-lg transition"
          onClick={() => scrollToSection('about')}
        >
          About
        </div>
        <div className="cursor-default">|</div>
        <div
          className="hover:font-bold cursor-pointer px-1 rounded-lg transition"
          onClick={() => scrollToSection('portfolio')}
        >
          Portfolio
        </div>
        <div className="cursor-default">|</div>
        <div
          className="hover:font-bold cursor-pointer px-1 rounded-lg transition"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Menu;
