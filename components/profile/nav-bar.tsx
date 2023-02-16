import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export function NavBar({
  uid,
  pUseSelectedLayoutSegment = useSelectedLayoutSegment,
}: {
  uid: string;
  pUseSelectedLayoutSegment?: typeof useSelectedLayoutSegment;
}) {
  let segment = pUseSelectedLayoutSegment();
  const active = true;
  return (
    <nav className='flex w-full justify-center'>
      <ul className='flex gap-3 rounded-md bg-white px-2 py-0.5 shadow-md md:text-xl'>
        <NavLink href={`/profile/${uid}`}>Meme Collection</NavLink>
        <NavLink href={`/profile/${uid}/tracked`}>Tracked Degens</NavLink>
      </ul>
    </nav>
  );
  function NavLink({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    let active = href.startsWith(`/${segment}`);
    return (
      <li className=''>
        <Link
          href={href}
          className={`block border-b-2 border-white border-opacity-0 md:py-3 ${
            active
              ? 'border-opacity-100 text-white'
              : 'hover:border-opacity-100 hover:text-white'
          }`}
        >
          {children}
        </Link>
      </li>
    );
  }
}
