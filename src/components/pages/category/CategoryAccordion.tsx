import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Category } from "@/types/main/AllCategoryDataType";
import Link from "next/link";
import Breadcruumb from "./Breadcruumb";
export default function CategoryAccordion({
  categoryName,
  subCategory,
  item,
}: {
  categoryName: string;
  subCategory?: string;
  item: Category[];
}) {
  return (
    <div>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1" className="px-3">
          <AccordionTrigger className="font-extrabold hover:no-underline py-2 text-xl">
            <Breadcruumb
              large={decodeURIComponent(categoryName)}
              sub={subCategory}
            />
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            <ul className="w-[100%] text-xs ">
              {item.map((item) => (
                <li
                  key={item.id}
                  className={`h-10 py-2 ${
                    decodeURIComponent(categoryName) === item.name
                      ? "font-extrabold bg-[#F5F5F5] text-black"
                      : ""
                  }`}
                >
                  <Link
                    href={`/category/${encodeURIComponent(item.name)}`}
                    className="text-black px-0 text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
