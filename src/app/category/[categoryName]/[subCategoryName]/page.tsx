import { options } from "@/app/api/auth/[...nextauth]/options";
import CategoryAccordion from "@/components/pages/category/CategoryAccordion";
import CategorySection from "@/components/pages/category/CategorySection";
import { Category } from "@/types/main/AllCategoryDataType";
import { getServerSession } from "next-auth/next";

export default async function page({
  params,
}: {
  params: { categoryName: string; subCategoryName: string };
}) {
  const starRes = await fetch(`${process.env.JSONSERVER_URL}/subCategories`, {
    cache: "force-cache",
  });
  const subCategories: Category[] = await starRes.json();
  const session = await getServerSession(options);
  const authStatus = Boolean(session?.user);
  return (
    <>
      <div className="h-14 w-full/>" />
      <CategoryAccordion
        item={subCategories}
        categoryName={params.categoryName}
        subCategory={params.subCategoryName}
      />
      <CategorySection authStatus={authStatus} />
    </>
  );
}
