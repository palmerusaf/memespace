import { auth, db } from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { PageWrapper, Divider, Button } from '..';
import { Input } from '../input';

function SetUserNameForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [userName, setUserName] = useState<null | string>(null);
  const setUserNameInDB = (pUserName: string) => {
    if (!auth.currentUser) return;
    setDoc(doc(db, 'users', auth.currentUser?.uid), {
      userName: pUserName,
      createdDate: serverTimestamp(),
    });
  };

  if (userName) return <PostLoginOptions userName={userName} />;
  return (
    <PageWrapper>
      <Divider label='Set Your User Name' />
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col gap-6 mt-4'
      >
        <Input ref={inputRef} label='User Name' />
        <Button
          onClick={() => {
            if (!inputRef || !inputRef.current) return;
            setUserNameInDB(inputRef.current.value);
          }}
          className='bg-blue-600'
        >
          Continue
        </Button>
      </form>
    </PageWrapper>
  );
}
