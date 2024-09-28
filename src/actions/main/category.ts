import { CategoryType } from "@/types/main/AllCategoryDataType";
import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getCategoryList = async (): Promise<CategoryType[]> => {
  const data = await fetchData<commonResType<CategoryType[]>>(
    `/api/v1/category/get-categorylist`,
    "GET",
    "",
    "no-cache",
  );
  return data.data;
};

export const getSubCategory = async (id: number): Promise<CategoryType> => {
  const data = await fetchData<commonResType<CategoryType>>(
    `/api/v1/category/get-category?id=${id}`,
    "GET",
    "",
    "force-cache",
  );
  return data.data;
};

export const getChildCategory = async (): Promise<CategoryType[]> => {
  const data = await fetchData<commonResType<CategoryType[]>>(
    `/api/v1/category/get-leafcategorylist`,
    "GET",
    "",
    "force-cache",
  );
  return data.data;
};
