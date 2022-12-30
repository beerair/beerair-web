import Link from 'next/link';
import React from 'react';

import { ROUTE_PATH } from '@/constants/routes';
import { BeerListViewType } from '@/recoil/atoms';
import { IBeer } from '@/types';

import BeerGridItem from './BeerGridItem';
import BeerListItem from './BeerListItem';

interface BeerItemProps {
  type?: BeerListViewType;
  beer: Pick<
    IBeer,
    | 'id'
    | 'imageUrl'
    | 'myReview'
    | 'country'
    | 'type'
    | 'korName'
    | 'imageUrl'
    | 'alcohol'
    | 'myReview'
    | 'liked'
  >;
}

const BeerItem = ({ type = 'grid', beer }: BeerItemProps) => {
  return (
    <Link
      href={{
        pathname: ROUTE_PATH.BEERS.INFO,
        query: { id: beer.id },
      }}
    >
      <a>{type === 'grid' ? <BeerGridItem beer={beer} /> : <BeerListItem beer={beer} />}</a>
    </Link>
  );
};

export default BeerItem;
