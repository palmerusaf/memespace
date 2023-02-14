/* eslint-disable react-hooks/rules-of-hooks */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { RecievingProfileData } from '@ui/shared/firebase-utils';
import Page from './page';

const queryClient = new QueryClient();

export default {
  title: 'Profile/Meme Collection Page',
  component: Page,
  args: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <QueryClientProvider client={queryClient}>
    <Page {...args} />
  </QueryClientProvider>
);

const setQueryWith = (testData: RecievingProfileData | null) => (uid: string) =>
  useQuery({
    queryKey: ['test-value'],
    queryFn: () => testData,
  });

export const Story = Template.bind({});
Story.args = {};
