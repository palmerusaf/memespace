import Spinner from '@ui/shared/imgs/mad-bro.png';
import Image from 'next/image';
interface Props {
  loadingMsg?: string;
  className?: string;
}
export const LoadingPage = ({ loadingMsg, className }: Props) => {
  return (
    <div>
      <div
        className={`flex h-full w-full flex-col items-center justify-center bg-blue-600 text-white ${className}`}
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
        <h2 className='md:text-xl'>{loadingMsg}</h2>
      </div>
    </div>
  );
};
