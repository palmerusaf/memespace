export * from './divider';
export * from './input';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <div className='flex flex-col justify-center h-full w-full px-2 max-w-xl'>
        {children}
      </div>
    </div>
  );
}
