import { commonResType, RunningSeasonType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getRunningSeason = async (): Promise<RunningSeasonType> => {
  const data = await fetchData<commonResType<RunningSeasonType>>(
    "/api/v1/season-media-list",
    "GET",
    "seasonmedia",
  );
  return data.data;
};
