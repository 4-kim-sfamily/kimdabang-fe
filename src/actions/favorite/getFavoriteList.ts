import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

interface favoriteType {
  productCode: string;
}

export const getFavoriteList = async (): Promise<favoriteType[]> => {
  const data = await fetchData<commonResType<favoriteType[]>>(
    "/api/v1/favorite/list",
    "GET",
    "",
    "no-store",
    "favoriteList",
  );
  return data.data;
};
