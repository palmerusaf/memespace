/* eslint-disable @next/next/no-img-element */
import Modal from '@ui/shared/edit-meme-modal';
import {
  ReceivingMemeData,
  useDeleteMemeMutation,
} from '@ui/shared/firebase-utils';
import { MutantButton } from '@ui/shared/mutant-button';
import { useState } from 'react';

interface Props {
  isOwner: boolean;
  uid: string;
  pUseDeleteMemeMutation?: typeof useDeleteMemeMutation;
  memeUid: string;
  memeData: ReceivingMemeData;
}
export const MenuContent = ({
  isOwner,
  memeUid,
  uid,
  pUseDeleteMemeMutation = useDeleteMemeMutation,
  memeData: { createdDate, topText, meme, bottomText },
}: Props) => {
  const [modalId, setModalId] = useState('');
  return (
    <div className='flex h-full w-full flex-col gap-2 bg-gray-800 p-4 text-white'>
      <h1 className='w-full text-center font-serif text-xl font-bold md:text-2xl'>
        Details
      </h1>
      <div>Date Created: {createdDate.toDate().toDateString()}</div>
      {isOwner && <ButtonArea />}
      <CommentArea />
    </div>
  );

  function ButtonArea() {
    const mutation = pUseDeleteMemeMutation(uid, memeUid);
    return (
      <div className='grid w-full grid-cols-2 gap-4'>
        {modalId !== '' && (
          <Modal
            currentUser={{ uid }}
            topText={topText}
            bottomText={bottomText}
            memeUid={memeUid}
            modalId={modalId}
            setModalId={setModalId}
          />
        )}
        <button
          className='rounded-full bg-blue-500 px-4 text-lg font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:text-xl'
          onClick={() => setModalId(meme)}
        >
          Edit
        </button>
        <MutantButton
          mutation={mutation}
          className='rounded-full bg-red-500 px-4 text-lg font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-105 md:text-xl'
          onClick={() => mutation.mutate()}
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
