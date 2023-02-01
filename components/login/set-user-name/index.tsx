import {
  auth,
  setDocWithTimeLimit,
  useMyProfileMutation,
} from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';
import { FieldValue, serverTimestamp } from 'firebase/firestore';
import { useRef } from 'react';
import { Button, Divider, PageWrapper } from '..';
import { Input } from '../input';
import { useInputValidator } from './hooks';

async function setProfileData(data: {
  userName: string;
  profileMeme: string;
  createdDate: FieldValue;
}) {
  if (!auth.currentUser) return;

  return setDocWithTimeLimit('users', [auth.currentUser?.uid], data);
}

export function SetUserNameForm({ defaultTestValue = '' }) {
  // hooks
  const { invalidInput, updateMsgBox, InvalidMsgBox } = useInputValidator();
  const mutation = useMyProfileMutation();

  const inputRef = useRef<HTMLInputElement>(null);

  if (mutation.isLoading)
    return <LoadingPage loadingMsg='Setting User Name in Database' />;
  if (mutation.isError)
    throw new Error('Failed to connect to DB while setting profile data!');

  const handleClick = () => {
    if (!inputRef || !inputRef.current) return;
    const userName = inputRef.current.value;
    if (invalidInput(userName)) return updateMsgBox(userName);
    mutation.mutate({
      userName,
      createdDate: serverTimestamp(),
      profileMeme: '',
    });
  };

  return (
    <PageWrapper>
      <Divider label='Set Your User Name' />
      <form
        onSubmit={(e) => e.preventDefault()}
        className='mt-4 flex flex-col gap-6'
      >
        <Input
          ref={inputRef}
          defaultValue={defaultTestValue}
          label='User Name'
        />
        <Button onClick={handleClick} className='bg-blue-600'>
          Continue
        </Button>
        <InvalidMsgBox />
      </form>
    </PageWrapper>
  );
}
