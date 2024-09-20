"use client";
import { EnrollUserCoupon } from "@/actions/mypage/coupon/coupon";
import { CouponType } from "@/types/ResponseType";

export default function CouponDownloadButton({
  id,
  validityYear,
  validityMonth,
  validityDay,
}: CouponType) {
  //api수정 시 아래 코드 수정

  // 유효성 검사: 숫자로 변환 후, 기본값 설정
  const year = parseInt(validityYear, 10) || 0;
  const month = parseInt(validityMonth, 10) || 0;
  const day = parseInt(validityDay, 10) || 0;

  // 만료 날짜를 계산하기 위해 현재 날짜를 기준으로 조정
  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + year);
  expirationDate.setMonth(expirationDate.getMonth() + month);
  expirationDate.setDate(expirationDate.getDate() + day);

  // 계산된 만료 날짜가 유효한지 확인
  if (isNaN(expirationDate.getTime())) {
    console.error("Invalid expiration date calculated:", expirationDate);
    return null;
  }

  const expiredDate = expirationDate.toISOString();

  const handleEnrollButton = async () => {
    const data = await EnrollUserCoupon({
      couponId: id,
      createdAt: new Date().toISOString(),
      expiredDate,
    });
    if (data.status === 402) {
      alert("이미 다운받은 쿠폰입니다!!");
    } else if (data.status === 200) {
      console.log("쿠폰이 성공적으로 등록되었습니다!");
    } else {
      console.error("오류 발생:", data.message);
      alert(data.message || "쿠폰 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <button
      className="absolute right-4 top-[50%] translate-y-[-50%] text-starbucks"
      onClick={handleEnrollButton}
    >
      등록
    </button>
  );
}
