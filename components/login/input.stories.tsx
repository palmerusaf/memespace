import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Input from './input';

export default {
  title: 'components/Login/input',
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

export const UserNameEmpty = Template.bind({});
UserNameEmpty.args = { label: 'User Name' };

export const UserNameFilled = Template.bind({});
UserNameFilled.args = { label: 'User Name', value: 'leetusrName' };
