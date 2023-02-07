import { useState } from 'react';
const Filter = require('bad-words');
const wordFilter = new Filter();

export const useInputValidator = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const invalidInput = (input: string) => {
    return (
      wordFilter.isProfane(input) ||
      input === '' ||
      input.includes(' ') ||
      input.length > 20
    );
  };

  const updateMsgBox = (input: string) => {
    if (wordFilter.isProfane(input)) setErrorMsg('Profanity Not Allowed');
    else if (input === '') setErrorMsg("User Name Can't Be Blank");
    else if (input.includes(' ')) setErrorMsg("User Name Can't Have Spaces");
    else if (input.length > 20)
      setErrorMsg("User Name Can't Be Over 20 Characters");
  };

  const InvalidMsgBox = () => {
    return (
      <span className='h-4 w-full text-center text-lg font-bold text-red-600'>
        {errorMsg}
      </span>
    );
  };
  return { InvalidMsgBox, updateMsgBox, invalidInput };
};
