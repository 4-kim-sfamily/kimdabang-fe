"use client";
import { putCheckBox } from "@/actions/cart/checkBox";
import { Checkbox } from "@/components/ui/checkbox";

export default function CartCheckBox({
  productCode,
  productOptionId,
  isChecked,
}: {
  productCode: string;
  productOptionId?: number;
  isChecked?: boolean;
}) {
  const handleItemCheck = async () => {
    await putCheckBox({
      productCode,
      productOptionId,
    });
  };

  return (
    <Checkbox checked={isChecked} className="peer" onClick={handleItemCheck} />
  );
}
