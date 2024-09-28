import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export interface responseGetBestType {
  nowPage: number;
  size: number;
  nextPage: boolean;
  data: bestProductType[];
}

export interface bestProductType {
  productCode: string;
  categoryId: number;
}

export const getBestProduct = async (
  nowPage: number,
): Promise<responseGetBestType> => {
  const data = await fetchData<commonResType<responseGetBestType>>(
    `/api/v1/score/get-best?page=${nowPage}`,
    "GET",
    "",
    "default",
  );
  return data.data;
};

export const getCategoryBestProduct = async (
  categoryId: string,
  nowPage: number,
): Promise<responseGetBestType> => {
  console.log("선택된 categoryId", categoryId);
  const data = await fetchData<commonResType<responseGetBestType>>(
    `/api/v1/score/get-categorybest?categoryId=${categoryId}&page=${nowPage}`,
    "GET",
    "",
    "no-store",
  );
  return data.data;
};
