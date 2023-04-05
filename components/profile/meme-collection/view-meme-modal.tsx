import { getMeme, getTitle } from '@ui/shared/api-meme-utils';
import { ReceivingMemeData } from '@ui/shared/firebase-utils';
import ImageWithLoadState from '@ui/shared/next-image';
import assert from 'assert';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { HamButton } from './ham-button';

interface Props {
  memeData: ReceivingMemeData[] | null | undefined;
  setIndex: Dispatch<SetStateAction<number | null>>;
  index: number | null;
  menuContent?: ReactNode;
}
export const ViewMemeModal = ({
  setIndex,
  memeData,
  index,
  menuContent,
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  if (index === null || memeData === null || memeData === undefined)
    return <></>;

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

  const menuHeight = 'h-[22.5rem] md:h-full';
  const menuWidth = 'md:w-[22.5rem]';
  const modalHeight = menuOpen ? 'h-[calc(100vh-22.5rem)] md:h-full' : 'h-full';
  const modalWidth = menuOpen ? 'w-full md:w-[calc(100vw-22.5rem)]' : 'w-full';

  return (
    <div className='fixed top-0 left-0 z-50 flex h-screen w-screen flex-col md:flex-row'>
      <div
        className={`relative flex items-center ${modalHeight} ${modalWidth} justify-center bg-black animate-in fade-in-0 md:items-stretch`}
      >
        <button
          className={`absolute left-0 ${modalHeight} z-40 flex items-center px-4 font-mono text-2xl font-extrabold text-white duration-300 md:hover:bg-white md:hover:bg-opacity-50`}
          onClick={cyclePrev}
        >
          {'<'}
        </button>
        <ImageWithLoadState
          src={getMeme(memeData[index])}
          alt={getTitle(memeData[index])}
          className='max-h-full w-auto animate-in fade-in-0'
          height={500}
          width={500}
        />
        <button
          className={`absolute right-0 z-40 flex items-center justify-center ${modalHeight} px-4 font-mono text-2xl font-extrabold text-white duration-300 md:hover:bg-white md:hover:bg-opacity-50`}
          onClick={cycleNext}
        >
          {'>'}
        </button>
        <div className='absolute top-0 right-0 z-50 flex flex-col items-center p-4 text-white'>
          <button
            className='-mx-2 rounded-full py-0 px-2 text-center text-xl duration-300 md:text-3xl md:hover:bg-white md:hover:bg-opacity-50'
            onClick={() => {
              setIndex(null);
            }}
          >
            X
          </button>
          <HamButton toggleMenu={toggleMenu} />
        </div>
      </div>
      {menuOpen && (
        <div className={`${menuHeight} ${menuWidth}`}>{menuContent}</div>
      )}
    </div>
  );
};
