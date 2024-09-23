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
export interface CouponType {
  id: number;
  name: string;
  couponType: string;
  expiredDate: string;
  value: number;
  validityYear: string;
  validityMonth: string;
  validityDay: string;
}

export interface myCouponType {
  id: number;
  name: string;
  couponType: string;
  isUsed: boolean;
  usedAt: string;
  expiredDate: string;
}

export interface noiticationType {
  id: number;
  title: string;
  activeData: string;
  expireDate: string;
  mediaUrl: string;
}

export interface optionType {
  optionsId: number;
  optionValue: string;
  depth: number;
  children: optionType[];
}

export interface ProductPageType {
  productCode: string;
  productName: string;
  productPrice: number;
  description: string;
  productReleaseDate: string;
  content: string;
  categoryId: number;
}
export interface ProductContent {
  productCode: string;
  content: string;
}
