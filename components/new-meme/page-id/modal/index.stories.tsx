import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Modal from './index';

export default {
  title: 'Components/modal',
  component: Modal,
  args: {
    modalId: 'string',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Story = Template.bind({});
Story.args = {};
