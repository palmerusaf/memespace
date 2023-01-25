import { LoadingPage } from '@ui/shared/loading-page';
import { useRef } from 'react';
import { PageWrapper, Divider, Button } from '..';
import { Input } from '../input';
import { useSetUserNameInDB, useErrorMsg } from './hooks';

interface Props {
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
  defaultTestValue?: string;
}

export function SetUserNameForm({ setUserName, defaultTestValue = '' }: Props) {
  // hooks
  const { invalidInput, displayErrorMsg, ErrorBox } = useErrorMsg();
  const { isSending, setUserNameInDB } = useSetUserNameInDB();

  const inputRef = useRef<HTMLInputElement>(null);

  if (isSending) {
    return <LoadingPage loadingMsg='Setting User Name in Database' />;
  }

  const handleClick = () => {
    if (!inputRef || !inputRef.current) return;
    const inputVal = inputRef.current.value;

    if (invalidInput(inputVal)) return displayErrorMsg(inputVal);

    setUserNameInDB(inputVal)?.then(() => {
      setUserName(inputVal);
    });
  };

  return (
    <PageWrapper>
      <Divider label='Set Your User Name' />
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col gap-6 mt-4'
      >
        <Input
          ref={inputRef}
          defaultValue={defaultTestValue}
          label='User Name'
        />
        <Button onClick={handleClick} className='bg-blue-600'>
          Continue
        </Button>
        <ErrorBox />
      </form>
    </PageWrapper>
  );
}
