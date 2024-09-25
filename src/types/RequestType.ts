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

export type AddCartItmeRequestData = {
  optionId: number;
  amount: number;
};

export interface checkoutRequestType {
  address: string;
  name: string;
  phone: string;
  couponId?: number;
  method: string;
  totalPrice: number;
  discountPrice: number;
  shippingPrice: number;
  amount: number;
  items: [
    {
      productCode: string;
      optionsId: number;
      options: string;
      quantity: number;
      price: number;
    },
  ];
}
