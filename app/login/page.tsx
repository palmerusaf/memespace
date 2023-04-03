'use client';
import { AfterLogin, PreLogin } from '@ui/login';
import { LoggedInContext } from '@ui/shared/loggedin-context';
import { useContext } from 'react';

const Page = () => {
  const loggedIn = useContext(LoggedInContext);
  if (!loggedIn) return <PreLogin />;
  else return <AfterLogin />;
};

export default Page;
