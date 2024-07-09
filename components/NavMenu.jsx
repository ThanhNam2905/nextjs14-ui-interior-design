'use client';

import Link from 'next/link';

// Hooks
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/gallery', name: 'gallery' },
  { path: '/projects', name: 'projects' },
  { path: '/contact', name: 'contact' },
];

const NavMenu = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={`uppercase ${linkStyles}`}
          >
            {item.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenu;
