// 메인페이지에서 보여줄 MainCategory & 사진
export interface OnlyLargeCategory {
  id: number;
  name: string;
  imgUrl: string;
}
export interface Category {
  id: number;
  name: string;
}

export interface CategoryType {
  id: number;
  name: string;
  depth: number | null;
  children: CategoryType[];
}
