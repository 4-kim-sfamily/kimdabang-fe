import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export interface RecommnedProduct {
  productCode: string;
  categoryId: number;
}
export interface RecommendItemType {
  nextPage: boolean;
  nowPage: number;
  totalPage: number;
  data: RecommnedProduct[];
}
export const getProductRec = async (): Promise<RecommendItemType> => {
  const data = await fetchData<commonResType<RecommendItemType>>(
    `/api/v1/score/get-recommendation?page=0&size=5`,
    "GET",
    "",
    "force-cache",
  );
  return data.data;
};
