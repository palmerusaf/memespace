'use client';
import { AfterLogin, PreLogin } from '@ui/login';
import { useLoggedIn } from '@ui/shared/firebase-utils';

const Page = () => {
  const { loggedIn } = useLoggedIn();
  if (!loggedIn) return <PreLogin />;
  else return <AfterLogin />;
};

export default Page;
