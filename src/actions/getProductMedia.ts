import { commonResType, ProductMediaType } from "@/types/ResponseType";
import { fetchData } from "./common/common";

export const getProductMedia = async (
  productCode: number,
): Promise<ProductMediaType> => {
  const data = await fetchData<commonResType<ProductMediaType>>(
    `/api/v1/product-media/1/all`,
    "GET",
    "",
    "no-store",
  );
  return data.data;
};
