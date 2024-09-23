import CouponImg from "@/components/icons/couponImg";
import { myCouponType } from "@/types/ResponseType";

export default function CouponList({ item }: { item: myCouponType[] }) {
  return (
    <>
      {item.map((coupon) => (
        <section
          key={coupon.id}
          className="flex relative items-center gap-3 p-3"
        >
          <CouponImg />
          <span>
            <h4 className="text-[12px]">{coupon.couponType}</h4>
            <h3 className="font-extrabold">{coupon.name}</h3>
            <h5 className="text-[11px]">
              {new Date(coupon.expiredDate).toLocaleDateString()} 까지
            </h5>
          </span>
          <div className="absolute right-9 top-[50%] translate-y-[-50%]">
            {coupon.isUsed ? "사용완료" : ""}
          </div>
        </section>
      ))}
    </>
  );
}
