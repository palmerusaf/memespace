export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col items-center'>
      <div className='flex h-full w-full max-w-3xl flex-col gap-2 px-2 pb-14 pt-2 md:pb-16'>
        {children}
      </div>
    </div>
  );
}
