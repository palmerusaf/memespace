'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavWrapper from '@ui/app/nav-wrapper';
import Logo from '@ui/shared/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import './tailwind.css';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Layout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body className='h-screen w-screen overflow-clip'>
        <QueryClientProvider client={queryClient}>
          <Link href={'/'}>
            <header className='flex h-14 w-full justify-center bg-blue-600 md:z-50 md:h-16'>
              <Image src={Logo} width={300} height={56} alt='logo' />
            </header>
          </Link>
          <NavWrapper>{children}</NavWrapper>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default Layout;
