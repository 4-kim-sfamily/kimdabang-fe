import CouponImg from "@/components/icons/couponImg";
import CouponDownloadButton from "@/components/pages/mypage/coupon/CouponDownloadButton";

export default function page() {
  return (
    <main>
      <section className="flex relative items-center gap-3 py-3 pl-3">
        <CouponImg />
        <span>
          <h4 className="text-[13px]">starbucks</h4>
          <h3 className="font-extrabold">무료음료쿠폰</h3>
          <h5 className="text-[11px]">2024.09.11 까지</h5>
        </span>
        <CouponDownloadButton />
      </section>
    </main>
  );
}
