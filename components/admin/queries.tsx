import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  db,
  SendingProfileData,
  WithTimeLimit,
} from '@ui/shared/firebase-utils';
import { doc, setDoc } from 'firebase/firestore';
import { useRef } from 'react';

export function useCreateUserMutation() {
  const queryClient = useQueryClient();
  let uidRef = useRef<string>();
  return useMutation({
    mutationFn: ({ uid, data }: { uid: string; data: SendingProfileData }) => {
      uidRef.current = uid;
      return WithTimeLimit(() => setDoc(doc(db, 'users', uid), data));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`users/${uidRef.current}`] });
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
