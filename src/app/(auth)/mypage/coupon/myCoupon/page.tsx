import { getMyCoupon } from "@/actions/mypage/coupon/coupon";
import MyCouponList from "@/components/pages/mypage/coupon/MyCouponList";

export default async function page() {
  const data = await getMyCoupon();
  return (
    <main>
      <p className="text-xl font-extrabold pt-4 pl-4 mb-4">💸 내 쿠폰</p>
      <MyCouponList item={data} />
    </main>
  );
}
