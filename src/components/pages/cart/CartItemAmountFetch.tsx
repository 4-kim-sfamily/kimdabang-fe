"use client";
import { putCartItem } from "@/actions/cart/getCartItemData";
import { MinusCircle, PlusCircle } from "@/components/icons/Index";
import { useEffect, useState } from "react";

export default function CartItemAmountFetch({
  price,
  discountedPrice,
  amount,
  productCode,
  productOptionId,
}: {
  price: number;
  discountedPrice?: number;
  amount: number;
  productCode: string;
  productOptionId: number;
}) {
  const [count, setAmount] = useState(amount);

  const handlePlusButton = () => {
    const newAmount = count + 1;
    setAmount(newAmount);
  };

  const handleMinusButton = () => {
    if (count == 1) return;
    const newAmount = count - 1;
    setAmount(newAmount);
  };
  useEffect(() => {
    const request = {
      productOptionId: productOptionId,
      amount: count,
      carving: "",
    };
    const fetchData = async () => {
      const data = await putCartItem({ productCode, request });
    };
    fetchData();
  }, [count]);

  return (
    <div className="flex justify-between w-full items-end">
      <div className="flex gap-2 items-center">
        <button onClick={handleMinusButton}>
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
