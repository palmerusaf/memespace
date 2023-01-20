import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { NavBar } from './nav-bar';

export default {
  title: 'components/app/nav-bar',
  component: NavBar,
  args: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const LoggedIn = Template.bind({});
LoggedIn.args = { initLogState: true };
