/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { RecievingProfileData } from '@ui/shared/firebase-utils';
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

const setQueryWith = (testData: RecievingProfileData | null) => (uid: string) =>
  useQuery({
    queryKey: ['test-value'],
    queryFn: () => testData,
  });

export const NullData = Template.bind({});
NullData.args = { pUseProfileQuery: setQueryWith(null) };

export const MemeNotSet = Template.bind({});
MemeNotSet.args = {
  pUseProfileQuery: setQueryWith({
    meme: '',
    userName: 'foo',
    createdDate: Timestamp.now(),
  }),
};

export const HasOwnership = Template.bind({});
HasOwnership.args = {
  pUseIsOwner: (uid) => ({ isOwner: true }),
  pUseProfileQuery: setQueryWith({
    meme: '10-Guy',
    userName: 'foo',
    createdDate: Timestamp.now(),
  }),
};

export const Normal = Template.bind({});
Normal.args = {
  pUseProfileQuery: setQueryWith({
    meme: '10-Guy',
    userName: 'foo',
    createdDate: Timestamp.now(),
  }),
};

export const UserName20Chars = Template.bind({});
UserName20Chars.args = {
  pUseProfileQuery: setQueryWith({
    meme: '10-Guy',
    userName: 'aaaaaaaaaaaaaaaaaaaa',
    createdDate: Timestamp.now(),
  }),
};

export const UserNameWithSpaces = Template.bind({});
UserNameWithSpaces.args = {
  pUseProfileQuery: setQueryWith({
    meme: '10-Guy',
    userName: 'username with space',
    createdDate: Timestamp.now(),
  }),
};

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = {
  pUseProfileQuery: setQueryWith({
    meme: 'American-Chopper-Argument',
    userName: 'foo',
    createdDate: Timestamp.now(),
  }),
};

export const NotFoundMeme = Template.bind({});
NotFoundMeme.args = {
  pUseProfileQuery: setQueryWith({
    meme: 'Always-Has-Been',
    userName: 'foo',
    createdDate: Timestamp.now(),
  }),
};

// export const Error = Template.bind({});
// Error.args = {
//   pUseProfileQuery: (uid: string) =>
//     useQuery({
//       queryFn: async () => Promise.reject(),
//     }),
// };
