export const ModalDrawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='absolute top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-400 bg-opacity-20 bg-blend-overlay backdrop-blur-sm'>
      <div className='flex h-auto w-auto flex-col  items-center gap-4 rounded-lg bg-white px-6  py-4 shadow-lg animate-in fade-in zoom-in-50'>
        {children}
      </div>
    </div>
  );
};
