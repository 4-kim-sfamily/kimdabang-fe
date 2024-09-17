"use server";
import { commonResType, IsFavoriteType } from "@/types/ResponseType";
import { getData } from "./mypage/CommonGet";

export const getIsFavorite = async (
  productCode: string,
): Promise<IsFavoriteType> => {
  const data = await getData<commonResType<IsFavoriteType>>(
    `/api/v1/favorite/${productCode}`,
    "productFavorite",
  );
  return data.data;
};
