import ItemCard from "@/components/Items/ItemCard";
import MainTitle from "@/components/ui/mainTitle";
import { ItemCardType } from "@/types/items/ItemCard";

export default async function SameCategoryProduct() {
  const res = await fetch("http://localhost:4000/BestTumblr", {
    cache: "no-store",
  });
  const BestTumblr: ItemCardType[] = await res.json();
  return (
    <section className="px-2">
      <MainTitle
        title="함께 보면 좋은 상품"
        description="이 상품과 함께 많이 본 상품"
      />
      <div className="grid grid-cols-2 gap-4 justify-center w-[100%] py-3 md:grid-cols-4">
        {BestTumblr.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}