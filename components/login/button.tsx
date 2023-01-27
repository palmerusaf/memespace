import Link from 'next/link';

interface ButtonProps {
  className?: string;
  onClick?: (any: any) => void;
  href?: string;
  children: React.ReactNode;
}

export const Button = ({
  onClick,
  className = '',
  children,
  href,
}: ButtonProps) => {
  const buttonStyle = `py-1 rounded-2xl text-center border-2 w-full border-black hover:text-white hover:-translate-y-1 duration-300 hover:shadow-gray-900 shadow-md font-bold text-xl ${className}`;

  return href ? (
    <Link onClick={onClick} className={buttonStyle} href={href}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
};
