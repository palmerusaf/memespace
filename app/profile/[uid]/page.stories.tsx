/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { ProfileDataProps } from '@ui/shared/firebase-utils';
import { Timestamp } from 'firebase/firestore';
import Page from './page';

const queryClient = new QueryClient();

export default {
  title: 'Profile/Page',
  component: Page,
  args: { params: { uid: '' } },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <QueryClientProvider client={queryClient}>
    <Page {...args} />
  </QueryClientProvider>
);

const setQueryWith = (testData: ProfileDataProps | null) => (uid: string) =>
  useQuery({
    queryFn: () => testData,
  });

export const NullData = Template.bind({});
NullData.args = { pUseProfileQuery: setQueryWith(null) };

export const MemeNotSet = Template.bind({});
MemeNotSet.args = {
  pUseProfileQuery: setQueryWith({
    meme: '',
    userName: 'foo',
    createdDate: new Timestamp(new Date().getSeconds(), 0),
  }),
};

export const Normal = Template.bind({});
Normal.args = {
  pUseProfileQuery: setQueryWith({
    meme: '10-Guy',
    userName: 'foo',
    createdDate: new Timestamp(new Date().getSeconds(), 0),
  }),
};

export const UserName20Chars = Template.bind({});
UserName20Chars.args = {
  pUseProfileQuery: setQueryWith({
    meme: '10-Guy',
    userName: 'aaaaaaaaaaaaaaaaaaaa',
    createdDate: new Timestamp(new Date().getSeconds(), 0),
  }),
};

export const UserNameWithSpaces = Template.bind({});
UserNameWithSpaces.args = {
  pUseProfileQuery: setQueryWith({
    meme: '10-Guy',
    userName: 'username with space',
    createdDate: new Timestamp(new Date().getSeconds(), 0),
  }),
};

export const OverFlowMeme = Template.bind({});
OverFlowMeme.args = {
  pUseProfileQuery: setQueryWith({
    meme: 'American-Chopper-Argument',
    userName: 'foo',
    createdDate: new Timestamp(new Date().getSeconds(), 0),
  }),
};

export const NotFoundMeme = Template.bind({});
NotFoundMeme.args = {
  pUseProfileQuery: setQueryWith({
    meme: 'Always-Has-Been',
    userName: 'foo',
    createdDate: new Timestamp(new Date().getSeconds(), 0),
  }),
};

// export const Error = Template.bind({});
// Error.args = {
//   pUseProfileQuery: (uid: string) =>
//     useQuery({
//       queryFn: async () => Promise.reject(),
//     }),
// };
