import style from './index.module.css';
import { NavBar } from './nav-bar';

interface Props {
  children: React.ReactNode;
}

const NavWrapper = ({ children }: Props) => {
  return (
    <div className='flex h-full flex-col md:grid md:grid-cols-[160px,auto]'>
      <div
        className={`mb-16 h-full overflow-scroll md:col-start-2 md:row-start-1 md:mb-0 md:w-full ${style.padChild}`}
      >
        {children}
      </div>
      <div className='fixed bottom-0 h-16 w-screen shadow-xl md:static md:col-start-1 md:row-start-1 md:h-full md:w-full'>
        <NavBar />
      </div>
    </div>
  );
};

export default NavWrapper;
