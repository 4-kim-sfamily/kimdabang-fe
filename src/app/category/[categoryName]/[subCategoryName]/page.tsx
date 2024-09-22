import { getSubCategory } from "@/actions/main/category";
import CategoryAccordion from "@/components/pages/category/CategoryAccordion";
import CategorySection from "@/components/pages/category/CategorySection";
import { CategoryType } from "@/types/main/AllCategoryDataType";

export default async function page({
  params,
}: {
  params: { categoryName: number; subCategoryName: number };
}) {
  const data: CategoryType = await getSubCategory(params.subCategoryName);
  return (
    <>
      <div className="h-14 w-full/>" />
      <CategoryAccordion
        categoryId={params.categoryName}
        subCategory={data.name}
      />
      <CategorySection />
    </>
  );
}
