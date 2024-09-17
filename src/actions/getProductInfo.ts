import { commonResType, ProductType } from "@/types/ResponseType";
import { getData } from "./mypage/CommonGet";

export const getProductInfo = async (
  productCode: string,
): Promise<ProductType> => {
  const data = await getData<commonResType<ProductType>>(
    `/api/v1/product/${productCode}`,
  );
  return data.data;
};
