"use client";

import { useCoupon } from "@/context/CouponContext";

export default function OrderPrice({ price }: { price: number }) {
  const { selectedCoupon } = useCoupon();
  console.log(selectedCoupon);

  return (
    <>
      <div className="flex justify-between px-4 mt-2">
        <p>상품 금액 : </p>
        <p>{price}원</p>
      </div>
      <div className="flex justify-between px-4 mt-2">
        <p>배송비 : </p>
        <p>{price < 50000 ? 2500 : 0}원</p>
      </div>
      <div className="flex justify-between px-4 mt-2">
        <p>할인 금액 :</p>
        <p>원</p>
      </div>
    </>
  );
}
