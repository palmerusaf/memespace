'use client';
import React, { useState } from 'react';
import styles from './index.module.css';

interface Props {
  modalId: string;
}

const Modal = ({ modalId }: Props) => {
  const [meme, setMeme] = useState(modalId);
  const [bottomText, setBottomText] = useState('Bottom Text');
  const [topText, setTopText] = useState('Top Text');

  return (
    <div
      className={
        'flex absolute top-0 left-0 z-50 w-screen h-screen justify-center items-center bg-blend-overlay backdrop-blur-sm'
      }
      onClick={close}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={
          'flex flex-col items-center shadow-2xl w-full mx-2 p-4 h-3/4 bg-white rounded-lg' +
          ' ' +
          styles.popIn
        }
      >
        <h1 className='font-bold'>{meme.replaceAll('-', ' ')}</h1>
        <input type='text' />
        <span className='flex justify-evenly w-full'>
          <button
            className={
              'px-2 py-0.5  text-center bg-blue-600 rounded-full border-2 border-black text-black hover:text-white hover:-translate-y-0.5 duration-300 shadow-md hover:shadow-slate-500 font-medium'
            }
          >
            Preview
          </button>
          <a
            href={`https://knowyourmeme.com/search?context=entries&sort=relevance&q=${meme.replaceAll('-', ' ')}}`}
            target='_blank'
            rel='noreferrer noopener'
            className={
              'px-2 py-0.5  text-center bg-blue-600 rounded-full border-2 border-black text-black hover:text-white hover:-translate-y-0.5 duration-300 shadow-md hover:shadow-slate-500 font-medium'
            }
          >
            Origin Story
          </a>
        </span>
      </div>
    </div>
  );
};

export default Modal;
