"use server";
import { commonResType, IsFavoriteType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getIsFavorite = async (
  productCode: string,
): Promise<IsFavoriteType> => {
  const data = await fetchData<commonResType<IsFavoriteType>>(
    `/api/v1/favorite/${productCode}`,
    "GET",
    "",
    "default",
    "productFavorite",
  );
  return data.data;
};
