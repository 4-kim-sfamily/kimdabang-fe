import { getAllCoupon } from "@/actions/mypage/coupon/coupon";
import CouponImg from "@/components/icons/couponImg";
import CouponDownloadButton from "@/components/pages/mypage/coupon/CouponDownloadButton";

export default async function page() {
  const data = await getAllCoupon();
  console.log(data);
  return (
    <main>
      {data.map((item) => (
        <section
          key={item.id}
          className="flex relative items-center gap-3 py-3 pl-3"
        >
          <CouponImg />
          <span>
            <h4 className="text-[12px]">{item.couponType}</h4>
            <h3 className="font-extrabold">{item.name}</h3>
            <h5 className="text-[11px]">
              {item.expiredDate.split("T")[0]} 까지
            </h5>
          </span>
          <CouponDownloadButton couponId={item.id} />
        </section>
      ))}
    </main>
  );
}
