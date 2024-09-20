import CategoryCard from "@/components/main/CategoryCard";
import { OnlyLargeCategory } from "@/types/main/AllCategoryDataType";
export default async function MainCategory() {
  const res = await fetch("http://localhost:4000/largeCategories", {
    cache: "force-cache",
  });
  const largeCategories: OnlyLargeCategory[] = await res.json();
  return (
    <section className="grid grid-cols-4 place-items-center gap-2 my-8 md:grid-cols-8">
      {largeCategories.map((item) => (
        <CategoryCard key={item.id} name={item.name} imgUrl={item.imgUrl} />
      ))}
    </section>
  );
}
