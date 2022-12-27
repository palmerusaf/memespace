'use client';
import React, { useEffect, useState } from 'react';
import LoadingHorse from '@ui/new-meme/loading-horse.gif';
import ErrorHorse from '@ui/new-meme/error-horse.gif';

interface Props {
  imgSrc: string;
  alt: string;
}

const PreviewImage = ({ imgSrc, alt }: Props) => {
  const [errorImg, setErrorImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, [imgSrc]);
  return (
    <>
      {loading && (
        <img
          src={LoadingHorse.src}
          alt='Loading Horse'
          className={`rounded-md animate-pulse shadow-lg shadow-gray-400 max-w-[300px] aspect-auto w-auto max-h-96
        `}
        />
      )}
      <img
        src={errorImg || imgSrc}
        onError={() => {
          setErrorImg(ErrorHorse.src);
          setLoading(false);
        }}
        onLoad={() => setLoading(false)}
        className={`rounded-md shadow-lg shadow-gray-400 aspect-auto max-w-[300px] w-auto max-h-96 ${
          loading && 'h-0'
        }`}
        alt={alt}
      />
    </>
  );
};

export default PreviewImage;
