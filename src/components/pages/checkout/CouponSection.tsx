"use client";
import CouponImg from "@/components/icons/couponImg";
import { Button } from "@/components/ui/button";
import { useCheckout } from "@/context/CheckoutContext";
import Link from "next/link";

export default function CouponSection() {
  // 쿠폰 ID와 쿠폰 설정 함수를 받아옴

  const { selectedCoupon, setDiscountPrice, totalOrderPrice } = useCheckout();
  // 선택된 쿠폰 ID 로그 출력

  return (
    <>
      <p className="text-2xl font-bold">
        {selectedCoupon ? "사용중인 쿠폰" : "쿠폰 및 할인"}
      </p>
      <section className="flex flex-col">
        {selectedCoupon ? (
          <span
            key={selectedCoupon.couponId}
            className="flex justify-between items-center p-3"
          >
            <div className="flex gap-3 items-center">
              <CouponImg />
              <div className="flex flex-col">
                <p className="text-[12px]">
                  {selectedCoupon.couponInfo.couponType}
                </p>
                <p className="font-extrabold">
                  {selectedCoupon.couponInfo.name}
                </p>
                <p className="text-[11px]">
                  {new Date(
                    selectedCoupon.couponInfo.expiredDate,
                  ).toLocaleDateString()}
                  까지
                </p>
              </div>
            </div>
            <Link
              href="checkout/coupon"
              className="border-[1px] border-starbucks p-1 text-starbucks text-sm min-w-[85px]"
            >
              쿠폰 변경하기
            </Link>
          </span>
        ) : (
          <>
            <Link href="checkout/coupon">
              <Button variant="inversion" size="icon" className="mx-auto">
                쿠폰
              </Button>
            </Link>
            <Button variant="inversion" className="mx-auto">
              모바일 상품권
            </Button>
          </>
        )}
        {/* 할인혜택 들어갈 곳 */}
      </section>
    </>
  );
}
