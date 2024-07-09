'use client';

import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <SunIcon className="h-[1.4rem] w-[1.4rem] scale-100 rotate-0 transition-all duration-300 ease-linear dark:rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.4rem] w-[1.4rem] scale-0 rotate-90 transition-all duration-300 ease-linear dark:scale-100 dark:rotate-0" />
      </Button>
    </div>
  );
};
