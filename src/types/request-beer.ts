export const REQUEST_BEER_STATUS = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
} as const;

export type IRequestBeerStatus = typeof REQUEST_BEER_STATUS[keyof typeof REQUEST_BEER_STATUS];

export interface IRequestBeer {
  beerId: number;
  beerImageUrls: string[];
  beerName: string;
  createdAt: string;
  requestCompletedAt: string;
  requestRejectionReason: string;
  status: IRequestBeerStatus;
}
