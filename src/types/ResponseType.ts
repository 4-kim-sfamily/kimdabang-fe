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

export interface FavoriteType {
  productCode: string;
}

export interface ProductType {
  id: number;
  productCode: string;
  productName: string;
  description: string;
  releaseDate: Date;
  content: string;
  categoryId: number;
  productPrice: number;
}

export interface ProductMediaType {
  id: number;
  productId: number;
  mediaName: string;
  mediaType: string;
  mediaURL: string;
}
export interface optionType {
  optionsId: number;
  optionValue: number;
}
