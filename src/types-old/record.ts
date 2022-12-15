import { IBeer } from './beer';
import { IFeel } from './feel';
import { IFlavor } from './flavor';

export interface IRecord {
  id: number;
  content: string;
  feel: IFeel;
  imageUrl: string;
  memberRecordDto: any;
  createdAt: string;
  updatedAt: string;
  startCountryKor: string;
  startCountryEng: string;
  endCountryKor: string;
  endCountryEng: string;
  flavorDtos: IFlavor[];
  beerResponseDto: IBeer;
  recordCount: number;
  isPublic: boolean;
}
