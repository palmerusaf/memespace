'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NavWrapper from '@ui/app/nav-wrapper';
import { useLoggedIn } from '@ui/shared/firebase-utils';
import { Logo } from '@ui/shared/imgs';
import { LoggedInContext } from '@ui/shared/loggedin-context';
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
    },
  },
});

const Layout = ({ children }: Props) => {
  const { loggedIn } = useLoggedIn();
  return (
    <html>
      <head />
      <body className='h-screen w-screen overflow-clip'>
        <LoggedInContext.Provider value={loggedIn}>
          <QueryClientProvider client={queryClient}>
            <Link href={'/'}>
              <header className='flex h-14 w-full justify-center bg-blue-600 md:z-50 md:h-16'>
                <Image src={Logo} width={300} height={56} alt='logo' />
              </header>
            </Link>
            <NavWrapper>{children}</NavWrapper>
          </QueryClientProvider>
        </LoggedInContext.Provider>
      </body>
    </html>
  );
};

export default Layout;
