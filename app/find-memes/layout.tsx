import PageNav from '@ui/find-memes/nav';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='-z-10 h-full bg-gray-300'>
      <div className='h-[calc(100vh-243px)] md:h-full'>{children}</div>
      <div className='fixed left-0 bottom-16 mb-2 flex w-full justify-center md:bottom-2'>
        <PageNav />
      </div>
    </div>
  );
};

export default Layout;
