import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { genUsers } from '@ui/find-degens/testing-utils';
import Layout from './layout';

import Page from './page';

export default {
  title: 'find degens/Page',
  component: Page,
  args: { pUseLoggedIn: () => ({ loggedIn: true }) },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => {
  return (
    <div className='h-screen w-screen'>
      <Layout>
        <QueryClientProvider client={new QueryClient()}>
          <Page {...args} />
        </QueryClientProvider>
      </Layout>
    </div>
  );
};

const setQueryWith = (testData: any | null, qKey: string) => () =>
  useQuery({
    queryKey: [qKey],
    queryFn: () => testData,
  });

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  pUseLoggedIn: () => ({ loggedIn: false }),
  pUseUserCollectionQuery: setQueryWith(genUsers(20), 'user'),
  pUseMyFollowingCollectionQuery: setQueryWith(null, 'following'),
};

export const NoneFollowed = Template.bind({});
NoneFollowed.args = {
  pUseLoggedIn: () => ({ loggedIn: true }),
  pUseUserCollectionQuery: setQueryWith(genUsers(1), 'user'),
  pUseMyFollowingCollectionQuery: setQueryWith(null, 'following'),
};
