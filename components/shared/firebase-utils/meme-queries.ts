import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import assert from 'assert';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  FieldValue,
  getDocs,
  query,
  QueryDocumentSnapshot,
  setDoc,
  Timestamp,
} from 'firebase/firestore';
import { auth, db, WithTimeLimit } from '.';

interface MemeData {
  topText: string;
  bottomText: string;
  meme: string;
  createdBy: string;
}

export interface ReceivingMemeData extends MemeData {
  createdDate: Timestamp;
}

export interface SendingMemeData extends MemeData {
  createdDate: FieldValue;
}

export const useMemeCollectionQuery = (uid: string) => {
  return useQuery({
    queryKey: [`users/${uid}/memes`],
    queryFn: async () => {
      const res = await getDocs(query(collection(db, `users/${uid}/memes`)));
      if (res.empty) return null;
      return res.docs as QueryDocumentSnapshot<ReceivingMemeData>[];
    },
  });
};

export const useMemeMutation = (memeUid?: string) => {
  const queryClient = useQueryClient();
  assert(auth.currentUser);
  const uid = auth.currentUser?.uid;
  return useMutation({
    mutationFn: (data: SendingMemeData) => {
      if (!memeUid)
        return WithTimeLimit(() =>
          addDoc(collection(db, 'users', uid, 'memes'), data)
        );
      return WithTimeLimit(() =>
        setDoc(doc(db, 'users', uid, 'memes', memeUid), data)
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`users/${uid}/memes`],
      });
    },
  });
};

export const useDeleteMemeMutation = (memeUid: string) => {
  const queryClient = useQueryClient();
  assert(auth.currentUser);
  const uid = auth.currentUser?.uid;
  return useMutation({
    mutationFn: () =>
      WithTimeLimit(() => deleteDoc(doc(db, 'users', uid, 'memes', memeUid))),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`users/${uid}/memes`],
      });
    },
  });
};
