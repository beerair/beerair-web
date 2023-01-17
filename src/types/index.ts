export * from './beers';
export * from './continent';
export * from './flavors';
export * from './levels';
export * from './members';
export * from './reviews';
export * from './country';
export * from './image';

export interface IError {
  name: string;
  message: string;
  reason: number;
}
export interface IBaseResponse<T> {
  data: T;
}

export interface IBasePaginationResponse<T> extends IBaseResponse<T> {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  firstPage: boolean;
  lastPage: boolean;
}
