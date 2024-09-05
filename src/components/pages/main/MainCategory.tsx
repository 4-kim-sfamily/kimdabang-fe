import CategoryCard from "@/components/main/CategoryCard";
import { largeCategories } from "@/lib/dummy/main/OnlyLargeCategory";
export default function MainCategory() {
  return (
    <section className="grid grid-cols-4 place-items-center gap-2 my-8 md:grid-cols-8">
      {largeCategories.map((item) => (
        <CategoryCard key={item.id} name={item.name} imgUrl={item.imgUrl} />
      ))}
    </section>
  );
}
