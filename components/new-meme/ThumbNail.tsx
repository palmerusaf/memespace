'use client';
import { useState } from 'react';
import Image from 'next/image';
import ErrorHorse from '@ui/new-meme/error-horse.gif';
import LoadingHorse from '@ui/new-meme/loading-horse.gif';

interface Props {
  id: string;
}

const ThumbNail = ({ id }: Props) => {
  const [imgSrc, setImgSrc] = useState(
    `https://apimeme.com/thumbnail?name=${id}`
  );
  const setToErrorImg = () => setImgSrc(ErrorHorse.src);

  return (
    <Image
      src={imgSrc}
      alt={id.replaceAll('-', ' ')}
      className='w-full rounded-md shadow-lg my-2'
      width={100}
      height={100}
      placeholder='blur'
      blurDataURL={LoadingHorse.src}
      onError={setToErrorImg}
    />
  );
};

export default ThumbNail;
