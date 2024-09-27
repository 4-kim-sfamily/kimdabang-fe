export type AddAddressRequestData = {
  address: string;
  isDefault: boolean;
  addressName: string;
  phone: string;
};

export type AddUserEnrollCouponRequestData = {
  couponId: number;
  createdAt: string;
  expiredDate: string;
};

export interface CheckRequestData {
  amount: number;
  productOptionId: number;
}
export type AddCartItmeRequestData = {
  productOptionId: number;
  amount: number;
  carving?: string;
};

export type checkoutRequestType = {
  address: string;
  name: string;
  phone: string;
  couponId: number;
  method: string;
  totalPrice: number;
  discountPrice: number;
  shippingPrice: number;
  amount: number;
  items: {
    productCode: string;
    optionsId: number;
    options: string;
    quantity: number;
    price: number;
  }[]; // 튜플에서 일반 배열로 변경
};

export interface ReviewData {
  productCode: string;
  options: string;
  rating: number;
  text: string;
  mediaType: string;
  mediaURL: string;
}
