import { Divider } from '@ui/login';

export const FoldWrapper = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Divider label={label} />
      <details open className='group w-full px-2'>
        <summary
          className={`w-full cursor-pointer after:content-['Show'] group-open:after:content-['Hide']`}
        ></summary>
        {children}
      </details>
    </>
  );
};
