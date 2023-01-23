/* eslint-disable @next/next/no-img-element */
import Spinner from '@ui/shared/loading-page/mad-bro.png';
import Image from 'next/image';
interface Props {
  loadingMsg?: string;
}
export const LoadingPage = ({ loadingMsg }: Props) => {
  return (
    <div>
      <div className='flex flex-col w-full h-full items-center justify-center bg-blue-600 text-white'>
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
        <h2 className='md:text-xl'>{loadingMsg}</h2>
      </div>
    </div>
  );
};
