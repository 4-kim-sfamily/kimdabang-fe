import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export interface productRateDataReqType {
  rating: number;
  reviewCount: number;
  favoriteCount: number;
}

export const productRateData = async (
  productCode: string,
): Promise<productRateDataReqType> => {
  const data = await fetchData<commonResType<productRateDataReqType>>(
    `/api/v1/score/get-score?productCode=${productCode}`,
    "GET",
    "",
    "force-cache",
  );
  return data.data;
};
