import PageNav from '@ui/new-meme/nav';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='h-full -z-10 bg-gray-300 pb-28 md:pb-32'>
      <div className='h-full'>{children}</div>
      <div className='flex justify-center w-full fixed bottom-16 left-0 md:bottom-2 mb-2'>
        <PageNav />
      </div>
    </div>
  );
};

export default Layout;
