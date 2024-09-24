import MypageHeader from "@/components/layouts/MypageHeader";
import CouponNav from "@/components/pages/mypage/coupon/CouponNav";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="">
      <MypageHeader title="쿠폰함" />
      <CouponNav />
      {children}
    </main>
  );
}
export default layout;
