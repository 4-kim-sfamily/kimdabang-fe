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
