import { LoadingPage } from '@ui/shared/loading-page';
import { Dispatch, SetStateAction, useRef } from 'react';
import { Button, Divider, PageWrapper } from '..';
import { Input } from '../input';
import { useErrorMsg, useSetUserNameInDB } from './hooks';

interface Props {
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
  defaultTestValue?: string;
  setErrorStatus: Dispatch<SetStateAction<Error | null>>;
}

export function SetUserNameForm({
  setUserName,
  defaultTestValue = '',
  setErrorStatus,
}: Props) {
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

    setUserNameInDB(inputVal)
      ?.then(() => {
        setUserName(inputVal);
      })
      .catch(setErrorStatus);
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
        <ErrorBox />
      </form>
    </PageWrapper>
  );
}
