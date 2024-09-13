import { options } from "@/app/api/auth/[...nextauth]/options";
import { commonResType, shippingAddressType } from "@/types/ResponseType";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

export const getShippingAddress = async (): Promise<shippingAddressType[]> => {
  "use server";
  const session: Session | null = await getServerSession(options);
  const token: string = session ? session.user.accessToken : "";
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/v1/useraddress/get-useraddress`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        // Authorization: `${token}`,
      },
      next: { tags: ["shippingAddress"] },
    },
  );
  if (!res.ok) {
    throw new Error("데이터를 가져오지 못했습니다.");
  }
  const data = (await res.json()) as commonResType<shippingAddressType[]>;
  return data.data;
};
