import ItemCard from "@/components/Items/ItemCard";
import ButtonGroup from "@/components/ui/ButtonGroup";
import MainTitle from "@/components/ui/mainTitle";
import { ItemCardType } from "@/types/items/ItemCard";
import { OptionContextprovider } from "../../../context/OptionContext";

export default async function MainBestItem({
  authStatus,
}: {
  authStatus: boolean;
}) {
  const res = await fetch("http://localhost:4000/BestTumblr", {
    cache: "no-store",
  });
  const BestTumblr: ItemCardType[] = await res.json();
  return (
    <section>
      <MainTitle
        title="스타벅스 베스트"
        description="스타벅스 인기 상품들을 만나보세요"
      />
      <OptionContextprovider>
        <ButtonGroup />
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
