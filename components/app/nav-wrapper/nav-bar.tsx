'use client';
import { useLoggedIn } from '@ui/shared/firebase-utils';
import { useSelectedLayoutSegment } from 'next/navigation';
import NavLink from './nav-link';

export function NavBar({
  pUseSelectedLayoutSegment = useSelectedLayoutSegment,
  pUseLoggedIn = useLoggedIn,
}) {
  const { loggedIn } = pUseLoggedIn();
  let segment = pUseSelectedLayoutSegment();
  return (
    <div className='h-full  w-full bg-blue-600'>
      <nav className='pt-5 md:pt-12'>
        <ul className='flex flex-row px-1 text-center text-sm font-bold text-gray-900 md:flex-col md:px-3 md:text-base'>
          {loggedIn && (
            <NavLink href='/profile' segment={segment}>
              Profile
            </NavLink>
          )}
          {!loggedIn && (
            <NavLink href='/login' segment={segment}>
              Login
            </NavLink>
          )}
          <NavLink href='/find-memes/1' segment={segment}>
            Find Memes
          </NavLink>
          {loggedIn && (
            <NavLink href='/find-friends' segment={segment}>
              Find Friends
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  );
}
