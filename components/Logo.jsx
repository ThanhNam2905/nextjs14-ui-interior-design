import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/logo.png';

export const Logo = () => {
  return (
    <div>
      <Link href={'/'}>
        <Image src={logo} alt="Logo" width={160} height={65} />
      </Link>
    </div>
  );
};
