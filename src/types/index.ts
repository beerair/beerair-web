export * from './beers';
export * from './flavors';
export * from './country';
export * from './reviews';

export interface IError {
  name: string;
  message: string;
  reason: number;
}
export interface IBaseResponse<T> {
  data: T;
}

export interface IBasePaginationResponse<T> extends IBaseResponse<T> {
  hasNext: boolean;
  nextCursor: number;
  resultCount: number;
}
