import CategoryAccordion from "@/components/pages/category/CategoryAccordion";
import CategorySection from "@/components/pages/category/CategorySection";
import SubCategorySelector from "@/components/pages/category/SubCategorySelector";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "카테고리",
  description: "카테고리 페이지입니다.",
};
export default async function page({
  params,
}: {
  params: { categoryName: number };
}) {
  const session = await getServerSession();
  const authStatus = Boolean(session?.user);
  return (
    <>
      <div className="h-14 w-full/>" />
      <CategoryAccordion categoryId={params.categoryName} />
      <SubCategorySelector largeCategoryId={params.categoryName} />
      <CategorySection
        largeCategoryId={params.categoryName}
        authStatus={authStatus}
      />
    </>
  );
}
