// @flow
export type IUser = {
  email: string,
  firstName: string,
  lastName: string,
  nickName: string,
  avatar: string | null,
  id: number,
  isProfilePic: boolean,
  profilepic: string,
  changeAllocationEmail: boolean,
  loginActivityEmail: boolean,
  newFeatureEmail: boolean,
  appIntro: boolean,
  pageIntros: Array<string>,
  lbParticipationDate: number | null,
  lbShareAllocDate: number | null,
  lbShareAllocation: boolean,
  lbParticipation: boolean,
};

export type IUserProfile = {
  picture: string,
  email: string,
  name: string,
  nickname: string,
};

export type IAuthResult = {
  success: true,
  token: string,
  expiresIn: number,
};
