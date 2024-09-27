"use client";
import { getReviewMedia } from "@/actions/review/review";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ReviewMedia({ reviewCode }: { reviewCode: number }) {
  const [imgData, setImgData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const imgData = await getReviewMedia(reviewCode.toString());
      setImgData(imgData.mediaURL);
    };
    fetchData();
  }, []);

  return (
    <div>
      {imgData && (
        <div className="w-20 h-20">
          <Image
            src={imgData}
            alt={`${reviewCode}의 이미지`}
            width={500}
            height={500}
            priority
          />
        </div>
      )}
    </div>
  );
}
