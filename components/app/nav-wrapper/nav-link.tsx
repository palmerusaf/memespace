'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: Props) => {
  let segment = useSelectedLayoutSegment();
  let active = href.startsWith(`/${segment}`);

  return (
    <li className='flex-1 select-none'>
      <Link
        href={href}
        className={`block border-b-2 border-white border-opacity-0 md:py-3 ${
          active
            ? 'border-opacity-100 text-white'
            : 'hover:border-opacity-100 hover:text-white'
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
