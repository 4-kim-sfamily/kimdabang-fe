export interface ItemCardType {
  productCode: string;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  categoryId: string;
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
