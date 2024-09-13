import { getUserStarAmount } from "@/actions/mypage/getUserStarAmount";
import MyPageCoupon from "./MyPageCoupon";
import MyStarAmount from "./MyStarAmount";

export default async function CouponStarGroup() {
  // 아직 CouponAmount API 미구현
  // const couponData = await getCouponAmount();

  const StarData = await getUserStarAmount();

  return (
    <section className="flex">
      {/* <MyPageCoupon couponAmount={couponData.couponAmount} /> */}

      {/* 아직 CouponAmount API가 없음 */}
      <MyPageCoupon couponAmount="0" />
      <MyStarAmount starType="regular" starAmount={StarData.starAmount} />
      <MyStarAmount starType="echo" starAmount={StarData.greenStarAmount} />
    </section>
  );
}
