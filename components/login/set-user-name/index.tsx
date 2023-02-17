import { useMyProfileMutation } from '@ui/shared/firebase-utils';
import { LoadingPage } from '@ui/shared/loading-page';
import { Input, useInputValidator } from '@ui/shared/username-input';
import { serverTimestamp } from 'firebase/firestore';
import { useRef } from 'react';
import { Button, Divider, PageWrapper } from '..';

export function SetUserNameForm({
  defaultTestValue = '',
  pUseMyProfileMutation = useMyProfileMutation,
}) {
  // hooks
  const { validInput, updateMsgBox, InvalidMsgBox } = useInputValidator();
  const mutation = pUseMyProfileMutation();

  const inputRef = useRef<HTMLInputElement>(null);

  if (mutation.isLoading)
    return <LoadingPage loadingMsg='Setting User Name in Database' />;
  if (mutation.isError)
    throw new Error('Failed to connect to DB while setting profile data!');

  const handleClick = () => {
    if (!inputRef || !inputRef.current) return;
    const userName = inputRef.current.value;
    updateMsgBox(userName);
    if (validInput(userName))
      mutation.mutate({
        userName,
        createdDate: serverTimestamp(),
        meme: '',
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
