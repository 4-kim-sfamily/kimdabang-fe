import { commonResType, RunningSeasonType } from "@/types/ResponseType";
import { getData } from "./CommonGet";

export const getRunningSeason = async (): Promise<RunningSeasonType> => {
  const data = await getData<commonResType<RunningSeasonType>>(
    "/api/v1/season-media-list",
    "seasonmedia",
  );
  return data.data;
};
