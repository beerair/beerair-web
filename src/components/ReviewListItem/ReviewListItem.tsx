import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { parseISO } from 'date-fns';

import Emoji from '@/components/commons/Emoji';
import Badge from '@/components/Badge';
import { formatDateDiff } from '@/utils/formatDateDiff';
import { IReview } from '@/types';

import { isNil } from 'lodash';

export interface Props extends IReview {
  isMe?: boolean;
}

const ReviewListItem = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { content, feel, member, createdAt, flavors, isMe } = props;

  return (
    <StyledReview ref={ref}>
      <StyledEmoji feel={feel} />
      <ReviewContainer>
        <UserAndDate>
          <User>
            {isMe && <Me>ME</Me>}
            {member.name}
          </User>
          {!isNil(createdAt) && <Date>{formatDateDiff(parseISO(createdAt))}</Date>}
        </UserAndDate>
        <Content>{content}</Content>
        <BadgeList>
          {flavors.map((tag) => (
            <Badge key={tag.id} label={tag.content} />
          ))}
        </BadgeList>
      </ReviewContainer>
    </StyledReview>
  );
});

export default ReviewListItem;

ReviewListItem.displayName = 'ReviewListItem';

const StyledReview = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const StyledEmoji = styled(Emoji)`
  margin-bottom: auto;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`;

const UserAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const User = styled.p`
  display: flex;
  gap: 8px;
  ${({ theme }) => theme.fonts.Body2}
  color: ${({ theme }) => theme.color.white};
`;

const Date = styled.p`
  ${({ theme }) => theme.fonts.SubTitle5}
  color: ${({ theme }) => theme.color.whiteOpacity65};
`;

const Content = styled.p`
  ${({ theme }) => theme.fonts.Body5}
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 19px;
  word-break: break-word;
`;

const BadgeList = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const Me = styled.span`
  ${({ theme }) => theme.fonts.SmallBold3};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.semanticColor.primary};
  border-radius: 13px;
  padding: 2px 8px;
  height: 16px;
`;
