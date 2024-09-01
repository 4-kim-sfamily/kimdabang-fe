interface Category {
  id: number;
  name: string;
}

interface subCategory extends Category {
  parentId: string;
}

// 메인페이지에서 보여줄 MainCategory & 사진
export interface OnlyLargeCategory extends Category {
  imgUrl: string;
}

// 전체 카테고리 데이터를 담을 타입 정의
export interface AllCategoryDataType {
  largeCategories: Category[]; // 대분류
  subCategories?: subCategory[]; // 중분류
  detailCategories?: subCategory[]; // 소분류
}
