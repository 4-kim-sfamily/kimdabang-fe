import { commonResType, userStarAmountType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getUserStarAmount = async (): Promise<userStarAmountType> => {
  const data = await fetchData<commonResType<userStarAmountType>>(
    "/api/v1/userstar/get-userstaramount",
    "GET",
    "",
    "default",
    "userstaramount",
  );
  return data.data;
};
