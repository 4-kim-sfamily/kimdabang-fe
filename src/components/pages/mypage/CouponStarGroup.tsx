import MyPageCoupon from "./MyPageCoupon";
import MyStarAmount from "./MyStarAmount";

// API 응답 인터페이스 정의
interface StarResponse {
  starAmount: number;
  greenStarAmount: number;
}
interface CouponResponse {
  couponAmount: number;
}

export default async function CouponStarGroup() {
  const couponRes = await fetch(
    `${process.env.BACKEND_URL}/api/getcouponAmount`,
    {
      cache: "no-store",
    },
  );
  const couponData: CouponResponse = await couponRes.json();

  const starRes = await fetch(`${process.env.BACKEND_URL}/api/getstarAmount`, {
    cache: "no-store",
  });
  const starData: StarResponse = await starRes.json();

  return (
    <section className="flex">
      <MyPageCoupon couponAmount={couponData.couponAmount} />
      <MyStarAmount starType="regular" starAmount={starData.starAmount} />
      <MyStarAmount starType="echo" starAmount={starData.greenStarAmount} />
    </section>
  );
}
