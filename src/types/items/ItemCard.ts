export interface ItemCardType {
  id: number;
  ProductCode: string;
  ProductName: string;
  price: number;
  imgUrl: string;
  largeCategory: string;
  inStock: boolean;
  discount?: DiscountedItemCardType;
}

export interface DiscountedItemCardType {
  discount: number;
  discountedPrice: number;
}

export interface ItemCardListType {
  itemCard: ItemCardType[];
}

export interface ItemCardProps {
  item: ItemCardType;
  rate: number;
  reviewCnt: number;
}
