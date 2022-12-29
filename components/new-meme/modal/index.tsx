'use client';
import React, { useRef, useState } from 'react';
import styles from './index.module.css';
import Input from './input';
import PreviewImage from './preview-image';

interface Props {
  modalId: string | null;
  setModalId: React.Dispatch<React.SetStateAction<string | null>>;
  link?: string;
}

const Modal = ({ modalId, link, setModalId }: Props) => {
  const [imgSrc, setImgSrc] = useState(
    link ||
      `https://apimeme.com/meme?meme=${modalId}&top=top+text&bottom=bottom+text`
  );
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const updateImgSrc = () => {
    const topText = encodeURIComponent(topRef.current.value);
    const bottomText = encodeURIComponent(bottomRef.current.value);

    setImgSrc(
      `https://apimeme.com/meme?meme=${modalId}&top=${topText}&bottom=${bottomText}`
    );
  };

  const closeModal = () => setModalId(null);

  const title = modalId.replace(/-/g, ' ');

  return (
    <div
      className={
        'flex absolute top-0 left-0 z-50 w-screen h-screen justify-center items-center bg-blend-overlay backdrop-blur-sm'
      }
      onClick={closeModal}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={
          'flex flex-col gap-4 items-center shadow-lg w-auto px-6 py-4 h-auto  bg-white rounded-lg' +
          ' ' +
          styles.popIn
        }
      >
        <h1 className='font-bold text-xl'>{title}</h1>
        <p className='-mt-4'>Right Click or Long Tap Image to Download</p>
        <PreviewImage imgSrc={imgSrc} alt={title} />
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex flex-col gap-4 items-center w-full'
        >
          <Input ref={topRef} label='Top Text'></Input>
          <Input ref={bottomRef} label='Bottom Text'></Input>
          <span className='flex justify-between gap-1 w-full'>
            <button
              className={
                'px-2 py-0.5 text-center bg-blue-600 rounded-full border-2 border-black text-black hover:text-white hover:-translate-y-0.5 duration-300 font-medium shadow-md shadow-stone-400'
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
                'px-2 py-0.5 text-center bg-blue-600 rounded-full border-2 border-black text-black hover:text-white hover:-translate-y-0.5 duration-300 font-medium shadow-md shadow-stone-400'
              }
            >
              Lookup Origin
            </a>
          </span>
        </form>
        <button
          className={
            'px-2 py-0.5 text-center w-full bg-red-600 rounded-full border-2 border-black text-black hover:text-white hover:-translate-y-0.5 duration-300 font-medium shadow-md shadow-stone-400'
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
