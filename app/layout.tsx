import Image from 'next/image';
import './tailwind.css';
import NavWrapper from '@ui/app/nav-wrapper';
import Logo from '@ui/shared/logo.png';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body className='overflow-clip'>
        <header className='flex h-14 w-full justify-center bg-blue-600 md:z-50 md:h-16'>
          <Image src={Logo} width={300} height={56} alt='logo' />
        </header>
        <NavWrapper>{children}</NavWrapper>
      </body>
    </html>
  );
};

export default Layout;
