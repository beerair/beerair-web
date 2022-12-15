import { IFeel } from './feel';
import { IFlavor } from './flavor';
import { IMember } from './member';

export interface IReview {
  id?: number;
  content: string;
  feel: IFeel;
  member: IMember;
  createdAt: string;
  flavors: IFlavor[];
}
