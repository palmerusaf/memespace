'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavBar } from '@ui/app/nav-bar';
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
          <div className='flex h-full flex-col md:grid md:grid-cols-[160px,auto]'>
            <div
              className={`mb-16 h-full overflow-scroll md:col-start-2 md:row-start-1 md:mb-0 md:w-full `}
            >
              {children}
            </div>
            <div className='h-16 w-screen md:static md:col-start-1 md:row-start-1 md:h-full md:w-full'>
              <div className='fixed bottom-0 h-16 w-screen shadow-xl md:static md:col-start-1 md:row-start-1 md:h-full md:w-full'>
                <NavBar />
              </div>
            </div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default Layout;
