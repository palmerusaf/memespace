import { ComponentMeta, ComponentStory } from '@storybook/react';
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
    <ViewMemeModal memeData={memeData} index={index} setIndex={setIndex} />
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
