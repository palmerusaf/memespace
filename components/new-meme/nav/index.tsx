'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { getNavIndexes, isInvalidPage } from './page-utils';

interface Props {}

const Nav = ({}: Props) => {
  let segment = useSelectedLayoutSegment();
  let activeIndex = isInvalidPage(segment) ? 1 : parseInt(segment || '1');

  return (
    <nav className='flex text-gray-900 gap-1 font-bold'>
      <div className='w-7'>
        {activeIndex !== 1 && (
          <Link aria-label='Next Page' href={`/new-meme/${activeIndex - 1}`}>
            <div className='select-none w-7 text-center bg-blue-600 text-white rounded-full border-2 border-white hover:-translate-y-1 duration-300 shadow-md hover:shadow-slate-500'>{`<`}</div>
          </Link>
        )}
      </div>
      <ol className='flex gap-[2px]'>
        {getNavIndexes(activeIndex).map((index) => {
          return (
            <li key={index}>
              <Link aria-label={`Page ${index}`} href={`/new-meme/${index}`}>
                <div
                  className={`select-none w-7 bg-blue-600 text-center rounded-full border-2 border-white ${
                    index === activeIndex
                      ? '-translate-y-1 shadow-md text-white shadow-slate-500 text'
                      : 'md:hover:-translate-y-1 md:hover:text-white duration-300 shadow-md hover:shadow-slate-500'
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
              className='select-none w-7 text-center bg-blue-600 text-white rounded-full border-2 border-white hover:-translate-y-1 duration-300 shadow-md hover:shadow-slate-500'
              ariea-label='Previous Page'
            >{`>`}</div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
