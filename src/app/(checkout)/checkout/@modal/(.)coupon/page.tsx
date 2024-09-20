import { getCouponDataById, getMyCouponId } from "@/actions/coupon/getMyCoupon";
import CouponModal from "./modal";

export default async function page() {
  // 쿠폰 ID 리스트 가져오기
  const myCouponList = await getMyCouponId();

  // 각 쿠폰 ID로 쿠폰 데이터를 비동기로 가져옴
  const couponList = await Promise.all(
    myCouponList.map(async (coupon) => {
      return await getCouponDataById(coupon.couponId.toString());
    }),
  );

  console.log("This is the couponList.", couponList);

  return (
    <CouponModal>
      <div className="mt-20">
        {/* couponList 데이터를 map으로 순회하여 출력 */}
        {couponList.length > 0 ? (
          couponList.map((coupon, index) => (
            <div key={index} className="coupon-item">
              <h3>{coupon.name}</h3>
            </div>
          ))
        ) : (
          <p>사용 가능한 쿠폰이 없습니다.</p>
        )}
      </div>
    </CouponModal>
  );
}
