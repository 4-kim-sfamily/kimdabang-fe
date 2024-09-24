"use client";
import CouponImg from "@/components/icons/couponImg";
import { Button } from "@/components/ui/button";
import { useCoupon } from "@/context/CouponContext";
import { CouponType } from "@/types/ResponseType";
import { useRouter } from "next/navigation";

type CouponSelectorProps = {
  coupons: theCouponType[];
};

type theCouponType = {
  couponId: number;
  couponInfo: CouponType;
  isUsed: boolean;
  expiredDate: string;
};

export default function CouponSelector({ coupons }: CouponSelectorProps) {
  const { selectedCoupon, setSelectedCoupon } = useCoupon(); // 쿠폰 상태 사용
  const router = useRouter();

  const handleCouponSelect = () => {
    if (selectedCoupon) {
      router.back(); // 쿠폰 선택 후 모달 닫기
    } else {
      alert("쿠폰을 선택해주세요.");
    }
  };

  return (
    <div className="w-full px-4">
      {/* 쿠폰 리스트 출력 */}
      {coupons.length > 0 ? (
        coupons.map((coupon) => (
          <div key={coupon.couponId} className="flex items-center">
            <input
              type="radio"
              name="coupon"
              value={coupon.couponId}
              checked={selectedCoupon?.couponId === coupon.couponId.toString()} // 선택된 쿠폰 확인
              onChange={
                () =>
                  setSelectedCoupon({
                    couponId: coupon.couponId.toString(),
                    couponInfo: coupon.couponInfo,
                  }) // 선택된 쿠폰 정보 업데이트
              }
            />
            <section
              key={coupon.couponId}
              className="flex justify-between items-center gap-5 p-3"
            >
              <CouponImg />
              <div className="flex flex-col">
                <p className="text-[12px]">{coupon.couponInfo.couponType}</p>
                <p className="font-extrabold">{coupon.couponInfo.name}</p>
                <p className="text-[11px]">
                  {new Date(coupon.couponInfo.expiredDate).toLocaleDateString()}{" "}
                  까지
                </p>
              </div>
              <div
                className={`${!coupon.isUsed ? "text-black" : "text-gray-400"}`}
              >
                {coupon.isUsed ? "사용완료" : "사용가능"}
              </div>
            </section>
          </div>
        ))
      ) : (
        <div>쿠폰이 없습니다.</div>
      )}

      {/* 선택된 쿠폰 정보로 동작하는 버튼 */}
      <Button
        variant="starbucks"
        className="mx-auto mt-4"
        onClick={handleCouponSelect}
      >
        쿠폰 사용하기
      </Button>
    </div>
  );
}
