"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Breadcruumb({
  large,
  sub,
}: {
  large: string;
  sub?: string;
}) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {!sub ? (
          <p>{large}</p>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbLink href={`/category/${large}`} onClick={handleClick}>
              {large}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}

        {sub && <BreadcrumbSeparator />}
        {sub && <BreadcrumbItem>{decodeURIComponent(sub)}</BreadcrumbItem>}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
