"use client";
import { subCategories } from "@/lib/dummy/main/AllCategoryData";
import { useEffect, useRef } from "react";
import { useButtonGroup } from "../../app/context/OptionContext";
import OptionDialog from "./OptionDialog";
import { SelectButton } from "./SelectButton";
export default function ButtonGroup() {
  const { selectedButton, handleClick } = useButtonGroup();
  const selectedButtonRef = useRef<HTMLButtonElement | null>(null);

  // 선택된 버튼을 화면에 중앙에 오도록 스크롤
  useEffect(() => {
    if (selectedButtonRef.current) {
      selectedButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedButton]);

  return (
    <section className="w-full flex flex-row items-center gap-1 pt-3 p-0">
      <nav className="w-[100%] overflow-x-auto relative scroll-item">
        <ul className="flex space-x-2">
          {subCategories.map((category) => (
            <li key={category.id}>
              <SelectButton
                ref={selectedButton === category.id ? selectedButtonRef : null}
                type="button"
                isSelected={selectedButton === category.id}
                onClick={() => handleClick(category.id)}
                className={`border-[#E5E5E5] m-0 p-2 h-9 text-[13px] font-medium ${
                  selectedButton === category.id ? "bg-black text-white" : ""
                }`}
              >
                {category.name}
              </SelectButton>
            </li>
          ))}
        </ul>
      </nav>
      <OptionDialog />
    </section>
  );
}
