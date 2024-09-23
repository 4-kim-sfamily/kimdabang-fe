import CouponImg from "@/components/icons/couponImg";
import { CouponType } from "@/types/ResponseType";
import CouponDownloadButton from "./CouponDownloadButton";

export default function CouponList({ item }: { item: CouponType[] }) {
  return (
    <section className="w-full">
      {item.map((coupon) => (
        <div
          key={coupon.id}
          className="flex relative items-center gap-3 py-3 pl-3"
        >
          <CouponImg />
          <span>
            <h4 className="text-[12px]">{coupon.couponType}</h4>
            <h3 className="font-extrabold">{coupon.name}</h3>
            <h5 className="text-[11px]">
              {new Date(coupon.expiredDate).toLocaleDateString()} 까지
            </h5>
          </span>
          <CouponDownloadButton {...coupon} />
        </div>
      ))}
    </section>
  );
}
