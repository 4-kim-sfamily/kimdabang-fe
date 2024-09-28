"use client";
import { getReviewList } from "@/actions/review/review";
import Pagenation from "@/components/ui/Pagenation";
import { Review, ReviewResType } from "@/types/ResponseType";
import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";

export default function ReviewSection({
  productCode,
  size,
}: {
  productCode: string;
  size?: number;
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
      setLlastPage(data.totalPage);
    };
    fetchData();
  }, [productCode, currentPage]);

  return (
    <div>
      <h1 className="text-lg font-extrabold p-3">리뷰 전체보기</h1>
      <ReviewList reviews={reviewList} productCode={productCode} />
      <Pagenation
        lastPage={lastPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
