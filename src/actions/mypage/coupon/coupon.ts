"use server";
import { fetchData } from "@/actions/common/common";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { AddUserEnrollCouponRequestData } from "@/types/RequestType";
import { commonResType, CouponType, myCouponType } from "@/types/ResponseType";
import { getServerSession } from "next-auth/next";
import { revalidateTag } from "next/cache";

//모든 쿠폰 조회
export async function getAllCoupon(): Promise<CouponType[]> {
  const data = await fetchData<commonResType<CouponType[]>>(
    `/api/v1/coupon`,
    "GET",
    "",
    "no-cache",
    "",
  );
  return data.data;
}
export async function getCouponById(id: number): Promise<CouponType> {
  const data = await fetchData<commonResType<CouponType>>(
    `/api/v1/coupon/${id}`,
    "GET",
    "",
    "no-cache",
    "",
  );
  return data.data;
}

//쿠폰 다운로드

export async function EnrollUserCoupon(
  requestData: AddUserEnrollCouponRequestData,
): Promise<any> {
  const session = await getServerSession(options);
  if (!session) {
    return { status: 401, message: "인증되지 않은 사용자입니다." };
  }

  try {
    const { data } = await fetchData<any>(
      "/api/v1/user-enroll-coupon",
      "POST",
      requestData,
    );
    revalidateTag("AddUserCoupon");
    return data; // 성공 시 데이터 반환
  } catch (error: any) {
    const status = error?.status || 500;
    const message =
      status === 402 && error.message.includes("이미 발행받은 쿠폰")
        ? "이미 발행받은 쿠폰입니다."
        : error.message || "알 수 없는 오류가 발생했습니다.";

    return { status, message };
  }
}

export const getMyCoupon = async (): Promise<myCouponType[]> => {
  const data = await fetchData<commonResType<myCouponType[]>>(
    `/api/v1/user-enroll-coupon`,
    "GET",
    "",
    "force-cache",
    "AddUserCoupon",
  );
  return data.data;
};

export const getMyCouponAmount = async (): Promise<number> => {
  const data = await fetchData<commonResType<number>>(
    `/api/v1/user-enroll-coupon/count`,
    "GET",
    "",
    "force-cache",
    "AddUserCoupon",
  );
  return data.data;
};
