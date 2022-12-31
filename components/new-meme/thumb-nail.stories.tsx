import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ThumbNail from './thumb-nail';

export default {
  title: 'Components/New-Meme/ThumbNail',
  component: ThumbNail,
  args: {
    id: 'Young-And-Reckless',
  },
} as ComponentMeta<typeof ThumbNail>;

const Template: ComponentStory<typeof ThumbNail> = (args) => (
  <ThumbNail {...args} />
);

export const LongPic = Template.bind({});
LongPic.args = {};

export const NotLoaded = Template.bind({});
NotLoaded.args = { id: 'error' };

export const TenGuy = Template.bind({});
TenGuy.args = { id: '10-Guy' };
