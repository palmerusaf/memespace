'use client';
import { getMemeEndPoints, isInvalidPage } from '@ui/find-memes/nav/page-utils';
import { getThumbnail } from '@ui/shared/api-meme-utils';
import Modal from '@ui/shared/edit-meme-modal';
import { auth } from '@ui/shared/firebase-utils';
import { MEME_LIST, MEME_MAP } from '@ui/shared/meme-list';
import ImageWithLoadState from '@ui/shared/next-image';
import { Select } from '@ui/shared/select';
import { notFound } from 'next/navigation';
import { useState } from 'react';

interface Props {
  params: { pageId: string };
}

const Page = ({ params }: Props) => {
  const { pageId } = params;

  // set meme for modal and drop down
  const [memeId, setMemeId] = useState('');

  if (isInvalidPage(pageId)) return notFound();

  // define sub-list to display based on page number
  const pageNum: number = parseInt(pageId);
  const endPoints = getMemeEndPoints(pageNum);
  const memeSubList = MEME_LIST.slice(endPoints.start, endPoints.end);

  return (
    <>
      {memeId !== '' && (
        <Modal
          currentUser={auth.currentUser}
          setModalId={setMemeId}
          modalId={memeId}
        />
      )}
      <div className='relative h-full overflow-scroll'>
        <div className='flex w-full items-center justify-center'>
          <h1 className='w-full overflow-hidden text-center text-lg font-bold'>
            Select Your Meme
          </h1>
        </div>
        <div className='sticky top-1 flex w-full justify-center'>
          <Select
            optionValues={MEME_MAP}
            selectedValue={memeId}
            setSelectedValue={setMemeId}
            placeholder='Select from DropDown'
          />
        </div>
        <div className='grid h-full w-full grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))]'>
          {memeSubList.map((meme) => {
            return (
              <div
                key={meme}
                className='m-2 flex flex-col justify-between rounded-lg bg-white p-2 shadow-md animate-in zoom-in-50 spin-in-12'
              >
                <h2 className='w-full overflow-hidden overflow-ellipsis text-center font-medium'>
                  {meme.replace(/-/g, ' ')}
                </h2>
                <ImageWithLoadState
                  src={getThumbnail(meme)}
                  alt={meme.replace(/-/g, ' ')}
                  className='my-2 aspect-square w-full rounded-md object-cover shadow-lg'
                  width={100}
                  height={100}
                />
                <button
                  onClick={() => setMemeId(meme)}
                  className={
                    'rounded-full border-2  border-black bg-blue-600 px-3 py-1 text-center font-medium text-white shadow-md duration-300 hover:-translate-y-1 hover:text-white hover:shadow-slate-500'
                  }
                >
                  Select
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
