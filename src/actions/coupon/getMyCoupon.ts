import { commonResType, CouponType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getMyCouponId = async (): Promise<CouponType[]> => {
  const data = await fetchData<commonResType<CouponType[]>>(
    "/api/v1/user-enroll-coupon",
    "GET",
    "",
  );
  return data.data;
};

// 나중에 API에 맞게 수정해야함
export interface CouponData {
  id: number;
  name: string;
  couponType: string; //할인 쿠폰 / 할인액 쿠폰
  expiredDate: string;
  value: number;
  validateYear: string;
  validateMonth: string;
  validateDay: string;
}

export const getCouponDataById = async (id: number): Promise<CouponData> => {
  const data = await fetchData<commonResType<CouponData>>(
    `/api/v1/coupon/${id}`,
    "GET",
    "",
  );
  return data.data;
};
