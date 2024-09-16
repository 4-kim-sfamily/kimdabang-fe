import GiftItemCard from "@/components/Items/GiftItemCard";
import ButtonGroup from "@/components/ui/ButtonGroup";
import MainTitle from "@/components/ui/mainTitle";
import { ItemCardType } from "@/types/items/ItemCard";
import { OptionContextprovider } from "../../../app/context/OptionContext";

export default async function MainGiftProduct() {
  const res = await fetch("http://localhost:4000/BestTumblr", {
    cache: "no-store",
  });
  const BestTumblr: ItemCardType[] = await res.json();
  return (
    <section>
      <MainTitle title="스타벅스 기프트" />
      <OptionContextprovider>
        <ButtonGroup />
      </OptionContextprovider>
      <div className="flex overflow-x-auto h-[333.5px] whitespace-nowrap scroll-item gap-4 py-3 mb-8]">
        {BestTumblr.map((item: ItemCardType) => (
          <GiftItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
