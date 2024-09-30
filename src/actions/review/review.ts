"use server";
import { ReviewData } from "@/types/RequestType";
import { commonResType, Review, ReviewResType } from "@/types/ResponseType";
import { revalidateTag } from "next/cache";
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
    "default",
  );
  revalidateTag("review");
  return response;
};

export const postReview = async (request: ReviewData): Promise<any> => {
  const response = await fetchData<any>(
    `/api/v1/review/add-review`,
    "POST",
    request,
  );
  return response.status;
};

export const getReviewList = async ({
  productCode,
  page,
  size,
}: {
  productCode: string;
  page: number;
  size: number;
}): Promise<ReviewResType> => {
  const response = await fetchData<commonResType<ReviewResType>>(
    `/api/v1/review/get-reviwelist?productCode=${productCode}&page=${page}&size=${size ? size : 5}`,
    "GET",
    "",
    "force-cache",
  );

  return response.data;
};

export interface reviewMediaType {
  mediaType: string;
  mediaURL: string;
}
export const getReviewMedia = async (
  reviewCode: string,
): Promise<reviewMediaType> => {
  try {
    const response = await fetchData<commonResType<reviewMediaType>>(
      `/api/v1/review/get-reviewmedia?reviewCode=${reviewCode}`,
      "GET",
      "",
      "force-cache",
    );
    return response.data; // 성공 시 데이터 반환
  } catch (error: any) {
    const status = error?.status || 500;

    return status;
  }
};
export const getReview = async (reviewCode: number): Promise<Review> => {
  const response = await fetchData<commonResType<Review>>(
    `/api/v1/review/get-review?reviewCode=${reviewCode}`,
    "GET",
  );
  return response.data;
};

export const getReviewAvailable = async (
  productCode: string,
): Promise<boolean> => {
  const data = await fetchData<commonResType<boolean>>(
    `/api/v1/review/check-reviewavailable?productCode=${productCode}`,
    "GET",
    "",
    "no-cache",
    "review",
  );
  return data.data;
};
