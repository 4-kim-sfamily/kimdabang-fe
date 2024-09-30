"use server";
import { AddAddressRequestData } from "@/types/RequestType";
import { commonResType, shippingAddressType } from "@/types/ResponseType";
import { revalidateTag } from "next/cache";
import { fetchData } from "../common/common";
import { getData } from "../mypage/CommonGet";

export async function getShippingAddressList(): Promise<any> {
  const data = await fetchData<commonResType<shippingAddressType[]>>(
    `/api/v1/useraddress/get-useraddresslist`,
    "GET",
    "",
    "force-cache",
    "addShippingAddress",
  );
  return data.data;
}

export const getShippingAddressDefault =
  async (): Promise<shippingAddressType> => {
    try {
      const data = await getData<commonResType<shippingAddressType>>(
        "/api/v1/useraddress/get-useraddressdefault",
        "",
      );
      return data.data;
    } catch (error) {
      console.error("Error fetching default shipping address:", error);
      return null;
    }
  };

export async function AddAddress(
  requestData: AddAddressRequestData,
): Promise<any> {
  const data = await fetchData<any>(
    "/api/v1/useraddress/add-useraddress",
    "POST",
    requestData,
  );
  revalidateTag("addShippingAddress");
  return data.status;
}

export async function getAddressById(id: number): Promise<shippingAddressType> {
  const data = await fetchData<commonResType<shippingAddressType>>(
    `/api/v1/useraddress/get-useraddress?id=${id}`,
    "GET",
  );

  return data.data;
}
