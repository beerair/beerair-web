import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import cx from 'classnames';

import Icon from '@/components/commons/Icon';

const BOTTOM_NAVIGATION_HEIGHT = 64;

export default function BottomNavigation() {
  const router = useRouter();

  return (
    <>
      <div style={{ height: `${BOTTOM_NAVIGATION_HEIGHT}px` }} />
      <StyledBottomNavigation>
        <Link href="/" passHref>
          <a className={cx(`nav-link`, `${router.pathname === '/' && 'active'}`)}>
            <Icon name={router.pathname === '/' ? 'NavHomeActive' : 'NavHome'} size={36} />
            <span>홈</span>
          </a>
        </Link>
        <Link href="/beers" passHref>
          <a className={cx(`nav-link`, `${router.pathname === '/beers' && 'active'}`)}>
            <Icon name={router.pathname === '/beers' ? 'NavBeerActive' : 'NavBeer'} size={36} />
            <span>맥주목록</span>
          </a>
        </Link>
        <StyledPlusIconButton onClick={() => router.push('/search')}>
          <Icon name="Plus" size={14} />
        </StyledPlusIconButton>

        <Link href="/records/my" passHref>
          <a className={cx(`nav-link`, `${router.pathname === '/records/my' && 'active'}`)}>
            <Icon
              name={router.pathname === '/records/my' ? 'NavTravelActive' : 'NavTravel'}
              size={36}
            />
            <span>여행목록</span>
          </a>
        </Link>
        <Link href="/profile" passHref>
          <a className={cx(`nav-link`, `${router.pathname === '/profile' && 'active'}`)}>
            <Icon
              name={router.pathname === '/profile' ? 'NavMyPageActive' : 'NavMyPage'}
              size={36}
            />
            <span>프로필</span>
          </a>
        </Link>
      </StyledBottomNavigation>
    </>
  );
}

const StyledBottomNavigation = styled.div`
  ${({ theme }) => theme.fonts.SmallBold3};
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  height: ${BOTTOM_NAVIGATION_HEIGHT}px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.whiteOpacity50};
  background-color: ${({ theme }) => theme.semanticColor.background};
  padding: 0 15px;
  z-index: 10;

  /** 아이폰 하단 인디케이터 영역 대응 */
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    padding-bottom: env(safe-area-inset-bottom);
  }

  .nav-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.whiteOpacity50};

    span {
      margin-top: 3px;
    }

    &.active {
      span {
        color: ${({ theme }) => theme.semanticColor.primary};
      }
    }
  }
`;

const StyledPlusIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.semanticColor.primary};
  cursor: pointer;
`;
