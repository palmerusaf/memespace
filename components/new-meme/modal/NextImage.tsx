'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LoadingHorse from '@ui/new-meme/loading-horse.gif';
import ErrorHorse from '@ui/new-meme/error-horse.gif';

interface Props {
  imgSrc: string;
  modalId: string;
}

const NextImage = ({ imgSrc, modalId }: Props) => {
  const [errorImg, setErrorImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, [imgSrc]);
  return (
    <>
      {loading && (
        <Image
          src={LoadingHorse.src}
          alt='Loading Horse'
          width={300}
          height={300}
          className={`rounded-md animate-pulse shadow-lg shadow-gray-400 aspect-auto w-auto max-h-96
        `}
        />
      )}
      <Image
        src={errorImg || imgSrc}
        width={300}
        height={300}
        onError={() => {
          setErrorImg(ErrorHorse.src);
          setLoading(false);
        }}
        onLoad={() => setLoading(false)}
        className={`rounded-md shadow-lg shadow-gray-400 aspect-auto w-auto max-h-96 ${
          loading && 'h-0'
        }`}
        alt={modalId.replaceAll('-', ' ')}
      />
    </>
  );
};

export default NextImage;
