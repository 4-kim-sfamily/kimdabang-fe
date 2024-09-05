import ItemCard from "@/components/Items/ItemCard";
import { ItemCardType } from "@/types/items/ItemCard";
import Image from "next/image";
export default async function CategorySection() {
  const res = await fetch("http://localhost:4000/BestTumblr", {
    cache: "no-store",
  });
  const BestTumblr: ItemCardType[] = await res.json();
  return (
    <section>
      <div className="relative w-[100%] aspect-[16/9] my-3">
        <Image
          src="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202408/2024083014213216193023032402_583.jpg&w=750&h=0"
          alt="사진"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 justify-center w-[100%] py-3 md:grid-cols-4 p-[4.1vw]">
        {BestTumblr.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
