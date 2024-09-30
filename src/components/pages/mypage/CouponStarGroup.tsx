import { getMyCouponAmount } from "@/actions/mypage/coupon/coupon";
import { getUserStarAmount } from "@/actions/mypage/getUserStarAmount";
import MyPageCoupon from "./MyPageCoupon";
import MyStarAmount from "./MyStarAmount";

export default async function CouponStarGroup() {
  const StarData = await getUserStarAmount();
  const couponData = await getMyCouponAmount();
  return (
    <section className="flex justify-around">
      <MyPageCoupon couponAmount={couponData} />
      <MyStarAmount starType="regular" starAmount={StarData.starAmount} />
      <MyStarAmount starType="echo" starAmount={StarData.greenStarAmount} />
    </section>
  );
}
