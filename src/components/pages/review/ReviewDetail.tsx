"use client";
import { getReview, getReviewMedia } from "@/actions/review/review";
import { Skeleton } from "@/components/ui/skeleton";
import { Review } from "@/types/ResponseType";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReviewStarRating from "./ReviewStartRating";

export default function ReviewDetail() {
  const searchParams = useSearchParams();
  const reviewCode = searchParams.get("reviewCode");
  const [review, setReview] = useState<Review>();
  const [media, setMedia] = useState<string>();
  useEffect(() => {
    const fetchData = async () => {
      const data: Review = await getReview(parseInt(reviewCode));
      setReview(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchMediaData = async () => {
      const mediaData = await getReviewMedia(reviewCode);
      setMedia(mediaData.mediaURL);
    };
    fetchMediaData();
  }, []);
  return (
    <main className="max-w-4xl mx-auto p-6 bg-white rounded-lg border-1px border-gray-200">
      {review && (
        <div className="flex flex-col items-start gap-2">
          <ul className="flex items-end gap-3">
            <li className="text-xl font-semibold text-gray-800">
              {review.nickName}
            </li>
            <li className="text-xs text-gray-400">
              {new Date(review.creationDate).toLocaleDateString()}
            </li>
          </ul>
          <div className="text-sm text-gray-500 ">{review.options}</div>
          <ReviewStarRating rating={review.rating} />
          <div className="w-90% mx-auto">
            {media ? (
              <Image
                src={media}
                alt={review.productCode}
                width={500}
                height={500}
                priority
              />
            ) : (
              <Skeleton className="w-full h-[200px]" />
            )}
          </div>
          <textarea className="text-lg text-gray-700 my-4 w-full">
            {review.text}
          </textarea>
        </div>
      )}
    </main>
  );
}
