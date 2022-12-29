import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Page from './page';

export default {
  title: 'Pages/New-Meme',
  component: Page,
  args: {
    params: { pageId: '1' },
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const PageOne = Template.bind({});
PageOne.args = { params: { pageId: '1' } };

export const LastPage = Template.bind({});
LastPage.args = { params: { pageId: '37' } };

export const NotFound = Template.bind({});
NotFound.args = { params: { pageId: 's' } };
