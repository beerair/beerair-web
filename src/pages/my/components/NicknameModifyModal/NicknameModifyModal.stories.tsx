import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import NicknameModifyModal from './NicknameModifyModal';

export default {
  component: NicknameModifyModal,
} as ComponentMeta<typeof NicknameModifyModal>;

const Template: ComponentStory<typeof NicknameModifyModal> = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <NicknameModifyModal open={isOpen} closeModal={() => setIsOpen(false)} onSubmit={() => {}} />
  );
};

export const Default = Template.bind({});
Default.args = {};
