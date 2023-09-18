import PageNav from '@ui/find-memes/nav';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='-z-10 flex flex-col bg-gray-300'>
      <div className='grow pb-28 md:pb-32'>{children}</div>
      <div className='fixed left-0 bottom-16 mb-2 flex w-full justify-center md:bottom-2'>
        <PageNav />
      </div>
    </div>
  );
};

export default Layout;
