'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import MemeList from '@ui/new-meme/meme-list.json';
import { isInvalidPage, getMemeEndPoints } from '@ui/new-meme/nav/page-utils';
import ThumbNail from '@ui/new-meme/ThumbNail';
import Modal from '@ui/new-meme/modal';
import DropDown from '@ui/new-meme/drop-down';

interface Props {
  params: { pageId: string };
}

const Page = ({ params }: Props) => {
  const { pageId } = params;

  if (isInvalidPage(pageId)) return notFound();

  // define sub-list to display based on page number
  const pageNum: number = parseInt(pageId);
  const endPoints = getMemeEndPoints(pageNum);
  const memeSubList = MemeList.slice(endPoints.start, endPoints.end);

  // set meme for modal and drop down
  const [memeId, setMemeId] = useState<null | string>(null);

  return (
    <>
      {memeId && <Modal setModalId={setMemeId} modalId={memeId} />}
      <div className='overflow-scroll h-full relative'>
        <h1 className='text-center w-full font-bold text-lg m-2'>Select Your Meme</h1>
        <div className='w-full sticky top-1 flex justify-center'>
          <DropDown
            optionValues={MemeList}
            selectedOption={memeId}
            setSelectedOption={setMemeId}
            placeholder='Select from DropDown'
          />
        </div>
        <div className='w-full h-full grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))]'>
          {memeSubList.map((id) => {
            return (
              <div
                key={id}
                className='flex justify-between bg-white flex-col m-2 rounded-lg p-2 shadow-md'
              >
                <h2 className='w-full text-center font-medium '>
                  {id.replace(/-/g, ' ')}
                </h2>
                <ThumbNail id={id} />
                <button
                  onClick={() => setMemeId(id)}
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
    </>
  );
};

export default Page;