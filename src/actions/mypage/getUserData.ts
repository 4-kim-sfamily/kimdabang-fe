import { commonResType, userDataType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getUserData = async (): Promise<userDataType> => {
  const data = await fetchData<commonResType<userDataType>>(
    "/api/v1/user/get-user",
    "GET",
    "userData",
  );
  return data.data;
};
