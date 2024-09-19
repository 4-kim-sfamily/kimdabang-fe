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

export const getSeasonMediaById = async (id: string): Promise<any> => {
  const data = await fetchData<commonResType<any>>(
    `/api/v1/season/${id}`,
    "GET",
    "",
    "force-cache",
  );
  return data.data;
};
