'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import assert from 'assert';
import { initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  connectFirestoreEmulator,
  deleteDoc,
  doc,
  DocumentReference,
  FieldValue,
  getDoc,
  getDocs,
  getFirestore,
  query,
  QueryDocumentSnapshot,
  setDoc,
  Timestamp,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });

export const db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost', 9100);

export const useIsOwner = (uid: string) => {
  const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) =>
      setIsOwner(user !== null && user.uid === uid)
    );
  }, [uid]);
  return { isOwner };
};

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => setLoggedIn(user !== null));
  }, []);
  return { loggedIn };
};

export const WithTimeLimit = (
  cb: () => Promise<void | DocumentReference>,
  timeLimit = 10000
) => {
  return Promise.race([
    cb(),
    new Promise((_, reject) => {
      return setTimeout(reject, timeLimit, new Error('DB write timed out'));
    }),
  ]);
};

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
      const memeCollQuery = query(collection(db, `users/${uid}/memes`));
      const res = await getDocs(memeCollQuery);
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

// test methods
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
