"use client";

import { CategoryClose, Hamburger } from "@/components/icons/Index";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  CustomTrigger,
} from "@/components/ui/accordion";
import { navData } from "@/data/initialData";
import Link from "next/link";
import { useEffect } from "react";

export default function HeaderHamburger() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="w-full ">
      <Accordion type="single" collapsible className="border-none">
        <AccordionItem value="item-1" className="px-0 border-none">
          <CustomTrigger className="font-extrabold hover:no-underline py-2 text-xl [&[data-state=open]]:hidden w-8 aspect-square">
            <Hamburger color="white" />
          </CustomTrigger>
          <CustomTrigger className="font-extrabold hover:no-underline py-2 text-xl [&[data-state=closed]]:hidden w-8 aspect-square">
            <CategoryClose />
          </CustomTrigger>
          <AccordionContent className="pb-0 bg-[#00000073] w-[100vw] absolute right-0  h-[100vh] mt-2">
            <ul className="w-[100%] px-7 py-3 bg-white">
              {navData.map((item) => (
                <li key={item.id} className={`h-10 py-2 text-[14px]`}>
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
