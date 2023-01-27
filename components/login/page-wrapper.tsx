export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col items-center'>
      <div className='flex h-full w-full max-w-xl flex-col justify-center px-2'>
        {children}
      </div>
    </div>
  );
}
