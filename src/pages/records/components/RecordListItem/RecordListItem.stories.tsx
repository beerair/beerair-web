import { ComponentStory, ComponentMeta } from '@storybook/react';

import { record } from '@/constants/dummy';

import RecordListItem from './RecordListItem';

export default {
  component: RecordListItem,
  argTypes: {},
} as ComponentMeta<typeof RecordListItem>;

const Template: ComponentStory<typeof RecordListItem> = (args) => <RecordListItem {...args} />;

export const RecordListItme = Template.bind({});

RecordListItme.args = {
  record,
};
