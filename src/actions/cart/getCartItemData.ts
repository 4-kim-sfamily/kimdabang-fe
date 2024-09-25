"use server";
import { cartItem, cartList } from "@/types/items/Cart";
import { AddCartItmeRequestData } from "@/types/RequestType";
import { commonResType } from "@/types/ResponseType";
import { revalidateTag } from "next/cache";
import { fetchData } from "../common/common";

export async function getCartItemList(): Promise<cartList[]> {
  const data = await fetchData<commonResType<cartList[]>>(
    `/api/v1/cart/list`,
    "GET",
    "",
    "force-cache",
    "changeCartState",
  );
  return data.data;
}

export async function getCartItem({
  productCode,
}: {
  productCode: string;
}): Promise<cartItem> {
  const data = await fetchData<commonResType<cartItem>>(
    `/api/v1/cart/${productCode}`,
    "GET",
    "",
    "force-cache",
    "changeCartState",
  );
  console.log(data.data);
  return data.data;
}

export async function putCartItem({
  productCode,
  request,
}: {
  productCode: string;
  request: AddCartItmeRequestData;
}): Promise<any> {
  const data = await fetchData<commonResType<any>>(
    `/api/v1/cart/${productCode}`,
    "PUT",
    request,
  );
  revalidateTag("changeCartState");
  return data.data;
}

export async function getCheckedCartItem() {
  const data = await fetchData<commonResType<cartList[]>>(
    `/api/v1/cart/checkedList`,
    "GET",
    "",
    "reload",
  );
  return data.data;
}
