import { useMutation } from '@tanstack/react-query';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '.';
import { MEME_LIST } from '../meme-list';
import { SendingProfileData } from './profile-queries';

export const useTestMutation = (uid: string) => {
  return useMutation({
    mutationFn: (data: any) => Promise.resolve(),
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

const loadBot = ({
  data,
  docId,
}: {
  data: SendingProfileData;
  docId: string;
}) => {
  setDoc(doc(db, 'users', docId), data);
};

export const loadBots = (num: number) => {
  for (let i = 0; i < num; i++) {
    const userName = `bot${i + 1}`;
    loadBot({
      data: {
        profileMeme: MEME_LIST[i],
        userName,
        createdDate: Timestamp.now(),
      },
      docId: userName,
    });
  }
};
