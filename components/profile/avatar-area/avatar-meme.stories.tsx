import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AvatarMeme } from './avatar-meme';

export default {
  title: 'profile/Profile Meme',
  component: AvatarMeme,
  args: {},
} as ComponentMeta<typeof AvatarMeme>;

const Template: ComponentStory<typeof AvatarMeme> = (args) => (
  <div className='flex h-screen w-screen items-center justify-center'>
    <div className='w-16 md:w-36'>
      <AvatarMeme {...args} />
    </div>
  </div>
);

export const NoData = Template.bind({});
NoData.args = { data: null };

export const BlankMeme = Template.bind({});
BlankMeme.args = { data: { profileMeme: '' } };

export const Normal = Template.bind({});
Normal.args = { data: { profileMeme: '10-Guy' } };

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = { data: { profileMeme: 'American-Chopper-Argument' } };

export const ImageNotFound = Template.bind({});
ImageNotFound.args = { data: { profileMeme: 'Always-Has-Been' } };
