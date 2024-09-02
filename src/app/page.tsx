import { Header } from "@/components/layouts/Header";

import ItemCard from "@/components/Items/ItemCard";
import { ReviewMap, ReviewResponse } from "@/types/review/ReviewDataType";

import itemCard from "../lib/dummy/items/ItemCardList.json";
import reviews from "../lib/dummy/items/ItemCardReview.json";

export default function Page() {
  const reviewData: ReviewResponse = reviews;
  const reviewMap: ReviewMap = {};

  reviewData.reviews.forEach(({ productCode, rate, reviewCnt }) => {
    reviewMap[productCode] = { rate, reviewCnt };
  });

  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-3 sm:justify-between md:justify-start p-3">
        {itemCard.itemCard.map((item) => {
          const review = reviewMap[item.ProductCode];
          return (
            <ItemCard
              key={item.id}
              item={item}
              rate={review?.rate}
              reviewCnt={review?.reviewCnt}
            />
          );
        })}
      </div>
    </>
  );
}
