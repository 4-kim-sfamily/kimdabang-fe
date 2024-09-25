import { cartItem, cartList } from "@/types/items/Cart";
import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export async function getCartItemList(): Promise<any> {
  const data = await fetchData<commonResType<cartList>>(
    `/api/v1/cart/list`,
    "GET",
    "",
    "reload",
  );
  return data.data;
}

export async function getCartItem({
  productCode,
}: {
  productCode: string;
}): Promise<any> {
  const data = await fetchData<commonResType<cartItem>>(
    `/api/v1/cart/${productCode}`,
    "GET",
    "",
    "reload",
  );
  console.log(data.data);
  return data.data;
}

export async function putCartItem({
  productCode,
}: {
  productCode: string;
}): Promise<any> {
  const data = await fetchData<commonResType<cartList>>(
    `/api/v1/cart/${productCode}`,
    "PUT",
  );
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
