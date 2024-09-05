export interface ItemCardType {
  id: number;
  ProductCode: string;
  ProductName: string;
  productPrice: number;
  productImageUrl: string;
  largeCategory: string;
  inStock: boolean;
  discount?: DiscountedItemCardType;
}

export interface DiscountedItemCardType {
  discount: number;
  discountedPrice: number;
}

export interface ItemCardProps {
  item: ItemCardType;
  rate: number;
  reviewCnt: number;
}
