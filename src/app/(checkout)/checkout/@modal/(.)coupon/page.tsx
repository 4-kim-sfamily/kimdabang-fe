import { getCouponById, getMyCoupon } from "@/actions/mypage/coupon/coupon";
import CouponSelector from "@/components/pages/checkout/CouponSelector";
import CouponModal from "./modal";

export default async function Page() {
  // 서버에서 쿠폰 데이터를 가져옵니다.
  const data = await getMyCoupon();

  // 모든 쿠폰의 추가 정보를 가져오기 위한 비동기 작업 처리
  const couponsWithDetails = await Promise.all(
    data.map(async (item) => {
      const couponInfo = await getCouponById(item.couponId);
      return { ...item, couponInfo }; // 기존 쿠폰 데이터에 추가 정보 결합
    }),
  );

  return (
    <CouponModal>
      <div className="w-full">
        {/* 쿠폰 데이터를 클라이언트 컴포넌트로 전달 */}
        <CouponSelector coupons={couponsWithDetails} />
      </div>
    </CouponModal>
  );
}
