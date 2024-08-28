export interface ItemCardType {
  id: number;
  ProductCode: string;
  ProductName: string;
  price: number;
  imgUrl: string;
  discount?: DiscountedItemCardType;
}

export interface DiscountedItemCardType {
  discount: number;
  discountedPrice: number;
}

export interface ItemCardListType {
  itemCard: ItemCardType[];
}
