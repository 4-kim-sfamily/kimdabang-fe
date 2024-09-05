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
      <Accordion type="single" collapsible className="px-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-extrabold">
            {categoryName}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="w-[100%] text-sm">
              {navData.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/category${item.link}`}
                    className="nav-link text-black px-2"
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
