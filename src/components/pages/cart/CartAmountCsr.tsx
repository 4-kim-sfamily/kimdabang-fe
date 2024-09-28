"use client";
import { MinusCircle, PlusCircle } from "@/components/icons/Index";
import { useState } from "react";

export default function CartItemAmountCsr({
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
    <div className="flex justify-between w-full">
      <div className="flex gap-2">
        <button onClick={handleMinusbutton}>
          <MinusCircle color={count == 1 ? "#C6C6C6" : "black"} />
        </button>
        {count}
        <button onClick={handlePlusButton}>
          <PlusCircle />
        </button>
      </div>
      {discountedPrice ? (
        <p className="font-extrabold">
          {(count * discountedPrice).toLocaleString("ko-KR")}원
        </p>
      ) : (
        <p className="font-extrabold">
          {(count * price).toLocaleString("ko-KR")}원
        </p>
      )}
    </div>
  );
}
