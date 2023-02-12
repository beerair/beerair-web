import styled from '@emotion/styled';
import { NextPage, GetServerSideProps } from 'next';
import { RecoilRoot } from 'recoil';

import { getBeer } from '@/apis/beers/getBeer';
import { getReview, createReview } from '@/apis/review';
import Header, { HEADER_HEIGHT } from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import SwiperLayout from '@/components/layouts/SwiperLayout';
import ReviewDetailContainer from '@/pages/reviews/create/components/ReviewDetailContainer';
import ReviewFeelStatusContainer from '@/pages/reviews/create/components/ReviewFeelStatusContainer';
import ReviewFlavorsContainer from '@/pages/reviews/create/components/ReviewFlavorsContainer';
import { IBeer, IReview } from '@/types';

interface CreateReviewPageProps {
  beer: IBeer;
  review?: IReview;
}

const CreateReviewPage: NextPage<CreateReviewPageProps> = ({ beer, review }) => {
  return (
    <StyledUpsertRecordContainer>
      <Header leftExtras={<BackButton />} />
      <StyledSwiperLayout>
        <ReviewFeelStatusContainer beerName={beer.korName} defaultFeelValue={review?.feelStatus} />
        <ReviewFlavorsContainer beerName={beer.korName} defaultFlavorValue={review?.flavors} />
        <ReviewDetailContainer beer={beer} review={review} />
      </StyledSwiperLayout>
    </StyledUpsertRecordContainer>
  );
};

const CreateReviewPageRecoilWrapper: NextPage<CreateReviewPageProps> = (props) => {
  return (
    <RecoilRoot>
      <CreateReviewPage {...props} />
    </RecoilRoot>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { beerId, reviewId } = context.query;
  const id = reviewId || beerId;

  if (id && typeof id === 'string' && Number(id)) {
    if (reviewId) {
      const review = await getReview(Number(id));
      const beer = await getBeer(review.beer.id);

      return { props: { beer, review } };
    }

    const beer = await getBeer(Number(id));

    return { props: { beer } };
  }

  return { props: {} };
};

export default CreateReviewPageRecoilWrapper;

const StyledUpsertRecordContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledSwiperLayout = styled(SwiperLayout)`
  height: ${`calc(100% - ${HEADER_HEIGHT}px)`};
`;
