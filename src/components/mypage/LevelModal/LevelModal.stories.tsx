import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { LEVEL_DATA } from '@/constants/level_data';
import LevelModal from './LevelModal';

export default {
  title: 'Components/mypage/LevelModal',
  component: LevelModal,
} as ComponentMeta<typeof LevelModal>;

const Template: ComponentStory<typeof LevelModal> = () => {
  const [isOpen, setIsOpen] = useState(true);

  return <LevelModal open={isOpen} closeModal={() => setIsOpen(false)} levels={LEVEL_DATA} />;
};

export const Default = Template.bind({});
