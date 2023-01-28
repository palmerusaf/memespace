'use client';
import { LoginForm, PostLoginOptions, SetUserNameForm } from '@ui/login';
import { auth, db, useLoggedIn } from '@ui/shared/firebase-utils';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

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
  useEffect(() => {
    if (errorStatus) throw errorStatus;
  }, [errorStatus]);

  if (!loggedIn) return <LoginForm />;

  getUserName().then(setUserName).catch(setErrorStatus);
  if (!userName)
    return (
      <SetUserNameForm
        setUserName={setUserName}
        setErrorStatus={setErrorStatus}
      />
    );
  if (userName !== null) return <PostLoginOptions userName={userName} />;
};

export default Page;
