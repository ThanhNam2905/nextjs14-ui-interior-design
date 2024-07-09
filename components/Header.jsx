import React from 'react';
import { ThemeToggler } from './ThemeToggler';
import { Logo } from './Logo';
import { DesktopNavMenu } from './DesktopNavMenu';
import { MobileNavMenu } from './MobileNavMenu';

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <Logo />
          <div className="flex items-center gap-x-8">
            {/* DesktopNavMenu section */}
            <DesktopNavMenu
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
