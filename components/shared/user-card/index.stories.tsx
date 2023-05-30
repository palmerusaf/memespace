/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setQueryWith } from '@ui/profile/avatar-area/index.stories';
import { Timestamp } from 'firebase/firestore';
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

export const UserNameBlank = Template.bind({});
UserNameBlank.args = {
  pUseProfileQuery: setQueryWith({
    profileMeme: MEME_LIST[0],
    userName: '',
    createdDate: Timestamp.now(),
  }),
};

export const MemeNotSet = Template.bind({});
MemeNotSet.args = {
  pUseProfileQuery: setQueryWith({
    profileMeme: '',
    userName: 'username',
    createdDate: Timestamp.now(),
  }),
};

export const NoButton = Template.bind({});
NoButton.args = {
  pUseProfileQuery: setQueryWith({
    profileMeme: '10-Guy',
    userName: 'username',
    createdDate: Timestamp.now(),
  }),
  button: undefined,
};

export const Following = Template.bind({});
Following.args = {
  pUseProfileQuery: setQueryWith({
    profileMeme: '10-Guy',
    userName: 'username',
    createdDate: Timestamp.now(),
  }),
  button: <span>Following</span>,
};

export const Normal = Template.bind({});
Normal.args = {
  pUseProfileQuery: setQueryWith({
    profileMeme: '10-Guy',
    userName: 'username',
    createdDate: Timestamp.now(),
  }),
};

export const UserName20Chars = Template.bind({});
UserName20Chars.args = {
  pUseProfileQuery: setQueryWith({
    profileMeme: '10-Guy',
    userName: 'aaaaaaaaaaaaaaaaaaaa',
    createdDate: Timestamp.now(),
  }),
};

export const UserNameWithSpaces = Template.bind({});
UserNameWithSpaces.args = {
  pUseProfileQuery: setQueryWith({
    profileMeme: '10-Guy',
    userName: 'username with space',
    createdDate: Timestamp.now(),
  }),
};

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = {
  pUseProfileQuery: setQueryWith({
    profileMeme: 'American-Chopper-Argument',
    userName: 'foo',
    createdDate: Timestamp.now(),
  }),
};

export const NotFoundMeme = Template.bind({});
NotFoundMeme.args = {
  pUseProfileQuery: setQueryWith({
    profileMeme: 'Always-Has-Been',
    userName: 'foo',
    createdDate: Timestamp.now(),
  }),
};
