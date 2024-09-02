import reviewsData from "../../lib/dummy/items/ItemCardReview.json";
import Star from "../icons/Star";

export default function ReviewPreview({
  productCode,
}: {
  productCode: string;
}) {
  // productCode를 사용해 리뷰 데이터를 찾음
  const review = reviewsData.reviews.find(
    (item) => item.productCode === productCode,
  );

  // 조건부 렌더링: 해당 리뷰 데이터가 있으면 별점과 리뷰 수를 표시
  return (
    <div className="flex items-center text-[#777777] text-[12px]">
      <Star />
      {review ? `${review.rate} | ${review.reviewCnt}건` : "No Reviews"}
    </div>
  );
}
