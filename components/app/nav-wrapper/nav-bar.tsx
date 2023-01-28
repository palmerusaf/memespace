'use client';
import { useLoggedIn } from '@ui/shared/firebase-utils';
import NavLink from './nav-link';

export function NavBar() {
  const { loggedIn } = useLoggedIn();
  return (
    <div className='h-full  w-full bg-blue-600'>
      <nav className='pt-5 md:pt-12'>
        <ul className='flex flex-row px-1 text-center text-sm font-bold text-gray-900 md:flex-col md:px-3 md:text-base'>
          {loggedIn && <NavLink href='/profile'>Profile</NavLink>}
          {!loggedIn && <NavLink href='/login'>Login</NavLink>}
          <NavLink href='/find-memes/1'>Find Memes</NavLink>
          {loggedIn && <NavLink href='/find-friends'>Find Friends</NavLink>}
        </ul>
      </nav>
    </div>
  );
}
