"use client";
import { largeCategories } from "@/lib/dummy/main/OnlyLargeCategory";
import { useState } from "react";
import OptionDialog from "./OptionDialog";
import { SelectButton } from "./SelectButton";
const ButtonGroup: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  // 클릭 핸들러
  const handleClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <section className="w-full flex flex-row items-center gap-1">
      <nav className="w-[100%] overflow-x-auto relative scrollbar-hide">
        <ul className="flex space-x-2">
          {largeCategories.map((category) => (
            <li key={category.id}>
              <SelectButton
                type="button"
                isSelected={selectedButton === category.id}
                onClick={() => handleClick(category.id)}
                className={`border-[#E5E5E5] m-0 p-1 h-[36px] text-[13px] font-medium ${
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
};

export default ButtonGroup;
