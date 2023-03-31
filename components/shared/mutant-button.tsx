import { UseMutationResult } from '@tanstack/react-query';
import { MouseEventHandler, useEffect, useState } from 'react';

interface Props {
  mutation: UseMutationResult<unknown, unknown, any, unknown>;
  onClick: MouseEventHandler<HTMLButtonElement>;
  loadMsg: string;
  errorMsg: string;
  successMsg: string;
  staticMsg: string;
  className?: string;
}
export const MutantButton = (props: Props) => {
  const { mutation } = props;

  const [inTimeLimit, setInTimeLimit] = useState(false);
  useEffect(() => {
    setInTimeLimit(true);
    setTimeout(() => {
      setInTimeLimit(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutation.isSuccess]);

  if (mutation.isLoading)
    return <Button clickable={false}>{props.loadMsg}</Button>;
  if (mutation.isError) return <Button>{props.errorMsg}</Button>;
  if (mutation.isSuccess && inTimeLimit)
    return <Button>{props.successMsg}</Button>;
  return <Button>{props.staticMsg}</Button>;

  function Button({
    children,
    clickable = true,
  }: {
    children: React.ReactNode;
    clickable?: boolean;
  }) {
    return (
      <button
        onClick={clickable ? props.onClick : undefined}
        className={`${props.className || ''} ${
          mutation.isLoading && 'animate-pulse duration-1000'
        }`}
      >
        {children}
      </button>
    );
  }
};
