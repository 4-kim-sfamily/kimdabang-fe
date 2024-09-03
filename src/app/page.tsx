import ItemCard from "@/components/Items/ItemCard";
import ReviewItemCard from "@/components/Items/ReviewItemCard";
import BottomNavBar from "@/components/layouts/BottomNavBar";
import CategoryCard from "@/components/main/CategoryCard";
import SeasonCard from "@/components/main/SeasonCard";
import ButtonGroup from "@/components/ui/ButtonGroup";
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
    <div className="px-[4.1vw]">
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
      <p className="title">REVIEW BEST</p>
      <p className="description">베스트 리뷰 상품들을 만나보세요</p>
      <div className="flex overflow-x-auto whitespace-nowrap gap-4 py-3 mb-8]">
        {itemCard.itemCard.map((item) => {
          const review = reviewMap[item.ProductCode];
          return (
            <ReviewItemCard
              key={item.ProductCode}
              item={item}
              rate={review?.rate}
              reviewCnt={review?.reviewCnt}
            />
          );
        })}
      </div>
      <p className="title">스타벅스 베스트</p>
      <p className="description">스타벅스 인기 상품들을 만나보세요</p>
      <ButtonGroup />
      <div className="grid grid-cols-2 gap-4 justify-center w-[100%] py-3 md:grid-cols-4">
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
      <BottomNavBar></BottomNavBar>
    </div>
  );
}
