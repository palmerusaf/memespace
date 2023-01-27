'use client';
import { LoginForm, SetUserNameForm, PostLoginOptions } from '@ui/login';
import { useLoggedIn, auth, db } from '@ui/shared/firebase-utils';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';

async function getUserName() {
  if (!auth.currentUser) return null;
  const res = await getDoc(doc(db, 'users', auth.currentUser.uid));
  if (!res.exists()) return null;
  return res.data().userName;
}
const Page = () => {
  const { loggedIn } = useLoggedIn();
  const [userName, setUserName] = useState<null | string>(null);
  const [errorStatus, setErrorStatus] = useState<null | Error>(null);

  if (!loggedIn) return <LoginForm />;

  getUserName().then(setUserName).catch(setErrorStatus);
  if (errorStatus) throw errorStatus;
  if (!userName) return <SetUserNameForm setUserName={setUserName} />;
  if (userName !== null) return <PostLoginOptions userName={userName} />;
};

export default Page;
