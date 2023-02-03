import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileMeme } from './profile-meme';

export default {
  title: 'profile/Profile Meme',
  component: ProfileMeme,
  args: {},
} as ComponentMeta<typeof ProfileMeme>;

const Template: ComponentStory<typeof ProfileMeme> = (args) => (
  <div className='flex h-screen w-screen items-center justify-center'>
    <ProfileMeme {...args} />
  </div>
);

export const NoData = Template.bind({});
NoData.args = { data: null };

export const BlankMeme = Template.bind({});
BlankMeme.args = { data: { meme: '' } };

export const Normal = Template.bind({});
Normal.args = { data: { meme: '10-Guy' } };

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = { data: { meme: 'American-Chopper-Argument' } };

export const ImageNotFound = Template.bind({});
ImageNotFound.args = { data: { meme: 'Always-Has-Been' } };
