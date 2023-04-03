import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './input';

export default {
  title: 'find memes/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    defaultValue: { control: 'text' },
  },
  args: {
    label: 'string',
    defaultValue: '',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const BottomTextEmpty = Template.bind({});
BottomTextEmpty.args = { label: 'Bottom Text' };

export const BottomTextFilled = Template.bind({});
BottomTextFilled.args = { label: 'Bottom Text', defaultValue: 'this is text' };

export const TopTextEmpty = Template.bind({});
TopTextEmpty.args = { label: 'Top Text' };

export const TopTextFilled = Template.bind({});
TopTextFilled.args = { label: 'Top Text', defaultValue: 'this is text' };
