import styled from '@emotion/styled';

import { IReview } from '@/types';
import { Ref } from 'react';
import { $userSession } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';

import ReviewListItem from '../ReviewListItem';

interface Props {
  reviews: IReview[];
  lastItemRef?: Ref<HTMLDivElement> | null;
}

const TITLE = '이 맥주는 어땠냐면,';

const ReviewList = ({ reviews, lastItemRef }: Props) => {
  const user = useRecoilValue($userSession);

  if (!reviews?.length) {
    return null;
  }

  return (
    <StyledReviewList>
      <Title>{TITLE}</Title>
      {reviews.map((review, idx) => (
        <ReviewListItem
          key={idx}
          ref={idx === reviews.length - 1 ? lastItemRef : undefined}
          content={review.content}
          feelStatus={review.feelStatus}
          createdAt={review.createdAt}
          member={review.member}
          flavors={review.flavors}
          isMe={user?.nickname === review.member.name}
        />
      ))}
    </StyledReviewList>
  );
};

export default ReviewList;

const StyledReviewList = styled.section`
  padding: 0 20px 90px 0;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.SubTitle2};
  color: ${({ theme }) => theme.color.white};
  margin-right: auto;
  margin: 26px 0;
`;
