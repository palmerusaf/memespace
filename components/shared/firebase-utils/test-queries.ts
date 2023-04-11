import { useMutation } from '@tanstack/react-query';
import { SendingProfileData } from '.';

export const useTestMutation = (uid: string) => {
  return useMutation({
    mutationFn: (data: SendingProfileData) => Promise.resolve(),
  });
};

const mock = (willPass: boolean, timeout = 3000) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (willPass) {
        resolve();
      } else {
        reject({ message: 'Error' });
      }
    }, timeout);
  });
};

export const useFailingMutation = () => {
  return useMutation({
    mutationFn: (data: any) => mock(false),
  });
};

export const usePassingMutation = () => {
  return useMutation({
    mutationFn: (data: any) => mock(true),
  });
};
