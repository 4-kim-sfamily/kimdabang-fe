import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getBestProduct = async (): Promise<any> => {
  const data = await fetchData<commonResType<any>>(
    `/api/v1/score?size=10`,
    "GET",
    "",
    "default",
  );

  return data.data;
};

export const getCategoryBestProduct = async (
  categoryId: string,
): Promise<any> => {
  const data = await fetchData<commonResType<any>>(
    `/api/v1/score/category?size=10`,
    "GET",
    "",
    "default",
  );
};
