import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import MemeList from './meme-list.json';

import DropDown from './drop-down';

export default {
  title: 'New-Meme/Drop-Down',
  component: DropDown,
  args: { optionValues: MemeList, placeholder: 'Select from Drop-Down' },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
);

export const NothingSelected = Template.bind({});
NothingSelected.args = {};

export const GuySelected = Template.bind({});
GuySelected.args = { selectedOption: '10-Guy' };
