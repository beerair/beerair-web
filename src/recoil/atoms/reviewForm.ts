import { atom } from 'recoil';

const ATOM_KEY = 'review-form';

interface ReviewFormAtom {
  feelStatus?: number;
  flavorIds?: number[];
  imageUrl?: string;
  isPublic?: boolean;
  content?: string;
}

const $reviewForm = atom<ReviewFormAtom>({
  key: ATOM_KEY,
  default: {},
});

export default $reviewForm;
