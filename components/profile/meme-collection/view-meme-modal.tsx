import { getMeme, getTitle } from '@ui/shared/api-meme-utils';
import { ReceivingMemeData } from '@ui/shared/firebase-utils';
import ImageWithLoadState from '@ui/shared/next-image';
import assert from 'assert';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
  memeData: ReceivingMemeData[];
  setIndex: Dispatch<SetStateAction<number | null>>;
  index: number | null;
}
export const ViewMemeModal = ({ setIndex, memeData, index }: Props) => {
  useEffect(() => {}, [index]);
  if (index === null || memeData === null) return <></>;

  const cycleNext = () =>
    index === memeData.length - 1
      ? setIndex(0)
      : setIndex(() => {
          assert(index !== null);
          return index++;
        });

  const cyclePrev = () =>
    index === 0
      ? setIndex(memeData.length - 1)
      : setIndex(() => {
          assert(index !== null);
          return index--;
        });

  return (
    <div className='relative flex h-screen w-screen justify-center bg-black'>
      <button
        className='absolute left-0 z-50 flex h-full items-center px-4 font-mono text-2xl font-extrabold text-white'
        onClick={cyclePrev}
      >
        {'<'}
      </button>{' '}
      <ImageWithLoadState
        src={getMeme(memeData[index])}
        alt={getTitle(memeData[index])}
        className='w-auto animate-in fade-in-0'
        height={500}
        width={500}
      />
      <button
        className='absolute right-0 z-50 flex h-full items-center px-4 font-mono text-2xl font-extrabold text-white'
        onClick={cycleNext}
      >
        {'>'}
      </button>
    </div>
  );
};
