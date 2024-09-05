export interface ReviewPreviewType {
  productCode: string;
  rate: number;
  reviewCnt: number;
  reviewPreviewImg?: string[];
}

//베스트 상품 리뷰(+리뷰 content)
export interface RecentReviewPreviewType extends ReviewPreviewType {
  recentReviewcontent?: string;
}

export interface ReviewMap {
  [key: string]: {
    rate: number;
    reviewCnt: number;
  };
}
