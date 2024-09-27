"use client";
import { getReviewList } from "@/actions/review/review";
import Pagenation from "@/components/ui/Pagenation";
import { Review, ReviewResType } from "@/types/ResponseType";
import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";

export default function ReviewSection({
  productCode,
}: {
  productCode: string;
}) {
  const [reviewList, setReviewList] = useState<Review[]>();
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLlastPage] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const data: ReviewResType = await getReviewList({
        productCode: productCode,
        page: currentPage,
        size: 10,
      });
      setReviewList(data.data);
      setLlastPage(data.total);
    };
    fetchData();
  }, [productCode, currentPage]);

  return (
    <div>
      <ReviewList reviews={reviewList} />
      <Pagenation
        lastPage={lastPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
