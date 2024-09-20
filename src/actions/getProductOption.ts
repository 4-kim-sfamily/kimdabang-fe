import { commonResType, optionType } from "@/types/ResponseType";
import { fetchData } from "./common/common";

export const getProductOption = async (
  productCode: string,
): Promise<optionType[]> => {
  const data = await fetchData<commonResType<optionType[]>>(
    `/api/v1/options/${productCode}`,
    "GET",
    "",
  );
  return data.data;
};
