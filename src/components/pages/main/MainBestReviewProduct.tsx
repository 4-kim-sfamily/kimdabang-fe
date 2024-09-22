import { ItemCardType } from "@/types/items/ItemCard";
import ReviewItemCard from "../../Items/ReviewItemCard";
import MainTitle from "../../ui/mainTitle";

export default async function MainBestReviewProduct({
  authStatus,
}: {
  authStatus: boolean;
}) {
  const res = await fetch("http://localhost:4000/ReviewBest", {
    cache: "force-cache",
  });
  const ReviewBest: ItemCardType[] = await res.json();
  return (
    <section>
      <MainTitle
        title="REVIEW BEST"
        description="베스트 리뷰 상품들을 만나보세요"
      />
      <ul className="flex overflow-x-auto whitespace-nowrap scroll-item gap-4 py-3 mb-8]">
        {ReviewBest.map((item) => (
          <ReviewItemCard
            key={item.productCode}
            item={item}
            authStatus={authStatus}
          />
        ))}
      </ul>
    </section>
  );
}
