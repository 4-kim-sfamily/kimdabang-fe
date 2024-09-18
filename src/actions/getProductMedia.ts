import { commonResType, ProductMediaType } from "@/types/ResponseType";
import { getData } from "./mypage/CommonGet";

export const getProductMedia = async (
  productCode: string,
): Promise<ProductMediaType> => {
  const data = await getData<commonResType<ProductMediaType>>(
    `/api/v1/product-media/${productCode}/all`,
    "",
    "no-store",
  );
  return data.data;
};
