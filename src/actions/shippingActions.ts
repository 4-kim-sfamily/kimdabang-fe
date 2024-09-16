import { commonResType, shippingAddressType } from "@/types/ResponseType";

import { getData } from "./mypage/CommonGet";

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
