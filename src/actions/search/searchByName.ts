import { commonResType, SearchResultType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const searchByName = async (
  query: string,
): Promise<SearchResultType[]> => {
  const data = await fetchData<commonResType<SearchResultType[]>>(
    `/api/v1/product/search?keyword=${query}`,
    "GET",
    "",
    "no-cache",
  );
  return data.data;
};
