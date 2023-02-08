import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MEME_LIST } from '@ui/shared/meme-list';

import DropDown from './index';

export default {
  title: 'find memes/Drop Down',
  component: DropDown,
  args: { optionValues: MEME_LIST, placeholder: 'Select from Drop-Down' },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
);

export const NothingSelected = Template.bind({});
NothingSelected.args = {};

export const GuySelected = Template.bind({});
GuySelected.args = { selectedOption: '10-Guy' };
