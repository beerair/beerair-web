import { ComponentMeta } from '@storybook/react';
import LikeBeerToggleButton from '.';

export default {
  title: 'Components/beer/LikeBeerToggleButton',
  component: LikeBeerToggleButton,
  args: {},
} as ComponentMeta<typeof LikeBeerToggleButton>;

export const 좋아요_버튼 = () => {
  return <LikeBeerToggleButton isLiked={true} id={2} />;
};
