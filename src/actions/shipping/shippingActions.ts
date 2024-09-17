"use server";
import { AddAddressRequestData } from "@/types/RequestType";
import { commonResType, shippingAddressType } from "@/types/ResponseType";
import { fetchData } from "../common/common";
import { getData } from "../mypage/CommonGet";

export const getShippingAddressList = async (): Promise<
  shippingAddressType[]
> => {
  const data = await getData<commonResType<shippingAddressType[]>>(
    "/api/v1/useraddress/get-useraddresslist",
    "",
  );
  return data.data;
};

export const getShippingAddressDefault =
  async (): Promise<shippingAddressType> => {
    const data = await getData<commonResType<shippingAddressType>>(
      "/api/v1/useraddress/get-useraddressdefault",
      "",
    );
    return data.data;
  };

export async function AddAddress(
  requestData: AddAddressRequestData,
): Promise<any> {
  return fetchData<any>(
    "/api/v1/useraddress/add-useraddress",
    "POST",
    requestData,
  );
}
export async function getAddressById(id: number): Promise<any> {
  const data = await fetchData<commonResType<shippingAddressType>>(
    `/api/v1/useraddress/get-useraddress?id=${id}`,
    "GET",
  );
  return data.data;
}
