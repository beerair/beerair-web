import styled from '@emotion/styled';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon, { IconNameType } from '@/components/Icon';
import { ROUTE_PATH } from '@/constants/routes';

export const BOTTOM_NAVIGATION_HEIGHT = 64;

const NAVIGATION_LIST: {
  label: string;
  href: string;
  iconName: IconNameType;
  activeIconName: IconNameType;
}[] = [
  { label: '홈', href: ROUTE_PATH.HOME, iconName: 'NavHome', activeIconName: 'NavHomeActive' },
  {
    label: '맥주목록',
    href: ROUTE_PATH.BEERS.HOME,
    iconName: 'NavBeer',
    activeIconName: 'NavBeerActive',
  },
  {
    label: '여행목록',
    href: ROUTE_PATH.REVIEWS.HOME,
    iconName: 'NavTravel',
    activeIconName: 'NavTravelActive',
  },
  {
    label: '프로필',
    href: ROUTE_PATH.MY.HOME,
    iconName: 'NavMyPage',
    activeIconName: 'NavMyPageActive',
  },
];

export default function BottomNavigation() {
  const router = useRouter();

  return (
    <StyledBottomNavigation>
      {NAVIGATION_LIST.map(({ label, href, iconName, activeIconName }) => {
        const isActive = router.pathname === href;
        return (
          <Link href={href} key={label}>
            <a className={cx(`nav-link`, `${isActive && 'active'}`)}>
              <Icon name={isActive ? activeIconName : iconName} size={36} />
              <span>{label}</span>
            </a>
          </Link>
        );
      })}
    </StyledBottomNavigation>
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
