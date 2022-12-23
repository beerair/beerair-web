import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EntityForm from '@/components/EntityForm';

import SwitchField from './SwitchField';

export default {
  component: SwitchField,
  decorators: [
    (Story) => (
      <EntityForm onSubmit={action('onSubmit')}>
        <Story />
      </EntityForm>
    ),
  ],
  argTypes: {
    className: { control: 'text' },
  },
} as ComponentMeta<typeof SwitchField>;

const Template: ComponentStory<typeof SwitchField> = (args) => <SwitchField {...args} />;

export const BasicSwitchField = Template.bind({});
BasicSwitchField.args = {
  name: 'SwitchField',
};
