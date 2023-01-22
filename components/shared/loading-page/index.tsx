/* eslint-disable @next/next/no-img-element */
import Spinner from './mad-bro.png';
interface Props {
  loadingMsg: string;
}
export const LoadingPage = ({ loadingMsg }: Props) => {
  return (
    <div className='flex flex-col w-full h-full items-center justify-center bg-blue-600 text-white'>
      <img
        src={Spinner.src}
        alt='loading spinner'
        className='animate-spin w-16 mb-2'
      />
      <h1 className='animate-pulse'>Loading...</h1>
      <h2 className=''>{loadingMsg}</h2>
    </div>
  );
};
