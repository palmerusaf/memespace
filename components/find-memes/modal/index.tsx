'use client';
import { getMeme } from '@ui/shared/api-meme-utils';
import ImageWithLoadState from '@ui/shared/next-image';
import React, { useRef, useState } from 'react';
import Input from './input';

interface Props {
  modalId: string;
  setModalId: React.Dispatch<React.SetStateAction<string>>;
  link?: string;
}

const Modal = ({ modalId, setModalId }: Props) => {
  const [imgSrc, setImgSrc] = useState(
    getMeme({ id: modalId, topText: 'top text', bottomText: 'bottom text' })
  );
  const topRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLInputElement>(null);

  const updateImgSrc = () => {
    if (!(topRef && topRef.current)) return;
    if (!(bottomRef && bottomRef.current)) return;

    setImgSrc(
      getMeme({
        id: modalId,
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
          'flex h-auto w-auto flex-col  items-center gap-4 rounded-lg bg-white px-6  py-4 shadow-lg animate-in fade-in zoom-in-50'
        }
      >
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='-mt-4'>Right Click or Long Tap Image to Download</p>
        <ImageWithLoadState
          alt={title}
          src={imgSrc}
          width={300}
          height={300}
          className={`max-h-96 rounded-md shadow-lg shadow-gray-400`}
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex w-full flex-col items-center gap-4'
        >
          <Input ref={topRef} label='Top Text'></Input>
          <Input ref={bottomRef} label='Bottom Text'></Input>
          <span className='flex w-full justify-between gap-1'>
            <button
              className={
                'rounded-full border-2 border-black bg-blue-600 px-2 py-0.5 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
              }
              onClick={updateImgSrc}
            >
              Create Meme
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
          </span>
        </form>
        <button
          className={
            'w-full rounded-full border-2 border-black bg-red-600 px-2 py-0.5 text-center font-medium text-white shadow-md shadow-stone-400 duration-300 hover:-translate-y-0.5 hover:text-white'
          }
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
