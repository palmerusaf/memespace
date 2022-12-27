'use client';
import React, { useRef, useState } from 'react';
import styles from './index.module.css';
import Input from './input';
import NextImage from './NextImage';

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
          'flex flex-col gap-4 items-center shadow-lg w-auto px-6 py-4 h-auto min-h-fit bg-white rounded-lg' +
          ' ' +
          styles.popIn
        }
      >
        <h1 className='font-bold text-xl'>{modalId.replaceAll('-', ' ')}</h1>
        <NextImage imgSrc={imgSrc} modalId={modalId} />
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
            href={`https://knowyourmeme.com/search?context=entries&sort=relevance&q=${modalId.replaceAll(
              '-',
              ' '
            )}`}
            target='_blank'
            rel='noreferrer noopener'
            className={
              'px-2 py-0.5 text-center bg-blue-600 rounded-full border-2 border-black text-black hover:text-white hover:-translate-y-0.5 duration-300 font-medium shadow-md shadow-stone-400'
            }
          >
            Lookup Origin
          </a>
        </span>
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
