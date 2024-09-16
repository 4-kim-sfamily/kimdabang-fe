export interface commonResType<T> {
  status: string;
  message: string;
  data: T;
}

export interface shippingAddressType {
  id: number;
  address: string;
  isDefault: boolean;
  addressName: string;
  phone: string;
}

export interface userDataType {
  loginId: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  solar: true;
  birth: Date;
  nickname: string;
  grade: string;
  profileImg: string;
}

export interface couponAmountType {
  couponAmount: number;
}

export interface userStarAmountType {
  starAmount: number;
  greenStarAmount: number;
}

export interface RunningSeasonType {
  id: number;
  name: string;
  description?: string;
  thumbsImgUrl: string;
}

export type IsFavoriteType = {
  favorite: boolean;
};
export interface StarHistoryType {
  expirationDate: Date;
  createdAt: Date;
  isEcho: boolean;
  starAmount: number;
  description: string;
}
