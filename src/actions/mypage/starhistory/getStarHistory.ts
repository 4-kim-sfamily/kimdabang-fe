import { commonResType, StarHistoryType } from "@/types/ResponseType";
import { getData } from "../CommonGet";

export const getStarHistory = async (
  start: string,
  end: string,
): Promise<StarHistoryType[]> => {
  const queryParams = new URLSearchParams({ start, end }).toString();
  const data = await getData<commonResType<StarHistoryType[]>>(
    `/api/v1/userstar/get-userstar?${queryParams}`,
    "UserStar",
  );
  return data.data;
};
