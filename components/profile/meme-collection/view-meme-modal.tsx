import { getMeme, getTitle } from '@ui/shared/api-meme-utils';
import { ReceivingMemeData } from '@ui/shared/firebase-utils';
import ImageWithLoadState from '@ui/shared/next-image';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  memeData: ReceivingMemeData[];
  setIndex: Dispatch<SetStateAction<number | null>>;
  index: number | null;
}
export const ViewMemeModal = ({ setIndex, memeData, index }: Props) => {
  if (index === null || memeData === null) return <></>;

  const cycleNext = () =>
    index === memeData.length - 1 ? setIndex(0) : setIndex(index++);

  const cyclePrev = () =>
    index === 0 ? setIndex(memeData.length - 1) : setIndex(index--);

  return (
    <div className=''>
      <div className=''>
        <ImageWithLoadState
          src={getMeme(memeData[index])}
          alt={getTitle(memeData[index])}
          height={500}
          width={500}
        />
      </div>
      <button className='' onClick={cyclePrev}>
        prev
      </button>
      <button className='' onClick={cycleNext}>
        next
      </button>
    </div>
  );
};
