"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { subCategories } from "@/lib/dummy/main/AllCategoryData";
import { Category } from "@/types/main/AllCategoryDataType";
import { useButtonGroup } from "../pages/main/OptionContext";
import { Label } from "./label";
export default function CategoryRadioGroup() {
  const { selectedButton, handleClick } = useButtonGroup();
  return (
    <div>
      <RadioGroup defaultValue={selectedButton.toString()}>
        {subCategories.map((category: Category) => (
          <div key={category.id} className="flex items-center space-x-3 py-2">
            <RadioGroupItem
              value={category.id.toString()}
              id={category.id.toString()}
            />
            <Label
              onClick={() => handleClick(category.id)} // 수정된 부분
              htmlFor={category.id.toString()}
              className={`text-sm ${selectedButton === category.id ? "font-extrabold" : "font-normal"}`}
            >
              {category.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
