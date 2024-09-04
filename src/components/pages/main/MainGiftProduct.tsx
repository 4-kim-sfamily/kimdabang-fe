import ItemCard from "@/components/Items/ItemCard";
import ButtonGroup from "@/components/ui/ButtonGroup";
import MainTitle from "@/components/ui/mainTitle";
import { itemCardList } from "@/lib/dummy/items/itemCardList";
import { ItemCardType } from "@/types/items/ItemCard";

export default function MainGiftProduct() {
  return (
    <section>
      <MainTitle title="스타벅스 기프트" />
      <ButtonGroup />
      <div className="flex overflow-x-auto whitespace-nowrap scroll-item gap-4 py-3 mb-8]">
        {itemCardList.map((item: ItemCardType) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
