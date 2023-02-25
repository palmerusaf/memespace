/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { ReceivingProfileData } from '@ui/shared/firebase-utils';
import { Timestamp } from 'firebase/firestore';
import { AvatarArea } from './index';

const queryClient = new QueryClient();

export default {
  title: 'Profile/Avatar Area',
  component: AvatarArea,
  args: {
    uid: '',
    pUseIsOwner: (uid: string) => ({ isOwner: false }),
  },
} as ComponentMeta<typeof AvatarArea>;

const Template: ComponentStory<typeof AvatarArea> = (args) => (
  <QueryClientProvider client={queryClient}>
    <AvatarArea {...args}></AvatarArea>
  </QueryClientProvider>
);

export const setQueryWith =
  (testData: ReceivingProfileData | null) => (uid: string) =>
    useQuery({
      queryKey: ['test-value'],
      queryFn: () => testData,
    });

export const NullData = Template.bind({});
NullData.args = { pUseProfileQuery: setQueryWith(null) };

export const MemeNotSet = Template.bind({});
MemeNotSet.args = {
  pUseProfileQuery: setQueryWith({
    profileMeme: '',
    userName: 'foo',
    createdDate: Timestamp.now(),
  }),
};

export const HasOwnership = Template.bind({});
HasOwnership.args = {
  pUseIsOwner: (uid) => ({ isOwner: true }),
  pUseProfileQuery: setQueryWith({
    profileMeme: '10-Guy',
    userName: 'foo',
    createdDate: Timestamp.now(),
  }),
};

export const Normal = Template.bind({});
Normal.args = {
  pUseProfileQuery: setQueryWith({
    profileMeme: '10-Guy',
    userName: 'foo',
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

export const MockedAvatarArea = () => {
  const args = {
    pUseIsOwner: () => ({ isOwner: true }),
    pUseProfileQuery: setQueryWith({
      profileMeme: '',
      userName: 'foo',
      createdDate: Timestamp.now(),
    }),
  };
  return (
    <QueryClientProvider client={queryClient}>
      <AvatarArea uid={''} {...args}></AvatarArea>
    </QueryClientProvider>
  );
};
