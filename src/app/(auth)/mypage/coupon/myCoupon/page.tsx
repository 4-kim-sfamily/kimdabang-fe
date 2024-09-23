import { getMyCoupon } from "@/actions/mypage/coupon/coupon";
import CouponNav from "@/components/pages/mypage/coupon/CouponNav";
import MyCouponList from "@/components/pages/mypage/coupon/MyCouponList";

export default async function page() {
  const data = await getMyCoupon();
  return (
    <main>
      <CouponNav />
      <p className="text-xl font-extrabold pt-4 pl-4 mb-4">💸 내 쿠폰</p>
      <MyCouponList item={data} />
    </main>
  );
}
