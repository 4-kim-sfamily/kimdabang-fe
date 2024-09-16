import { commonResType, userDataType } from "@/types/ResponseType";
import { getData } from "./CommonGet";

export const getUserData = async (): Promise<userDataType> => {
  const data = await getData<commonResType<userDataType>>(
    "/api/v1/user/get-user",
    "userData",
  );
  return data.data;
};
