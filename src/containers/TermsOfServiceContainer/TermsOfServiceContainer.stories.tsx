import { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta, ComponentStoryObj } from '@storybook/react';

import TermsOfServiceContainer, { getTermsOfServiceHtml } from './TermsOfServiceContainer';

export default {
  title: 'Pages/마이페이지/기타/서비스 정책 약관',
  component: TermsOfServiceContainer,
  args: {},
} as ComponentMeta<typeof TermsOfServiceContainer>;

const Template: ComponentStory<typeof TermsOfServiceContainer> = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    (async () => {
      const html = await getTermsOfServiceHtml();
      setHtml(html);
    })();
  }, []);

  return <TermsOfServiceContainer html={html} />;
};
export const 서비스_정책_약관: ComponentStoryObj<typeof TermsOfServiceContainer> = {};
