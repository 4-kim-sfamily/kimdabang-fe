import ItemCard from "@/components/Items/ItemCard";
import { Header } from "@/components/layouts/Header";
import CategoryCard from "@/components/main/CategoryCard";
import SeasonCard from "@/components/main/SeasonCard";
import { ReviewMap, ReviewResponse } from "@/types/review/ReviewDataType";
import itemCard from "../lib/dummy/items/ItemCardList.json";
import reviews from "../lib/dummy/items/ItemCardReview.json";
import largeCategories from "../lib/dummy/main/OnlyLargeCategory.json";
import SeasonData from "../lib/dummy/main/RunningSeasonData.json";
export default function Page() {
  const reviewData: ReviewResponse = reviews;
  const reviewMap: ReviewMap = {};

  reviewData.reviews.forEach(({ productCode, rate, reviewCnt }) => {
    reviewMap[productCode] = { rate, reviewCnt };
  });

  return (
    <>
      <Header />
      <div className="grid grid-cols-4 w-[100%] place-items-center gap-2 my-8 md:grid-cols-8">
        {largeCategories.largeCategories.map((item) => {
          return (
            <CategoryCard key={item.id} name={item.name} imgUrl={item.imgUrl} />
          );
        })}
      </div>
      <div className="flex place-items-baseline gap-2 w-[100%] overflow-x-auto whitespace-nowrap">
        {SeasonData.SeasonData.map((item) => {
          return (
            <SeasonCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              thumbsImgUrl={item.thumbsImgUrl}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center w-[100%] md:grid-cols-4">
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
