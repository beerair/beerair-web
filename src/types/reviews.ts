import { IBeer, ICountry, IFlavor, IMember } from '.';

export type IFeelStatus = 1 | 2 | 3 | 4 | 5;
export interface IReview {
  id: string;
  content: string;
  feelStatus: IFeelStatus;
  imageUrl: string;
  createdAt: string;
  member: IMember;
  beer: IBeer;
  departuresCountry: ICountry;
  arrivalCountry: ICountry;
  flavors: IFlavor[];
}
