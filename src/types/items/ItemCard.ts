export interface ItemCardType {
  id: number;
  ProductCode: string;
  ProductName: string;
  price: number;
  imgUrl: string;
}

export interface ItemCardListType {
  itemCard: ItemCardType[];
}
