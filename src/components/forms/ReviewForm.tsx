"use client";
import { postReview } from "@/actions/review/review";
import { ReviewData } from "@/types/RequestType";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import FileUploadButton from "../pages/review/FileUploadButton";
import StarRating from "../pages/review/StarRating";

export default function ReviewForm({ productCode }: { productCode: string }) {
  const searchParams = useSearchParams();
  const options = searchParams.get("options");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [mediaURL, setMediaURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const handleRatingChange = (rate: number) => {
    setRating(rate);
  };
  useEffect(() => {
    console.log(mediaType, mediaURL);
  }, [mediaType, mediaURL]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const reviewData: ReviewData = {
      productCode,
      options,
      rating,
      text,
      mediaType,
      mediaURL,
    };

    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");
    const data = await postReview(reviewData);
    if (data.status === "OK") {
      router.back();
    }
    console.log(data.status === "OK");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-6 gap-[4vh] items-center mt-10"
    >
      <div className="w-full">
        <label className="block text-lg font-medium mb-4">옵션</label>
        <h1 className="border rounded-md p-2 w-full">{options}</h1>
      </div>
      <div className="w-full">
        <label className="block text-lg font-medium mb-4">평점</label>
        <StarRating onRatingChange={handleRatingChange} />
      </div>
      <div className="w-full">
        <label className="block text-lg font-medium mb-4">리뷰 내용</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border rounded-md p-2 w-full h-[40vh]"
          rows={4}
          placeholder="리뷰를 작성해주세요."
        />
      </div>
      <FileUploadButton setMediaType={setMediaType} setMediaURL={setMediaURL} />
      <div className="fixed bottom-0 w-full bg-white py-4 border-t-slate-400 border-[1px]">
        <Button
          type="submit"
          variant="starbucks"
          className="m-auto"
          disabled={isLoading}
        >
          리뷰 제출
        </Button>
      </div>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </form>
  );
}
