import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getSeasonProduct = async (seasonId: string): Promise<string[]> => {
  const data = await fetchData<commonResType<string[]>>(
    `/api/v1/season-product-list/bySeason/${seasonId}`,
    "GET",
    "",
    "force-cache",
  );
  return data.data;
};
