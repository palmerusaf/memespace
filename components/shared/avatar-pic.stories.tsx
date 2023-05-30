import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AvatarPic } from './avatar-pic';

export default {
  title: 'Shared/Avatar Pic',
  component: AvatarPic,
  args: {},
} as ComponentMeta<typeof AvatarPic>;

const Template: ComponentStory<typeof AvatarPic> = (args) => (
  <div className='flex h-screen w-screen items-center justify-center'>
    <div className='w-16 md:w-36'>
      <AvatarPic {...args} />
    </div>
  </div>
);

export const NoData = Template.bind({});
NoData.args = { profileMeme: null };

export const BlankMeme = Template.bind({});
BlankMeme.args = { profileMeme: '' };

export const Normal = Template.bind({});
Normal.args = { profileMeme: '10-Guy' };

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = { profileMeme: 'American-Chopper-Argument' };

export const ImageNotFound = Template.bind({});
ImageNotFound.args = { profileMeme: 'Always-Has-Been' };
