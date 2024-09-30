"use client";
import { EnrollUserCoupon } from "@/actions/mypage/coupon/coupon";
import { useToast } from "@/hooks/use-toast";
import { CouponType } from "@/types/ResponseType";
export default function CouponDownloadButton({ id, validity }: CouponType) {
  const { toast } = useToast();

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + validity);
  const expiredDate = expirationDate.toISOString();

  const handleEnrollButton = async () => {
    const data = await EnrollUserCoupon({
      couponId: id,
      createdAt: new Date().toISOString(),
      expiredDate,
    });

    if (data?.status) {
      if (data.message == `402`) {
        toast({
          title: "이미 다운로드된 쿠폰입니다",
        });
      } else {
        toast({
          title: "연결이 불안정합니다. 잠시후 다시 시도해주세요",
        });
      }
    } else {
      toast({
        title: "쿠폰이 성공적으로 등록되었습니다",
      });
    }
  };

  return (
    <div>
      <button
        className="absolute right-9 top-[50%] translate-y-[-50%] text-starbucks"
        onClick={handleEnrollButton}
      >
        등록
      </button>
    </div>
  );
}
