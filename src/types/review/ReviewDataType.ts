export interface ReviewPreviewType {
  productCode: string;
  rate: number;
  reviewCnt: number;
  reviewPreviewImg?: ReviewPreviewImgType[];
}

export interface ReviewPreviewImgType {
  id: number;
  imgUrl: string;
}

//베스트 상품 리뷰(+리뷰 content)
export interface RecentReviewPreviewType extends ReviewPreviewType {
  recentReviewcontent?: string;
}

export interface ReviewResponse {
  reviews: ReviewPreviewType[];
}

export interface ReviewMap {
  [key: string]: {
    rate: number;
    reviewCnt: number;
  };
}
