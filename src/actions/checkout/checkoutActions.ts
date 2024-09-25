import { checkoutRequestType } from "@/types/RequestType";
import { fetchData } from "../common/common";

export async function postCheckout(
  requestData: checkoutRequestType,
): Promise<any> {
  try {
    const data = await fetchData<any>(
      "/api/v1/purchase/add-purchase",
      "POST",
      requestData,
      "default",
    );
    console.log("결제완료", data);
  } catch (error) {
    console.log("error", error);
  }
}
