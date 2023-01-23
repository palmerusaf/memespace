import Spinner from '@ui/shared/loading-page/mad-bro.png';
import Image from 'next/image';

export default function Loading() {
  return (
    <div>
      <div
        className={`flex flex-col w-full h-full items-center justify-center bg-gray-300 text-black`}
      >
        <Image
          src={Spinner}
          alt='loading spinner'
          height={100}
          width={123}
          className='w-auto h-auto animate-spin'
        />

        <h1 className='animate-pulse text-lg font-bold mt-3 md:text-2xl md:mt-5'>
          Loading...
        </h1>
        <h2 className='md:text-xl'>Fetching Memes</h2>
      </div>
    </div>
  );
}
