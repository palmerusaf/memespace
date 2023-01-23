import { auth, db } from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { PageWrapper, Divider, Button } from '..';
import { Input } from '../input';

export function SetUserNameForm({ pErrorMsg = '' }: { pErrorMsg: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorMsg, setErrorMsg] = useState(pErrorMsg);
  const [isSending, setIsSending] = useState(false);
  const [userName, setUserName] = useState<null | string>(null);
  const setUserNameInDB = (pUserName: string) => {
    if (!auth.currentUser) return;
    setIsSending(true);
    setDoc(doc(db, 'users', auth.currentUser?.uid), {
      userName: pUserName,
      createdDate: serverTimestamp(),
    }).then(() => {
      setIsSending(false);
      setUserName(pUserName);
    });
  };

  if (isSending) return <LoadingPage loadingMsg='Sending User Name Data' />;
  if (userName) return <PostSignInOptions userName={userName} />;
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
