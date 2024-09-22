import CategoryAccordion from "@/components/pages/category/CategoryAccordion";
import CategorySection from "@/components/pages/category/CategorySection";
import SubCategorySelector from "@/components/pages/category/SubCategorySelector";
import { Category } from "@/types/main/AllCategoryDataType";
import { getServerSession } from "next-auth";

export default async function page({
  params,
}: {
  params: { categoryName: string };
}) {
  const starRes = await fetch(`${process.env.JSONSERVER_URL}/largeCategories`, {
    cache: "force-cache",
  });
  const largeCategories: Category[] = await starRes.json();
  const session = await getServerSession();
  const authStatus = Boolean(session?.user);
  return (
    <>
      <div className="h-14 w-full/>" />
      <CategoryAccordion
        categoryName={params.categoryName}
        item={largeCategories}
      />
      <SubCategorySelector largeCategory={params.categoryName} />
      <CategorySection authStatus={authStatus} />
    </>
  );
}
