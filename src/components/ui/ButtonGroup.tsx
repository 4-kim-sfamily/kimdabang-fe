"use client";
import { subCategories } from "@/lib/dummy/main/AllCategoryData";
import { useState } from "react";
import OptionDialog from "./OptionDialog";
import { SelectButton } from "./SelectButton";
const ButtonGroup: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(1);

  // 클릭 핸들러
  const handleClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <section className="w-full flex flex-row items-center gap-1 pt-3 px-2">
      <nav className="w-[100%] overflow-x-auto relative scrollbar-hide">
        <ul className="flex space-x-2">
          {subCategories.map((category) => (
            <li key={category.id}>
              <SelectButton
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
};

export default ButtonGroup;
