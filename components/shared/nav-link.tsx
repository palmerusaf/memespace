'use client';

import Link from 'next/link';

interface Props {
  className?: string;
  activeClass?: string;
  inActiveClass?: string;
  href: string;
  children: React.ReactNode;
  active: boolean;
}

export const NavLink = ({
  inActiveClass = '',
  className = '',
  activeClass = '',
  active,
  href,
  children,
}: Props) => {
  return (
    <Link
      href={href}
      className={`${className} ${active ? activeClass : inActiveClass}`}
    >
      <li>{children}</li>
    </Link>
  );
};
