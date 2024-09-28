import CategoryCard from "@/components/main/CategoryCard";
import { OnlyLargeCategory } from "@/types/main/AllCategoryDataType";
export default async function MainCategory() {
  const res = await fetch(`${process.env.JSONSERVER_URL}/largeCategories`, {
    cache: "force-cache",
  });
  const largeCategories: OnlyLargeCategory[] = await res.json();
  return (
    <ul className="grid grid-cols-4 place-items-center gap-2 my-8 md:grid-cols-8">
      {largeCategories.map((item) => (
        <li key={item.id}>
          <CategoryCard name={item.name} imgUrl={item.imgUrl} />
        </li>
      ))}
    </ul>
  );
}
