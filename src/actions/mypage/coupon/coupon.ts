import { fetchData } from "@/actions/common/common";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { commonResType } from "@/types/ResponseType";
import { getServerSession } from "next-auth/next";

//모든 쿠폰 조회
export async function getAllCoupon(): Promise<any> {
  const data = await fetchData<commonResType<any>>(`/api/v1/coupon`, "GET");
  return data.data;
}

//쿠폰 다운로드
export async function get(id: number): Promise<any> {
  const session = await getServerSession(options);
  if (session) {
    const data = await fetchData<commonResType<any>>(
      `/api/v1/useraddress/get-useraddress?id=${id}`,
      "POST",
    );
    return data.data;
  }
}
