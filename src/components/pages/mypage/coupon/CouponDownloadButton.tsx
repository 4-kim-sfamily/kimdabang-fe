"use client";
export default function CouponDownloadButton({
  couponId,
}: {
  couponId: number;
}) {
  const handleEnrollButton = () => {
    //등록하기 버튼
    //로그인 안돼있으면 로그인 페이지로
    //로그인 돼있는 경우 내가 다운받은 쿠폰이면?.? 등록 안뜨게하기
  };
  return (
    <button
      className="absolute right-9 top-[50%] translate-y-[-50%] text-starbucks"
      onClick={handleEnrollButton}
    >
      등록
    </button>
  );
}
