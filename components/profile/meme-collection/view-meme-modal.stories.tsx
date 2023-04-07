import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getRandMemeIndex, MEME_LIST } from '@ui/shared/meme-list';
import { Timestamp } from 'firebase/firestore';
import { useState } from 'react';

import { ViewMemeModal } from './view-meme-modal';

export default {
  title: 'Meme Collection/View Meme Modal',
  component: ViewMemeModal,
  args: {},
} as ComponentMeta<typeof ViewMemeModal>;

const Template: ComponentStory<typeof ViewMemeModal> = (args) => {
  const [index, setIndex] = useState<number | null>(0);
  const { memeData } = args;
  return (
    <div className='h-screen w-screen'>
      <ViewMemeModal
        memeData={memeData}
        menuContent={
          <div className='flex h-full w-full items-center justify-center bg-pink-700'>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </div>
        }
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
};

export const StaticData = Template.bind({});
StaticData.args = {
  memeData: [
    {
      topText: 'meme',
      bottomText: 'Look-At-All-These',
      meme: 'Look-At-All-These',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'top text',
      bottomText: 'bottom text',
      meme: 'American-Chopper-Argument',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo3',
      bottomText: 'bar3',
      meme: 'Criana',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo4',
      bottomText: 'bar4',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo5',
      bottomText: 'bar5',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo6',
      bottomText: 'bar6',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo7',
      bottomText: 'bar7',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo8',
      bottomText: 'bar8',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo9',
      bottomText: 'bar9',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
    {
      topText: 'foo10',
      bottomText: 'bar10',
      meme: '10-Guy',
      createdBy: '123',
      createdDate: Timestamp.now(),
    },
  ],
};

export const TwentyRandomMemes = Template.bind({});
TwentyRandomMemes.args = {
  memeData: new Array(20).fill(0).map(() => {
    const meme = MEME_LIST[getRandMemeIndex()];
    return {
      topText: 'meme',
      bottomText: meme,
      meme,
      createdBy: '123',
      createdDate: Timestamp.now(),
    };
  }),
};
