"use client";
import { Checkbox } from "@/components/ui/checkbox";

export default function CartCheckBox({
  productCode,
  isChecked,
  onClickCheckButton,
}: {
  productCode: string;
  isChecked: boolean;
  onClickCheckButton: (productCode: string) => void;
}) {
  //productCode로 fetch

  return (
    <Checkbox
      checked={isChecked}
      onClick={() => onClickCheckButton(productCode)} // 함수 자체를 전달
      className="peer"
    />
  );
}
