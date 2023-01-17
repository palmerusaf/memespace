'use client';
import { useLoggedIn } from '@ui/shared/firebase-utils';
import NavLink from './nav-link';

export function NavBar() {
  const { loggedIn } = useLoggedIn();
  return (
    <div className='bg-blue-600  w-full h-full'>
      <nav className='pt-5 md:pt-12'>
        <ul className='flex flex-row md:flex-col px-1 md:px-3 font-bold text-gray-900 text-center text-sm md:text-base'>
          {loggedIn && <NavLink href='/profile'>Profile</NavLink>}
          {!loggedIn && <NavLink href='/login'>Login</NavLink>}
          <NavLink href='/new-meme/1'>New Meme</NavLink>
          {loggedIn && <NavLink href='/friends-list'>Friends List</NavLink>}
        </ul>
      </nav>
    </div>
  );
}
