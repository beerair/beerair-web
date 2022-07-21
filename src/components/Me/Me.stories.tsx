import { ComponentStory, ComponentMeta } from '@storybook/react';

import Me from './Me';

export default {
  title: 'Components/Me',
  component: Me,
} as ComponentMeta<typeof Me>;

const Template: ComponentStory<typeof Me> = () => <Me />;

export const Default = Template.bind({});
