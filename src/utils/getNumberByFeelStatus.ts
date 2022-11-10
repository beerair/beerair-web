import { IReview } from '@/apis';

export const getNumberByFeelStatus = (feelStatus?: IReview['feelStatus']) => {
  switch (feelStatus) {
    case 'Chaos':
      return 1;
    case 'Bad':
      return 2;
    case 'Soso':
      return 3;
    case 'Good':
      return 4;
    default:
      return 5;
  }
};
