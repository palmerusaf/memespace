'use client';
import { LoggedInContext } from '@ui/shared/loggedin-context';
import { NavLink } from '@ui/shared/nav-link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useContext } from 'react';

export function NavBar({
  pUseSelectedLayoutSegment = useSelectedLayoutSegment,
}) {
  const loggedIn = useContext(LoggedInContext);
  let segment = pUseSelectedLayoutSegment();

  interface NavBarLinkProps {
    href: string;
    children: React.ReactNode;
  }

  const NavBarLink = ({ href, children }: NavBarLinkProps) => {
    let active = href.startsWith(`/${segment}`);
    return (
      <NavLink
        href={href}
        className='block flex-1 select-none border-b-2 border-white border-opacity-0 md:py-3'
        activeClass='border-opacity-100 text-white'
        inActiveClass='hover:border-opacity-100 hover:text-white'
        active={active}
      >
        {children}
      </NavLink>
    );
  };

  return (
    <div className='h-full w-full bg-blue-600'>
      <nav className='pt-5 md:pt-12'>
        <ul className='flex flex-row px-1 text-center text-sm font-bold text-gray-900 md:flex-col md:px-3 md:text-base'>
          {loggedIn && <NavBarLink href='/profile'>Profile</NavBarLink>}
          {!loggedIn && <NavBarLink href='/login'>Login</NavBarLink>}
          <NavBarLink href='/find-memes/1'>Find Memes</NavBarLink>
          {loggedIn && <NavBarLink href='/find-degens'>Find Degens</NavBarLink>}
        </ul>
      </nav>
    </div>
  );
}
