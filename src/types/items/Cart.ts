export interface CartItemType {
  productCode: string;
  productName: string;
  price: number;
  amount: number;
  discountedPrice?: number;
  isChecked: boolean;
  imgUrl: string;
}
