import { getBestProduct } from "@/actions/main/getBestProduct";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import ReviewItemCard from "../../Items/ReviewItemCard";
import MainTitle from "../../ui/mainTitle";

export default async function MainBestReviewProduct({
  authStatus,
}: {
  authStatus: boolean;
}) {
  // 여기도 있다가 바꿔야 될거
  const reviewBestData = await getBestProduct(0);
  const reviewBestProductCode = reviewBestData.data;
  return (
    <section>
      <MainTitle
        title="REVIEW BEST"
        description="베스트 리뷰 상품들을 만나보세요"
      />
      <ul className="flex overflow-x-auto whitespace-nowrap scroll-item gap-4 py-3 mb-8]">
        {reviewBestProductCode.map((item, index) => (
          <Suspense fallback={<Skeleton />}>
            <ReviewItemCard
              key={index}
              authStatus={authStatus}
              productCode={item.productCode}
            />
          </Suspense>
        ))}
      </ul>
    </section>
  );
}
