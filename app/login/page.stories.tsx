import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Page from './page';

export default {
  title: 'pages/Login',
  component: Page,
  args: { isAuth: true },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Auth = Template.bind({});
Auth.args = {};

export const NotAuth = Template.bind({});
NotAuth.args = { isAuth: false };
