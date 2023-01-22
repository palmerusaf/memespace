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

interface ButtonProps {
  className?: string;
  onClick?: (any: any) => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-1 rounded-2xl border-2 w-full border-black text-white hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl ${className}`}
    >
      {children}
    </button>
  );
};

export const Divider = ({ label }: { label: string }) => {
  return (
    <h2 className='grid grid-cols-[auto,auto,_1fr] w-full items-center'>
      <span className='h-0 border-b border-black mx-2 w-4'></span>
      <span className='font-bold'>{label}</span>
      <span className='h-0 border-b border-black mx-2'></span>
    </h2>
  );
};
