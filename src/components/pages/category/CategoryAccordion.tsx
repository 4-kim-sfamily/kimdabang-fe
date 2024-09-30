import { getCategoryList } from "@/actions/main/category";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Breadcruumb from "./Breadcruumb";
export default async function CategoryAccordion({
  categoryId,
  subCategory,
}: {
  categoryId: number;
  subCategory?: string;
}) {
  const data = await getCategoryList();
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="px-0">
          <AccordionTrigger className="font-extrabold hover:no-underline p-2 text-xl">
            <Breadcruumb large={categoryId} sub={subCategory} />
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            <ul className="w-[100%] text-xs ">
              {data.map((item) => (
                <li
                  key={item.id}
                  className={`h-10 p-2 ${
                    categoryId == item.id
                      ? "font-extrabold bg-[#F5F5F5] text-red"
                      : ""
                  }`}
                >
                  <Link
                    href={`/category/${item.id}`}
                    className={` text-black px-0 text-base`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
