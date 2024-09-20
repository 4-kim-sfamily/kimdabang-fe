"use server";
import { fetchData } from "@/actions/common/common";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { AddUserEnrollCouponRequestData } from "@/types/RequestType";
import { commonResType, CouponType, myCouponType } from "@/types/ResponseType";
import { getServerSession } from "next-auth/next";

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

//쿠폰 다운로드

export async function EnrollUserCoupon(
  requestData: AddUserEnrollCouponRequestData,
): Promise<any> {
  const session = await getServerSession(options);
  if (session) {
    try {
      // API 요청
      const data = await fetchData<any>(
        "/api/v1/user-enroll-coupon",
        "POST",
        requestData,
      );
      return data.data; // 성공 시 데이터 반환
    } catch (error) {
      // 에러 처리
      if (error.message.includes("이미 발행받은 쿠폰입니다.")) {
        console.log("이미 발행받은 쿠폰입니다!!");
        return 402;
      } else {
        // 다른 에러 처리
        console.error("쿠폰 등록 중 오류 발생: durl", error);
        return {
          status: error?.status || 500,
          message: error.message || "알 수 없는 오류가 발생했습니다.",
        };
      }
    }
  } else {
    return { status: 401, message: "인증되지 않은 사용자입니다." };
  }
}

export const getMyCoupon = async (): Promise<myCouponType[]> => {
  const data = await fetchData<commonResType<myCouponType[]>>(
    `/api/v1/user-enroll-coupon`,
    "GET",
    "",
  );
  return data.data;
};
