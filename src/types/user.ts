export interface IUserLevel {
  id: number;
  imageUrl: string;
  req: number;
  tier: number;
}

export interface IUser {
  id: number;
  email: string;
  nickname: string;
  phoneNumber: string;
  myPageUrl: string;
  role: string;
  social: string;
  memberLevelResponseDto: IUserLevel;
}
