import Image from 'next/image';
import './globals.css';
import NavWrapper from '@ui/app/nav-wrapper';
import Logo from '@ui/shared/logo.png';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body>
        <header className='fixed top-0 h-14 md:h-16 md:z-50 bg-blue-700 w-full flex justify-center'>
          <Image src={Logo} width={350} alt='logo' />
        </header>
        <NavWrapper>{children}</NavWrapper>
      </body>
    </html>
  );
};

export default Layout;
