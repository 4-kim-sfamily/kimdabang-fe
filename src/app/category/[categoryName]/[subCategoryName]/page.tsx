import { getSubCategory } from "@/actions/main/category";
import { options } from "@/app/api/auth/[...nextauth]/options";
import CategoryAccordion from "@/components/pages/category/CategoryAccordion";
import CategorySection from "@/components/pages/category/CategorySection";
import { CategoryType } from "@/types/main/AllCategoryDataType";
import { getServerSession } from "next-auth/next";

export default async function page({
  params,
}: {
  params: { categoryName: number; subCategoryName: number };
}) {
  const data: CategoryType = await getSubCategory(params.subCategoryName);
  const session = await getServerSession(options);
  const authStatus = Boolean(session?.user);
  return (
    <>
      <div className="h-14 w-full/>" />
      <CategoryAccordion
        categoryId={params.categoryName}
        subCategory={data.name}
      />
      <CategorySection authStatus={authStatus} />
    </>
  );
}
