import { fetchData } from "@/actions/common/common";
import { commonResType, noiticationType } from "@/types/ResponseType";

export const getNotification = async (): Promise<noiticationType[]> => {
  const data = await fetchData<commonResType<noiticationType[]>>(
    `/api/v1/notification/get-Notification`,
    "GET",
  );
  return data.data;
};
