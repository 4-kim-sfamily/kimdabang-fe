import { commonResType, ProductType } from "@/types/ResponseType";
import { fetchData } from "./common/common";

export const getProductInfo = async (
  productCode: string,
): Promise<ProductType> => {
  const data = await fetchData<commonResType<ProductType>>(
    `/api/v1/product/${productCode}`,
    "GET",
    "",
    "no-cache",
  );
  console.log("상품 정보:", data.data);
  return data.data;
};
