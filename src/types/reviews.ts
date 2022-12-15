import { IBeer, ICountry, IFlavor } from '.';

export interface IReview {
  id: string;
  content: string;
  feelStatus: string;
  imageUrl: string;
  createdAt: string;
  member: any;
  beer: IBeer;
  departuresCountry: ICountry;
  arrivalCountry: ICountry;
  flavors: IFlavor[];
}
