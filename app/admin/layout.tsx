export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col'>
      <h1 className='mt-4 w-full text-center text-lg font-bold underline md:mt-12 md:text-2xl'>
        Admin Page
      </h1>
      {children}
    </div>
  );
}
