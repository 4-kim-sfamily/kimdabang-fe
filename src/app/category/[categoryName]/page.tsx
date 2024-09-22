import CategoryAccordion from "@/components/pages/category/CategoryAccordion";
import CategorySection from "@/components/pages/category/CategorySection";
import SubCategorySelector from "@/components/pages/category/SubCategorySelector";

export default async function page({
  params,
}: {
  params: { categoryName: number };
}) {
  return (
    <>
      <div className="h-14 w-full/>" />
      <CategoryAccordion categoryId={params.categoryName} />
      <SubCategorySelector largeCategoryId={params.categoryName} />
      <CategorySection />
    </>
  );
}
