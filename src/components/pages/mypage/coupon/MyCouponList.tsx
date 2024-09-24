import { getCouponById } from "@/actions/mypage/coupon/coupon";
import CouponImg from "@/components/icons/couponImg";
import { myCouponType } from "@/types/ResponseType";

export default async function CouponList({ item }: { item: myCouponType }) {
  const couponInfo = await getCouponById(item.couponId);
  return (
    <>
      <section
        key={item.couponId}
        className="flex relative items-center gap-3 p-3"
      >
        <CouponImg />
        <span>
          <h4 className="text-[12px]">{couponInfo.couponType}</h4>
          <h3 className="font-extrabold">{couponInfo.name}</h3>
          <h5 className="text-[11px]">
            {new Date(item.expiredDate).toLocaleDateString()} 까지
          </h5>
        </span>
        <div
          className={`absolute right-9 top-[50%] translate-y-[-50%] ${!item.isUsed ? "text-black" : "text-gray-400"}`}
        >
          {item.isUsed ? "사용완료" : "사용가능"}
        </div>
      </section>
    </>
  );
}
