import { ComponentStory, ComponentMeta } from '@storybook/react';

import Like from './Like';

export default {
  title: 'Components/Like',
  component: Like,
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = ({ ...args }) => <Like {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 10,
};
