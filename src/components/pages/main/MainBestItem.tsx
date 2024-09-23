import { getCategoryList } from "@/actions/main/category";
import ItemCard from "@/components/Items/ItemCard";
import ButtonGroup from "@/components/ui/ButtonGroup";
import MainTitle from "@/components/ui/mainTitle";
import { ItemCardType } from "@/types/items/ItemCard";
import { CategoryType } from "@/types/main/AllCategoryDataType";
import { OptionContextprovider } from "../../../context/OptionContext";
export default async function MainBestItem({
  authStatus,
}: {
  authStatus: boolean;
}) {
  const res = await fetch(`${process.env.JSONSERVER_URL}/BestTumblr`, {
    cache: "force-cache",
  });
  const BestTumblr: ItemCardType[] = await res.json();
  const CategoryData: CategoryType[] = await getCategoryList();

  return (
    <section>
      <MainTitle
        title="스타벅스 베스트"
        description="스타벅스 인기 상품들을 만나보세요"
      />
      <OptionContextprovider>
        <ButtonGroup CategoryData={CategoryData} />
      </OptionContextprovider>
      <div className="grid grid-cols-2 gap-4 justify-center w-[100%] py-3 md:grid-cols-4">
        {BestTumblr.map((item) => (
          <ItemCard
            key={item.productCode}
            item={item}
            authStatus={authStatus}
          />
        ))}
      </div>
    </section>
  );
}
