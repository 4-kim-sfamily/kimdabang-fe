export interface ReviewPreviewType {
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
  recentReviewcontent: string;
}
