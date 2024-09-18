import { commonResType, FavoriteType } from "@/types/ResponseType";
import { fetchData } from "./common/common";

export const getFavoriteList = async (): Promise<FavoriteType[]> => {
  const data = await fetchData<commonResType<FavoriteType[]>>(
    "/api/v1/favorite/list",
    "GET",
    "favoriteList",
    "no-store",
  );
  return data.data;
};
