import { cartItemOption } from "@/types/items/Cart";
import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export async function getCartItemOption({ id }: { id: number }): Promise<any> {
  const data = await fetchData<commonResType<cartItemOption>>(
    `/api/v1/cartItemOptions/${id}`,
    "GET",
  );
  return data.data;
}
