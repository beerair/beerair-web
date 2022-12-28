import { IBeer, ICountry, IFlavor } from '.';

export type IFeelStatus = 1 | 2 | 3 | 4 | 5;
export interface IReview {
  id: string;
  content: string;
  feelStatus: IFeelStatus;
  imageUrl: string;
  createdAt: string;
  member: any;
  beer: IBeer;
  departuresCountry: ICountry;
  arrivalCountry: ICountry;
  flavors: IFlavor[];
}
