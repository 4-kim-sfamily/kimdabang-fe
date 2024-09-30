import { SeasonMediaType } from "@/types/main/CarouselDataType";
import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";

export const getSeasonMedia = async (): Promise<SeasonMediaType[]> => {
  const data = await fetchData<commonResType<SeasonMediaType[]>>(
    `/api/v1/season-media-list`,
    "GET",
    "",
    "force-cache",
  );
  return data.data;
};

export const getSeasonMediaById = async (
  id: number,
): Promise<SeasonMediaType> => {
  const data = await fetchData<commonResType<SeasonMediaType>>(
    `/api/v1/season-media-list/${id + 22}`,
    "GET",
    "",
    "force-cache",
  );
  return data.data;
};
