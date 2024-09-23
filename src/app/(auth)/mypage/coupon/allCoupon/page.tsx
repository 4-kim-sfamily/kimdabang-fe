import { getAllCoupon } from "@/actions/mypage/coupon/coupon";
import CouponList from "@/components/pages/mypage/coupon/CouponList";

export default async function page() {
  const data = await getAllCoupon();
  // console.log(data);
  return (
    <main>
      <p className="text-xl font-extrabold pt-4 pl-4 mb-4">
        📣 다운받을 수 있는 쿠폰
      </p>
      <CouponList item={data} />
    </main>
  );
}
