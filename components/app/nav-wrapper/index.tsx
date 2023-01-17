import style from './index.module.css';
import { NavBar } from './nav-bar';

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
