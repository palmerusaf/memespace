/* eslint-disable @next/next/no-img-element */
import { SmallLogo } from '@ui/shared/imgs';

export const LoadingCard = ({ className = '' }) => (
  <div
    className={`relative flex items-center gap-3 rounded-md bg-white p-3 shadow-md md:justify-start md:p-6 ${className}`}
  >
    <div className='w-14 md:w-20'>
      <div className='aspect-square w-full rounded-full bg-blue-600 shadow-xl'>
        <img
          src={SmallLogo.src}
          alt='Placeholder Meme'
          className='aspect-square w-full'
        />
      </div>
    </div>
    <div className='grow animate-pulse text-center text-lg font-semibold md:text-2xl'>
      Loading...
    </div>
  </div>
);
