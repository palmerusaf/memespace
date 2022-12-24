'use client';
import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ErrorHorse from '@ui/new-meme/error-horse.gif';
import LoadingHorse from '@ui/new-meme/loading-horse.gif';
import MemeList from '@ui/new-meme/meme-list.json';
import withMemeModal, { WithModalProps } from '@ui/new-meme/page-id/modal';
import { isInvalidPage, getMemeEndPoints } from '@ui/new-meme/nav/page-utils';

interface PageProps extends WithModalProps {
  props: { params: { pageId: string } };
}

function ThumbNail(props: { title: string; id: string }) {
  const [imgSrc, setImgSrc] = useState(
    `https://apimeme.com/thumbnail?name=${props.id}`
  );
  const setToErrorImg = () => setImgSrc(ErrorHorse.src);
  return (
    <Image
      src={imgSrc}
      alt={props.title}
      className='w-full rounded-md shadow-lg my-2'
      width={100}
      height={100}
      placeholder='blur'
      blurDataURL={LoadingHorse.src}
      onError={setToErrorImg}
    />
  );
}

const DynamicNewMemePage = ({ props, openModalWith }: PageProps) => {
  const { pageId } = props.params;

  if (isInvalidPage(pageId)) return notFound();

  const pageNum: number = parseInt(pageId);
  const endPoints = getMemeEndPoints(pageNum);
  const memeSubList = MemeList.slice(endPoints.start, endPoints.end);

  return (
    <div className='overflow-scroll h-full'>
      <h1 className='text-center font-bold text-lg m-2'>Select Your Meme</h1>
      <div className='w-full h-full grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))]'>
        {memeSubList.map((id) => {
          const title = id.replaceAll('-', ' ');
          return (
            <div
              key={id}
              className='flex justify-between bg-white flex-col m-2 rounded-lg p-2 shadow-md'
            >
              <h2 className='w-full text-center font-medium '>{title}</h2>
              <ThumbNail title={title} id={id} />
              <button
                onClick={() => openModalWith({ id })}
                className={
                  'px-3 py-1  text-center bg-blue-600 rounded-full border-2 border-black text-black hover:text-white hover:-translate-y-1 duration-300 shadow-md hover:shadow-slate-500 font-medium'
                }
              >
                Select
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withMemeModal(DynamicNewMemePage);
// export default withMemeModal(({ openModalWith, props }: PageProps) => (
//   <button
//     onClick={() => {
//       openModalWith({ id: "10-Guy" });
//     }}
//   >
//     open
//     {props.params.pageId}
//   </button>
// ));
