import styled from '@emotion/styled';
import Link from 'next/link';

import Button from '@/components/Button';
import Icon from '@/components/Icon';
import BeginningLayout from '@/components/layouts/BeginningLayout';
import { ROUTE_PATH } from '@/constants/routes';

const HERO_IMAGE_URL =
  'https://beerair-service.s3.ap-northeast-2.amazonaws.com/static/onboarding-hero.png';

const OnBoardingPage = () => {
  return (
    <>
      <BeginningLayout>
        <StyledWrapper>
          <img src={HERO_IMAGE_URL} alt="" />
          <p>세계 맥주, 어디까지 마셔봤나요?{'\n'}Beer Air와 함께 세계 맥주를 정복해보세요!</p>
          <b>맥주로 떠나는 세계 여행</b>
          <Link href={ROUTE_PATH.AUTH.LOGIN}>
            <a>
              <Button type="primary" width="244px" hasAnimation>
                시작하기
              </Button>
            </a>
          </Link>
        </StyledWrapper>
      </BeginningLayout>
      <Link href={ROUTE_PATH.HOME} passHref>
        <StyledLinkButton>
          <span>둘러보기</span>
          <Icon name="ArrowRight" size={30} />
        </StyledLinkButton>
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

const StyledLinkButton = styled.a`
  display: flex;
  position: absolute;
  align-items: center;
  right: 14px;
  bottom: 24px;
  ${(p) => p.theme.fonts.SubTitle2};
  color: ${(p) => p.theme.color.grey4};
  z-index: 1;

  &:active {
    padding: 2px 2px 2px 6px;
    border-radius: 12px;
    background-color: ${(p) => p.theme.color.grey0};
  }

  svg {
    margin-left: 4px;
  }
`;

export default OnBoardingPage;
