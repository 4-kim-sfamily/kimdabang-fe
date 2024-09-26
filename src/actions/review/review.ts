"use server";
import { ReviewData } from "@/types/RequestType";
import { commonResType } from "@/types/ResponseType";
import { fetchData } from "../common/common";
interface reviewUpload {
  data: string;
}
export const postReview = async (
  request: ReviewData,
): Promise<reviewUpload> => {
  const data = await fetchData<commonResType<reviewUpload>>(
    `/api/v1/review/add-review`,
    "POST",
    request,
  );
  return data.data;
};
export const postReviewMedia = async (productCode: string): Promise<any> => {
  const data = await fetchData<commonResType<any>>(
    `/api/v1/review/uplode`,
    "POST",
    { productCode },
  );
  return data.data;
};
