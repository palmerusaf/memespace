import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { HamButton } from './ham-button';

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
        index={index}
        controlButton={
          <HamButton
            controlDrawer={
              <div className='fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-white bg-opacity-50 text-2xl text-black'>
                open
              </div>
            }
          />
        }
        setIndex={setIndex}
      />
    </div>
  );
};

export const Data = Template.bind({});
Data.args = {
  memeData: [
    {
      topText: 'foo1',
      bottomText: 'bar1',
      meme: '10-Guy',
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
