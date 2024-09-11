"use client";
import { Checkbox } from "@/components/ui/checkbox";

export default function CartCheckBox({
  productCode,
  isChecked,
}: {
  productCode: string;
  isChecked: boolean;
}) {
  const handleCheckBox = () => {
    console.log(productCode, "상태변경 fetch");
  };
  return (
    <Checkbox checked={isChecked} onClick={handleCheckBox} className="peer" />
  );
}
