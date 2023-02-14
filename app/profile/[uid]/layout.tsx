/* eslint-disable @next/next/no-img-element */
'use client';
import { AvatarArea } from '@ui/profile/avatar-area';
import React from 'react';

interface Props {
  params: { uid: string };
  children: React.ReactNode;
}

const Layout = ({ params: { uid }, children }: Props) => {
  return (
    <div className='flex h-full w-full flex-col items-center'>
      <div className='flex h-full w-full max-w-3xl flex-col px-2 md:pt-2'>
        {<AvatarArea uid={uid} />}
        {children}
      </div>
    </div>
  );
};

export default Layout;
