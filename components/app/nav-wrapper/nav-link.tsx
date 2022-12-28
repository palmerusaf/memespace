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
    <li className='select-none flex-1'>
      <Link
        href={href}
        className={`block md:py-3 border-b-2 border-white border-opacity-0 ${
          active
            ? 'text-white border-opacity-100'
            : 'hover:text-white hover:border-opacity-100'
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
