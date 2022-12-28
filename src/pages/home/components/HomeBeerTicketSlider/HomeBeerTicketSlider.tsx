import styled from '@emotion/styled';
import Link from 'next/link';
import Slider from 'react-slick';

import BeerTicket from '@/components/BeerTicket/BeerTicket';
import { IReview } from '@/types';

interface HomeBeerTicketSliderProps {
  reviews: IReview[];
  className?: string;
}

const HomeBeerTicketSlider = ({ reviews, className }: HomeBeerTicketSliderProps) => {
  if (!reviews.length) {
    return null;
  }

  if (reviews.length === 1) {
    return (
      <StyledHomeBeerTicketWrapper className={className}>
        <Link href={`/review/ticket/${reviews[0].id}`} passHref>
          <a>
            <BeerTicket review={reviews[0]} type="stamp" className="beer-ticket" />
          </a>
        </Link>
      </StyledHomeBeerTicketWrapper>
    );
  }

  return (
    <Slider
      arrows={false}
      infinite={false}
      slidesToShow={1}
      slidesToScroll={1}
      variableWidth
      swipeToSlide
      centerMode
      centerPadding="0"
    >
      {reviews.map((review: IReview) => (
        <StyledHomeBeerTicketWrapper key={review.id}>
          <Link href={`/review/ticket/${review.id}`}>
            <a>
              <BeerTicket review={review} type="stamp" className="beer-ticket" />
            </a>
          </Link>
        </StyledHomeBeerTicketWrapper>
      ))}
    </Slider>
  );
};

export default HomeBeerTicketSlider;

const StyledHomeBeerTicketWrapper = styled.div`
  padding: 0 15px;
`;
