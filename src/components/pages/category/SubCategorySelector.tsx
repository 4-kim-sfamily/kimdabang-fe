import { getSubCategory } from "@/actions/main/category";
import Link from "next/link";
import { CategoryType } from "../../../types/main/AllCategoryDataType";

export default async function SubCategorySelector({
  largeCategoryId,
}: {
  largeCategoryId: number;
}) {
  const data: CategoryType = await getSubCategory(largeCategoryId);
  return (
    <ul className="grid grid-flow-row grid-cols-3 ">
      {data.children.map((item: CategoryType, index: number) => (
        <li
          key={item.id}
          className={`pl-3 py-2 border-b-[0.5px] ${
            index % 3 === 1 ? "border-[0.5px] border-t-0" : ""
          }`}
        >
          <Link
            href={`/category/${largeCategoryId}/${item.id}`}
            className="text-sm"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
