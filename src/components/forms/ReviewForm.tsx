"use client";
import { ReviewData } from "@/types/RequestType";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import FileUploadButton from "../pages/review/FileUploadButton";

export default function ReviewForm({ productCode }: { productCode: string }) {
  const searchParams = useSearchParams();

  const options = searchParams.get("options");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [mediaURL, setMediaURL] = useState("");

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
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <div>
        <label className="block text-sm font-medium">옵션</label>
        <h3 className="border rounded-md p-2 w-full">{options}</h3>
      </div>
      <div>
        <label className="block text-sm font-medium">평점</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border rounded-md p-2 w-full"
          max={5}
          min={0}
          placeholder="0 ~ 5 사이의 평점"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">리뷰 내용</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border rounded-md p-2 w-full"
          rows={4}
          placeholder="리뷰를 작성해주세요."
        />
      </div>
      <div>
        <FileUploadButton />
      </div>
      <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
        리뷰 제출
      </button>
    </form>
  );
}
