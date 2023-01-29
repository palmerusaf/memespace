'use client';
import { auth } from '@ui/shared/firebase-utils';
import { redirect } from 'next/navigation';

const Page = () => {
  if (!auth.currentUser) return;
  const { uid } = auth.currentUser;
  redirect(`/profile/${uid}`);
};

export default Page;
