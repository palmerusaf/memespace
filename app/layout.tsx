'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavWrapper from '@ui/app/nav-wrapper';
import { loadBots } from '@ui/shared/firebase-utils';
import { Logo } from '@ui/shared/imgs';
import Image from 'next/image';
import Link from 'next/link';
import './tailwind.css';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

// TODO DELETE AFTER TESTING
loadBots(7);
// TODO DELETE AFTER TESTING

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
