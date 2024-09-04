import { ItemCardType } from "@/types/items/ItemCard";

export const itemCardList: ItemCardType[] = [
  {
    id: 1,
    ProductCode: "SB001",
    ProductName: "SS 사이렌 워커 텀블러 473ml",
    price: 37000,
    largeCategory: "텀블러/보온병",
    inStock: true,
    imgUrl: "https://picsum.photos/300/300",
  },
  {
    id: 2,
    ProductCode: "SB002",
    ProductName: "사이렌 글라스볼 우드스푼세트",
    price: 19000,
    largeCategory: "라이프 스타일",
    inStock: true,
    imgUrl: "https://picsum.photos/300/300",
    discount: {
      discount: 10,
      discountedPrice: 17100,
    },
  },
  {
    id: 3,
    ProductCode: "SSG003",
    ProductName: "사이렌 레버 드리퍼",
    price: 35000,
    largeCategory: "커피/티용품",
    inStock: true,
    imgUrl: "https://picsum.photos/300/300",
  },
  {
    id: 4,
    ProductCode: "SSG004",
    ProductName: "사이렌 글라스 컨테이너",
    price: 41000,
    largeCategory: "커피/티용품",
    inStock: true,
    imgUrl: "https://picsum.photos/300/300",
  },
  {
    id: 5,
    ProductCode: "SSG005",
    ProductName: "크림 컴프레소",
    price: 68000,
    largeCategory: "커피/티용품",
    inStock: true,
    imgUrl: "https://picsum.photos/300/300",
    discount: {
      discount: 15,
      discountedPrice: 57800,
    },
  },
];
