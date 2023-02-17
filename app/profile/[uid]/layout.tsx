/* eslint-disable @next/next/no-img-element */
'use client';
import { AvatarArea } from '@ui/profile/avatar-area';
import { LayoutWrapper } from '@ui/profile/layout-wrapper';
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
