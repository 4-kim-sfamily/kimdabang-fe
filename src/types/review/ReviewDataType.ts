export interface ReviewPreviewType {
  rate: number;
  reviewCnt: number;
  reviewPreviewImg?: reviewPreviewImgType[];
}

export interface reviewPreviewImgType {
  id: number;
  imgUrl: string;
}
