import { commonResType, ProductMediaType } from "@/types/ResponseType";
import { fetchData } from "./common/common";

export const getProductMedia = async (
  productCode: string,
): Promise<ProductMediaType> => {
  const data = await fetchData<commonResType<ProductMediaType>>(
    `/api/v1/product-media/${productCode}/all`,
    "GET",
    "",
    "no-store",
  );
  console.log(data);
  return data.data;
};
