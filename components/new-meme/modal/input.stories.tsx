import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Input from './input';

export default {
  title: 'Components/New-Meme/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    label: 'string',
    value: '',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const BottomTextEmpty = Template.bind({});
BottomTextEmpty.args = { label: 'Bottom Text' };

export const BottomTextFilled = Template.bind({});
BottomTextFilled.args = { label: 'Bottom Text', value: 'this is text' };

export const TopTextEmpty = Template.bind({});
TopTextEmpty.args = { label: 'Top Text' };

export const TopTextFilled = Template.bind({});
TopTextFilled.args = { label: 'Top Text', value: 'this is text' };
