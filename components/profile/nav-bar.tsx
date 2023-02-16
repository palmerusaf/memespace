/* eslint-disable @next/next/no-img-element */
import { MadBro, SmallLogo } from '@ui/shared/imgs';
import { NavLink } from '@ui/shared/nav-link';
import { useSelectedLayoutSegment } from 'next/navigation';

export function NavBar({
  uid,
  pUseSelectedLayoutSegment = useSelectedLayoutSegment,
}: {
  uid: string;
  pUseSelectedLayoutSegment?: typeof useSelectedLayoutSegment;
}) {
  let segment = pUseSelectedLayoutSegment();

  return (
    <nav className='mt-2 flex w-full px-4'>
      <ul className='flex w-full gap-2 border-t px-2'>
        <NavBarLink
          href={`/profile/${uid}`}
          imgSrc={MadBro.src}
          imgAlt={'Mad Bro'}
          label='MEMES'
        />
        <NavBarLink
          href={`/profile/${uid}/tracked`}
          imgSrc={SmallLogo.src}
          imgAlt={'meme people'}
          label='TRACKING'
        />
      </ul>
    </nav>
  );

  function NavBarLink({
    href,
    label,
    imgSrc,
    imgAlt,
  }: {
    href: string;
    label: string;
    imgSrc: string;
    imgAlt: string;
  }) {
    let active = href === `/profile/${uid}${segment ? `/${segment}` : ''}`;
    return (
      <NavLink
        activeClass='font-bold border-t-2 border-blue-600 scale-110'
        inActiveClass='hover:font-bold hover:border-t-2 hover:border-blue-600 hover:scale-110 duration-300'
        className='flex w-full justify-center'
        href={href}
        active={active}
      >
        <div className='flex gap-2 p-2'>
          <img src={imgSrc} className='h-8' alt={imgAlt} />
          <div className='hidden md:inline'>{label}</div>
        </div>
      </NavLink>
    );
  }
}
