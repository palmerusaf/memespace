import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './input';

export default {
  title: 'Login/input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    label: 'string',
    defaultValue: '',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const UserNameEmpty = Template.bind({});
UserNameEmpty.args = { label: 'User Name' };

export const UserNameFilled = Template.bind({});
UserNameFilled.args = { label: 'User Name', defaultValue: 'leetusrName' };
