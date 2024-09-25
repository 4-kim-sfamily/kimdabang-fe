export interface CartItemType {
  productCode: string;
  productName: string;
  price: number;
  amount: number;
  discountedPrice?: number;
  isChecked: boolean;
  imgUrl: string;
  isOptionRequired: boolean;
  maximumQuantity?: number;
  id: number;
}

export interface cartItemOption {
  id: number;
  optionValue: string;
  restock?: number;
}

export interface cartList {
  productCode: string;
  amount: number;
  productOptionId: number;
  carving: string;
}
export interface cartItem {
  amount: number;
  checked: number;
}
