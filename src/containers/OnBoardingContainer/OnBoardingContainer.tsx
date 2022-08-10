import Link from 'next/link';
import styled from '@emotion/styled';

import Button from '@/components/commons/Button';
import BeginningLayout from '@/components/layouts/BeginningLayout';
import Icon from '@/components/commons/Icon';

const HERO_IMAGE_URL =
  'https://beerair-service.s3.ap-northeast-2.amazonaws.com/static/onboarding-hero.png';

const OnBoardingContainer = () => {
  return (
    <>
      <BeginningLayout>
        <StyledWrapper>
          <img src={HERO_IMAGE_URL} alt="" />
          <p>세계 맥주, 어디까지 마셔봤나요?{'\n'}Beer Air와 함께 세계 맥주를 정복해보세요!</p>
          <b>맥주로 떠나는 세계 여행</b>
          <Link href="/login">
            <a>
              <Button type="primary" width="244px">
                시작하기
              </Button>
            </a>
          </Link>
        </StyledWrapper>
      </BeginningLayout>
      <Link href="/" passHref>
        <StyledTextButton>
          <p>둘러보기</p>
          <Icon name="ArrowRight" size={30} />
        </StyledTextButton>
      </Link>
    </>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
  max-width: 375px;
  height: 100%;
  margin: 0 auto;

  > img {
    width: 90%;
    height: 40vh;
    margin-bottom: 2.3vh;

    object-fit: contain;
  }

  > p {
    ${(p) => p.theme.fonts.Body5};
    color: ${(p) => p.theme.color.whiteOpacity80};
    white-space: pre-wrap;
    text-align: center;
  }

  > b {
    ${(p) => p.theme.fonts.SubTitle3};
    color: ${(p) => p.theme.color.white};
    margin: 5vh 0;
  }
`;

const StyledTextButton = styled.button`
  display: flex;
  position: absolute;
  align-items: center;
  right: 14px;
  bottom: 24px;
  ${(p) => p.theme.fonts.SubTitle2};
  color: ${(p) => p.theme.color.grey4};

  svg {
    margin-left: 4px;
  }
`;

export default OnBoardingContainer;