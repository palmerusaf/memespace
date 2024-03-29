import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import assert from 'assert';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  QueryDocumentSnapshot,
  setDoc,
} from 'firebase/firestore';
import { auth, db, WithTimeLimit } from '.';

export const useFollowingCollectionQuery = (uid: string) => {
  return useQuery({
    queryKey: [`users/${uid}/following`],
    queryFn: async () => {
      const res = await getDocs(
        query(collection(db, `users/${uid}/following`))
      );
      if (res.empty) return null;
      return res.docs as QueryDocumentSnapshot<{ followingUid: string }>[];
    },
  });
};

export const useMyFollowingCollectionQuery = () => {
  assert(auth.currentUser);
  return useFollowingCollectionQuery(auth.currentUser.uid);
};

export const useAddFollowingMutation = () => {
  const queryClient = useQueryClient();
  assert(auth.currentUser);
  const uid = auth.currentUser?.uid;
  return useMutation({
    mutationFn: ({ followingUid }: { followingUid: string }) => {
      return WithTimeLimit(() =>
        setDoc(doc(db, 'users', uid, 'following', followingUid), {
          followingUid,
        })
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`users/${uid}/following`],
      });
    },
  });
};

export const useDeleteFollowingMutation = () => {
  const queryClient = useQueryClient();
  assert(auth.currentUser);
  const uid = auth.currentUser?.uid;
  return useMutation({
    mutationFn: (followingUid: string) =>
      WithTimeLimit(() =>
        deleteDoc(doc(db, 'users', uid, 'following', followingUid))
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`users/${uid}/following`],
      });
    },
  });
};
