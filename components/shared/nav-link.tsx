'use client';

import Link from 'next/link';

interface Props {
  className?: string;
  activeClass?: string;
  inActiveClass?: string;
  href: string;
  children: React.ReactNode;
  segment: string | null;
}

export const NavLink = ({
  inActiveClass = '',
  className = '',
  activeClass = '',
  segment,
  href,
  children,
}: Props) => {
  let active = href.startsWith(`/${segment}`);
  return (
    <Link
      href={href}
      className={`${className} ${active ? activeClass : inActiveClass}`}
    >
      <li>{children}</li>
    </Link>
  );
};
