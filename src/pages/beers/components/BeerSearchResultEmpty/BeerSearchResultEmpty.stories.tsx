import { StoryObj, Meta } from '@storybook/react';

import BeerSearchResultEmpty from './BeerSearchResultEmpty';

export default {
  component: BeerSearchResultEmpty,
  args: {
    title: `“독일”\n맥주를 찾을 수 없어요.`,
    subtitle: `잘못된 검색어를 입력하였거나,\n등록되지 않은 맥주예요.`,
  },
} as Meta<typeof BeerSearchResultEmpty>;

export const Default: StoryObj<typeof BeerSearchResultEmpty> = {};
