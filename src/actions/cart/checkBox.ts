"use server";
import { cartList } from "@/types/items/Cart";
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
  revalidateTag("changeCartState");
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
    "no-store",
    "changeCartState",
  );
  return data.data.checkBox;
}
export async function getCheckBoxList(): Promise<cartList[]> {
  const data = await fetchData<commonResType<cartList[]>>(
    `/api/v1/cart/checkedList`,
    "GET",
    "",
    "no-store",
    "changeCartState",
  );
  return data.data;
}
