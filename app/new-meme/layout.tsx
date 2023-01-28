import PageNav from '@ui/new-meme/nav';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='-z-10 h-full bg-gray-300 pb-28 md:pb-32'>
      <div className='h-full'>{children}</div>
      <div className='fixed bottom-16 left-0 mb-2 flex w-full justify-center md:bottom-2'>
        <PageNav />
      </div>
    </div>
  );
};

export default Layout;
