import {
  commonResType,
  ProductContent,
  ProductPageType,
} from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getProudctPage = async (
  productCode: string,
): Promise<ProductPageType> => {
  const data = await fetchData<commonResType<ProductPageType>>(
    `/api/v1/product/${productCode}`,
    "GET",
    "",
    "default",
  );
  return data.data;
};

export const getProductContent = async (
  productCode: string,
): Promise<ProductContent> => {
  const data = await fetchData<commonResType<ProductContent>>(
    `/api/v1/product/content/${productCode}`,
    "GET",
    "",
    "default",
  );
  return data.data;
};
