import { UseMutationResult } from '@tanstack/react-query';
import { MutantButton } from '@ui/shared/mutant-button';
import { Timestamp } from 'firebase/firestore';
import { useState } from 'react';

interface Props {
  isOwner: boolean;
  mutation: UseMutationResult<unknown, unknown, any, unknown>;
  createdDate: Timestamp;
  userName: string;
}
export const MenuContent = (props: Props) => {
  return (
    <div className='flex h-full w-full flex-col gap-2 bg-gray-800 p-4 text-white'>
      <h1 className='w-full text-center font-serif text-xl font-bold md:text-2xl'>
        Details
      </h1>
      <MemeDetails />
      {props.isOwner && <ButtonArea />}
      <CommentArea />
    </div>
  );

  function MemeDetails() {
    return (
      <div className=''>
        <div className=''>Created By: {props.userName}</div>
        <div className=''>
          Date Created: {props.createdDate.toDate().toDateString()}
        </div>
      </div>
    );
  }

  function ButtonArea() {
    return (
      <div className='flex w-full justify-evenly'>
        <MutantButton
          className='rounded-full bg-blue-500 px-4 text-lg font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:text-xl'
          mutation={props.mutation}
          onClick={() => {}}
          loadMsg={'Saving...'}
          errorMsg={'Try Again'}
          successMsg={'Success'}
          staticMsg={'Edit'}
        />
        <MutantButton
          mutation={props.mutation}
          className='rounded-full bg-red-500 px-4 text-lg font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:text-xl'
          onClick={() => {}}
          color='red'
          loadMsg={'Deleting...'}
          errorMsg={'Try Again'}
          successMsg={'Deleted'}
          staticMsg={'Delete'}
        />
      </div>
    );
  }

  function CommentArea() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
      <div className='flex w-full flex-col gap-2'>
        <button onClick={toggleOpen} className='text-center underline'>
          view comments
        </button>
        {isOpen && (
          <div className='text-center text-lg font-bold'>Coming Soon...</div>
        )}
      </div>
    );
  }
};
