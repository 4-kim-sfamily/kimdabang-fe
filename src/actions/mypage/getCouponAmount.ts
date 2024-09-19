import { commonResType, couponAmountType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getCouponAmount = async (): Promise<couponAmountType> => {
  const data = await fetchData<commonResType<couponAmountType>>(
    "/api/v1/couponAmount",
    "GET",
    "",
    "default",
    "couponAmount",
  );
  return data.data;
};
