'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavBar } from '@ui/app/nav-bar';
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
      staleTime: Infinity,
    },
  },
});

const Layout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body className='flex h-[100dvh] w-screen flex-col overflow-clip'>
        <QueryClientProvider client={queryClient}>
          {Banner()}
          <div className='flex grow flex-col overflow-scroll md:grid md:h-[calc(100vh-3.5rem)] md:grid-cols-[160px,auto]'>
            <div className='h-full overflow-scroll md:col-start-2 md:row-start-1 md:w-full'>
              {children}
            </div>
            <div className='h-16 w-screen shadow-xl md:static md:col-start-1 md:row-start-1 md:h-full md:w-full'>
              <NavBar />
            </div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default Layout;

function Banner() {
  return (
    <Link href={'/'}>
      <header className='flex h-14 w-full justify-center bg-blue-600 md:z-50 md:h-16'>
        <Image src={Logo} width={300} height={56} alt='logo' />
      </header>
    </Link>
  );
}
