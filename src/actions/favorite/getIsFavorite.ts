"use server";
import { commonResType, IsFavoriteType } from "@/types/ResponseType";
import { getSession } from "next-auth/react";
import { fetchData } from "../common/common";

export const getIsFavorite = async (productCode: string): Promise<boolean> => {
  const session = await getSession();
  if (session) {
    const data = await fetchData<commonResType<IsFavoriteType>>(
      `/api/v1/favorite/${productCode}`,
      "GET",
      "",
      "default",
      "productFavorite",
    );

    return data.data.favorite;
  }
  return false;
};
