import { commonResType, ProductMediaType } from "@/types/ResponseType";
import { getData } from "./mypage/CommonGet";

export const getProductMedia = async (
  productCode: number,
): Promise<ProductMediaType> => {
  const data = await getData<commonResType<ProductMediaType>>(
    `/api/v1/product-media/1/all`,
    "",
    "no-store",
  );
  return data.data;
};
