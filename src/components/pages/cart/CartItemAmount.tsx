"use client";
import { MinusCircle, PlusCircle } from "@/components/icons/Index";
import { useState } from "react";

export default function CartItemAmount({
  price,
  discountedPrice,
  amount,
}: {
  price: number;
  discountedPrice?: number;
  amount: number;
}) {
  const [count, setAmount] = useState(amount);
  const handlePlusButton = () => {
    setAmount(count + 1);
  };
  const handleMinusbutton = () => {
    if (count == 1) return;
    setAmount(count - 1);
  };

  return (
    <div className="flex justify-between w-full items-end">
      <div className="flex gap-2 items-center">
        <button onClick={handleMinusbutton}>
          <MinusCircle color={count == 1 ? "#C6C6C6" : "black"} />
        </button>
        {count}
        <button onClick={handlePlusButton}>
          <PlusCircle />
        </button>
      </div>
      {discountedPrice ? (
        <div>
          <p className="text-[12px] line-through text-[#787d79] text-end">
            {count * price}원
          </p>
          <p className="font-extrabold">{count * discountedPrice}원</p>
        </div>
      ) : (
        <p className="font-extrabold">{count * price}원</p>
      )}
    </div>
  );
}
