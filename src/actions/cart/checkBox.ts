"use server";
import { CheckBoxType, commonResType } from "@/types/ResponseType";
import { revalidateTag } from "next/cache";
import { fetchData } from "../common/common";

//체크박스
export async function putCheckBox({
  productCode,
  productOptionId,
}: {
  productCode: string;
  productOptionId: number;
}): Promise<any> {
  const data = await fetchData<commonResType<any>>(
    `/api/v1/cart/checkBox/${productCode}?productOptionId=${productOptionId ? productOptionId : 0}`,
    "PUT",
  );
  revalidateTag("checkBoxChange");
  return data.data;
}

export async function getCheckBox({
  productCode,
  productOptionId,
}: {
  productCode: string;
  productOptionId?: number;
}): Promise<boolean> {
  const data = await fetchData<commonResType<CheckBoxType>>(
    `/api/v1/cart/checkBox/${productCode}?productOptionId=${productOptionId ? productOptionId : 0}`,
    "GET",
    "",
    "force-cache",
    "checkBoxChange",
  );
  return data.data.checkBox;
}
