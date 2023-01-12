import NavLink from './nav-link';
import style from './index.module.css';

interface Props {
  children: React.ReactNode;
}

const NavWrapper = ({ children }: Props) => {
  return (
    <div className='flex flex-col h-full md:grid md:grid-cols-[160px,auto]'>
      <div
        className={`overflow-scroll h-full mb-16 md:mb-0 md:w-full md:col-start-2 md:row-start-1 ${style.padChild}`}
      >
        {children}
      </div>
      <div className='shadow-xl fixed bottom-0 w-screen h-16 md:static md:w-full md:h-full md:col-start-1 md:row-start-1'>
        <NavBar />
      </div>
    </div>
  );
};

export default NavWrapper;

function NavBar() {
  return (
    <div className='bg-blue-600  w-full h-full'>
      <nav className='pt-5 md:pt-12'>
        <ul className='flex flex-row md:flex-col px-1 md:px-3 font-bold text-gray-900 text-center text-sm md:text-base'>
          <NavLink href='/profile'>Profile</NavLink>
          <NavLink href='/new-meme/1'>New Meme</NavLink>
          <NavLink href='/friends-list'>Friends List</NavLink>
        </ul>
      </nav>
    </div>
  );
}
