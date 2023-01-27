import { auth, db } from '@ui/shared/firebase-utils';
import { setDoc, serverTimestamp, doc } from 'firebase/firestore';
import { useState } from 'react';
const Filter = require('bad-words');
const wordFilter = new Filter();

export const useSetUserNameInDB = () => {
  const [isSending, setIsSending] = useState(false);

  const setUserNameInDB = (pUserName: string) => {
    if (!auth.currentUser) return;
    setIsSending(true);
    return setDoc(doc(db, 'users', auth.currentUser?.uid), {
      userName: pUserName,
      createdDate: serverTimestamp(),
    });
  };
  return { setUserNameInDB, isSending };
};

export const useErrorMsg = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const invalidInput = (input: string) => {
    return (
      wordFilter.isProfane(input) ||
      input === '' ||
      input.includes(' ') ||
      input.length > 20
    );
  };

  const displayErrorMsg = (input: string) => {
    if (wordFilter.isProfane(input)) setErrorMsg('Profanity Not Allowed');
    else if (input === '') setErrorMsg("User Name Can't Be Blank");
    else if (input.includes(' ')) setErrorMsg("User Name Can't Have Spaces");
    else if (input.length > 20)
      setErrorMsg("User Name Can't Be Over 20 Characters");
  };

  const ErrorBox = () => {
    return (
      <span className='h-4 w-full text-center text-lg font-bold text-red-600'>
        {errorMsg}
      </span>
    );
  };
  return { ErrorBox, displayErrorMsg, invalidInput };
};
