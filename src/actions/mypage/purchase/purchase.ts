import { fetchData } from "@/actions/common/common";
import { commonResType, Purchase } from "@/types/ResponseType";

export const getMyPurchaseList = async ({
  start,
  end,
}: {
  start: string;
  end: string;
}): Promise<Purchase[] | any> => {
  try {
    const data = await fetchData<commonResType<Purchase[]>>(
      `/api/v1/purchase/get-purchaselist?start=${start}&end=${end}`,
      "GET",
      "",
      "no-cache",
    );
    return data.data;
  } catch (error: any) {
    const status = error?.status || 500;
    const message =
      status === 402 && error.message.includes("이미 발행받은 쿠폰")
        ? "이미 발행받은 쿠폰입니다."
        : error.message || "알 수 없는 오류가 발생했습니다.";
    if (error.message === "400") return [];
    return { status, message };
  }
};

export const getMyPurchase = async ({
  purchaseCode,
}: {
  purchaseCode: number;
}): Promise<any> => {
  const data = await fetchData<commonResType<any>>(
    `/api/v1/purchase/get-purchase?purchaseCode=${purchaseCode}`,
    "GET",
    "",
    "no-cache",
  );
  return data.data;
};
