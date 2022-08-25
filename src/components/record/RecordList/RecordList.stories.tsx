import { ComponentStory, ComponentMeta } from '@storybook/react';

import { record } from '@/constants/dummy';

import RecordList from './RecordList';

export default {
  title: 'Components/record/RecordList',
  component: RecordList,
  argTypes: {},
} as ComponentMeta<typeof RecordList>;

const Template: ComponentStory<typeof RecordList> = (args) => <RecordList {...args} />;

export const Default = Template.bind({});

Default.args = {
  records: new Array(5).fill(null).map((_, i) => ({ ...record, id: i })),
};
