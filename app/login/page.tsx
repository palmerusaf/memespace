'use client';
import { AfterLogin, PreLogin } from '@ui/login';
import { auth, useLoggedIn } from '@ui/shared/firebase-utils';

const Page = () => {
  const { loggedIn } = useLoggedIn();
  if (!loggedIn) return <PreLogin />;

  if (auth.currentUser) return <AfterLogin uid={auth.currentUser.uid} />;
};

export default Page;
