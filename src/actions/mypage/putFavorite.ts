"use server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";
import { revalidateTag } from "next/cache";

export const putFavorite = async (productCode: string) => {
  "use server";
  const session: Session | null = await getServerSession(options);
  const token: string = session ? session.user.accessToken : "";

  const fetchOptions: RequestInit = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/v1/favorite/${productCode}`,
    fetchOptions,
  );
  if (!res.ok) {
    throw new Error("좋아요 요청에 실패하였습니다..");
  } else {
    // 캐시를 갱신
    revalidateTag("productFavorite");
  }
};
