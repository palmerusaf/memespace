'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ErrorHorse from './error-horse.gif';
import LoadingHorse from './loading-horse.gif';

interface Props {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  className?: string;
}

const ImageWithLoadState = ({
  width,
  height,
  fill,
  className,
  src,
  alt,
}: Props) => {
  const [imgSrc, setImgSrc] = useState(src);
  const setToErrorImg = () => setImgSrc(ErrorHorse.src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      key={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      fill={fill}
      style={{
        background: `url(${LoadingHorse.src})`,
        backgroundSize: 'cover',
      }}
      onError={setToErrorImg}
    />
  );
};

export default ImageWithLoadState;
