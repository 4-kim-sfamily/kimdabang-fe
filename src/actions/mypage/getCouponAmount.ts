import { commonResType, couponAmountType } from "@/types/ResponseType";
import { getData } from "./CommonGet";

export const getCouponAmount = async (): Promise<couponAmountType> => {
  const data = await getData<commonResType<couponAmountType>>(
    "/api/v1/couponAmount",
    "couponAmount",
  );
  return data.data;
};
