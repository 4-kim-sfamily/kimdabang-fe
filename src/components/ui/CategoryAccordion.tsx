import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navData } from "@/data/initialData";
import Link from "next/link";
export default function CategoryAccordion({
  categoryName,
}: {
  categoryName: string;
}) {
  return (
    <div>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1" className="px-3">
          <AccordionTrigger className="font-extrabold hover:no-underline py-2 text-xl">
            {categoryName}
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            <ul className="w-[100%] text-xs ">
              {navData.map((item) => (
                <li
                  key={item.id}
                  className={`h-10 py-2 ${
                    categoryName === item.name
                      ? "font-extrabold bg-[#F5F5F5]"
                      : ""
                  }`}
                >
                  <Link
                    href={`/category${item.link}`}
                    className="nav-link text-black px-0 text-base"
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
