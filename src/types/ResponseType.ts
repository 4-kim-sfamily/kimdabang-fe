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
export interface ProductOptionType {
  productCode: string;
  PriorOptionId: string;
}
export interface CouponType {
  couponId: string;
  expirtedAt: string;
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
  optionValue: number;
}

export interface MyOrderItemType {
  productData: ProductType;
  //Option Data는 아직 Response값을 몰라서 일단 String으로 설정해놓았습니다.
  optionData: OptionData;
}

// OptionData는 getOptionDetail에서 사용중이며
// Option_detail 테이블 조회시 사용
export interface OptionData {
  min_stock: number;
  quantity: number;
  state: string;
  variable_price: number;
}
