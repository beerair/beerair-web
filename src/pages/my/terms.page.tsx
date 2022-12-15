import { GetStaticProps, NextPage } from 'next';
import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import { parseMarkdown } from '@/utils/parseMarkdown';
import Markdown from '@/components/Markdown';

interface TermsOfServicePageProps {
  html: string;
}

const TermsOfServicePage: NextPage<TermsOfServicePageProps> = ({ html: termsOfServiceHtml }) => {
  return (
    <StyledTermsOfServicePage>
      <Header leftExtras={<BackButton />}>서비스 정책 약관</Header>
      <StyledMarkdown markdown={termsOfServiceHtml} />
    </StyledTermsOfServicePage>
  );
};

export default TermsOfServicePage;

const StyledTermsOfServicePage = styled.div`
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

export const getTermsOfServiceHtml = async () => {
  const { default: markdown } = await import('contents/terms-of-service.md');
  const { html } = parseMarkdown(markdown);
  return html;
};

export const getStaticProps: GetStaticProps = async () => {
  const html = await getTermsOfServiceHtml();

  return {
    props: {
      html,
    },
  };
};
