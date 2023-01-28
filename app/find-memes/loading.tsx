import Spinner from '@ui/shared/loading-page/mad-bro.png';
import Image from 'next/image';

export default function Loading() {
  return (
    <div>
      <div
        className={`flex h-full w-full flex-col items-center justify-center bg-gray-300 text-black`}
      >
        <Image
          src={Spinner}
          alt='loading spinner'
          height={100}
          width={123}
          className='h-auto w-auto animate-spin'
        />

        <h1 className='mt-3 animate-pulse text-lg font-bold md:mt-5 md:text-2xl'>
          Loading...
        </h1>
        <h2 className='md:text-xl'>Fetching Memes</h2>
      </div>
    </div>
  );
}
