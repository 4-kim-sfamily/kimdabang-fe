"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { subCategories } from "@/lib/dummy/main/AllCategoryData";
import { useState } from "react";
import { Label } from "./label";
export default function CategoryRadioGroup() {
  const [selectedValue, setSelectedValue] = useState("1");
  return (
    <div>
      <RadioGroup
        defaultValue="1"
        onValueChange={(value) => setSelectedValue(value)}
      >
        {subCategories.map((category) => (
          <div key={category.id} className="flex items-center space-x-3 py-2">
            <RadioGroupItem
              value={category.id.toString()}
              id={category.id.toString()}
            />
            <Label
              htmlFor={category.id.toString()}
              className={`text-sm ${selectedValue === category.id.toString() ? "font-extrabold" : "font-normal"}`}
            >
              {category.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
