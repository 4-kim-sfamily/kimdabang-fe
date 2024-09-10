import Link from "next/link";
import { Category } from "../../../types/main/AllCategoryDataType";

export default async function SubCategorySelector({
  largeCategory,
}: {
  largeCategory: string;
}) {
  const subCategoryRes = await fetch(
    `${process.env.JSONSERVER_URL}/subCategories`,
    {
      cache: "no-store",
    },
  );
  const subCategory: Category[] = await subCategoryRes.json();
  return (
    <ul className="grid grid-flow-row grid-cols-3 ">
      {subCategory.map((item: Category, index: number) => (
        <li
          className={`pl-3 py-2 border-b-[0.5px] ${
            index === Math.floor(subCategory.length / 2)
              ? "border-[0.5px] border-t-0"
              : ""
          }`}
        >
          <Link
            href={`/category/${largeCategory}/${encodeURIComponent(item.name)}`}
            className="text-sm"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
