'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { getNavIndexes, isInvalidPage } from './page-utils';

interface Props {}

const Nav = ({}: Props) => {
  let segment = useSelectedLayoutSegment();
  let activeIndex = isInvalidPage(segment) ? 1 : parseInt(segment || '1');

  return (
    <nav className='flex gap-1 font-bold text-gray-900'>
      <div className='w-7'>
        {activeIndex !== 1 && (
          <Link aria-label='Next Page' href={`/new-meme/${activeIndex - 1}`}>
            <div className='w-7 select-none rounded-full border-2 border-white bg-blue-600 text-center text-white shadow-md duration-300 hover:-translate-y-1 hover:shadow-slate-500'>{`<`}</div>
          </Link>
        )}
      </div>
      <ol className='flex gap-[2px]'>
        {getNavIndexes(activeIndex).map((index) => {
          return (
            <li key={index}>
              <Link aria-label={`Page ${index}`} href={`/new-meme/${index}`}>
                <div
                  className={`w-7 select-none rounded-full border-2 border-white bg-blue-600 text-center ${
                    index === activeIndex
                      ? 'text -translate-y-1 text-white shadow-md shadow-slate-500'
                      : 'shadow-md duration-300 hover:shadow-slate-500 md:hover:-translate-y-1 md:hover:text-white'
                  }`}
                >
                  {index}
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
      <div className='w-7'>
        {activeIndex !== 37 && (
          <Link href={`/new-meme/${activeIndex + 1}`}>
            <div
              className='w-7 select-none rounded-full border-2 border-white bg-blue-600 text-center text-white shadow-md duration-300 hover:-translate-y-1 hover:shadow-slate-500'
              ariea-label='Previous Page'
            >{`>`}</div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
