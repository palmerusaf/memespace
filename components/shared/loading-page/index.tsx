import Spinner from './mad-bro.png';
import Image from 'next/image';
interface Props {
  loadingMsg: string;
}
export const LoadingPage = ({ loadingMsg }: Props) => {
  return (
    <div className='flex flex-col w-full h-full items-center justify-center bg-blue-600 text-white'>
      <Image
        src={Spinner}
        alt='loading spinner'
        height={100}
        width={123}
        className='animate-spin w-16 mb-2'
      />
      <h1 className='animate-pulse'>Loading...</h1>
      <h2 className=''>{loadingMsg}</h2>
    </div>
  );
};
