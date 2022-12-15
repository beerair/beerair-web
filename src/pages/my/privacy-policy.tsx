import { NextPage, GetStaticProps } from 'next';
import styled from '@emotion/styled';

import Header from '@/components/commons/Header';
import { BackButton } from '@/components/commons/Header/extras';
import { parseMarkdown } from '@/utils/parseMarkdown';
import Markdown from '@/components/Markdown';

interface PrivacyPolicyPageProps {
  html: string;
}

const PrivacyPolicyPage: NextPage<PrivacyPolicyPageProps> = ({ html: privacyPolicyHtml }) => {
  return (
    <StyledPrivacyPolicyPage>
      <Header leftExtras={<BackButton />}>개인정보 처리방침</Header>
      <StyledMarkdown markdown={privacyPolicyHtml} />
    </StyledPrivacyPolicyPage>
  );
};

const StyledPrivacyPolicyPage = styled.div`
  white-space: pre-line;
  & > section {
    padding: 0 20px;

    & > h1 {
      ${({ theme }) => theme.fonts.SubTitle1};
    }

    & > p {
      ${({ theme }) => theme.fonts.Body1};
      font-weight: 400;
    }
  }
`;

const StyledMarkdown = styled(Markdown)`
  padding: 20px;
`;

export default PrivacyPolicyPage;

export const getPrivacyPolicyHtml = async () => {
  const { default: markdown } = await import('contents/privacy-policy.md');
  const { html } = parseMarkdown(markdown);
  return html;
};

export const getStaticProps: GetStaticProps = async () => {
  const html = await getPrivacyPolicyHtml();

  return {
    props: {
      html,
    },
  };
};
