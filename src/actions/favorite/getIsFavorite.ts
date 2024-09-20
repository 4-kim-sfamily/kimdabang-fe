"use server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { commonResType, IsFavoriteType } from "@/types/ResponseType";
import { getServerSession } from "next-auth/next";
import { fetchData } from "../common/common";

export const getIsFavorite = async (productCode: string): Promise<boolean> => {
  const session = await getServerSession(options);
  console.log("session", session);
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
