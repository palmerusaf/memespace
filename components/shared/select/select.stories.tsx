import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MEME_LIST } from '@ui/shared/meme-list';

import Select from './index';

export default {
  title: 'find memes/Drop Down',
  component: Select,
  args: { optionValues: MEME_LIST, placeholder: 'Select from Drop-Down' },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const NothingSelected = Template.bind({});
NothingSelected.args = {};

export const GuySelected = Template.bind({});
GuySelected.args = { selectedOption: '10-Guy' };
