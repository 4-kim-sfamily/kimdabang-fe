import ItemCard from "@/components/Items/ItemCard";
import ButtonGroup from "@/components/ui/ButtonGroup";
import MainTitle from "@/components/ui/mainTitle";
import { itemCardList } from "@/lib/dummy/items/itemCardList";

export default function MainBestItem() {
  return (
    <section>
      <MainTitle
        title="스타벅스 베스트"
        description="스타벅스 인기 상품들을 만나보세요"
      />
      <ButtonGroup />
      <div className="grid grid-cols-2 gap-4 justify-center w-[100%] py-3 md:grid-cols-4">
        {itemCardList.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
