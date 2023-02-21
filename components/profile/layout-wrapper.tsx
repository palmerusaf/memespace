export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full flex-col items-center'>
      <div className='flex h-full w-full max-w-3xl flex-col gap-2 px-2 pt-2 md:gap-4'>
        {children}
      </div>
    </div>
  );
}
