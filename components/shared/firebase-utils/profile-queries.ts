import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import assert from 'assert';
import {
  collection,
  doc,
  FieldValue,
  getDoc,
  getDocs,
  query,
  QueryDocumentSnapshot,
  setDoc,
  Timestamp,
} from 'firebase/firestore';
import { auth, db, WithTimeLimit } from '.';

interface ProfileData {
  userName: string;
  profileMeme: string;
}

export interface ReceivingProfileData extends ProfileData {
  createdDate: Timestamp;
}

export interface SendingProfileData extends ProfileData {
  createdDate?: FieldValue;
}

export const useProfileQuery = (uid: string) => {
  return useQuery({
    queryKey: [`users/${uid}`],
    queryFn: async () => {
      const res = await getDoc(doc(db, 'users', uid));
      if (!res.exists()) return null;
      return res.data() as ReceivingProfileData;
    },
  });
};

export const useProfileMutation = (uid: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: SendingProfileData) =>
      WithTimeLimit(() => setDoc(doc(db, 'users', uid), data)),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`users/${uid}`],
      });
    },
  });
};

export const useMyProfileQuery = () => {
  assert(auth.currentUser);
  return useProfileQuery(auth.currentUser.uid);
};

export const useMyProfileMutation = () => {
  assert(auth.currentUser);
  return useProfileMutation(auth.currentUser.uid);
};

export const useUserCollectionQuery = () => {
  return useQuery({
    queryKey: [`users`],
    queryFn: async () => {
      const res = await getDocs(query(collection(db, `users`)));
      if (res.empty) return null;
      return res.docs as QueryDocumentSnapshot<ReceivingProfileData>[];
    },
  });
};
