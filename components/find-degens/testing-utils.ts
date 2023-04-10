import { MEME_LIST } from '@ui/shared/meme-list';
import { Timestamp } from 'firebase/firestore';

export const genUsers = (num: number) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push({
      id: `${i}`,
      data: () => {
        return {
          userName: `username${i}`,
          createdDate: Timestamp.now(),
          profileMeme: MEME_LIST[i],
        };
      },
    });
  }
  return result;
};
