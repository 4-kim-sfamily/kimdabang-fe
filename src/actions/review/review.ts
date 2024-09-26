"use server";
import { ReviewData } from "@/types/RequestType";
import { fetchData } from "../common/common";

interface MediaResponse {
  url: string;
}
export const postReviewMedia = async (
  file: FormData,
): Promise<MediaResponse> => {
  const response = await fetchData<MediaResponse>(
    "/api/v1/review/uplode",
    "POST",
    file,
  );
  return response;
};

export const postReview = async (request: ReviewData): Promise<any> => {
  const response = await fetchData<any>(
    `/api/v1/review/add-review`,
    "POST",
    request,
  );
  return response;
};
