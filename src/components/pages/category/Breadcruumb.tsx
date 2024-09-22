"use client";
import { getSubCategory } from "@/actions/main/category";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CategoryType } from "@/types/main/AllCategoryDataType";
import { useEffect, useState } from "react";

export default function Breadcruumb({
  large,
  sub,
}: {
  large: number;
  sub?: string;
}) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };
  const [Category, SubCategory] = useState<CategoryType>();
  useEffect(() => {
    const getData = async () => {
      const data: CategoryType = await getSubCategory(large);
      SubCategory(data);
    };
    getData();
  }, [large]);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {!sub ? (
          <p>{Category?.name}</p>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbLink href={`/category/${large}`} onClick={handleClick}>
              {Category?.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}

        {sub && <BreadcrumbSeparator />}
        {sub && <BreadcrumbItem>{sub}</BreadcrumbItem>}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
