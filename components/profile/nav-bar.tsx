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
    <nav className='flex w-full justify-center'>
      <ul className='flex gap-3 rounded-md bg-white px-2 py-0.5 shadow-md md:text-xl'>
        <NavBarLink
          href={`/profile/${uid}`}
          imgSrc={MadBro.src}
          imgAlt={'Mad Bro'}
        >
          MEMES
        </NavBarLink>
        <NavBarLink
          href={`/profile/${uid}/tracked`}
          imgSrc={SmallLogo.src}
          imgAlt={'meme people'}
        >
          TRACKING
        </NavBarLink>
      </ul>
    </nav>
  );

  function NavBarLink({
    href,
    children,
    imgSrc,
    imgAlt,
  }: {
    href: string;
    children: React.ReactNode;
    imgSrc: string;
    imgAlt: string;
  }) {
    let active = href === `/profile/${uid}${segment ? `/${segment}` : ''}`;
    return (
      <NavLink activeClass='font-bold' href={href} active={active}>
        <img src={imgSrc} alt={imgAlt} />
        {children}
      </NavLink>
    );
  }
}
