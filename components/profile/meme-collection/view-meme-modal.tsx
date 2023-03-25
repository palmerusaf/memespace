import { getMeme, getTitle } from '@ui/shared/api-meme-utils';
import { ReceivingMemeData } from '@ui/shared/firebase-utils';
import ImageWithLoadState from '@ui/shared/next-image';
import assert from 'assert';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
  memeData: ReceivingMemeData[];
  setIndex: Dispatch<SetStateAction<number | null>>;
  index: number | null;
  controlButton: JSX.Element;
}
export const ViewMemeModal = ({
  setIndex,
  memeData,
  index,
  controlButton,
}: Props) => {
  useEffect(() => {}, [index]);
  if (index === null || memeData === null) return <></>;

  const cycleNext = () =>
    index === memeData.length - 1
      ? setIndex(0)
      : setIndex(() => {
          assert(index !== null);
          return index + 1;
        });

  const cyclePrev = () =>
    index === 0
      ? setIndex(memeData.length - 1)
      : setIndex(() => {
          assert(index !== null);
          return index - 1;
        });

  return (
    <button className='absolute flex h-screen w-screen items-center justify-center bg-black animate-in fade-in-0 md:items-stretch'>
      <button
        className='absolute left-0 z-40 flex h-full items-center px-4 font-mono text-2xl font-extrabold text-white duration-300 md:hover:scale-110 md:hover:bg-white md:hover:bg-opacity-50'
        onClick={cyclePrev}
      >
        {'<'}
      </button>{' '}
      <ImageWithLoadState
        src={getMeme(memeData[index])}
        alt={getTitle(memeData[index])}
        className='max-h-full w-auto animate-in fade-in-0'
        height={500}
        width={500}
      />
      <button
        className='absolute right-0 z-40 flex h-full items-center justify-center px-4 font-mono text-2xl font-extrabold text-white duration-300 md:hover:scale-110 md:hover:bg-white md:hover:bg-opacity-50'
        onClick={cycleNext}
      >
        {'>'}
      </button>
      <div className='absolute top-0 right-0 z-50 flex flex-col items-center p-4 text-white'>
        <button
          className='-mx-2 rounded-full px-2 py-0 text-center text-xl duration-300 md:text-3xl md:hover:bg-white md:hover:bg-opacity-50'
          onClick={() => {
            setIndex(null);
          }}
        >
          X
        </button>
        {controlButton}
      </div>
    </button>
  );
};
