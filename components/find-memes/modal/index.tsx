'use client';
import { getMeme } from '@ui/shared/api-meme-utils';
import { auth, useMemeMutation } from '@ui/shared/firebase-utils';
import { MutantButton } from '@ui/shared/mutant-button';
import ImageWithLoadState from '@ui/shared/next-image';
import assert from 'assert';
import { serverTimestamp } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import Input from './input';

interface Props {
  modalId: string;
  setModalId: React.Dispatch<React.SetStateAction<string>>;
  link?: string;
  pUseMemeMutation: typeof useMemeMutation;
  currentUser: { uid: string } | null;
}

const Modal = ({
  pUseMemeMutation,
  modalId,
  setModalId,
  currentUser = auth.currentUser,
}: Props) => {
  const [imgSrc, setImgSrc] = useState(
    getMeme({ meme: modalId, topText: 'top text', bottomText: 'bottom text' })
  );
  const topRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLInputElement>(null);

  const mutation = pUseMemeMutation();

  const handleSave = () => {
    if (!(topRef && topRef.current)) return;
    if (!(bottomRef && bottomRef.current)) return;
    assert(currentUser);

    mutation.mutate({
      createdDate: serverTimestamp(),
      topText: topRef.current.value,
      bottomText: bottomRef.current.value,
      meme: modalId,
      createdBy: currentUser.uid,
    });
  };

  const updateImgSrc = () => {
    if (!(topRef && topRef.current)) return;
    if (!(bottomRef && bottomRef.current)) return;

    setImgSrc(
      getMeme({
        meme: modalId,
        topText: topRef.current.value,
        bottomText: bottomRef.current.value,
      })
    );
  };

  const closeModal = () => setModalId('');

  const title = modalId.replace(/-/g, ' ');

  return (
    <div
      className={
        'absolute top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-400 bg-opacity-20 bg-blend-overlay backdrop-blur-sm'
      }
      onClick={closeModal}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={
          'flex h-auto w-auto flex-col  items-center gap-4 rounded-lg bg-white px-4 py-4  shadow-lg animate-in fade-in zoom-in-50 md:px-6'
        }
      >
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='-mt-4'>Right Click or Long Tap Image to Download</p>
        <ImageWithLoadState
          alt={title}
          src={imgSrc}
          width={300}
          height={300}
          className={`max-h-96 w-auto max-w-xs rounded-md shadow-lg shadow-gray-400`}
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex w-full flex-col items-center gap-4'
        >
          <Input required={false} ref={topRef} label='Top Text'></Input>
          <Input ref={bottomRef} required={false} label='Bottom Text'></Input>
          <div className='grid w-full grid-cols-2 gap-2'>
            <button
              className={
                'rounded-full border-2 border-black bg-blue-600 px-2 py-0.5 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
              }
              onClick={updateImgSrc}
            >
              Preview Meme
            </button>
            <a
              href={`https://knowyourmeme.com/search?context=entries&sort=relevance&q=${title}`}
              target='_blank'
              rel='noreferrer noopener'
              className={
                'rounded-full border-2 border-black bg-blue-600 px-2 py-0.5 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
              }
            >
              Lookup Origin
            </a>
            {currentUser && (
              <MutantButton
                mutation={mutation}
                onClick={handleSave}
                className='rounded-full border-2 border-black bg-blue-600 px-2 py-0.5 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
                loadMsg={'Saving...'}
                errorMsg={'Try Again'}
                successMsg={'Success'}
                staticMsg={'Save to Profile'}
              />
            )}
            <button
              className={
                'w-full rounded-full border-2 border-black bg-red-600 px-2 py-0.5 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
              }
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
