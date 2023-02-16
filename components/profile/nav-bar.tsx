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
        <NavBarLink href={`/profile/${uid}`}>Meme Collection</NavBarLink>
        <NavBarLink href={`/profile/${uid}/tracked`}>Tracked Degens</NavBarLink>
      </ul>
    </nav>
  );

  function NavBarLink({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    let active = href === `/profile/${uid}${segment ? `/${segment}` : ''}`;
    return (
      <NavLink activeClass='font-bold' href={href} active={active}>
        {children}
      </NavLink>
    );
  }
}
