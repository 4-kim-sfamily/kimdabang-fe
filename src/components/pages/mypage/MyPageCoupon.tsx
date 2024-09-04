import { Button } from "@/components/ui/button";

interface CouponResponse {
  amount: number; // API가 응답하는 쿠폰의 양을 amount로 가정
}

export default async function MyPageCoupon() {
  let coupon: number = 0;

  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/v1/get-MyCouponAmount`,
    );

    if (response.ok) {
      const data: CouponResponse = await response.json();
      coupon = data.amount;
    }
  } catch (error) {
    console.error("쿠폰 데이터 Fetching에러", error);
  }

  return (
    <article className="mypage-article">
      <p className="font-extrabold">쿠폰</p>
      <p>{coupon}장</p>
      <Button variant="starbucks" size="s">
        쿠폰함
      </Button>
    </article>
  );
}
