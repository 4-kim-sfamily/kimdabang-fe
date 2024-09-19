import { fetchData } from "@/actions/common/common";
import { commonResType, StarHistoryType } from "@/types/ResponseType";

export const getStarHistory = async (
  start: string,
  end: string,
): Promise<StarHistoryType[]> => {
  const queryParams = new URLSearchParams({ start, end }).toString();
  const data = await fetchData<commonResType<StarHistoryType[]>>(
    `/api/v1/userstar/get-userstar?${queryParams}`,
    "GET",
    "",
    "default",
    "UserStar",
  );
  return data.data;
};
