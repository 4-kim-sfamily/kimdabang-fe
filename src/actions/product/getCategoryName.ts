import { commonResType, getCategoryDataType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getCategoryName = async (categoryId: string): Promise<string> => {
  const data = await fetchData<commonResType<getCategoryDataType>>(
    `/api/v1/category/get-category?id=${categoryId}`,
    "GET",
    "",
    "force-cache",
  );
  return data.data.name;
};
