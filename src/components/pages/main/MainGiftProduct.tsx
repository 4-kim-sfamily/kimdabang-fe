import { getProductRec } from "@/actions/product/getProductRec";
import GiftItemCard from "@/components/Items/GiftItemCard";
import MainTitle from "@/components/ui/mainTitle";

export default async function MainGiftProduct({
  authStatus,
}: {
  authStatus: boolean;
}) {
  // 여기 조금있다가 Starbucks Gift Product로 변경 필요.
  const giftData = await getProductRec();
  console.log("giftData", giftData);
  return (
    <section>
      <MainTitle title="당신의 마음을 사로잡을 스타벅스의 추천" />
      <div className="flex overflow-x-auto h-[333.5px] whitespace-nowrap scroll-item gap-4 py-3 mb-8]">
        {giftData.data.map((item, index) => (
          // Suspense 제거
          <GiftItemCard
            key={index}
            productCode={item.productCode}
            authStatus={authStatus}
          />
        ))}
      </div>
    </section>
  );
}
