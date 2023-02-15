/* eslint-disable @next/next/no-img-element */
'use client';
import { AvatarArea } from '@ui/profile/avatar-area';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

interface Props {
  params: { uid: string };
  children: React.ReactNode;
}

const Layout = ({ params: { uid }, children }: Props) => {
  return (
    <LayoutWrapper>
      <AvatarArea uid={uid} />
      <NavBar uid={uid} />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;

export function NavBar({
  uid,
  pUseSelectedLayoutSegment,
}: {
  uid: string;
  pUseSelectedLayoutSegment: typeof useSelectedLayoutSegment;
}) {
  let segment = pUseSelectedLayoutSegment();
  const active = true;
  return (
    <nav className='flex w-full justify-center'>
      <ul className='flex gap-3 rounded-md bg-white px-2 py-1 shadow-md md:text-xl'>
        <NavLink href={`/profile/${uid}`}>Meme Collection</NavLink>
        <NavLink href={`/profile/${uid}/tracked`}>Tracked Degens</NavLink>
      </ul>
    </nav>
  );
  function NavLink({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    let active = href.startsWith(`/${segment}`);
    return (
      <li className=''>
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
  }
}

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col items-center'>
      <div className='flex h-full w-full max-w-3xl flex-col gap-2 px-2 md:gap-4 md:pt-2'>
        {children}
      </div>
    </div>
  );
}
