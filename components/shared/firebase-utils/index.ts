'use client';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { DocumentReference, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export * from './following-queries';
export * from './meme-queries';
export * from './profile-queries';
export * from './test-queries';

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
// connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });

export const db = getFirestore(app);
// connectFirestoreEmulator(db, 'localhost', 9100);

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
