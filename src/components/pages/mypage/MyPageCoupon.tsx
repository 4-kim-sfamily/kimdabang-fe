import { Button } from "@/components/ui/button";

export default function MyPageCoupon({
  couponAmount,
}: {
  couponAmount: string; // 숫자 타입으로 수정
}) {
  return (
    <article className="mypage-article">
      <p className="font-extrabold">쿠폰</p>
      <p>{couponAmount}장</p>
      <Button variant="starbucks" size="s">
        쿠폰함
      </Button>
    </article>
  );
}
