'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import LoadingHorse from '@ui/new-meme/loading-horse.gif';
import ErrorHorse from '@ui/new-meme/error-horse.gif';

interface Props {
  imgSrc: string;
  modalId: string;
}

const NextImage = ({ imgSrc, modalId }: Props) => {
  const [img, setImg] = useState(imgSrc);
  const setErrorImg = () => {
    setImg(ErrorHorse.src);
  };
  return (
    <Image
      src={img}
      width={300}
      height={300}
      onError={setErrorImg}
      className={
        'rounded-md shadow-lg shadow-gray-400 aspect-auto w-auto max-h-96 '
      }
      alt={modalId.replaceAll('-', ' ')}
      placeholder='blur'
      blurDataURL={LoadingHorse.src}
    />
  );
};

export default NextImage;
