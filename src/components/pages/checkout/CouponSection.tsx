"use client";
import CouponImg from "@/components/icons/couponImg";
import { Button } from "@/components/ui/button";
import { useCheckout } from "@/context/CheckoutContext";
import Link from "next/link";

export default function CouponSection() {
  // 쿠폰 ID와 쿠폰 설정 함수를 받아옴

  const { selectedCoupon, setDiscountPrice, totalOrderPrice } = useCheckout();
  console.log("선택한 쿠폰값:", selectedCoupon); // 선택된 쿠폰 ID 로그 출력

  return (
    <>
      <p className="text-2xl font-bold">
        {selectedCoupon ? "사용중인 쿠폰" : "쿠폰 및 할인"}
      </p>
      <section className="flex flex-col">
        {selectedCoupon ? (
          <section
            key={selectedCoupon.couponId}
            className="flex justify-between items-center gap-5 p-3"
          >
            <CouponImg />
            <div className="flex flex-col">
              <p className="text-[12px]">
                {selectedCoupon.couponInfo.couponType}
              </p>
              <p className="font-extrabold">{selectedCoupon.couponInfo.name}</p>
              <p className="text-[11px]">
                {new Date(
                  selectedCoupon.couponInfo.expiredDate,
                ).toLocaleDateString()}{" "}
                까지
              </p>
            </div>
            <Link href="checkout/coupon">
              <Button variant="starbucks" size="free" className="mx-auto">
                쿠폰변경하기
              </Button>
            </Link>
          </section>
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
