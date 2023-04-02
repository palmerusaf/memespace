'use client';
import { getMeme, getTitle, OriginLink } from '@ui/shared/api-meme-utils';
import { auth, useMemeMutation } from '@ui/shared/firebase-utils';
import { MutantButton } from '@ui/shared/mutant-button';
import ImageWithLoadState from '@ui/shared/next-image';
import assert from 'assert';
import { serverTimestamp } from 'firebase/firestore';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Input from './input';

interface Props {
  modalId: string;
  setModalId: React.Dispatch<React.SetStateAction<string>>;
  link?: string;
  pUseMemeMutation?: typeof useMemeMutation;
  currentUser?: { uid: string } | null;
  topText?: string;
  bottomText?: string;
  memeUid?: string;
}

const Modal = ({
  pUseMemeMutation = useMemeMutation,
  modalId,
  setModalId,
  currentUser = auth.currentUser,
  topText,
  bottomText,
  memeUid,
}: Props) => {
  const [imgSrc, setImgSrc] = useState(
    getMeme({
      meme: modalId,
      topText: topText || 'top text',
      bottomText: bottomText || 'bottom text',
    })
  );
  const topRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLInputElement>(null);

  const mutation = pUseMemeMutation(memeUid);

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

  return (
    <div className='absolute top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-400 bg-opacity-20 bg-blend-overlay backdrop-blur-sm'>
      <div className='flex h-auto w-auto flex-col items-center gap-4 rounded-lg bg-white py-4 px-4 text-black shadow-lg animate-in fade-in zoom-in-50 md:px-6'>
        <h1 className='text-xl font-bold'>{getTitle({ meme: modalId })}</h1>
        <p className='-mt-4'>Right Click or Long Tap Image to Download</p>
        <ImageWithLoadState
          alt={getTitle({ meme: modalId })}
          src={imgSrc}
          width={300}
          height={300}
          className='max-h-96 w-auto max-w-xs rounded-md shadow-lg shadow-gray-400'
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex w-full flex-col items-center gap-4'
        >
          <Input
            required={false}
            ref={topRef}
            defaultValue={topText}
            label='Top Text'
          ></Input>
          <Input
            ref={bottomRef}
            required={false}
            defaultValue={bottomText}
            label='Bottom Text'
          ></Input>
          <div className='grid w-full grid-cols-2 gap-2'>
            <button
              className={
                'rounded-full border-2 border-black bg-blue-600 px-2 py-0.5 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
              }
              onClick={updateImgSrc}
            >
              Preview Meme
            </button>
            <OriginLink
              meme={modalId}
              className='rounded-full border-2 border-black bg-blue-600 py-0.5 px-2 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
            >
              Lookup Origin
            </OriginLink>
            {(currentUser && (
              <MutantButton
                mutation={mutation}
                onClick={handleSave}
                className='rounded-full border-2 border-black bg-blue-600 py-0.5 px-2 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
                loadMsg={'Saving...'}
                errorMsg={'Try Again'}
                successMsg={'Success'}
                staticMsg={'Save to Profile'}
              />
            )) || (
              <Link
                className='rounded-full border-2 border-black bg-blue-600 py-0.5 px-2 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
                href={'login'}
              >
                Login to Save
              </Link>
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
