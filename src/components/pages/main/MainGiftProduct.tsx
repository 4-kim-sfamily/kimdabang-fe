import { getCategoryList } from "@/actions/main/category";
import { getSeasonProduct } from "@/actions/product/getSeasonProduct";
import GiftItemCard from "@/components/Items/GiftItemCard";
import ButtonGroup from "@/components/ui/ButtonGroup";
import MainTitle from "@/components/ui/mainTitle";
import { Skeleton } from "@/components/ui/skeleton";
import { CategoryType } from "@/types/main/AllCategoryDataType";
import { Suspense } from "react";
import { OptionContextprovider } from "../../../context/OptionContext";

export default async function MainGiftProduct({
  authStatus,
}: {
  authStatus: boolean;
}) {
  // 여기 조금있다가 Starbucks Gift Product로 변경 필요.
  const data = await getSeasonProduct("5");
  const CategoryData: CategoryType[] = await getCategoryList();
  return (
    <section>
      <MainTitle title="스타벅스 기프트" />
      <OptionContextprovider>
        <ButtonGroup CategoryData={CategoryData} />
      </OptionContextprovider>
      <div className="flex overflow-x-auto h-[333.5px] whitespace-nowrap scroll-item gap-4 py-3 mb-8]">
        {data.map((productCode, index) => (
          <Suspense fallback={<Skeleton />}>
            <GiftItemCard
              key={index}
              productCode={productCode}
              authStatus={authStatus}
            />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
