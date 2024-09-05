import { itemCardList } from "@/lib/dummy/items/itemCardList";
import ReviewItemCard from "../../Items/ReviewItemCard";
import MainTitle from "../../ui/mainTitle";

export default function MainBestReviewProduct() {
  return (
    <section>
      <MainTitle
        title="REVIEW BEST"
        description="베스트 리뷰 상품들을 만나보세요"
      />
      <ul className="flex overflow-x-auto whitespace-nowrap scroll-item gap-4 py-3 mb-8]">
        {itemCardList.map((item) => (
          <ReviewItemCard key={item.ProductCode} item={item} />
        ))}
      </ul>
    </section>
  );
}
