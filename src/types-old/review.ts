import { IFeel } from './feel';
import { IFlavor } from './flavor';

export interface IReview {
  id?: number;
  content: string;
  feel: IFeel;
  member: {
    id: number;
    name: string;
  };
  createdAt: string;
  flavors: IFlavor[];
}
