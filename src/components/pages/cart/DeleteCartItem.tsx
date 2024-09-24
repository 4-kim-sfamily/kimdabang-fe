"use client";

import { putCartItem } from "@/actions/cart/getCartItemData";

export default function DeleteCartItem({
  children,
  productOptionId,
  productCode,
}: {
  productOptionId: number;
  children: React.ReactNode;
  productCode: string;
}) {
  const handleDeleteButton = async () => {
    console.log("클릭");
    const request = {
      amount: 0,
      productOptionId: productOptionId,
      carving: "",
    };
    const data = await putCartItem({ productCode, request });
    console.log(data);
  };
  return (
    <button
      onClick={handleDeleteButton}
      className="flex flex-col justify-start z-20"
    >
      {children}
    </button>
  );
}
