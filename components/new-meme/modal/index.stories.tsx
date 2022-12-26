import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Modal from './index';

export default {
  title: 'Components/New-Meme/Modal',
  component: Modal,
  args: {
    modalId: 'string',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const TenGuy = Template.bind({});
TenGuy.args = { modalId: '10-Guy' };

export const Blank = Template.bind({});
Blank.args = { modalId: '', link: 'test' };
