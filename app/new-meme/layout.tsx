import PageNav from '@ui/new-meme/nav';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='h-full -z-10'>
      <div className='h-full overflow-scroll bg-gray-300  pb-10'>
        {children}
      </div>
      <div className='flex justify-center w-full fixed bottom-16 md:bottom-2 mb-2'>
        <PageNav />
      </div>
    </div>
  );
};

export default Layout;
