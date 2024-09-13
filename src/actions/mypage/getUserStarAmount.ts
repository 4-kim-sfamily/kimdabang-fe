import { commonResType, userStarAmountType } from "@/types/ResponseType";
import { getData } from "./CommonGet";

export const getUserStarAmount = async (): Promise<userStarAmountType> => {
  const data = await getData<commonResType<userStarAmountType>>(
    "/api/v1/userstar/get-userstaramount",
    "userstaramount",
  );
  return data.data;
};
