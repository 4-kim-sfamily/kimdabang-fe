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
