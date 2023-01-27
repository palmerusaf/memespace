'use client';
import { Button, PageWrapper } from '@ui/login';
import { useEffect } from 'react';
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <PageWrapper>
      <div>
        <h2>Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </PageWrapper>
  );
}
