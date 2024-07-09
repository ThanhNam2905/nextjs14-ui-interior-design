'use client';

import React, { useEffect, useState } from 'react';
import { ThemeToggler } from './ThemeToggler';
import Logo from './Logo';
import NavMenu from './NavMenu';
import MobileNavMenu from './MobileNavMenu';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [header, setHeader] = useState();
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove eventlistener
    return () => window.removeEventListener('scroll', scrollYPos);
  });
  return (
    <header
      className={`${
        header
          ? 'py-4 bg-tertiary shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-white'}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <Logo />
          <div className="flex items-center gap-x-8">
            {/* NavMenu section */}
            <NavMenu
              containerStyles="hidden xl:flex items-center gap-x-8"
              linkStyles={`relative hover:text-primary transition`}
              underlineStyles={`absolute left-0 top-full bg-primary h-[3px] w-full`}
            />
            {/* Theme Toggler */}
            <ThemeToggler />
            <div className="xl:hidden">
              {/* MobileNavMenu section */}
              <MobileNavMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
