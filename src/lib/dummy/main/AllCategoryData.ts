import { OnlyLargeCategory } from "@/types/main/AllCategoryDataType";

export const largeCategories: OnlyLargeCategory[] = [
  {
    id: 1,
    name: "SEASON MD",
    imgUrl: "https://example.com/images/season_md.jpg",
  },
  {
    id: 2,
    name: "BEST",
    imgUrl: "https://example.com/images/best.jpg",
  },
  {
    id: 3,
    name: "GIFT",
    imgUrl: "https://example.com/images/gift.jpg",
  },
  {
    id: 4,
    name: "STORY",
    imgUrl: "https://example.com/images/story.jpg",
  },
  {
    id: 5,
    name: "키친/테이블",
    imgUrl: "https://example.com/images/kitchen_table.jpg",
  },
  {
    id: 6,
    name: "푸드",
    imgUrl: "https://example.com/images/food.jpg",
  },
  {
    id: 7,
    name: "커피/티용품",
    imgUrl: "https://example.com/images/coffee_tea.jpg",
  },
  {
    id: 8,
    name: "라이프스타일",
    imgUrl: "https://example.com/images/lifestyle.jpg",
  },
  {
    id: 9,
    name: "커피/음료/e-gift",
    imgUrl: "https://example.com/images/coffee_beverage_egift.jpg",
  },
];
export const subCategories = [
  {
    id: 1,
    name: "텀블러/보온병",
    parentId: "5",
  },
  {
    id: 2,
    name: "컵/머그",
    parentId: "5",
  },
  {
    id: 3,
    name: "베이커리",
    parentId: "6",
  },
  {
    id: 4,
    name: "디저트/케이크",
    parentId: "6",
  },
  {
    id: 5,
    name: "샐러드/샌드위치",
    parentId: "6",
  },
  {
    id: 6,
    name: "커피용품",
    parentId: "7",
  },
  {
    id: 7,
    name: "패브릭",
    parentId: "8",
  },
  {
    id: 8,
    name: "홈데코",
    parentId: "8",
  },
  {
    id: 9,
    name: "문구/팬시",
    parentId: "8",
  },
  {
    id: 10,
    name: "음료/요거트",
    parentId: "9",
  },
  {
    id: 11,
    name: "e-gift",
    parentId: "9",
  },
];
