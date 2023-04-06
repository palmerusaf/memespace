/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MEME_LIST } from '../meme-list';
import { UserCard } from './index';

const FollowButton = () => {
  return (
    <button className='rounded-full bg-blue-500 px-2 font-semibold text-white shadow-2xl duration-500 hover:-translate-y-1 hover:scale-110 md:px-3 md:text-xl'>
      Follow
    </button>
  );
};
export default {
  title: 'Shared/User Card',
  component: UserCard,
  args: {
    uid: '123',
    button: <FollowButton />,
  },
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => (
  <div className='flex h-screen w-screen items-center justify-center'>
    <UserCard {...args}></UserCard>
  </div>
);

export const UserNameUndefined = Template.bind({});
UserNameUndefined.args = {
  profileMeme: MEME_LIST[0],
};

export const UserNameBlank = Template.bind({});
UserNameBlank.args = {
  profileMeme: MEME_LIST[0],
  userName: '',
};

export const MemeNotSet = Template.bind({});
MemeNotSet.args = {
  profileMeme: '',
  userName: 'username',
};

export const NoButton = Template.bind({});
NoButton.args = {
  profileMeme: '10-Guy',
  userName: 'username',
  button: undefined,
};

export const Following = Template.bind({});
Following.args = {
  profileMeme: '10-Guy',
  userName: 'username',
  button: <span>Following</span>,
};

export const Normal = Template.bind({});
Normal.args = {
  profileMeme: '10-Guy',
  userName: 'username',
};

export const UserName20Chars = Template.bind({});
UserName20Chars.args = {
  profileMeme: '10-Guy',
  userName: 'aaaaaaaaaaaaaaaaaaaa',
};

export const UserNameWithSpaces = Template.bind({});
UserNameWithSpaces.args = {
  profileMeme: '10-Guy',
  userName: 'username with space',
};

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = {
  profileMeme: 'American-Chopper-Argument',
  userName: 'foo',
};

export const NotFoundMeme = Template.bind({});
NotFoundMeme.args = {
  profileMeme: 'Always-Has-Been',
  userName: 'foo',
};
