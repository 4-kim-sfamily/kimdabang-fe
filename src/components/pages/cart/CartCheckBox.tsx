"use client";
import { getCheckBox, putCheckBox } from "@/actions/cart/checkBox";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

export default function CartCheckBox({
  productCode,
  productOptionId,
}: {
  productCode: string;
  productOptionId?: number;
}) {
  const [checkBox, setCheckBox] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCheckBox({ productCode, productOptionId });
      setCheckBox(data);
    };
    fetchData();
  }, [checkBox]);

  const handleItemCheck = async () => {
    await putCheckBox({
      productCode,
      productOptionId,
    });
    setCheckBox((prev) => !prev);
  };

  return (
    <Checkbox checked={checkBox} className="peer" onClick={handleItemCheck} />
  );
}
