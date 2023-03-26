export const ControlDrawer = ({ content }: { content: JSX.Element }) => {
  return (
    <div className='fix flex h-screen w-screen items-center justify-center backdrop-blur'>
      <div className='flex h-auto w-auto flex-col  items-center gap-4 rounded-lg bg-white px-6  py-4 shadow-lg animate-in fade-in zoom-in-50'>
        {content}
      </div>
    </div>
  );
};
