import { commonResType, FavoriteType } from "@/types/ResponseType";
import { getData } from "./mypage/CommonGet";

export const getFavoriteList = async (): Promise<FavoriteType[]> => {
  const data = await getData<commonResType<FavoriteType[]>>(
    "/api/v1/favorite/list",
    "favoriteList",
    "no-store",
  );
  return data.data;
};
