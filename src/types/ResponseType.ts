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
}

export interface userDataType {
  loginId: "string";
  name: "string";
  email: "string";
  phone: "string";
  gender: "남성";
  solar: true;
  birth: "2024-09-13T01:15:38.791Z";
  nickname: "string";
  grade: "Welcome";
  profileImg: "string";
}

export interface couponAmountType {
  couponAmount: "number";
}

export interface userStarAmountType {
  starAmount: "number";
  greenStarAmount: "number";
}

export interface RunningSeasonType {
  id: number;
  name: string;
  description?: string;
  thumbsImgUrl: string;
}
