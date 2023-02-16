/* eslint-disable @next/next/no-img-element */
'use client';
import { AvatarArea } from '@ui/profile/avatar-area';
import { NavBar } from '@ui/profile/nav-bar';
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

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col items-center'>
      <div className='flex h-full w-full max-w-3xl flex-col gap-2 px-2 md:gap-4 md:pt-2'>
        {children}
      </div>
    </div>
  );
}
